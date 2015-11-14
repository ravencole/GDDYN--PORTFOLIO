var ShowSidebar = React.createClass({
    render: function() {
        return (
            <div onClick={this.props.toggleSidebar} className="sidebar--hide">
                <div className="sidebar--hide__arrow"></div>
            </div>
        );
    } 
});
var HideSidebar = React.createClass({
    render: function() {
        return (
            <div onClick={this.props.toggleSidebar} className="sidebar--hide">
                <div className="sidebar--hide__x"></div>
                <div className="sidebar--hide__x"></div>
            </div>
        );
    } 
});