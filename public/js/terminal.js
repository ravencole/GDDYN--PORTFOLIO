'use strict';

var TerminalButtons = React.createClass({
    displayName: 'TerminalButtons',

    render: function render() {
        var styles = {
            terminalButtonContainer: {
                height: '100%',
                width: '100%',
                position: 'relative'
            },
            terminalButton: {
                height: '12px',
                width: '12px',
                borderRadius: '50%',
                position: 'absolute',
                top: '10px'
            },
            terminalButtonClose: {
                left: '10px',
                backgroundColor: 'tomato'
            },
            terminalButtonMinimize: {
                left: '32px',
                backgroundColor: 'gold'
            },
            terminalButtonExpand: {
                left: '54px',
                backgroundColor: 'limegreen'
            }
        }; // Hover styles got put into the terminal.scss file for now
        return React.createElement(
            'div',
            { style: [styles.terminalButtonContainer] },
            React.createElement('div', {
                className: 'terminal--button',
                onClick: this.props.handleTerminalClose,
                style: [styles.terminalButton, styles.terminalButtonClose]
            }),
            React.createElement('div', {
                className: 'terminal--button',
                onClick: this.props.handleTerminalMinimize,
                style: [styles.terminalButton, styles.terminalButtonMinimize]
            }),
            React.createElement('div', {
                className: 'terminal--button',
                onClick: this.props.handleTerminalExpand,
                style: [styles.terminalButton, styles.terminalButtonExpand]
            })
        );
    }
});

TerminalButtons = Radium(TerminalButtons);

var TerminalInput = React.createClass({
    displayName: 'TerminalInput',

    componentDidUpdate: function componentDidUpdate() {
        this.terminalTextBox.scrollTop = this.terminalTextBox.scrollHeight;
    },
    focusInput: function focusInput() {
        this.refs.terminalInput.focus();
    },
    render: function render() {
        var _this = this;

        var displayPreviousTerminalCommands = this.props.terminalPreviousCommands.map(function (command) {
            var styles = {
                terminalMessageText: {
                    color: '#00ff00',
                    backgroundColor: 'deeppink'
                }
            };
            if (!command.message && !command.template) {
                return React.createElement(
                    'div',
                    null,
                    'gddynytdtlls.com:',
                    this.props.currentURIPath,
                    ' ',
                    this.props.terminalUserName,
                    '$ ',
                    command.content
                );
            } else if (command.template) {
                switch (command.template) {
                    case 'aboutAbout':
                        return this.props.terminalTemplate.aboutAbout();
                    case 'aboutGifs':
                        return this.props.terminalTemplate.aboutGifs();
                    case 'aboutHelp':
                        return this.props.terminalTemplate.aboutHelp();
                    case 'aboutHome':
                        return this.props.terminalTemplate.aboutHome();
                    case 'aboutSite':
                        return this.props.terminalTemplate.aboutSite();
                    case 'clearHelp':
                        return this.props.terminalTemplate.clearHelp();
                    case 'closeHelp':
                        return this.props.terminalTemplate.closeHelp();
                    case 'gotoHelp':
                        return this.props.terminalTemplate.gotoHelp();
                    case 'gotoList':
                        return this.props.terminalTemplate.gotoList();
                    case 'help':
                        return this.props.terminalTemplate.help();
                    case 'helpHelp':
                        return this.props.terminalTemplate.helpHelp();
                    case 'hideHelp':
                        return this.props.terminalTemplate.hideHelp();
                    case 'nameHelp':
                        return this.props.terminalTemplate.nameHelp();
                    case 'styleHelp':
                        return this.props.terminalTemplate.styleHelp();
                    case 'validColors':
                        return this.props.terminalTemplate.validColors();
                    case 'welcome':
                        return this.props.terminalTemplate.welcome();
                    default:
                        console.log('add the template to terminalInput, dude');
                        return;
                }
            } else {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { style: styles.terminalMessageText },
                        command.content
                    )
                );
            }
        }, this);

        var styles = {
            terminalForm: {
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            terminalHidden: {
                display: 'none'
            },
            terminalInput: {
                flexGrow: '1',
                height: '12px',
                backgroundColor: 'transparent'
            },
            terminalInputName: {
                marginRight: '4px'
            },
            terminalText: {
                fontFamily: 'monaco',
                color: this.props.terminalTextColor,
                fontSize: '12px'
            },
            terminalMessageText: {
                color: 'pink'
            },
            terminalTextBox: {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                padding: '10px',
                overflow: 'scroll',
                boxSizing: 'border-box'
            }
        };

        return React.createElement(
            'div',
            {
                style: [styles.terminalText, styles.terminalTextBox, this.props.terminalHidden && styles.terminalHidden, this.props.terminalClosed && styles.terminalHidden],
                ref: function (ref) {
                    return _this.terminalTextBox = ref;
                }
            },
            displayPreviousTerminalCommands,
            React.createElement(
                'form',
                {
                    onSubmit: this.props.handleTerminalInputSubmit,
                    style: [styles.terminalForm]
                },
                React.createElement(
                    'div',
                    { style: [styles.terminalInputName] },
                    'gddynytdtlls.com:',
                    this.props.currentURIPath,
                    ' ',
                    this.props.terminalUserName,
                    '$'
                ),
                React.createElement('input', {
                    autoFocus: true,
                    onChange: this.props.handleTerminalInputTextChange,
                    style: [styles.terminalInput, styles.terminalText],
                    value: this.props.terminalInputText,
                    ref: 'terminalInput'
                })
            )
        );
    }
});

TerminalInput = Radium(TerminalInput);
var app = app || {};

(function () {

    'use strict';

    app.TerminalTemplateModel = function () {};

    app.TerminalTemplateModel.prototype.clearHelp = function () {
        var styles = {
            clear: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            clearHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            clearBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.clear },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.clearHeading },
                    'Clear:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.clearBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [clear] command is going to clear your command and message history from the terminal.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'other than the default [-h]/[--help] modifiers, [clear] accepts no [options] or [modifiers].'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [clear] eg. clear'
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.aboutAbout = function () {
        var styles = {
            aboutAbout: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            aboutAboutHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            aboutAboutBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '0px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.aboutAbout },
            React.createElement(
                'div',
                { style: styles.aboutAboutBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    "<----about---->"
                ),
                React.createElement('img', { height: '350px', src: '/images/metaPug.jpg' }),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'as far as reading about the about page,'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'it isn\'t a lot different than this.'
                )
            )
        ); //'
    };

    app.TerminalTemplateModel.prototype.aboutHome = function () {
        var styles = {
            aboutHome: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutHomeHeading: {
                color: 'white'
            },
            aboutHomeBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.aboutHome },
            React.createElement(
                'div',
                { style: styles.aboutHomeBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    "<----home---->"
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'video of an anonymous person trying not to blow a gasket.'
                )
            )
        ); //'
    };

    app.TerminalTemplateModel.prototype.aboutGifs = function () {
        var styles = {
            aboutGifs: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutGifsHeading: {
                color: 'white'
            },
            aboutGifsBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.aboutGifs },
            React.createElement(
                'div',
                { style: styles.aboutGifsBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    "<----contemporary art gifs---->"
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'this is where the good writing goes.'
                )
            )
        ); //'
    };

    app.TerminalTemplateModel.prototype.aboutSite = function () {
        var styles = {
            aboutGifs: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutGifsHeading: {
                color: 'white'
            },
            aboutGifsBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.aboutGifs },
            React.createElement(
                'div',
                { style: styles.aboutGifsBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'About the Site:'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'gotta write about it man.'
                )
            )
        ); //'
    };

    app.TerminalTemplateModel.prototype.aboutMap = function () {
        var styles = {
            aboutGifs: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutGifsHeading: {
                color: 'white'
            },
            aboutGifsBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.aboutGifs },
            React.createElement(
                'div',
                { style: styles.aboutGifsBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    "<----map---->"
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'this page is kind of a mess whether you\'re looking at the content or the implementation.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'initially I started programming because I was interested in the ratio of putting work into a project veruses getting work back out of it.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'when I got out of school I started working in cabinet shops.'
                ),
                React.createElement('div', { style: styles.bodyElements }),
                React.createElement('div', { style: styles.bodyElements }),
                React.createElement('div', { style: styles.bodyElements }),
                React.createElement('div', { style: styles.bodyElements })
            )
        ); //'
    };

    app.TerminalTemplateModel.prototype.closeHelp = function () {
        var styles = {
            close: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            closeHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            closeBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.close },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.closeHeading },
                    'Close:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.closeBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [close] command is going to close the Terminal. It can be brought back by pressing the \'t\' key on your keyboard. it performs the same action as clicking the red button on the terminal toolbar.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'other than the default [-h]/[--help] modifiers, [close] accepts no [options] or [modifiers]'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [close] eg. close'
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.aboutHelp = function () {
        var styles = {
            about: {
                height: '215px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            aboutHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            aboutBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.about },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.aboutHeading },
                    'About:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.aboutBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [about] command will tell you information about either the page you\'re currently on or the site as a whole, depending on the [modifier] that is passed.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    '[about] accepts no [options].'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'with the exception of [-h]/[--help], [about] accepts two modifiers:'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent, { marginTop: '10px' }] },
                    '[-p]: displays information about the page you are currently on.'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent, { marginBottom: '15px' }] },
                    '[-s]: displays information about the entire site.'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [about] [modifier] eg. about -p'
                )
            )
        ); //'
    };

    app.TerminalTemplateModel.prototype.gotoHelp = function () {
        var styles = {
            goto: {
                height: '170px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            gotoHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            gotoBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.goto },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.gotoHeading },
                    'Goto:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.gotoBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [goto] command is used to navigate to other pages on the site via the terminal.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'with the exception of [-h]/[--help], [goto] accepts two modifiers, [-l] and [-m].'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent, { marginTop: '10px' }] },
                    '[-l]: displays a list of all avaliable routes.'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent, { marginBottom: '15px' }] },
                    '[-m]: opens the new webpage with the terminal minimized.'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [goto] [option] [modifier] eg. goto gifs -m'
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.gotoList = function () {
        var styles = {
            goto: {
                height: '140px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            gotoHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            gotoBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '25px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.goto },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.gotoHeading },
                    'Route List:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.gotoBody },
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent] },
                    'about - contact info and me at the gallery or club ---------------------'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent] },
                    'gifs -- make some contemporary art gifs --------------------------------'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent] },
                    'home -- really there isn\'t much here except the intro video ------------'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent] },
                    'map --- look at photographs with their coordinates plotted on a map ----'
                )
            )
        );
        //'
    };

    app.TerminalTemplateModel.prototype.helpHelp = function () {
        var styles = {
            help: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            helpHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            helpBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.help },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.helpHeading },
                    'Help:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.helpBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [help] command is going to give you a directory of commands you can call.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'other than the default [-h]/[--help] modifiers, [help] accepts no [options] or [modifiers]'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [help] eg. help'
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.nameHelp = function () {
        var styles = {
            name: {
                height: '160px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            nameHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            nameBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.name },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.nameHeading },
                    'Name:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.nameBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [name] command is used to set your username. (NO SPACES ALLOWED).'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'with the exception of [-h]/[--help], [name] accepts one modifier:'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent, { marginTop: '10px', marginBottom: '15px' }] },
                    '[-u]: transforms the [option] you pass for your username to CAPS.'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [name] [option] [modifier] eg. name free_willy_free$tyle -u'
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.hideHelp = function () {
        var styles = {
            hide: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '5px 0'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            hideHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            hideBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.hide },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.hideHeading },
                    'Hide:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.hideBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [hide] command is going to minimize the Terminal. It does the same thing as clicking the yellow button on the terminal toolbar. You can expand the terminal by clicking the green button on the terminal toolbar, or my pressing the \'m\' key on your keyboard.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'other than the default [-h]/[--help] modifiers, [hide] accepts no [options] or [modifiers]'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [hide] eg. hide'
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.help = function () {
        var styles = {
            helpContainer: {
                height: '70%',
                marginTop: '10px',
                marginBottom: '5px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column'
            },
            helpHeading: {
                height: '20%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                letterSpacing: '.5em'
            },
            helpHeadingText: {
                padding: '0px .5em',
                border: '5px dotted #00ff00'
            },
            helpBody: {
                height: '80%',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            helpBodySection: {
                height: '100%',
                flex: '1'
            },
            commandsHeading: {},
            commandsList: {
                flex: '1',
                boxSizing: 'border-box',
                paddingLeft: '130px',
                marginBottom: '5px'
            },
            commandsListText: {
                color: 'white',
                backgroundColor: 'deeppink',
                padding: '0 30px 0 0'
            },
            infoSection: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingRight: '60px',
                boxSizing: 'border-box'
            }
        };
        return React.createElement(
            'div',
            { style: styles.helpContainer },
            React.createElement(
                'div',
                { style: styles.helpHeading },
                React.createElement(
                    'div',
                    { style: styles.helpHeadingText },
                    'HELP MEN',
                    React.createElement(
                        'span',
                        { style: { letterSpacing: '0' } },
                        'U'
                    )
                )
            ),
            React.createElement(
                'div',
                { style: styles.helpBody },
                React.createElement(
                    'div',
                    { style: [styles.helpBodySection] },
                    React.createElement(
                        'div',
                        { style: styles.commandsHeading },
                        'List of Commands:'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'about --- [-s][-p] -------------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'clear --- [no modifiers] -------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'close --- [no modifiers] -------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'goto ---- [-l][-m] -------------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'help ---- [no modifiers] -------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'hide ---- [no modifiers] -------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'name ---- [-u] -----------------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'style --- [-tc][-c][-bg] -------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'watch --- [-l] -----------------'
                    ),
                    React.createElement(
                        'div',
                        { style: styles.commandsList },
                        'in addition to these [modifiers], all commands have a help menu that can be accessed by passing the [-h] or [--help] modifier'
                    )
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.styleHelp = function () {
        var styles = {
            styleHelp: {
                height: '230px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            styleHelpHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            styleHelpBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.styleHelp },
            React.createElement(
                'div',
                { style: styles.heading },
                React.createElement(
                    'div',
                    { style: styles.styleHelpHeading },
                    'Style:'
                )
            ),
            React.createElement(
                'div',
                { style: styles.styleHelpBody },
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'the [style] command is used to customize the look of your terminal.'
                ),
                React.createElement(
                    'div',
                    { style: styles.bodyElements },
                    'with the exception of [-h]/[--help], [style] accepts three modifiers:'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent, { marginTop: '10px' }] },
                    '[-bg]: allows you to change the background color of the terminal.'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent] },
                    '[-c]: opens a list of valid colors. In addition to the colors on the list, both [-bg] and [-tc] can be passed the \'default\' [option], which will render a low opacity black for [-bg], and #00ff00 for [-tc].'
                ),
                React.createElement(
                    'div',
                    { style: [styles.bodyElements, styles.indent, { marginBottom: '15px' }] },
                    '[-tc]: allows you to change the font color of the terminal.'
                ),
                React.createElement(
                    'div',
                    null,
                    'syntax: [style] [option] [modifier] eg. style deeppink -bg'
                )
            )
        );
    };

    app.TerminalTemplateModel.prototype.validColors = function () {
        var displayTerminalColors = terminalColors.map(function (color) {
            if (color === 'indigo') {
                return React.createElement(
                    'span',
                    { style: { color: color } },
                    React.createElement(
                        'span',
                        { style: { color: '#00ff00' } },
                        'and',
                        " "
                    ),
                    color
                );
            }
            return React.createElement(
                'span',
                null,
                React.createElement(
                    'span',
                    { style: { color: color } },
                    color
                ),
                ',',
                " "
            );
        });
        var styles = {
            colorsContainer: {
                height: '335px',
                width: '100%'
            },
            colorsHeader: {
                height: '60px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                boxSizing: 'border-box',
                fontSize: '30px'
            },
            colorsBody: {
                width: '100%',
                paddingLeft: '20px',
                boxSizing: 'border-box'
            }
        };
        return React.createElement(
            'div',
            { style: styles.colorsContainer },
            React.createElement(
                'div',
                { style: styles.colorsHeader },
                'List of Colors:'
            ),
            React.createElement(
                'div',
                { style: styles.colorsBody },
                displayTerminalColors
            )
        );
    };

    app.TerminalTemplateModel.prototype.welcome = function () {
        var styles = {
            welcomeContainer: {
                height: '96%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
                paddingTop: '10px',
                boxSizing: 'border-box'
            },
            welcomeHeading: {
                height: '13%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            welcomeHeadingText: {
                fontSize: '40px',
                color: 'white'
            },
            welcomeBody: {
                height: '87%',
                width: '100%',
                boxSizing: 'border-box'
            },
            welcomeBodyElement: {
                marginLeft: '20px',
                marginBottom: '5px'
            }
        };
        return React.createElement(
            'div',
            { style: styles.welcomeContainer },
            React.createElement(
                'div',
                { style: styles.welcomeHeading },
                React.createElement(
                    'div',
                    { style: styles.welcomeHeadingText },
                    'Welcome'
                )
            ),
            React.createElement(
                'div',
                { style: styles.welcomeBody },
                React.createElement(
                    'div',
                    { style: { marginBottom: '11px' } },
                    'this is the gddynytdtlls.com ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        React.createElement(
                            'i',
                            null,
                            'Terminal'
                        )
                    ),
                    '.'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'the terminal can be used for ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'navigating'
                    ),
                    ' through the site,'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'reading'
                    ),
                    ' about the different pages,'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'and ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'watching'
                    ),
                    ' animations.'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'the terminal can also be ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'styled'
                    ),
                    ','
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'minimized'
                    ),
                    ', ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'closed'
                    ),
                    ', and'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'have a set ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'username'
                    ),
                    '.'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'However, it\'s just the vegan gravy on the tofurkey:'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'great that it\'s here, but what needs to happen'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'can happen without it.'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'You can ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'minimize'
                    ),
                    ' the terminal by clicking the ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'yellow button'
                    )
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'on the terminal toolbar, and operate the site like any'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'other site. there\'s a dropdown nav up top.'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'otherwise, ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'type \'help\''
                    )
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    'to see a ',
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'list'
                    ),
                    ' of'
                ),
                React.createElement(
                    'div',
                    { style: styles.welcomeBodyElement },
                    React.createElement(
                        'span',
                        { style: { color: 'white' } },
                        'commands'
                    ),
                    '.'
                )
            )
        ); //'
    };
})();

var docCookies = {
    getItem: function getItem(sKey) {
        if (!sKey) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function removeItem(sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function hasItem(sKey) {
        if (!sKey) {
            return false;
        }
        return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
    },
    keys: function keys() {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

var terminalColors = ['palevioletred', 'mediumturquoise', 'orange', 'hotpink', 'darkred', 'wheat', 'darkslategrey', 'orangered', 'mintcream', 'darkorchid', 'mediumseagreen', 'salmon', 'lightslategrey', 'rebeccapurple', 'lavender', 'black', 'darkviolet', 'gainsboro', 'slateblue', 'deeppink', 'pink', 'darkslateblue', 'cyan', 'lime', 'blue', 'mediumspringgreen', 'chartreuse', 'mediumslateblue', 'lightsalmon', 'mediumorchid', 'sienna', 'dodgerblue', 'grey', 'aliceblue', 'honeydew', 'goldenrod', 'azure', 'floralwhite', 'lightsteelblue', 'powderblue', 'purple', 'darkolivegreen', 'firebrick', 'midnightblue', 'darkseagreen', 'turquoise', 'darkgreen', 'ghostwhite', 'blanchedalmond', 'coral', 'lavenderblush', 'darkmagenta', 'darksalmon', 'rosybrown', 'lemonchiffon', 'paleturquoise', 'magenta', 'cornsilk', 'brown', 'olivedrab', 'maroon', 'yellowgreen', 'steelblue', 'lightgreen', 'orchid', 'lightcoral', 'cadetblue', 'lightgoldenrodyellow', 'gray', 'darkkhaki', 'fuchsia', 'peachpuff', 'dimgray', 'indianred', 'crimson', 'khaki', 'darkcyan', 'deepskyblue', 'mistyrose', 'royalblue', 'mediumaquamarine', 'mediumvioletred', 'lightgray', 'olive', 'aqua', 'navy', 'peru', 'whitesmoke', 'red', 'lawngreen', 'gold', 'silver', 'lightskyblue', 'forestgreen', 'thistle', 'green', 'tomato', 'beige', 'mediumblue', 'chocolate', 'darkgray', 'dimgray', 'limegreen', 'lightpink', 'burlywood', 'plum', 'oldlace', 'darkturquoise', 'violet', 'skyblue', 'darkgoldenrod', 'snow', 'teal', 'blueviolet', 'ivory', 'saddlebrown', 'palegoldenrod', 'lightgrey', 'darkorange', 'lightcyan', 'yellow', 'linen', 'slategrey', 'bisque', 'papayawhip', 'sandybrown', 'springgreen', 'palegreen', 'lightseagreen', 'lightslategrey', 'darkgrey', 'lightyellow', 'aquamarine', 'seagreen', 'lightblue', 'slategray', 'mediumpurple', 'seashell', 'darkblue', 'tan', 'greenyellow', 'white', 'antiquewhite', 'cornflowerblue', 'navajowhite', 'moccasin', 'indigo' // hell yes i actually typed this out, but I'm sure you'll be happy to know my recovery is going well.
];

var app = app || {};

(function () {

    'use strict';

    app.TerminalModel = function () {};

    app.TerminalModel.prototype.formatTerminalCommand = function (terminalCommand) {

        var command = {
            command: null,
            option: null,
            modifier: null
        },
            commandParse = terminalCommand.split(" ");

        command.command = commandParse[0];

        if (commandParse[1]) {
            if (commandParse[1].substring(0, 1) == '-') {
                command.modifier = commandParse[1];
            } else {
                command.option = commandParse[1];
            }
        }

        if (commandParse[2]) command.modifier = commandParse[2];
        return command;
    };

    app.TerminalModel.prototype.notAModifier = function (command) {
        return {
            message: true,
            content: '"' + command.modifier + '" is not a [modifier] of [' + command.command + ']'
        };
    };

    app.TerminalModel.prototype.notAnOption = function (command) {
        return {
            message: true,
            content: '"' + command.option + '" is not an [option] of command [' + command.command + ']'
        };
    };

    app.TerminalModel.prototype.notACommand = function (command_, previousCommands_, lastCommand_) {
        var command = command_;
        var previousCommands = previousCommands_;
        var lastCommand = lastCommand_;
        var notACommandMessage = '"' + command.command + '" is not a command. A list of commands can be read by calling "help"';
        return {
            terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, content: notACommandMessage })
        };
    };

    app.TerminalModel.prototype.terminalBackgroundColorChange = function (command_, previousCommands_, lastCommand_) {
        var command = command_;
        var previousCommands = previousCommands_;
        var lastCommand = lastCommand_;

        if (!command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: false, content: 'an [option] must be passed to execute a background-color change. A list of valid colors can be found by executing "style -c".' })
            };
        }
        if (command.option == 'default') {
            docCookies.setItem('terminalBackgroundColor', 'rgba(0,0,0,.5)');
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalBackgroundColor: 'rgba(0,0,0,.5)'
            };
        }
        if (this.isInArray(command.option, terminalColors)) {
            docCookies.setItem('terminalBackgroundColor', command.option.toString());
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalBackgroundColor: command.option
            };
        } else {
            var notAValidColorMessage = '"' + command.option + '" is not a valid color.';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: false, content: notAValidColorMessage }, { template: 'validColors', message: true, content: '' })
            };
        }
    };

    app.TerminalModel.prototype.terminalCommandClear = function (command, previousCommands, lastCommand) {
        if (!command.option && !command.modifier) {
            return {
                terminalPreviousCommands: [],
                terminalPreviousCommandsCount: 0
            };
        }

        if (command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, content: '[clear] does not have any [option]' })
            };
        }

        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: 'clearHelp', content: '' })
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, content: '[clear] does not have any [modifiers]' })
                    };
            }
        }
    };

    app.TerminalModel.prototype.terminalCommandHide = function (command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: false, template: 'hideHelp', content: '' })
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }
        if (command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAnOption(command))
            };
        }
        docCookies.setItem('terminalHidden', true);
        return {
            terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
            terminalHidden: true
        };
    };

    app.TerminalModel.prototype.terminalCommandClose = function (command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: false, template: 'closeHelp', content: '' })
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }
        if (command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAnOption(command))
            };
        }
        docCookies.setItem('terminalClosed', true);
        return {
            terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
            terminalClosed: true
        };
    };

    app.TerminalModel.prototype.terminalCommandGoto = function (command, previousCommands, lastCommand) {
        var routes = ['home', 'about', 'gifs', 'map'],
            minimizeTerminal = false;

        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: false, template: 'gotoHelp', content: '' })
                    };
                    break;
                case '-l':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: false, template: 'gotoList', content: '' })
                    };
                    break;
                case '-m':
                    minimizeTerminal = true;
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }
        if (this.isInArray(command.option, routes) && command.option) {
            if (command.option == 'home') {
                window.location.pathname = '/';
                if (minimizeTerminal) {
                    docCookies.setItem('terminalHidden', true);
                    return { terminalHidden: true };
                }
                return;
            }
            if (minimizeTerminal) {
                docCookies.setItem('terminalHidden', true);
                window.location.pathname = '/' + command.option;
                return { terminalHidden: true };
            }
            window.location.pathname = '/' + command.option;
            return;
        } else {
            if (command.option) {
                var notARouteMessage = '"' + command.option + '" is not a route. You can get a list of routes by calling "goto -l".';
                return {
                    terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: false, content: notARouteMessage })
                };
            } else {
                var requiresAnOptionMessage = '[goto] requires that a valid route [option] be passed. You can get a list of routes by calling "goto -l".';
                return {
                    terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: false, content: requiresAnOptionMessage })
                };
            }
        }
    };

    app.TerminalModel.prototype.terminalCommandHelp = function (command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: 'helpHelp', content: '' })
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }

        if (command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAnOption(command))
            };
        }

        return {
            terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: 'help', content: '' })
        };
    };

    app.TerminalModel.prototype.terminalCommandName = function (command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: 'nameHelp', content: '' })
                    };
                    break;
                case '--uppercase':
                //fallthrough
                case '-u':
                    command.option = command.option.toUpperCase();
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }

        if (command.option) {
            docCookies.setItem('terminalUserName', command.option);
            return {
                terminalUserName: command.option,
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand))
            };
        } else {
            var requiredOptionMessage = '[name] requires that you pass an [option] for your username.';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: false, content: requiredOptionMessage })
            };
        }
    };

    app.TerminalModel.prototype.terminalCommandAbout = function (command, previousCommands, lastCommand, currentPath) {
        if (command.option) {
            var noOptions = 'the [about] command does not accept any options';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: false, message: true, content: noOptions })
            };
        }
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: 'aboutHelp', message: true, content: '' })
                    };
                    break;
                case '-p':
                    var formatAboutTemplateName = function formatAboutTemplateName(path) {
                        var path = path.charAt(0).toUpperCase() + path.slice(1);
                        return 'about' + path;
                    };
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: formatAboutTemplateName(currentPath), message: true, content: '' })
                    };
                    break;
                case '-s':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: 'aboutSite', message: true, content: '' })
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        } else {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: false, message: true, content: '[about] requires that a [modifier] be passed.' })
            };
        }
    };

    app.TerminalModel.prototype.terminalCommandStyle = function (command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--background':
                //fallthrough
                case '-bg':
                    return this.terminalBackgroundColorChange(command, previousCommands, lastCommand);
                    break;
                case '-c':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: 'validColors', message: true, content: '' })
                    };
                    break;
                case '--help':
                //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: 'styleHelp', message: true, content: '' })
                    };
                    break;
                case '--textcolor':
                //fallthrough
                case '-tc':
                    return this.terminalTextColorChange(command, previousCommands, lastCommand);
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        } else {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, content: '[style] requires a valid [modifier]' })
            };
        }
    };

    app.TerminalModel.prototype.terminalLogCommand = function (lastCommand) {
        return {
            message: false, content: lastCommand
        };
    };

    app.TerminalModel.prototype.terminalTextColorChange = function (command, previousCommands, lastCommand) {
        if (!command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: false, content: 'an [option] must be passed to execute a text-color change. A list of valid colors can be found by executing "style -c".' })
            };
        }
        if (command.option == 'default') {
            docCookies.setItem('terminalTextColor', '#00ff00');
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalTextColor: '#00ff00'
            };
        }
        if (this.isInArray(command.option, terminalColors)) {
            docCookies.setItem('terminalTextColor', command.option);
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalTextColor: command.option
            };
        } else {
            var notAValidColorMessage = '"' + command.option + '" is not a valid color.';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { message: true, template: false, content: notAValidColorMessage }, { template: 'validColors', message: true, content: '' })
            };
        }
    };

    app.TerminalModel.prototype.isInArray = function (needle, haystack) {
        var found = false;
        for (var i = haystack.length - 1; i >= 0; i--) {
            if (haystack[i] == needle) {
                found = true;
            }
        };
        return found;
    };
})();

var Terminal = React.createClass({
    displayName: 'Terminal',

    getInitialState: function getInitialState() {
        var getTerminalHiddenCookie = docCookies.getItem('terminalHidden'),
            getTerminalUserName = docCookies.getItem('terminalUserName'),
            getTerminalTextColor = docCookies.getItem('terminalTextColor'),
            getTerminalBackgroundColor = docCookies.getItem('terminalBackgroundColor'),
            pathName = window.location.pathname === '/' ? 'home' : window.location.pathname.substring(1);

        return {
            currentURIPath: pathName,
            terminalClosed: false,
            terminalHidden: getTerminalHiddenCookie ? JSON.parse(getTerminalHiddenCookie) : false,
            terminalInputText: '',
            terminalLastCommand: '',
            terminalPreviousCommands: [{ message: true, template: 'welcome', content: '' }],
            terminalPreviousCommandsCount: 1,
            terminalUserName: getTerminalUserName ? getTerminalUserName : 'guest',
            terminalTextColor: getTerminalTextColor ? getTerminalTextColor : '#00ff00',
            terminalBackgroundColor: getTerminalBackgroundColor ? getTerminalBackgroundColor : 'rgba(0,0,0,.5)'
        };
    },
    componentDidMount: function componentDidMount() {
        $(document).keypress((function (e) {
            if (!$(":focus")[0]) {
                this.handleKeyPress(e);
            }
        }).bind(this));
    },
    handleKeyPress: function handleKeyPress(e) {
        switch (e.keyCode) {
            case 116:
                this.handleTerminalClose();
                break;
            case 109:
                if (this.state.terminalHidden) {
                    this.handleTerminalExpand();
                } else {
                    this.handleTerminalMinimize();
                }
                break;
            default:
                return;
        }
    },
    handleIteraitThroughTerminalCommands: function handleIteraitThroughTerminalCommands() {
        var previousCommands = this.state.terminalPreviousCommands,
            commandsCount = this.state.terminalPreviousCommandsCount;

        if (previousCommands == 0 || previousCommands.length < commandsCount) {
            return;
        } else {
            if (previousCommands[previousCommands.length - commandsCount].message) {
                this.setState({
                    terminalPreviousCommandsCount: commandsCount + 2,
                    terminalInputText: previousCommands[previousCommands.length - commandsCount - 1].content,
                    terminalLastCommand: previousCommands[previousCommands.length - commandsCount - 1].content
                });
            } else {
                this.setState({
                    terminalPreviousCommandsCount: commandsCount + 1,
                    terminalInputText: previousCommands[previousCommands.length - commandsCount].content,
                    terminalLastCommand: previousCommands[previousCommands.length - commandsCount].content
                });
            }
        }
    },
    handleTerminalClose: function handleTerminalClose() {
        this.setState({ terminalClosed: !this.state.terminalClosed });
    },
    handleTerminalExpand: function handleTerminalExpand() {
        this.setState({ terminalHidden: false });
        docCookies.setItem('terminalHidden', false);
    },
    handleTerminalInputSubmit: function handleTerminalInputSubmit(e) {
        e.preventDefault();
        this.terminalCommandController(this.props.model.formatTerminalCommand(this.state.terminalInputText));
    },
    handleTerminalInputTextChange: function handleTerminalInputTextChange(e) {
        this.setState({
            terminalInputText: e.target.value,
            terminalLastCommand: e.target.value
        });
    },
    handleTerminalMinimize: function handleTerminalMinimize() {
        this.setState({ terminalHidden: true });
        docCookies.setItem('terminalHidden', true);
    },
    handleTerminalShortCuts: function handleTerminalShortCuts(e) {
        var key = e.keyCode,
            UP_ARROW = 38,
            DOWN_ARROW = 40;

        switch (key) {
            case UP_ARROW:
                this.handleIteraitThroughTerminalCommands();
                break;
            case DOWN_ARROW:
                this.setState({ terminalInputText: '', terminalPreviousCommandsCount: 1 });
                break;
            default:
                return;
        }
    },
    terminalCommandController: function terminalCommandController(command) {
        var previousCommands = this.state.terminalPreviousCommands,
            lastCommand = this.state.terminalLastCommand;

        this.setState({
            terminalInputText: '',
            terminalPreviousCommandsCount: 1
        });

        switch (command.command) {
            case 'about':
                this.setState(this.props.model.terminalCommandAbout(command, previousCommands, lastCommand, this.state.currentURIPath));
                break;
            case 'clear':
                this.setState(this.props.model.terminalCommandClear(command, previousCommands, lastCommand));
                break;
            case 'hide':
                this.setState(this.props.model.terminalCommandHide(command, previousCommands, lastCommand));
                break;
            case 'close':
                this.setState(this.props.model.terminalCommandClose(command, previousCommands, lastCommand));
                break;
            case 'goto':
                this.setState(this.props.model.terminalCommandGoto(command, previousCommands, lastCommand));
                break;
            case 'name':
                this.setState(this.props.model.terminalCommandName(command, previousCommands, lastCommand));
                break;
            case 'help':
                this.setState(this.props.model.terminalCommandHelp(command, previousCommands, lastCommand));
                break;
            case 'style':
                this.setState(this.props.model.terminalCommandStyle(command, previousCommands, lastCommand));
                break;
            default:
                this.setState(this.props.model.notACommand(command, previousCommands, lastCommand));
                break;
        }
    },
    render: function render() {
        var styles = {
            terminal: {
                color: '#00ff00',
                height: '450px',
                width: '800px',
                fontFamily: 'monaco',
                position: 'fixed',
                boxSizing: 'border-box',
                padding: '10px',
                backgroundColor: this.state.terminalBackgroundColor,
                borderRadius: '0 0 5px 5px',
                zIndex: '10',
                transition: 'all 250ms ease'
            },
            terminalVisible: {
                bottom: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(50%)',
                opacity: '1'
            },
            terminalHidden: {
                bottom: '-30px',
                left: '0',
                width: '80px',
                height: '0px',
                backgroundColor: 'transparent',
                transform: 'translateY(-50%)'
            },
            terminalClosed: {
                opacity: '0'
            },
            terminalTopBar: {
                position: 'absolute',
                top: '-30px',
                left: '0',
                height: '30px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                background: 'linear-gradient(to bottom, #efefef 0%,#d8d8d8 80%)',
                zIndex: '10',
                borderRadius: '10px 10px 0 0'
            }
        };
        return React.createElement(
            'div',
            {
                style: [styles.terminal, this.state.terminalHidden ? styles.terminalHidden : styles.terminalVisible, this.state.terminalClosed && styles.terminalClosed],
                onKeyDown: this.handleTerminalShortCuts
            },
            React.createElement(
                'div',
                { style: [styles.terminalTopBar] },
                React.createElement(TerminalButtons, {
                    handleTerminalClose: this.handleTerminalClose,
                    handleTerminalExpand: this.handleTerminalExpand,
                    handleTerminalMinimize: this.handleTerminalMinimize
                })
            ),
            React.createElement(TerminalInput, {
                ref: 'terminalInputBox',
                terminalTextColor: this.state.terminalTextColor,
                terminalHidden: this.state.terminalHidden,
                terminalClosed: this.state.terminalClosed,
                terminalInputText: this.state.terminalInputText,
                terminalPreviousCommands: this.state.terminalPreviousCommands,
                terminalUserName: this.state.terminalUserName,
                currentURIPath: this.state.currentURIPath,
                handleTerminalInputTextChange: this.handleTerminalInputTextChange,
                handleTerminalInputSubmit: this.handleTerminalInputSubmit,
                terminalTemplate: this.props.terminalTemplate
            })
        );
    }
});

var model = new app.TerminalModel();

var terminalTemplate = new app.TerminalTemplateModel();

Terminal = Radium(Terminal);

ReactDOM.render(React.createElement(Terminal, { className: 'terminal', model: model, terminalTemplate: terminalTemplate }), document.getElementById('terminal'));
//# sourceMappingURL=terminal.js.map