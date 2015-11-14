var TerminalButtons = React.createClass({
    render: function() {
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
        return (
            <div style={[ styles.terminalButtonContainer ]}>
                <div 
                    className="terminal--button" 
                    onClick={this.props.handleTerminalClose}
                    style={[ 
                        styles.terminalButton, 
                        styles.terminalButtonClose 
                    ]}
                ></div>
                <div 
                    className="terminal--button" 
                    onClick={this.props.handleTerminalMinimize}
                    style={[ 
                        styles.terminalButton, 
                        styles.terminalButtonMinimize 
                    ]}
                ></div>
                <div 
                    className="terminal--button" 
                    onClick={this.props.handleTerminalExpand}
                    style={[ 
                        styles.terminalButton, 
                        styles.terminalButtonExpand 
                    ]}
                ></div>
            </div>
        );
    } 
});

TerminalButtons = Radium(TerminalButtons);
