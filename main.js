window.onload = function() {
    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(1080, 1920, Phaser.AUTO, '', { preload: preload, create: create, update: update});

    function preload () {

        game.load.image('bl_drop', 'img/drops_blue.png');
        game.load.image('br_drop', 'img/drops_brown.png');
        game.load.image('gr_drop', 'img/drops_green.png');
        game.load.image('bucket', 'img/buckets_empty.png');
    }

        var cursors;
        var bucket;
        var drop_speed;
        var dropTime;
        var drop_x;
        var drop_pos;
        var live_drops;

    function create () {
        //create drops
        percent_blue = 60;
        percent_brown = 20;
        percent_green = 100 - percent_blue - percent_brown;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        drops = game.add.group();
        live_drops = game.add.group();
        drops.enableBody = true;
        drops.physicsBodyType = Phaser.Physics.ARCADE;
        drops.createMultiple(percent_blue/5, 'bl_drop');
        drops.createMultiple(percent_brown/5, 'br_drop');
        drops.createMultiple(percent_green/5, 'gr_drop');

        //create bucket
        cursors = game.input.keyboard.createCursorKeys();
        bucket = game.add.sprite(game.world.centerX, 1800, 'bucket');
        game.physics.enable(bucket, Phaser.Physics.ARCADE);
        // reset bucket velocity
        bucket.body.velocity.x = 0;
        drop_speed = 500;
        dropTime = 0;
        drop_x = 0;

        //move this out of create for game

        //test drops method
        //createDrops(400);

    }

    function createDrops(drop_speed){
        if(game.time.now > dropTime) {
            if(drops.length < 1) {
                live_drops.moveAll(drops);
            }
            var random = Math.random();
            drop_x = Math.round(random*950); //x ranges from 0 to 950
            drop = drops.getRandom();
            drop.reset(drop_x, 0);
            drop.body.velocity.y = drop_speed;
            dropTime = game.time.now + 600;
            drop_x += 100;

            live_drops.add(drop);
            drops.remove(drop);
        }
    }

    function update () {
        createDrops(drop_speed);
        // user presses arrow keys --> control bucket movement
        if (cursors.left.isDown) {
            bucket.body.velocity.x = -300;
        }
        else if (cursors.right.isDown) {
            bucket.body.velocity.x = 300;
        }
        else {
            bucket.body.velocity.x = 0;
        }
    }

};
