require(['game', 'player'], function(game, player) {
    game.addChild(player());
    game.start();
});


