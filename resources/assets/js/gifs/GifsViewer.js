var GifsViewer = React.createClass({
    getInitialState: function() {
        return {
            imageID: 0,
            currentSpeed: 1000 
        };
    },
    componentDidMount: function() {
        this.imageIteration = setInterval(this.isPlaying, this.props.speed);
    },
    imageChange: function() {
        if (this.state.imageID >= this.props.numOfImages) {
            this.setState({ imageID: 0 });
        } else {
            this.setState({ imageID: this.state.imageID + 1 });
        }
    },
    isPlaying: function() {
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
    render: function() {
        return (
            <div className="gifsviewer">

                <div className="gifsviewer--imagecontainer">

                    <img className="gifsviewer--image" 
                        height="450px" 
                        src={'/images/cadads/'+this.props.cadads[this.state.imageID]} />

                    <GifsText textColor={this.props.textColor} 
                              pictureText={this.props.pictureText}
                              capatalizeText={this.props.capatalizeText} /> 
                </div>
            </div>
        );
    } 
});





