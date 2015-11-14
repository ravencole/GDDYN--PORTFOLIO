var NumberOfImages = React.createClass({
    getInitialState: function() {
        return {
            currentImages: ''
        };
    },
    numOfImagesChange: function(e) {
        this.setState({ currentImages: e.target.value });
        this.props.handleNumOfImagesChange(e.target.value);
    },
    render: function() {
        return (
            <div className="sidebar--form">
            
                <div className="sidebar--form__heading">
                    number of images
                </div>

                <input className="sidebar--form__input"
                       type="number" 
                       min="1" 
                       max="150" 
                       placeholder={this.props.numOfImages} 
                       value={this.state.currentImages} 
                       onChange={this.numOfImagesChange}/>
            </div>
        );
    } 
});