var Intro = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            count: 0,
            done: false
        };
    },
    getDefaultProps: function() {
        return {
            fullText: 'gddynytdtlls.com'
        };
    },
    componentDidMount: function() {
        this.timer = setInterval(this.handleText, 190);
    },
    handleText: function() {
        if (this.state.count === this.props.fullText.length) {
            clearInterval(this.timer);
            this.fadeOut = setInterval(this.handleFadeOut, 5000);
        } else {
            this.setState({ 
                text: this.state.text + this.props.fullText.substring(this.state.count, this.state.count + 1) + '|',
                count: this.state.count + 1
            });
        }
    },
    handleFadeOut: function() {
        clearInterval(this.fadeOut);
        this.setState({ done: true });
    },
    render: function() {
        var styles = {
            text: {
                transition: 'all 1000ms ease'
            },
            textColor: {
                opacity: '0'
            }
        };
        return (
            <div className="intro--cont">
                <div className="intro--text" style={[styles.text, this.state.done && styles.textColor]}>{this.state.text}</div>
                <video className="intro--video" loop muted autoPlay>
                    <source src="/videos/fridgeForWeb.mp4" type="video/mp4" />
                </video>
            </div>
        );
    } 
});

Intro = Radium(Intro);

ReactDOM.render(<Intro />, document.getElementById('intro'));

