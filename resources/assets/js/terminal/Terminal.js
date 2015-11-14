var Terminal = React.createClass({
    getInitialState: function() {
        var getTerminalHiddenCookie     = docCookies.getItem('terminalHidden'),
            getVisited                  = docCookies.getItem('visited'),
            getTerminalUserName         = docCookies.getItem('terminalUserName'),
            getTerminalTextColor        = docCookies.getItem('terminalTextColor'),
            getTerminalBackgroundColor  = docCookies.getItem('terminalBackgroundColor'),
            pathName                    = window.location.pathname === '/' ? 'home' : window.location.pathname.substring(1);

        return {
            currentURIPath: pathName,
            terminalClosed: false,
            terminalHidden:  getTerminalHiddenCookie ? JSON.parse(getTerminalHiddenCookie) : false,
            terminalInputText: '',
            terminalLastCommand: '',
            terminalPreviousCommands: getVisited ? [] : [{template: 'welcome', message: true, content: ''}],
            terminalPreviousCommandsCount: 1,
            terminalUserName: getTerminalUserName ? getTerminalUserName : 'guest',
            terminalTextColor: getTerminalTextColor ? getTerminalTextColor : '#00ff00',
            terminalBackgroundColor: getTerminalBackgroundColor ? getTerminalBackgroundColor : 'rgba(0,0,0,.5)'
        };
    },
    componentDidMount: function() {
        $(document).keypress(function(e) {
            if (!$(":focus")[0]) {
                this.handleKeyPress(e);
            }        
        }.bind(this));
        docCookies.setItem('visited', true);
    },
    handleKeyPress: function(e) {
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
    handleIteraitThroughTerminalCommands: function() {
        var previousCommands = this.state.terminalPreviousCommands,
            commandsCount    = this.state.terminalPreviousCommandsCount;

        if (previousCommands == 0 || previousCommands.length < commandsCount) {
            return;
        } else { 
            if (previousCommands[previousCommands.length - commandsCount].message){
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
    handleTerminalClose: function() {
        this.setState({ terminalClosed: !this.state.terminalClosed });
    },
    handleTerminalExpand: function() {
        this.setState({ terminalHidden: false});
        docCookies.setItem('terminalHidden', false);
    },
    handleTerminalInputSubmit: function(e) {
        e.preventDefault();
        this.terminalCommandController(this.props.model.formatTerminalCommand(this.state.terminalInputText));
    },
    handleTerminalInputTextChange: function(e) {
        this.setState({ 
            terminalInputText: e.target.value,
            terminalLastCommand: e.target.value
        });
    },
    handleTerminalMinimize: function() {
        this.setState({ terminalHidden: true });
        docCookies.setItem('terminalHidden', true);
    },
    handleTerminalShortCuts: function(e) {
        var key        = e.keyCode,
            UP_ARROW   = 38,
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
    terminalCommandController: function(command) {
        var previousCommands = this.state.terminalPreviousCommands,
            lastCommand      = this.state.terminalLastCommand;

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
            case 'git':
                this.setState(this.props.model.terminalCommandGit(command, previousCommands, lastCommand));
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
    render: function() {
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
        return (
            <div 
                style={[ 
                    styles.terminal,
                    this.state.terminalHidden ? styles.terminalHidden : styles.terminalVisible,
                    this.state.terminalClosed && styles.terminalClosed
                ]}
                onKeyDown={this.handleTerminalShortCuts}
            >
                <div style={[ styles.terminalTopBar ]}>
                    <TerminalButtons 
                        handleTerminalClose={this.handleTerminalClose}
                        handleTerminalExpand={this.handleTerminalExpand}
                        handleTerminalMinimize={this.handleTerminalMinimize} 
                    />
                </div>
                <TerminalInput 
                    ref="terminalInputBox"
                    terminalTextColor={this.state.terminalTextColor}
                    terminalHidden={this.state.terminalHidden}
                    terminalClosed={this.state.terminalClosed}
                    terminalInputText = {this.state.terminalInputText}
                    terminalPreviousCommands={this.state.terminalPreviousCommands}
                    terminalUserName={this.state.terminalUserName}
                    currentURIPath={this.state.currentURIPath}
                    handleTerminalInputTextChange={this.handleTerminalInputTextChange}
                    handleTerminalInputSubmit={this.handleTerminalInputSubmit}
                    terminalTemplate={this.props.terminalTemplate}
                />
            </div>
        );
    } 
});

var model = new app.TerminalModel();

var terminalTemplate = new app.TerminalTemplateModel();

Terminal = Radium(Terminal);

ReactDOM.render(<Terminal className="terminal" model={model} terminalTemplate={terminalTemplate}/>, document.getElementById('terminal'));






