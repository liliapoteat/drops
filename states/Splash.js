var Splash = function () {};

Splash.prototype = {
  loadScripts: function() {
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('menu', 'states/menu.js');
    game.load.script('about', 'states/about.js');
    game.load.script('game1', 'states/game1.js');
    game.load.script('game2', 'states/game2.js');
    game.load.script('game3', 'states/game3.js');
    game.load.script('preview1', 'states/preview1.js');
    game.load.script('preview2', 'states/preview2.js');
    game.load.script('preview3', 'states/preview3.js');
    game.load.script('level1review', 'states/level1review.js');
    game.load.script('level2review', 'states/level2review.js');
    game.load.script('level3review', 'states/level3review.js');
    game.load.script('sources', 'states/sources.js');
  },

  loadBgm: function() {
    // background music
    //game.load.audio('shortname', 'path/to/file.mp3');
  },

  loadImages: function() {
    game.load.image('menu-bg', 'assets/img/blue.png');
    //load other images, like options or game over
  },

  loadFonts: function() {
    WebFontConfig = {
      custom: {
        families: ['Karla', 'Karla-Bold'],
        urls: ['assets/style/karla.css', 'assets/style/karla.css']
      }
    }
  },

  init: function () {
    //this.loading = game.make.sprite(game.world.centerX, 400, 'loading');
    this.status = game.make.text(game.world.centerX, 960, 'loading...', {
      font: '72pt Karla',
      fill: '#404040',
      align: 'center'
    });
    utils.centerGameObjects([this.status]);
  },

  // The preload function will then call all of the previously defined fns
  preload: function() {
    game.add.sprite(0, 0, 'bg');
    //game.add.existing(this.loading);
    game.add.existing(this.status);

    // Phaser will use loading as preload progress bar
    //this.load.setPreloadSprite(this.loading);
    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();
  },

  addGameStates: function() {
    game.state.add('menu', Menu);
    game.state.add('about', About);
    game.state.add('preview1', Preview1);
    game.state.add('game1', Game1);
    game.state.add('level1review', Level1Review);
    game.state.add('preview2', Preview2);
    game.state.add('game2', Game2);
    game.state.add('level2review', Level2Review);
    game.state.add('preview3', Preview3);
    game.state.add('game3', Game3);
    game.state.add('level3review', Level3Review);
    game.state.add('sources', Sources);
  },

  create: function() {
    this.addGameStates();
    setTimeout(function() {
      game.state.start('menu');
    }, 1000);
  }
};

