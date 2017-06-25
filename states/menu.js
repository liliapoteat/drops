var Menu = function() {};

Menu.prototype = {

  menuConfig: {
    startY: 260,
    startX: 30
  },

  preload: function() {

  },

  init: function() {
    this.titleText = game.make.text(game.world.centerX, 480, 'drops', {
      font: '160pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  addMenuOption: function(text) {
    var x = game.world.centerX;
    var y = this.optionCount * 250 + 1190;

    var txt = game.add.text(x, y, text, {
      font: '60pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([txt]);
    this.optionCount++;
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);

    var logo = game.add.sprite(game.world.centerX, 1024, 'logo');
    logo.scale.setTo(2.5, 2.5);
    utils.centerGameObjects([logo]);

    this.addMenuOption('press space to play');

  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start('game');
    }
  }
};
