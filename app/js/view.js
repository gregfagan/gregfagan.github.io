define(function(){
    // module
    var view = {};

    var _canvas = null;
    var _ctx = null;
    var ctx = function () {
        return _ctx;
    };

    var init = function () {
        _canvas = document.getElementById("screen");
        _ctx = _canvas.getContext('2d');

        _ctx.webkitImageSmoothingEnabled = false;
        _ctx.mozImageSmoothingEnabled = false;
        _ctx.imageSmoothingEnabled = false;

        window.addEventListener('resize', resize, false);
        resize();
    };

    var resize = function () {
        _canvas.style.width = '100%';
        _canvas.style.height = '100%';

        _canvas.width = width();
        _canvas.height = height();
    };

    function width() { return window.innerWidth; }
    function height() { return window.innerHeight; }

    view.ctx = ctx;
    view.width = width;
    view.height = height;

    init();
    return view;
});