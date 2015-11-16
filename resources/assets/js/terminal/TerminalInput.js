var TerminalInput = React.createClass({
    componentDidUpdate: function() {
        this.terminalTextBox.scrollTop = this.terminalTextBox.scrollHeight;    
    },
    focusInput: function() {
        this.refs.terminalInput.focus();
    },
    render: function() {
        var displayPreviousTerminalCommands = this.props.terminalPreviousCommands.map(function(command) {
            var styles = {
                terminalMessageText: {
                    color: '#00ff00',
                    backgroundColor: 'deeppink'
                }
            };
            if (!command.message && !command.template ) {
                return <div>gddynytdtlls.com:{this.props.currentURIPath} {this.props.terminalUserName}$ {command.content}</div>
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
                    case 'aboutMap':
                        return this.props.terminalTemplate.aboutMap();
                    case 'aboutSite': 
                        return this.props.terminalTemplate.aboutSite();
                    case 'clearHelp':
                        return this.props.terminalTemplate.clearHelp();
                    case 'closeHelp':
                        return this.props.terminalTemplate.closeHelp();
                    case 'gitHelp':
                        return this.props.terminalTemplate.gitHelp();
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
                    // case 'watchTest':
                    //     return this.props.terminalTemplate.watchTest();
                    case 'welcome':
                        return this.props.terminalTemplate.welcome();
                    default:
                        console.log('add the template to terminalInput, dude');
                        return;
                }
            } else {
                return (
                    <div>
                        <div style={styles.terminalMessageText}>{command.content}</div>
                    </div>
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
                backgroundColor: 'transparent',
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
            },
        };

        return (
            <div 
                style={[
                    styles.terminalText,
                    styles.terminalTextBox,
                    this.props.terminalHidden && styles.terminalHidden,
                    this.props.terminalClosed && styles.terminalHidden
                ]}
                ref={(ref) => this.terminalTextBox = ref}
            >
                {displayPreviousTerminalCommands}
                <form
                    onSubmit={this.props.handleTerminalInputSubmit}
                    style={[ styles.terminalForm ]}
                >
                    <div style={[ styles.terminalInputName ]}>gddynytdtlls.com:{this.props.currentURIPath} {this.props.terminalUserName}$</div>
                    <input 
                        autoFocus
                        onChange={this.props.handleTerminalInputTextChange}
                        style={[ styles.terminalInput, styles.terminalText ]}
                        value={this.props.terminalInputText}
                        ref="terminalInput"
                    />
                </form>
            </div>
        );
    } 
});

TerminalInput = Radium(TerminalInput);