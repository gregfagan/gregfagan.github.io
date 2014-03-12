define(['view'], function(view){
    return function(spec) {
        // Defaults
        spec.frameSizeInWorldUnits = spec.frameSizeInWorldUnits || 16;
        spec.view = view;

        function message(name) {
            var key,
                child,
                hasProp,
                handler,
                type,
                args = Array.prototype.slice.call(arguments);
                args.splice(0,1);
            for (key in spec) {
                child = spec[key];
                hasProp = child.hasOwnProperty(name);
                handler = child[name];
                type = typeof handler;
                if (hasProp && handler && typeof handler === 'function') {
                    handler.apply(child, args);
                }
            }
        }
        spec.message = message;

        spec.background.draw = function(game) {
            // Clear the background on every frame
            var rectangle = function(props) {
                //defaults
                props.color = props.color || 'brown';
                props.x = props.x || 0;
                props.y = props.y || 0;
                props.width = props.width || 300;
                props.height = props.height || 150;

                props.ctx.fillStyle = props.color;
                props.ctx.fillRect(props.x, props.y, props.width, props.height);
            };
            rectangle({
                ctx: game.view.ctx(),
                color: this.color,
                width: game.view.width(),
                height: game.view.height()
            });
        };

        var lastTime = null;
        function loop(timestamp) {
            var dt;

            if (lastTime === null) {
                lastTime = timestamp;
            }

            dt = (timestamp - lastTime) / 1000;
            lastTime = timestamp;

            message('update', spec, dt);
            message('draw', spec);

            requestAnimationFrame(loop);
        }

        function worldScale() {
            return Math.min(
                (view.width() / spec.frameSizeInWorldUnits).toFixed(),
                (view.height() / spec.frameSizeInWorldUnits).toFixed()
            );
        }
        spec.worldScale = worldScale;

        function start() {
            requestAnimationFrame(loop);
        }
        spec.start = start;

        return spec;
    };
});