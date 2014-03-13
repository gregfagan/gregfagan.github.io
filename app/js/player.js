define(['graphics'], function (graphics) {
    return function(spec) {
        spec.color = spec.color || 'white';
        spec.x = spec.x || 1;
        spec.width = spec.width || 1;

        function update(game, dt) {
            var viewSizeInWorldSpace = game.view.width() / game.worldScale(),
                speed = viewSizeInWorldSpace / 2, // world units/sec
                max = viewSizeInWorldSpace;
            spec.x += speed * dt;
            if (spec.x > max) {
                spec.x = 0;
            }
        }
        spec.update = update;

        function draw(game) {
            var scale = game.worldScale(),
                radius = spec.width / 2 * scale,
                props = {
                    ctx: game.view.ctx(),
                    color: spec.color,
                    radius: radius,
                    x: spec.x * scale,
                    y: game.view.height() - radius,
                };
            
            graphics.circle(props);
        }
        spec.draw = draw;

        return spec;
    };
});