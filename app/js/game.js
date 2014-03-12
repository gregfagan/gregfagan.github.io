define(['view'], function(view){
    var singleton;
    return function(spec) {
        if (singleton)
            return singleton;

        // new object
        var game = {};

        var children = [];
        function addChild(child) {
            children.push(child);
        }
        function message(name) {
            var i,
                child,
                hasProp,
                handler,
                type;

            for (i = 0; i < children.length; i += 1) {
                child = children[i];
                hasProp = child.hasOwnProperty(name);
                handler = child[name];
                type = typeof handler;
                if (hasProp && handler && typeof handler === 'function') {
                    Array.prototype.splice.call(arguments, 0, 1);
                    handler.call(child, arguments[0]);
                }
            }
        }

        // The core game world is a square made of worldSize by worldSize tiles.
        var _worldSize = 16;
        var worldSize = function() {
            return _worldSize;
        };

        // To fit various viewports, the size of a tile is determined programmatically.
        var _scale;
        var worldScale = function() {
            return _scale;
        };

        // Clear the background on every frame
        var backgroundColor = '#0F2A42';
        var drawBackground = function() {
            view.ctx().fillStyle = backgroundColor;
            view.ctx().fillRect(0, 0, view.width(), view.height());
        };

        var lastTime = null;
        function loop(timestamp) {
            var dt;

            if (lastTime === null) {
                lastTime = timestamp;
            }

            dt = (timestamp - lastTime) / 1000;
            lastTime = timestamp;

            update(dt);
            draw();

            requestAnimationFrame(loop);
        }

        function rescale() {
            _scale = Math.min(
                (view.width() / worldSize()).toFixed(),
                (view.height() / worldSize()).toFixed()
            );
        }

        function update(dt) {
            rescale();
            message('update', dt);
        }

        function draw() {
            drawBackground();
            message('draw');
        }

        function start() {
            requestAnimationFrame(loop);
        }

        game.start = start;
        game.worldSize = worldSize;
        game.worldScale = worldScale;
        game.addChild = addChild;
        game.message = message;

        singleton = game;

        return singleton;
    }({});
});