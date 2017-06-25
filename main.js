window.onload = function() {
    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(1080, 1920, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('bl_drop', 'img/drops_blue.png');
        game.load.image('br_drop', 'img/drops_brown.png');
        game.load.image('gr_drop', 'img/drops_green.png');
        game.load.image('bucket', 'img/clean_low.png');
        var cursors;
        var bucket;
    }

    function create () {
        //create drops
        percent_blue = 40;
        percent_brown = 20;
        percent_green = 100 - percent_blue - percent_brown;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        drops = game.add.group();
        drops.enableBody = true;
        drops.physicsBodyType = Phaser.Physics.ARCADE;
        drops.createMultiple(percent_blue/100, 'bl_drop');
        drops.createMultiple(percent_brown/100, 'br_drop');
        drops.createMultiple(percent_green/100, 'gr_drop');

        //create bucket
        cursors = game.input.keyboard.createCursorKeys();
        bucket = game.add.sprite(game.world.centerX, 1750, 'bucket');
        bucket.scale.setTo(0.02, 0.02);
        game.physics.enable(bucket, Phaser.Physics.ARCADE);
        // reset bucket velocity
        bucket.body.velocity.x = 0;
        //move this out of create for game

        //test drops method
        createDrops(400);

    }

    function createDrops(drop_speed){
        drop = drops.getFirstExists(false);
        if(drop){
            drop.reset(0, 0);
            drop.body.velocity.y = drop_speed;
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
