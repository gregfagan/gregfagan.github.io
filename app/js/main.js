require(['game', 'player'], function(game, player) {
    var types = {
        player: player
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/data/scene.json", true);
    xhr.onload = function () {
        var scene = game(JSON.parse(this.responseText, function(k,v){
            if (types[k]) types[k](v);
            return v;
        }));
        scene.start();
    };
    xhr.send();  
});
