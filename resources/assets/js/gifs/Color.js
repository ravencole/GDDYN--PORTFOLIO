var Color = React.createClass({
    getInitialState: function() {
        return {
            color: ''
        };
    },
    colorChange: function(e) {
        this.setState({ color: e.target.value });
        this.props.handleTextColorChange(e.target.value);
    },
    handleRandomColor: function() {
        function c() {
            return Math.floor(Math.random()*256);
        }
        var color = "rgb("+c()+","+c()+","+c()+")";
        this.setState({ color: color });
        this.props.handleTextColorChange(color);
    },
    render: function() {
        return (
            <div className="sidebar--form">
                <div className="sidebar--form__heading">color</div>

                <input className="sidebar--form__input" 
                       placeholder={this.props.textColor} 
                       value={this.state.color} 
                       onChange={this.colorChange}/>

                <div className="sidebar--form__label sidebar--form__request" 
                     onClick={this.handleRandomColor}>
                        also, im gonna need a random color.
                </div>

                <div className="sidebar--form__hr sidebar--form__label"></div>

                <input type="checkbox" 
                       id="c1" 
                       onClick={this.props.toggleAlwaysRandomColor}/>

                <label className="sidebar--form__label" 
                       for="c1" >
                    <div>
                    </div>
                    <div>
                        no, like evey time.
                    </div>
                </label>
            </div>
        );
    } 
});
