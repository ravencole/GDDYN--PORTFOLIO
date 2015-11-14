var GifsText = React.createClass({
    render: function() {
        var styles = {
            textColor: {
                color: this.props.textColor,
            },
            capatalizeText: {
                textTransform: 'uppercase'
            }
        };
        return (
            <div style={[
                    styles.textColor, 
                    this.props.capatalizeText && styles.capatalizeText
                 ]} 
                 className="gifsviewer--text">
                    {this.props.pictureText}
            </div>
        );
    } 
});

GifsText = Radium(GifsText);