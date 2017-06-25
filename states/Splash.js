var Splash = function () {};

Splash.prototype = {
  loadScripts: function() {
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('menu', 'states/menu.js');
    game.load.script('game', 'states/game.js');
    game.load.script('levelreview', 'states/levelreview.js');
    game.load.script('sources', 'states/sources.js');
    game.load.script('leaderboard', 'states/leaderboard.js');
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
    this.status = game.make.text(game.world.centerX, 960, 'Loading...', {
      font: '72pt Karla-Bold',
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
    game.state.add('game', Game);
    game.state.add('levelreview', LevelReview);
    game.state.add('sources', Sources);
    game.state.add('leaderboard', Leaderboard);
  },

  create: function() {
    this.addGameStates();

    setTimeout(function() {
      game.state.start('game');
    }, 1000);
  }
};
