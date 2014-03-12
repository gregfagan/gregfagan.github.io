define(function(){
    // module
    var view = {};

    var _width;
    var width = function () {
        return _width;
    };

    var _height;
    var height = function () {
        return _height;
    };

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
        _width = window.innerWidth;
        _height = window.innerHeight;

        _canvas.style.width = '100%';
        _canvas.style.height = '100%';

        _canvas.width = width();
        _canvas.height = height();
    };

    view.width = width;
    view.height = height;
    view.ctx = ctx;

    init();
    return view;
});