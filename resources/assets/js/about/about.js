var About = React.createClass({
    getInitialState: function() {
        var locations = [];
        var randomLocation = function() {
            return Math.floor(Math.random() * (100 - 1 + 1) + 1).toString() + '%';
        };
        for (var i = 12; i >= 0; i--) {
            locations.push([randomLocation(), randomLocation()]);
        };
        return {
            bubbleLocations: locations 
        };
    },
    componentDidMount: function() {
        this.timer = setInterval(this.randomLocation, 1000);
        this.first = setInterval(this.randomLocation, 100);
    },
    randomLocation: function() {
        clearInterval(this.first);
        var locations = [];
        var randomLocation = function() {
            return Math.floor(Math.random() * (100 - 1 + 1) + 1).toString() + '%';
        };
        for (var i = 33; i >= 0; i--) {
            locations.push([randomLocation(), randomLocation()]);
        };
        this.setState({ bubbleLocations: locations });
    },
    render: function() {
        var bubbles = this.state.bubbleLocations.map(function(location) {
            var styles = {
                bubble: {
                    height: '27px',
                    width: '27px',
                    backgroundColor: 'rgba(255,255,255,.04)',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: location[0],
                    left: location[1],
                    transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }
            };
            return <div style={styles.bubble}></div> 
        });
        var styles = {
            main: {
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url("/images/aboutBG2.jpg")',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                position: 'relative'
            },
            backgroundColors: {
                width: '100%',
                height: '100%',
                position: 'relative',
                flex: '1',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingTop: '95px',
                paddingLeft: '20px',
                background: 'linear-gradient(to right, rgba(255,0,0,.25) 0%,rgba(255,0,255,.25) 100%)'
            },
            menuHeading: {
                color: 'white',
                fontSize: '40px',
                fontFamily: 'helvetica, sans-serif',
                borderBottom: '2px dashed white',
                paddingBottom: '10px'
            },
            contactBox: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateY(-50%) translateX(-50%)',
                height: '55px',
                width: '200px'
            },
            contentWrapper: {
                position: 'relative',
                height: '100%',
                width: '100%',
                textAlign: 'center'
            },
            words: {
                position: 'absolute',
                fontFamily: 'helvetica, sans-serif'
            }
        }
        return (
            <div style={styles.main}>
                <div style={styles.backgroundColors}>
                    <div style={styles.menuHeading}>Raven Cole</div>
                </div>
                {bubbles}
                <div style={styles.contactBox}>
                    <div style={styles.contentWrapper}>
                        <div className="phone" style={[styles.words]}>804.263.5802</div>
                        <div className="email" style={[styles.words]}>ravenscole@gmail.com</div>
                        <div className="activities" style={[styles.words]}>sculpture.words.programming</div>
                        <div className="github" style={[styles.words]}>
                            <a href="http://github.com/ravencole/Portfolio"><img height='30px' src="/images/github.svg" alt="github yall" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
});

About = Radium(About);

ReactDOM.render(<About />, document.getElementById('about'));







