var Speed = React.createClass({
    getInitialState: function() {
        return {
            currentSpeed: ''
        };
    },
    onSpeedChange: function(e) {
        this.setState({ currentSpeed: e.target.value });
        if (e.target.value > 249) {
            this.props.handleSpeedChange(e.target.value);
        }
    },
    render: function() {
        return (
            <div className="sidebar--form">
                <div className="sidebar--form__heading">
                    speed
                </div>
                
                <input className="sidebar--form__input" 
                       placeholder={this.props.speed} 
                       value={this.state.currentSpeed} 
                       onChange={this.onSpeedChange}/>
            </div>
        );
    } 
});