window.onload = function() {

    var game = new Phaser.Game(1080, 1920, Phaser.AUTO, '', { preload: preload, create: create, update: update});

    function preload () {

        game.load.image('bucket', 'img/clean_low.png');
        var cursors;
        var bucket;
    }

    function create () {

        // enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // enable user to control bucket with arrow keys
        cursors = game.input.keyboard.createCursorKeys();

        bucket = game.add.sprite(game.world.centerX, 1750, 'bucket');
        bucket.scale.setTo(0.02, 0.02);
        game.physics.enable(bucket, Phaser.Physics.ARCADE);

        // reset bucket velocity
        bucket.body.velocity.x = 0;

    }

    function update () {

        // user presses arrow keys --> control bucket movement
        if (cursors.left.isDown) {
            bucket.body.velocity.x = -200;
        }
        else if (cursors.right.isDown) {
            bucket.body.velocity.x = 200;
        }
        else {
            bucket.body.velocity.x = 0;
        }
    }

};
