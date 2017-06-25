<<<<<<< HEAD
var Level1Review = function() {};

Level1Review.prototype = {
	preload: function() {
        game.load.image('boston', 'assets/img/backgrounds_boston.png');
	},

	create: function() {
		var background = game.add.sprite(0, 0, 'boston');
		this.titleText = game.make.text(game.world.centerX, 480, 'drops', {
			font: '120pt Karla-Bold',
			fill: '#404040',
			align: 'center'
		});
		this.titleText.anchor.set(0.5);
	},

	update: function() {
		//var text = "Your bucket is \n"  + String(clean_percentage) + "\n percent clean";
		var text = "Your bucket is \n" + "\n % clean";
		var score_text = game.add.text(game.world.centerX, game.world.centerY, text, {
			font: '60pt Karla-Bold',
			fill: '#404040',
			align: 'center'
		});
		score_text.anchor.set(0.5);
	}

};
