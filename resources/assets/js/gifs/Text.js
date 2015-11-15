
var Text = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },
    onTextChange: function(e) {
        this.setState({ text: e.target.value });
        this.props.handlePictureText(e.target.value);
    },
    randomLine: function() {
        $.ajax({
            url: '/randommm',
            dataType: 'json',
            success: function(data) {
                this.setState({text: data});
                this.props.handlePictureText(data);
            }.bind(this)
        });
    },
    render: function() {
        return (
            <form className="sidebar--form">
                <div className="sidebar--form__heading">
                    text
                </div>
                <input className="sidebar--form__input" 
                       placeholder={this.props.pictureText} 
                       value={this.state.text}
                       onChange={this.onTextChange} /> 
                <div className="sidebar--form__label sidebar--form__request" 
                       onClick={this.randomLine}>
                            let me get a random mm line
                </div>    

                <div className="sidebar--form__hr sidebar--form__label"></div>

                <input type="checkbox" 
                       id="c2" 
                       onClick={this.props.handleCapatalizeText}/>

                <label className="sidebar--form__label" 
                       for="c2" >
                    <div>
                    </div>
                    <div>
                        CAPS, please.
                    </div>
                </label>
            </form>
        );
    }     
});

Text = Radium(Text);








