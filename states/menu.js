var Menu = function() {};

Menu.prototype = {

  menuConfig: {
    startY: 260,
    startX: 30
  },

  init: function() {
    this.titleText = game.make.text(game.world.centerX, 480, 'drops', {
      font: '120pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
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
    
    txt.stroke = "rgba(0,0,0,0)";
    txt.strokeThickness = 4;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback);
    txt.events.onInputOver.add(onOver);
    txt.events.onInputOut.add(onOut);
    this.optionCount++;
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);

    this.addMenuOption('Start', function () {
      game.state.start('game');
    });
    this.addMenuOption('About', function () {
      game.state.start('about');
    });
  }
};
