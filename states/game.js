var Game = function() {};

Game.prototype = {
    preload: function() {
        game.load.image('bl_drop', 'assets/img/drops_blue.png');
        game.load.image('br_drop', 'assets/img/drops_brown.png');
        game.load.image('gr_drop', 'assets/img/drops_green.png');
        game.load.image('bucket', 'assets/img/buckets_empty.png');

        game.load.image('boston', 'assets/img/backgrounds_boston.png');
        game.load.image('charleston', 'assets/img/backgrounds_charleston.png');
        game.load.image('sebring', 'assets/img/backgrounds_sebring.png');
    },

    init: function() {
        var cursors;
        var bucket;
        var drop_speed;
        var dropTime;
        var drop_x;
        var drop_pos;
        var live_drops;
        var bucket_velocity = 800; //TODO: fix :'(((
        var bucket_scale = 0.7;
    },

    collected: function (bucket, drop) {
        console.log("collision");
        drop.kill();
    },

    create: function() {

        game.add.sprite(0, 0, 'boston');

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
        bucket.body.collideWorldBounds = true;
        
        bucket.body.onCollide = new Phaser.Signal();
        bucket.body.onCollide.add(this.collected, this);

    drop_speed = 500;
    dropTime = 0;
    drop_x = 0;

    //move this out of create for game

    //test drops method
    //createDrops(400);
},

    createDrops: function(drop_speed) {
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
    },

    update: function() {
        this.createDrops(drop_speed);
        // user presses arrow keys --> control bucket movement
        if (cursors.left.isDown) {
            bucket.body.velocity.x = -800;
        }
        else if (cursors.right.isDown) {
            bucket.body.velocity.x = 800;
        }
        else {
            bucket.body.velocity.x = 0;
        }
        game.physics.arcade.collide(bucket, drops);

        live_drops.add(drop);
        drops.remove(drop);
    }

    function collected (bucket, drop) {
        console.log("collision");
        drop.kill();
        drop.revive();
    }
};