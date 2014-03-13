define(function(){
    return {
        rectangle: function(props) {
            //defaults
            props.color = props.color || 'brown';
            props.x = props.x || 0;
            props.y = props.y || 0;
            props.width = props.width || 300;
            props.height = props.height || 150;

            props.ctx.fillStyle = props.color;
            props.ctx.fillRect(props.x, props.y, props.width, props.height);
        },

        circle: function(props) {
            //defaults
            props.color = props.color || 'brown';
            props.x = props.x || 0;
            props.y = props.y || 0;
            props.radius = props.radius || 1;

            props.ctx.fillStyle = props.color;
            props.ctx.beginPath();
            props.ctx.arc(
                props.x,
                props.y,
                props.radius,
                0,
                Math.PI * 2
            );
            props.ctx.fill();
        }
    };
});