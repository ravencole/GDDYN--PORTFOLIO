var Play = React.createClass({
    render: function() {
        return (
            <div onClick={this.props.handlePlayToggle} className="sidebar--btn">
                {this.props.play ? 'pause' : 'play'}
            </div>
        );
    } 
});