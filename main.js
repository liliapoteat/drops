window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(1080, 1920, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('bl_drop', 'img/drops_blue.png');
        game.load.image('br_drop', 'img/drops_brown.png');
        game.load.image('gr_drop', 'img/drops_green.png');

    }

    function create () {
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

        //move this out of create for game
        createDrops(400);
    }

    function createDrops(drop_speed){
        drop = drops.getFirstExists(false);
        if(drop){
            drop.reset(0, 0);
            drop.body.velocity.y = drop_speed;
        }
    }

};
