
var Sidebar = React.createClass({
    getInitialState: function() {
        return {
            sidebarVisible: true,
        };
    },
    toggleSidebar: function() {
        this.setState({ sidebarVisible: ! this.state.sidebarVisible });
    },
    render: function() {
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
            sidebarVisibility = <HideSidebar toggleSidebar={this.toggleSidebar} />;
        } else {
            sidebarVisibility = <ShowSidebar toggleSidebar={this.toggleSidebar} />;
        }

        return (
            <div style={[this.state.sidebarVisible ? sidebarOpen : sidebarClosed, ! this.state.sidebarVisible && styles.sidebarNotVisible]} className="sidebar">
                {sidebarVisibility}
                <div className="sidebar--container" style={[! this.state.sidebarVisible && styles.visible]}>
                    <div className="sidebar--header">
                        contemporary art gifs
                    </div>
                    <Play 
                        play={this.props.play} 
                        handlePlayToggle={this.props.handlePlayToggle} />
                    <Speed 
                        speed={this.props.speed}
                        handleSpeedChange={this.props.handleSpeedChange} />
                    <Text 
                        pictureText={this.props.pictureText}
                        capatalizeText={this.props.capatalizeText}
                        handlePictureText={this.props.handlePictureText} 
                        handleCapatalizeText={this.props.handleCapatalizeText}/>
                    <Color 
                        play={this.props.play} 
                        textColor={this.props.textColor}
                        handleTextColorChange={this.props.handleTextColorChange}
                        toggleAlwaysRandomColor={this.props.toggleAlwaysRandomColor} />
                    <NumberOfImages 
                        numOfImages={this.props.numOfImages} 
                        handleNumOfImagesChange={this.props.handleNumOfImagesChange} />
                </div>
            </div>
        );
    } 
});

// <Submit />

Sidebar = Radium(Sidebar);







