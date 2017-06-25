var About = function() {};

About.prototype = {

  preload: function() {

  },

  init: function() {
    this.titleText = game.make.text(game.world.centerX, 600, 'about drops', {
      font: '80pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);
    this.aboutText = "Drops is a game we created\nto raise awareness about the\ndisparities in access to clean\ndrinking water within\nthe United States."
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'bg');
    game.add.existing(this.titleText);

    var x = game.world.centerX;
    var y = 960;

    var txt = game.add.text(x, y, this.aboutText, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var prompt = game.add.text(x, 1920-240, 'press space to continue', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([txt, prompt]);
  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start('game');
    }
  }
};
