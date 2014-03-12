define(['view'], function (view) {
    var touches = [];
    var touchColor = '#E359A6';
    var draw = function (ctx) {
        ctx.fillStyle = touchColor;
        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            ctx.beginPath();
            ctx.arc(touch.pageX, touch.pageY, 40, 0, 2*Math.PI, true);
            ctx.fill();
            ctx.stroke();
        }
    };

    view.addEventListener('touchmove', function(event) {
        touches = event.touches;
    }, false);

    view.addEventListener('touchend', function(event) {
        touches = event.touches;
    }, false);

    document.body.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false); 
});