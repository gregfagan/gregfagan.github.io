define(['view', 'game'], function (view, game) {
    return function(spec) {
        var player = {};

        var size = 1;
        var color = '#F58156';
        var x = 40; // px

        function update(dt) {
            var speed = view.width(); // px / sec
            x += speed * dt;
            if (x > view.width()) {
                x = 0;
            }
        }

        function draw() {
            var ctx = view.ctx();
            var scale = game.worldScale();
            var radius = size / 2;

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, view.height() - (radius * 1.5 * scale), radius * scale, 0, Math.PI * 2);
            ctx.fill();
        }

        player.update = update;
        player.draw = draw;

        return player;
    };
});