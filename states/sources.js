var Sources = function() {};

Sources.prototype = {

  preload: function() {
    game.load.image('bl_drop', 'assets/img/drops_blue.png');
    game.load.image('br_drop', 'assets/img/drops_brown.png');
    game.load.image('gr_drop', 'assets/img/drops_green.png');
  },

  init: function() {
    this.aboutText = "\n \n \n \n \n \n \nThe levels got harder\nnot only because you\nprogressed through\nthe game, but also\nbecause you travelled\n to areas with\nincreasingly polluted\nwater."
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'bg');

    var x = game.world.centerX;
    var y = 600;

    var title = game.add.text(game.world.centerX, 200, 'Thanks for playing!', {
      font: '80pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    var subtitle = game.add.text(x, y - 200, 'Did you notice...', {
      font: '70pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var txt = game.add.text(x, y, this.aboutText, {
      font: '70pt Karla',
      fill: '#404040',
      align: 'center'
    });



    var drop1 = game.add.image(x-200, y+360+300+300, 'bl_drop');
    var drop2 = game.add.image(x, y+360+300+300, 'gr_drop');
    var drop3 = game.add.image(x+200, y+360+300+300, 'br_drop');

    var prompt = game.add.text(x, 1920-150, 'press space to play again', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([title, subtitle, txt, prompt, drop1, drop2, drop3]);
  },

  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      game.state.start('preview1');
    }
  }
};
