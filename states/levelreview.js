var LevelReview = function () {};

LevelReview.prototype = {
  preload: function() {
    this.optionCount = 1;
  },

  init: function() {
    this.titleText = game.make.text(game.world.centerX, 300, 'Level Review', {
      font: '60pt Karla',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 5);
    this.titleText.anchor.set(0.5);
  },

  addMenuOption: function(text, callback) {
    var txt = game.add.text(30, this.optionCount * 80 + 600, text, {
      font: '30pt Karla',
      fill: 'white',
      align: 'center'
    });
    var onOver = function(target) {
      target.fill = '#FEFFD5';
      target.stroke = "rgba(200,200,200,0.5)";
    };
    var onOut = function(target) {
      target.fill = 'white';
      target.stroke = "rgba(0,0,0,0)";
    };
    
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback);
    txt.events.onInputOver.add(onOver);
    txt.events.onInputOut.add(onOut);
    this.optionCount++;
  },

  create: function() {
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);
    game.stage.disableVisibilityChange = true; // prevents game from
                                               // pausing when tabbed out
   	this.addMenuOption('Start', function (target) {
      game.state.start('game');
    });
    this.addMenuOption('About', function (target) {
      console.log('You clicked About!');
    });
  }
};

