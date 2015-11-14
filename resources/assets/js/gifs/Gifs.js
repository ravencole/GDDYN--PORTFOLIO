var Gifs = React.createClass({
    getInitialState: function() {
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
    componentWillMount: function() {
        $.getJSON( "/cadads", function(data) {
            this.setState({ cadads: data });
        }.bind(this));
    },
    handlePlayToggle: function() {
        this.setState({ play: ! this.state.play });
    },
    handlePictureText: function(text) {
        this.setState({ pictureText: text });
    },
    handleAlwaysRandomColor: function() {
        function c() {
            return Math.floor(Math.random()*256);
        }
        var color = "rgb("+c()+","+c()+","+c()+")";
        this.setState({ color: color });
        this.handleTextColorChange(color);
    },
    handleCapatalizeText: function() {
        this.setState({ capatalizeText: ! this.state.capatalizeText });
    },
    handleTextColorChange: function(color) {
        this.setState({ textColor: color });
    },
    handleSpeedChange: function(speed) {
        this.setState({ speed: speed });
    },
    handleNumOfImagesChange: function(numOfImages) {
        this.setState({ numOfImages: numOfImages - 1});
    },
    toggleAlwaysRandomColor: function() {
        this.setState({ alwaysRandomColor: ! this.state.alwaysRandomColor });
    },
    render: function() {
        return (
            <div className="gifs-container">
                <GifsViewer pictureText             ={this.state.pictureText}
                            textColor               ={this.state.textColor}
                            speed                   ={this.state.speed}
                            numOfImages             ={this.state.numOfImages}
                            play                    ={this.state.play}
                            cadads                  ={this.state.cadads}
                            alwaysRandomColor       ={this.state.alwaysRandomColor}
                            capatalizeText          ={this.state.capatalizeText}
                            handleAlwaysRandomColor = {this.handleAlwaysRandomColor}/>

                <Sidebar    pictureText             ={this.state.pictureText} 
                            textColor               ={this.state.textColor}
                            speed                   ={this.state.speed}
                            play                    ={this.state.play}
                            numOfImages             ={this.state.numOfImages}
                            toggleAlwaysRandomColor ={this.toggleAlwaysRandomColor}
                            handleCapatalizeText    ={this.handleCapatalizeText}
                            handlePlayToggle        ={this.handlePlayToggle} 
                            handlePictureText       ={this.handlePictureText}
                            handleTextColorChange   ={this.handleTextColorChange}
                            handleSpeedChange       ={this.handleSpeedChange}
                            handleNumOfImagesChange ={this.handleNumOfImagesChange} />
            </div>
        );
    } 
});

ReactDOM.render(<Gifs />, document.getElementById('gifs'));
