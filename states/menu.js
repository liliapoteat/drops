var Menu = function() {};

Menu.prototype = {

  menuConfig: {
    startY: 260,
    startX: 30
  },

  preload: function() {
    game.load.image('play_button', 'assets/img/buttons_play.png');
    game.load.image('about_button', 'assets/img/buttons_about.png');
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

  addMenuOption: function(img, onclick) {

    var x = game.world.centerX;
    var y = this.optionCount * 200 + 720;

    var b = game.add.image(x, y, 400, 100, img);

    b.inputEnabled = true;
    b.events.onInputUp.add(onclick, this);

    utils.centerGameObjects([b]);
    this.optionCount++;
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);

    this.addMenuOption('play_button', function () {
      game.state.start('game');
      console.log("HELLOOOO")
    });
    this.addMenuOption('about_button', function () {
      game.state.start('about');
    });
  }
};
