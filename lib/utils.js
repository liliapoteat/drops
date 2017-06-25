var utils = {
  centerGameObjects: function (objects) {
    objects.forEach(function (object) {
		object.anchor.setTo(0.5);
    })
  },

  makeTextBox: function(text, y, centered) {
    var style = {
      font: '30pt Karla',
      fill: '#404040',
      align: 'left'
    };
    var x = 150;

    if (centered) {
      style.align = 'center';
      x = game.world.centerX;
    }

    var txt = game.add.text(x, y, text, style);

    if (centered) {
      txt.anchor.set(0.5);
    }
  }
};
