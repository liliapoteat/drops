window.onload = function() {

    var game = new Phaser.Game(1080, 1920, Phaser.AUTO, '', { preload: preload, create: create, update: update});

    function preload () {

        game.load.image('bl_drop', 'img/drops_blue.png');
        game.load.image('br_drop', 'img/drops_brown.png');
        game.load.image('gr_drop', 'img/drops_green.png');
        game.load.image('bucket', 'img/buckets_empty.png');
    }

    var cursors;
    var bucket;
    var bucket_velocity = 400;
    var bucket_scale = 0.7;

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
        bucket = game.add.sprite(game.world.centerX, 1800, 'bucket');
        bucket.scale.setTo(bucket_scale, bucket_scale);
        game.physics.enable(bucket, Phaser.Physics.ARCADE);
        // reset bucket velocity
        bucket.body.velocity.x = 0;
        bucket.body.collideWorldBounds = true;

        //move this out of create for game

        //test drops method
        createDrops(400);

        bucket.body.onCollide = new Phaser.Signal();
        bucket.body.onCollide.add(collected, this);
    }

    function createDrops(drop_speed){
        drop = drops.getFirstExists(false);
        if(drop){
            drop.reset(0, 0);
            drop.body.velocity.y = drop_speed;
        }
    }

    function update () {

        // user presses arrow keys --> control bucket movement
        if (cursors.left.isDown) {
            bucket.body.velocity.x = -bucket_velocity;
        }
        else if (cursors.right.isDown) {
            bucket.body.velocity.x = bucket_velocity;
        }
        else {
            bucket.body.velocity.x = 0;
        }

        game.physics.arcade.collide(bucket, drops);

    }

    function collected (bucket, drop) {
        console.log("collision");
        drop.kill();
    }

};