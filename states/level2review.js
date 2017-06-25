var Level2Review = function() {};

Level2Review.prototype = {

  create: function() {
    var background = game.add.sprite(0, 0, 'bg');
    this.titleText = game.add.text(game.world.centerX, 380, 'level 2 complete', {
      font: '72pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);

    this.clean_percentage = Math.round(100 * (blue_collected + green_collected) / (drops_collected));

    var blue = game.add.image(game.world.centerX, 600, 'bl_drop');

    var drops = game.add.text(game.world.centerX, 760, String(drops_collected), {
      font: '96pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    var drops_unit = game.add.text(game.world.centerX, 880, "drops", {
      font: '60pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var brown = game.add.image(game.world.centerX, 1080, 'br_drop');

    var percentage = game.add.text(game.world.centerX, 1240, String(100-this.clean_percentage) + "%", {
      font: '96pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    this.clean_percentage = 100 * (blue_collected + green_collected) / (drops_collected);

    var score_text = game.add.text(game.world.centerX, 1360, "pollution", {
      font: '60pt Karla',
      fill: '#404040',
      align: 'center'
    });

    var prompt = game.add.text(game.world.centerX, 1920-250, 'press space to continue', {
      font: '48pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });

    utils.centerGameObjects([percentage, score_text, drops, drops_unit, blue, brown, prompt]);
  },
  
  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      drops_collected=0;
      blue_collected=0;
      green_collected=0;
      brown_collected=0;
      game.state.start('preview3');
    }
  }
};
