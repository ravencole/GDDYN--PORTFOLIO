'use strict';

var Play = React.createClass({
    displayName: 'Play',

    render: function render() {
        return React.createElement(
            'div',
            { onClick: this.props.handlePlayToggle, className: 'sidebar--btn' },
            this.props.play ? 'pause' : 'play'
        );
    }
});
var Speed = React.createClass({
    displayName: 'Speed',

    getInitialState: function getInitialState() {
        return {
            currentSpeed: ''
        };
    },
    onSpeedChange: function onSpeedChange(e) {
        this.setState({ currentSpeed: e.target.value });
        if (e.target.value > 249) {
            this.props.handleSpeedChange(e.target.value);
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'sidebar--form' },
            React.createElement(
                'div',
                { className: 'sidebar--form__heading' },
                'speed'
            ),
            React.createElement('input', { className: 'sidebar--form__input',
                placeholder: this.props.speed,
                value: this.state.currentSpeed,
                onChange: this.onSpeedChange })
        );
    }
});

var Text = React.createClass({
    displayName: 'Text',

    getInitialState: function getInitialState() {
        return {
            text: ''
        };
    },
    onTextChange: function onTextChange(e) {
        this.setState({ text: e.target.value });
        this.props.handlePictureText(e.target.value);
    },
    randomLine: function randomLine() {
        $.ajax({
            url: '/randommm',
            dataType: 'json',
            success: (function (data) {
                this.setState({ text: data });
                this.props.handlePictureText(data);
            }).bind(this)
        });
    },
    render: function render() {
        return React.createElement(
            'form',
            { className: 'sidebar--form' },
            React.createElement(
                'div',
                { className: 'sidebar--form__heading' },
                'text'
            ),
            React.createElement('input', { className: 'sidebar--form__input',
                placeholder: this.props.pictureText,
                value: this.state.text,
                onChange: this.onTextChange }),
            React.createElement(
                'div',
                { className: 'sidebar--form__label sidebar--form__request',
                    onClick: this.randomLine },
                'let me get a random mm line'
            ),
            React.createElement('div', { className: 'sidebar--form__hr sidebar--form__label' }),
            React.createElement('input', { type: 'checkbox',
                id: 'c2',
                onClick: this.props.handleCapatalizeText }),
            React.createElement(
                'label',
                { className: 'sidebar--form__label',
                    'for': 'c2' },
                React.createElement('div', null),
                React.createElement(
                    'div',
                    null,
                    'CAPS, please.'
                )
            )
        );
    }
});

Text = Radium(Text);

var Color = React.createClass({
    displayName: 'Color',

    getInitialState: function getInitialState() {
        return {
            color: ''
        };
    },
    colorChange: function colorChange(e) {
        this.setState({ color: e.target.value });
        this.props.handleTextColorChange(e.target.value);
    },
    handleRandomColor: function handleRandomColor() {
        function c() {
            return Math.floor(Math.random() * 256);
        }
        var color = "rgb(" + c() + "," + c() + "," + c() + ")";
        this.setState({ color: color });
        this.props.handleTextColorChange(color);
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'sidebar--form' },
            React.createElement(
                'div',
                { className: 'sidebar--form__heading' },
                'color'
            ),
            React.createElement('input', { className: 'sidebar--form__input',
                placeholder: this.props.textColor,
                value: this.state.color,
                onChange: this.colorChange }),
            React.createElement(
                'div',
                { className: 'sidebar--form__label sidebar--form__request',
                    onClick: this.handleRandomColor },
                'also, im gonna need a random color.'
            ),
            React.createElement('div', { className: 'sidebar--form__hr sidebar--form__label' }),
            React.createElement('input', { type: 'checkbox',
                id: 'c1',
                onClick: this.props.toggleAlwaysRandomColor }),
            React.createElement(
                'label',
                { className: 'sidebar--form__label',
                    'for': 'c1' },
                React.createElement('div', null),
                React.createElement(
                    'div',
                    null,
                    'no, like evey time.'
                )
            )
        );
    }
});

var NumberOfImages = React.createClass({
    displayName: 'NumberOfImages',

    getInitialState: function getInitialState() {
        return {
            currentImages: ''
        };
    },
    numOfImagesChange: function numOfImagesChange(e) {
        this.setState({ currentImages: e.target.value });
        this.props.handleNumOfImagesChange(e.target.value);
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'sidebar--form' },
            React.createElement(
                'div',
                { className: 'sidebar--form__heading' },
                'number of images'
            ),
            React.createElement('input', { className: 'sidebar--form__input',
                type: 'number',
                min: '1',
                max: '150',
                placeholder: this.props.numOfImages,
                value: this.state.currentImages,
                onChange: this.numOfImagesChange })
        );
    }
});
var Submit = React.createClass({
    displayName: 'Submit',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'sidebar--btn' },
            'submit'
        );
    }
});
var ShowSidebar = React.createClass({
    displayName: 'ShowSidebar',

    render: function render() {
        return React.createElement(
            'div',
            { onClick: this.props.toggleSidebar, className: 'sidebar--hide' },
            React.createElement('div', { className: 'sidebar--hide__arrow' })
        );
    }
});
var HideSidebar = React.createClass({
    displayName: 'HideSidebar',

    render: function render() {
        return React.createElement(
            'div',
            { onClick: this.props.toggleSidebar, className: 'sidebar--hide' },
            React.createElement('div', { className: 'sidebar--hide__x' }),
            React.createElement('div', { className: 'sidebar--hide__x' })
        );
    }
});
var GifsText = React.createClass({
    displayName: 'GifsText',

    render: function render() {
        var styles = {
            textColor: {
                color: this.props.textColor
            },
            capatalizeText: {
                textTransform: 'uppercase'
            }
        };
        return React.createElement(
            'div',
            { style: [styles.textColor, this.props.capatalizeText && styles.capatalizeText],
                className: 'gifsviewer--text' },
            this.props.pictureText
        );
    }
});

GifsText = Radium(GifsText);

var Sidebar = React.createClass({
    displayName: 'Sidebar',

    getInitialState: function getInitialState() {
        return {
            sidebarVisible: true
        };
    },
    toggleSidebar: function toggleSidebar() {
        this.setState({ sidebarVisible: !this.state.sidebarVisible });
    },
    render: function render() {
        var sidebarVisibility;
        var sidebarClosed = { width: 0 };
        var sidebarOpen = { outline: 0 };

        var styles = {
            sidebarNotVisible: {
                background: 'black'
            },
            visible: {
                display: 'none'
            }
        };

        if (this.state.sidebarVisible) {
            sidebarVisibility = React.createElement(HideSidebar, { toggleSidebar: this.toggleSidebar });
        } else {
            sidebarVisibility = React.createElement(ShowSidebar, { toggleSidebar: this.toggleSidebar });
        }

        return React.createElement(
            'div',
            { style: [this.state.sidebarVisible ? sidebarOpen : sidebarClosed, !this.state.sidebarVisible && styles.sidebarNotVisible], className: 'sidebar' },
            sidebarVisibility,
            React.createElement(
                'div',
                { className: 'sidebar--container', style: [!this.state.sidebarVisible && styles.visible] },
                React.createElement(
                    'div',
                    { className: 'sidebar--header' },
                    'contemporary art gifs'
                ),
                React.createElement(Play, {
                    play: this.props.play,
                    handlePlayToggle: this.props.handlePlayToggle }),
                React.createElement(Speed, {
                    speed: this.props.speed,
                    handleSpeedChange: this.props.handleSpeedChange }),
                React.createElement(Text, {
                    pictureText: this.props.pictureText,
                    capatalizeText: this.props.capatalizeText,
                    handlePictureText: this.props.handlePictureText,
                    handleCapatalizeText: this.props.handleCapatalizeText }),
                React.createElement(Color, {
                    play: this.props.play,
                    textColor: this.props.textColor,
                    handleTextColorChange: this.props.handleTextColorChange,
                    toggleAlwaysRandomColor: this.props.toggleAlwaysRandomColor }),
                React.createElement(NumberOfImages, {
                    numOfImages: this.props.numOfImages,
                    handleNumOfImagesChange: this.props.handleNumOfImagesChange })
            )
        );
    }
});

// <Submit />

Sidebar = Radium(Sidebar);

var GifsViewer = React.createClass({
    displayName: 'GifsViewer',

    getInitialState: function getInitialState() {
        return {
            imageID: 0,
            currentSpeed: 1000
        };
    },
    componentDidMount: function componentDidMount() {
        this.imageIteration = setInterval(this.isPlaying, this.props.speed);
    },
    imageChange: function imageChange() {
        if (this.state.imageID >= this.props.numOfImages) {
            this.setState({ imageID: 0 });
        } else {
            this.setState({ imageID: this.state.imageID + 1 });
        }
    },
    isPlaying: function isPlaying() {
        if (this.props.play) {
            this.imageChange();
            if (this.props.speed != this.state.currentSpeed) {
                clearInterval(this.imageIteration);
                this.imageIteration = setInterval(this.isPlaying, this.props.speed);
                this.setState({ currentSpeed: this.props.speed });
            }
            if (this.props.alwaysRandomColor) {
                this.props.handleAlwaysRandomColor();
            }
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'gifsviewer' },
            React.createElement(
                'div',
                { className: 'gifsviewer--imagecontainer' },
                React.createElement('img', { className: 'gifsviewer--image',
                    height: '450px',
                    src: '/images/cadads/' + this.props.cadads[this.state.imageID] }),
                React.createElement(GifsText, { textColor: this.props.textColor,
                    pictureText: this.props.pictureText,
                    capatalizeText: this.props.capatalizeText })
            )
        );
    }
});

var Gifs = React.createClass({
    displayName: 'Gifs',

    getInitialState: function getInitialState() {
        return {
            play: true,
            pictureText: 'CADADS',
            textColor: 'white',
            speed: 1000,
            numOfImages: 20,
            cadads: [],
            capatalizeText: false,
            alwaysRandomColor: false
        };
    },
    componentWillMount: function componentWillMount() {
        $.getJSON("/cadads", (function (data) {
            this.setState({ cadads: data });
        }).bind(this));
    },
    handlePlayToggle: function handlePlayToggle() {
        this.setState({ play: !this.state.play });
    },
    handlePictureText: function handlePictureText(text) {
        this.setState({ pictureText: text });
    },
    handleAlwaysRandomColor: function handleAlwaysRandomColor() {
        function c() {
            return Math.floor(Math.random() * 256);
        }
        var color = "rgb(" + c() + "," + c() + "," + c() + ")";
        this.setState({ color: color });
        this.handleTextColorChange(color);
    },
    handleCapatalizeText: function handleCapatalizeText() {
        this.setState({ capatalizeText: !this.state.capatalizeText });
    },
    handleTextColorChange: function handleTextColorChange(color) {
        this.setState({ textColor: color });
    },
    handleSpeedChange: function handleSpeedChange(speed) {
        this.setState({ speed: speed });
    },
    handleNumOfImagesChange: function handleNumOfImagesChange(numOfImages) {
        if (numOfImages > 120) {
            this.setState({ numOfImages: 120 });
        } else {
            this.setState({ numOfImages: numOfImages - 1 });
        }
        console.log(this.state.numOfImages);
    },
    toggleAlwaysRandomColor: function toggleAlwaysRandomColor() {
        this.setState({ alwaysRandomColor: !this.state.alwaysRandomColor });
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'gifs-container' },
            React.createElement(GifsViewer, { pictureText: this.state.pictureText,
                textColor: this.state.textColor,
                speed: this.state.speed,
                numOfImages: this.state.numOfImages,
                play: this.state.play,
                cadads: this.state.cadads,
                alwaysRandomColor: this.state.alwaysRandomColor,
                capatalizeText: this.state.capatalizeText,
                handleAlwaysRandomColor: this.handleAlwaysRandomColor }),
            React.createElement(Sidebar, { pictureText: this.state.pictureText,
                textColor: this.state.textColor,
                speed: this.state.speed,
                play: this.state.play,
                numOfImages: this.state.numOfImages,
                toggleAlwaysRandomColor: this.toggleAlwaysRandomColor,
                handleCapatalizeText: this.handleCapatalizeText,
                handlePlayToggle: this.handlePlayToggle,
                handlePictureText: this.handlePictureText,
                handleTextColorChange: this.handleTextColorChange,
                handleSpeedChange: this.handleSpeedChange,
                handleNumOfImagesChange: this.handleNumOfImagesChange })
        );
    }
});

ReactDOM.render(React.createElement(Gifs, null), document.getElementById('gifs'));
//# sourceMappingURL=gifs.js.map
