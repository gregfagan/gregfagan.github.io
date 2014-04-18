require(['underscore','react-with-addons'], function(_, React) {
    var projects = [
        {
            name: "temple3d",
            tech: "C# and Unity3D",
            collaboration: ["@cjkimberlin"]
        },
        {
            name: "temple2d",
            tech: "JavaScript and Cocos2D-HTML5",
            collaboration: ["@cjkimberlin"]
        },
        {
            name: "möbius",
            tech: "ActionScript and FlashPunk",
            collaboration: ["@cjkimberlin", "@htimswi"]
        }
    ];

    var Collaborator = React.createClass({
        render: function() {
            var twitter = "https://twitter.com/" + this.props.handle.slice(1);
            return React.DOM.a({ href: twitter }, this.props.handle);
        }
    });

    var CollaboratorList = React.createClass({
        render: function() {
            var collaborators = ["with: "];
            var that = this;
            this.props.collaboration.forEach(function(person, index) {
                collaborators.push(Collaborator({handle: person}));
                if (index != that.props.collaboration.length - 1) {
                    collaborators.push(", ");
                }
            });
            return React.DOM.span(null, collaborators);
        }
    });

    var Project = React.createClass({
        render: function() {
            return React.DOM.div(
                {className: "project"}, 
                [
                    React.DOM.img({src: this.props.screenshot}),
                    React.DOM.h1(null, this.props.name),
                    React.DOM.h2(null, this.props.tech),
                    CollaboratorList({collaboration: this.props.collaboration})
                ]
            );
        }
    });

    var Projects = React.createClass({
        render: function() {
            return React.DOM.div(
                {className: "panel"},
                _.map(this.props.items, function(project) {
                    return Project(project);
                })
            );
        }
    });

    return React.renderComponent(Projects({items: projects}), document.getElementById('projects'));
});
