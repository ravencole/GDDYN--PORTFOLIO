'use strict';

var Intro = React.createClass({
    displayName: 'Intro',

    getInitialState: function getInitialState() {
        return {
            text: '',
            count: 0,
            done: false
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            fullText: 'gddynytdtlls.com'
        };
    },
    componentDidMount: function componentDidMount() {
        this.timer = setInterval(this.handleText, 190);
    },
    handleText: function handleText() {
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
    handleFadeOut: function handleFadeOut() {
        clearInterval(this.fadeOut);
        this.setState({ done: true });
    },
    render: function render() {
        var styles = {
            text: {
                transition: 'all 1000ms ease'
            },
            textColor: {
                opacity: '0'
            }
        };
        return React.createElement(
            'div',
            { className: 'intro--cont' },
            React.createElement(
                'div',
                { className: 'intro--text', style: [styles.text, this.state.done && styles.textColor] },
                this.state.text
            ),
            React.createElement(
                'video',
                { className: 'intro__video', loop: true, muted: true, autoPlay: true },
                React.createElement('source', { src: '/videos/fridge.mp4', type: 'video/mp4' })
            )
        );
    }
});

Intro = Radium(Intro);

ReactDOM.render(React.createElement(Intro, null), document.getElementById('intro'));
//# sourceMappingURL=intro.js.map