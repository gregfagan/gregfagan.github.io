require(['underscore','react-with-addons'], function(_, React) {
    var projects = [
        {
            name: "temple3d",
            tech: "C# and Unity",
            collaborators: ["@cjkimberlin"],
            screenshot: "data/img/temple3d.jpg",
            href: "http://temple3d.s3-website-us-west-2.amazonaws.com",
            description: "An epic reimagining of the original Ludum Dare game in the third dimension."
        },
        {
            name: "temple2d",
            tech: "JavaScript and Cocos2D-HTML5",
            collaborators: ["@cjkimberlin"],
            screenshot: "data/img/temple2d.png",
            href: "http://www.ludumdare.com/compo/ludum-dare-27/?action=preview&uid=22908",
            description: "A retro-style top down temple exploration adventure built for Ludum Dare 27."
        },
        {
            name: "möbius",
            tech: "ActionScript and FlashPunk",
            collaborators: ["@cjkimberlin", "@htimswi"],
            screenshot: "data/img/möbius.jpg",
            href: "http://www.ludumdare.com/compo/ludum-dare-26/?action=preview&uid=22908",
            description: "Minimalist platforming with one button in a mysterious world. A Ludum Dare 26 game jam creation."
        },
        {
            name: "planes of misery",
            tech: "ActionScript and FlashPunk",
            collaborators: ["@cjkimberlin", "@htimswi"],
            screenshot: "data/img/planes.jpg",
            href: "http://www.ludumdare.com/compo/ludum-dare-25/?action=preview&uid=19233",
            description: "Inflict discomfort on the airplane's passengers by seating them next to other obnoxious travelers. Made for Ludum Dare 25."
        },
        {
            name: "because we're hungry, that's why",
            tech: "C# and XNA",
            screenshot: "data/img/hungry.jpg",
            href: "http://www.windowsphone.com/en-us/store/app/because-we-re-hungry/4cfa5267-f3b0-e011-a53c-78e7d1fa76f8",
            description: "A pair of gorillas take to the city to find some food -- people! Watch out, they are defending themselves with bombs. A single button game for Windows Phone."
        },
    ];

    var Collaborator = React.createClass({
        render: function() {
            var twitter = "https://twitter.com/" + this.props.handle.slice(1);
            return React.DOM.a({ href: twitter }, this.props.handle);
        }
    });

    var CollaboratorList = React.createClass({
        render: function() {
            var collaborators = ["with "];
            var that = this;
            this.props.collaborators.forEach(function(person, index) {
                collaborators.push(Collaborator({handle: person}));
                if (index != that.props.collaborators.length - 1) {
                    collaborators.push(" and ");
                }
            });
            return React.DOM.span(null, collaborators);
        }
    });

    var Project = React.createClass({
        render: function() {
            imgBlock = React.DOM.a({href: this.props.href},
                React.DOM.img({src: this.props.screenshot})
            );

            var children = [
                React.DOM.h1(null, 
                    React.DOM.a({href: this.props.href}, this.props.name)
                ),
                React.DOM.h2(null, this.props.tech)
            ];

            if (this.props.collaborators) {
                children.push(CollaboratorList({collaborators: this.props.collaborators}));
            }

            children.push(React.DOM.p(null, this.props.description));

            var descriptionBlock = React.DOM.div(null, children);

            return React.DOM.div({className: "project"}, [imgBlock, descriptionBlock]);
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
