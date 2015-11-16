var app = app || {};

(function() {

    'use strict';

    app.TerminalTemplateModel = function() {};

    app.TerminalTemplateModel.prototype.clearHelp = function() {
        var styles = {
            clear: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            clearHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            clearBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return (
            <div style={styles.clear}>
                <div style={styles.heading}>
                    <div style={styles.clearHeading}>Clear:</div>
                </div>
                <div style={styles.clearBody}>
                    <div style={styles.bodyElements}>
                        the [clear] command is going to clear your command and message history from the terminal.
                    </div>
                    <div style={styles.bodyElements}>
                        other than the default [-h]/[--help] modifiers, [clear] accepts no [options] or [modifiers].
                    </div>
                    <div>
                        syntax: [clear] eg. clear
                    </div>
                </div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.aboutAbout = function() {
        var styles = {
            aboutAbout: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            aboutAboutHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            aboutAboutBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '0px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.aboutAbout}>
                <div style={styles.aboutAboutBody}>
                    <div style={styles.bodyElements}>
                        {"<----about---->"}
                    </div> 
                    <img height='350px' src='/images/metaPug.jpg' />
                    <div style={styles.bodyElements}>
                        as far as reading about the about page,
                    </div> 
                    <div style={styles.bodyElements}>
                        it isn't a lot different than this.
                    </div> 
                </div>
            </div>
        );//'
    };


    app.TerminalTemplateModel.prototype.aboutHome = function() {
        var styles = {
            aboutHome: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0',
                overflow: 'scroll'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutHomeHeading: {
                color: 'white'
            },
            aboutHomeBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.aboutHome}>
                <div style={styles.aboutHomeBody}>
                    <div style={styles.bodyElements}>
                        {"<----home---->"}
                    </div>
                    <div style={styles.bodyElements}>
                        There isn't much to say about the home page except to explain the video.
                    </div>
                    <div style={styles.bodyElements}>
                        Clearly, we've got some images of food stuffs in a refridgerator.
                    </div>
                    <div style={styles.bodyElements}>
                        I made it as a place holder for another video I had going.
                    </div>
                    <div style={styles.bodyElements}>
                        It was of a sculpture I made that hangs on the wall as though it’s a shelving unit.
                    </div>
                    <div style={styles.bodyElements}>
                        A hand is setting objects on it. Taking them back off. 
                    </div>
                    <div style={styles.bodyElements}>
                        Some normal attempt to put in motion a static structure.
                    </div>
                    <div style={styles.bodyElements}>
                        It was horrendous and lame. 
                    </div>
                    <div style={styles.bodyElements}>
                        I made a few more, and nothing felt good like the fridge video.
                    </div>
                    <div style={styles.bodyElements}>
                        I’m having some anxiety that the fridge video feels lazy, 
                    </div>
                    <div style={styles.bodyElements}>
                        even though I enjoy watching it. 
                    </div>
                    <div style={styles.bodyElements}>
                        It’s only a minor texture on the site, so I’ve kept it for now.
                    </div>
                    <div style={styles.bodyElements}>
                        The next attempt will probably be a video of my car I’ve been
                    </div>
                    <div style={styles.bodyElements}>
                        meaning to make for a while.
                    </div>
                </div>
            </div>
        );//'
    };


    app.TerminalTemplateModel.prototype.aboutGifs = function() {
        var styles = {
            aboutGifs: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutGifsHeading: {
                color: 'white'
            },
            aboutGifsBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.aboutGifs}>
                <div style={styles.aboutGifsBody}>
                    <div style={styles.bodyElements}>
                        {"<----contemporary art gifs---->"}
                    </div>
                    <div style={styles.bodyElements}>
                        the gif maker comes from a strong impulse I have to joke on
                    </div>
                    <div style={styles.bodyElements}>
                        contemporary art daily.
                    </div>
                    <div style={styles.bodyElements}>
                        It’s a blog that posts aesthetically specific contemporary art works.
                    </div>
                    <div style={styles.bodyElements}>
                        The problem though is that its become an incredibly prominent 
                    </div>
                    <div style={styles.bodyElements}>
                        taste maker in contemporary art.
                    </div>
                    <div style={styles.bodyElements}>
                        Especially with young artists who are looking for work to consume.
                    </div>
                    <div style={styles.bodyElements}>
                        Which, in and of itself, isn’t cause for offense, but as the influence of the
                    </div>
                    <div style={styles.bodyElements}>
                        blog grows, so does the crop of people making work for the purpose of fitting
                    </div>
                    <div style={styles.bodyElements}>
                        into the mold that the site has created.
                    </div>
                    <div style={styles.bodyElements}>
                        And at this point we still haven’t arrived at anything to be overly upset about.
                    </div>
                    <div style={styles.bodyElements}>
                        Of course this happens. 
                    </div>
                    <div style={styles.bodyElements}>
                        The problem is that the more this formula is implemented, the more soulless the work
                    </div>
                    <div style={styles.bodyElements}>
                        becomes in an effort to conform to the aesthetic contact that the site operates on.
                    </div>
                    <div style={styles.bodyElements}>
                        This contract has become rigid and overworked to the point that
                    </div>
                    <div style={styles.bodyElements}>
                        images of the work actually make great templates for close to anything.
                    </div>
                    <div style={styles.bodyElements}>
                        They’re consistent,
                    </div>
                    <div style={styles.bodyElements}>
                        reliable, 
                    </div>
                    <div style={styles.bodyElements}>
                        and take language hilariously. 
                    </div>
                    <div style={styles.bodyElements}>
                        But as an addendum to all of this, I also don’t want to come off as another
                    </div>
                    <div style={styles.bodyElements}>
                        contemporary art hater.
                    </div>
                    <div style={styles.bodyElements}>
                        There’s a lot of important work in the world that I love,
                    </div>
                    <div style={styles.bodyElements}>
                        it’s just that I can’t tolerate work that at its core is an effort to fit in,
                    </div>
                    <div>
                        and/or rake in money from an over-inflated art market. 
                    </div>
                </div>
            </div>
        );//'
    };


    app.TerminalTemplateModel.prototype.aboutSite = function() {
       var styles = {
            aboutGifs: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutGifsHeading: {
                color: 'white'
            },
            aboutGifsBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.aboutGifs}>
                <div style={styles.aboutGifsBody}>
                    <div style={styles.bodyElements}>
                        {"<------ Site ------->"}
                    </div>
                    <div style={styles.bodyElements}>
                        In its current form, this site is a web portfolio, but it's likely to lose and take on roles at later dates.
                    </div>
                    <div style={styles.bodyElements}>
                        It’s built mostly with React, running with a Laravel backend.
                    </div>
                    <div style={styles.bodyElements}>
                        Certainly this doesn’t need to be a Laravel App to do what it’s doing now.
                    </div>
                    <div style={styles.bodyElements}>
                        Laravel is around with future projects in mind. 
                    </div>
                    <div style={styles.bodyElements}>
                        The Terminal code — while working fine for me ATM — is a mess. 
                    </div>
                    <div style={styles.bodyElements}>
                        DRY is hysterical to think about when looking at the source.
                    </div>
                    <div style={styles.bodyElements}>
                        It isn’t even almost, a little, or at all.
                    </div>
                    <div style={styles.bodyElements}>
                        It needs unit-testing, and is painfully existing without an adequate templating system.
                    </div>
                    <div style={styles.bodyElements}>
                        It is also completely running on React,
                    </div>
                    <div style={styles.bodyElements}>
                        so unless it’s running on a single page app, or the entire site is running as a React app,
                    </div>
                    <div style={styles.bodyElements}>
                        which this one isn’t, it’s hacky to implement site-wide.
                    </div>
                    <div style={styles.bodyElements}>
                        The Terminal is being completely rewritten so that it runs essentially like a small MVC.
                    </div>
                    <div style={styles.bodyElements}>
                        All the code will be running behind a small, but extendable API.
                    </div>
                    <div style={styles.bodyElements}>
                        Which, in a deeply messy way, is how it runs now.
                    </div>
                    <div style={styles.bodyElements}>
                        I’ll release a version based on React, and then likely a dependency-less vanilla JS version.
                    </div>
                    <div style={styles.bodyElements}>
                        Once those are done, it’ll just replace the terminal on the site here. 
                    </div>
                    <div style={styles.bodyElements}>
                        All said though, I’ve had a lot of fun with the Terminal.
                    </div>
                    <div style={styles.bodyElements}>
                        The source for the site and more writing about the project is on the GitHub page.
                    </div>
                    <div style={styles.bodyElements}>
                        There’s a link to it on the about page, or you can run the ‘git’ command in the
                    </div>
                    <div>
                        terminal, and you’ll be redirected to GitHub.
                    </div>
                </div>
            </div>
        );//' 
    };


    app.TerminalTemplateModel.prototype.aboutMap = function() {
        var styles = {
            aboutGifs: {
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '10px 0 5px 0'
            },
            heading: {
                height: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '0'
            },
            aboutGifsHeading: {
                color: 'white'
            },
            aboutGifsBody: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.aboutGifs}>
                <div style={styles.aboutGifsBody}>
                    <div style={styles.bodyElements}>
                        {"<----map---->"}
                    </div>
                    <div style={styles.bodyElements}>
                        There isn’t much to the code here.
                    </div>
                    <div style={styles.bodyElements}>
                        Simple google maps API thing.
                    </div>
                    <div style={styles.bodyElements}>
                        The backend for it is slightly cooler.
                    </div>
                    <div style={styles.bodyElements}>
                        It grabs the meta-data from the pictures I upload and plots them on the map.
                    </div>
                    <div style={styles.bodyElements}>
                        Still not too terribly interesting, but it’s one of the first things I made when I
                    </div>
                    <div style={styles.bodyElements}>
                        started programming.
                    </div>
                    <div style={styles.bodyElements}>
                        I was spending all of my time working in cabinet shops in Richmond, VA. after I
                    </div>
                    <div style={styles.bodyElements}>
                        graduated from VCU, and was feeling like I couldn’t put time in at the studio
                    </div>
                    <div style={styles.bodyElements}>
                        like I wanted to.
                    </div>
                    <div style={styles.bodyElements}>
                        I was preparing for a show with a friend at the time, and wanted to make something
                    </div>
                    <div style={styles.bodyElements}>
                        that would help me feel connected to my studio practice while I was at work.
                    </div>
                    <div style={styles.bodyElements}>
                        I ended up learning some PHP so that I could send text messages to a server and have
                    </div>
                    <div style={styles.bodyElements}>
                        them displayed in real time on a sculpture I was working on. 
                    </div>
                    <div style={styles.bodyElements}>
                        The code I ended up writing for it is hysterical now. 
                    </div>
                    <div style={styles.bodyElements}>
                        I was sending text messages to an email server that would then parse them
                    </div>
                    <div style={styles.bodyElements}>
                        and add them to a webpage. 
                    </div>
                    <div style={styles.bodyElements}>
                        The idea was kind of interesting, but all the code is procedural PHP written by someone
                    </div>
                    <div style={styles.bodyElements}>
                        who knows nothing about programming. Like 400 lines of in-line PHP in the center
                    </div>
                    <div style={styles.bodyElements}>
                        of an HTML page all Wild-West style.
                    </div>
                    <div style={styles.bodyElements}>
                        I made the map app shortly after that with the same ideas in mind. 
                    </div>
                    <div style={styles.bodyElements}>
                        It’s clunky and the UI is pretty bad, but I like the project.
                    </div>
                    <div>
                        I should just go ahead and rewrite it. 
                    </div>
                </div>
            </div>
        );//'
    };


    app.TerminalTemplateModel.prototype.closeHelp = function() {
        var styles = {
            close: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            closeHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            closeBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return (
            <div style={styles.close}>
                <div style={styles.heading}>
                    <div style={styles.closeHeading}>Close:</div>
                </div>
                <div style={styles.closeBody}>
                    <div style={styles.bodyElements}>
                        the [close] command is going to close the Terminal. It can be brought back by pressing the 't' key on your keyboard. it performs the same action as clicking the red button on the terminal toolbar.
                    </div>
                    <div style={styles.bodyElements}>
                        other than the default [-h]/[--help] modifiers, [close] accepts no [options] or [modifiers]
                    </div>
                    <div>
                        syntax: [close] eg. close
                    </div>
                </div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.aboutHelp = function() {
        var styles = {
            about: {
                height: '215px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            aboutHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            aboutBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.about}>
                <div style={styles.heading}>
                    <div style={styles.aboutHeading}>About:</div>
                </div>
                <div style={styles.aboutBody}>
                    <div style={styles.bodyElements}>
                        the [about] command will tell you information about either the page you're currently on or the site as a whole, depending on the [modifier] that is passed.
                    </div>
                    <div style={styles.bodyElements}>
                        [about] accepts no [options].
                    </div>
                    <div style={styles.bodyElements}>
                        with the exception of [-h]/[--help], [about] accepts two modifiers:
                    </div>
                    <div style={[styles.bodyElements, styles.indent, { marginTop: '10px' }]}>
                        [-p]: displays information about the page you are currently on.
                    </div>
                    <div style={[styles.bodyElements, styles.indent, { marginBottom: '15px' }]}>
                        [-s]: displays information about the entire site.
                    </div>
                    <div>
                        syntax: [about] [modifier] eg. about -p 
                    </div>
                </div>
            </div>
        );//'
    };


    app.TerminalTemplateModel.prototype.gitHelp = function() {
        var styles = {
            gitHelp: {
                height: '125px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            gitHelpHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            gitHelpBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.gitHelp}>
                <div style={styles.heading}>
                    <div style={styles.gitHelpHeading}>Git:</div>
                </div>
                <div style={styles.gitHelpBody}>
                    <div style={styles.bodyElements}>
                        the [git] command will leave gddynytdtlls.com and redirect to the source code hosted on GitHub.
                    </div>
                    <div style={styles.bodyElements}>
                         with the exception of [-h]/[--help], [git] accepts no [modifier]s or [option]s.
                    </div>
                    <div>
                        syntax: [git] eg. git
                    </div>
                </div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.gotoHelp = function() {
        var styles = {
            goto: {
                height: '170px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            gotoHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            gotoBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.goto}>
                <div style={styles.heading}>
                    <div style={styles.gotoHeading}>Goto:</div>
                </div>
                <div style={styles.gotoBody}>
                    <div style={styles.bodyElements}>
                        the [goto] command is used to navigate to other pages on the site via the terminal.
                    </div>
                    <div style={styles.bodyElements}>
                        with the exception of [-h]/[--help], [goto] accepts two modifiers, [-l] and [-m].
                    </div>
                    <div style={[styles.bodyElements, styles.indent, { marginTop: '10px' }]}>
                        [-l]: displays a list of all avaliable routes.
                    </div>
                    <div style={[styles.bodyElements, styles.indent, { marginBottom: '15px' }]}>
                        [-m]: opens the new webpage with the terminal minimized.
                    </div>
                    <div>
                        syntax: [goto] [option] [modifier] eg. goto gifs -m 
                    </div>
                </div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.gotoList = function() {
        var styles = {
            goto: {
                height: '140px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            gotoHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            gotoBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '25px'
            }
        };
        return (
            <div style={styles.goto}>
                <div style={styles.heading}>
                    <div style={styles.gotoHeading}>Route List:</div>
                </div>
                <div style={styles.gotoBody}>
                    <div style={[styles.bodyElements, styles.indent]}>
                        about - contact info and me at the gallery or club ---------------------
                    </div>
                    <div style={[styles.bodyElements, styles.indent]}>
                        gifs -- make some contemporary art gifs --------------------------------
                    </div>
                    <div style={[styles.bodyElements, styles.indent]}>
                        home -- really there isn't much here except the intro video ------------
                    </div>
                    <div style={[styles.bodyElements, styles.indent]}>
                        map --- look at photographs with their coordinates plotted on a map ----
                    </div>
                </div>
            </div>
        );
        //'
    };



    app.TerminalTemplateModel.prototype.helpHelp = function() {
        var styles = {
            help: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            helpHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            helpBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return (
            <div style={styles.help}>
                <div style={styles.heading}>
                    <div style={styles.helpHeading}>Help:</div>
                </div>
                <div style={styles.helpBody}>
                    <div style={styles.bodyElements}>
                        the [help] command is going to give you a directory of commands you can call.
                    </div>
                    <div style={styles.bodyElements}>
                        other than the default [-h]/[--help] modifiers, [help] accepts no [options] or [modifiers]
                    </div>
                    <div>
                        syntax: [help] eg. help
                    </div>
                </div>
            </div>
        );
    }


    app.TerminalTemplateModel.prototype.nameHelp = function() {
        var styles = {
            name: {
                height: '160px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            nameHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            nameBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.name}>
                <div style={styles.heading}>
                    <div style={styles.nameHeading}>Name:</div>
                </div>
                <div style={styles.nameBody}>
                    <div style={styles.bodyElements}>
                        the [name] command is used to set your username. (NO SPACES ALLOWED).
                    </div>
                    <div style={styles.bodyElements}>
                        with the exception of [-h]/[--help], [name] accepts one modifier:
                    </div>
                    <div style={[styles.bodyElements, styles.indent, { marginTop: '10px', marginBottom: '15px' }]}>
                        [-u]: transforms the [option] you pass for your username to CAPS.
                    </div>
                    <div>
                        syntax: [name] [option] [modifier] eg. name free_willy_free$tyle -u
                    </div>
                </div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.hideHelp = function() {
        var styles = {
            hide: {
                height: '130px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: '5px 0'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            hideHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            hideBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            }
        };
        return (
            <div style={styles.hide}>
                <div style={styles.heading}>
                    <div style={styles.hideHeading}>Hide:</div>
                </div>
                <div style={styles.hideBody}>
                    <div style={styles.bodyElements}>
                        the [hide] command is going to minimize the Terminal. It does the same thing as clicking the yellow button on the terminal toolbar. You can expand the terminal by clicking the green button on the terminal toolbar, or my pressing the 'm' key on your keyboard.
                    </div>
                    <div style={styles.bodyElements}>
                        other than the default [-h]/[--help] modifiers, [hide] accepts no [options] or [modifiers]
                    </div>
                    <div>
                        syntax: [hide] eg. hide
                    </div>
                </div>
            </div>
        );
    };



    app.TerminalTemplateModel.prototype.help = function() {
        var styles = {
            helpContainer: {
                height: '315px',
                marginTop: '10px',
                marginBottom: '5px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column'
            },
            helpHeading: {
                height: '20%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                letterSpacing: '.5em'
            },
            helpHeadingText: {
                padding: '0px .5em',
                border: '5px dotted #00ff00'
            },
            helpBody: {
                height: '80%',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            helpBodySection: {
                height: '100%',
                flex: '1'
            },
            commandsHeading: {
               
            },
            commandsList: {
                flex: '1',
                boxSizing: 'border-box',
                paddingLeft: '130px',
                marginBottom: '5px'
            },
            commandsListText: {
                color: 'white',
                backgroundColor: 'deeppink',
                padding: '0 30px 0 0'
            },
            infoSection: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingRight: '60px',
                boxSizing: 'border-box'
            }
        }
        return (
            <div style={styles.helpContainer}>
                <div style={styles.helpHeading}>
                    <div style={styles.helpHeadingText}>HELP MEN<span style={{ letterSpacing: '0' }}>U</span></div>
                </div>
                <div style={styles.helpBody}>
                    <div style={[styles.helpBodySection]}>
                        <div style={styles.commandsHeading}>List of Commands:</div>
                        <div style={styles.commandsList}>about --- [-s][-p] -------------</div>
                        <div style={styles.commandsList}>clear --- [no modifiers] -------</div>
                        <div style={styles.commandsList}>close --- [no modifiers] -------</div>
                        <div style={styles.commandsList}>git ----- [no modifiers] -------</div>
                        <div style={styles.commandsList}>goto ---- [-l][-m] -------------</div>
                        <div style={styles.commandsList}>help ---- [no modifiers] -------</div>
                        <div style={styles.commandsList}>hide ---- [no modifiers] -------</div>
                        <div style={styles.commandsList}>name ---- [-u] -----------------</div>
                        <div style={styles.commandsList}>style --- [-tc][-c][-bg] -------</div>
                        <div style={styles.commandsList}>in addition to these [modifiers], all commands have a help menu that can be accessed by passing the [-h] or [--help] modifier</div>
                    </div>
                </div>
            </div>
        ); 
    };


    app.TerminalTemplateModel.prototype.styleHelp = function() {
        var styles = {
            styleHelp: {
                height: '230px',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '5px'
            },
            heading: {
                height: '40px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            styleHelpHeading: {
                fontSize: '30px',
                padding: '5px'
            },
            styleHelpBody: {
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column'
            },
            bodyElements: {
                marginBottom: '5px'
            },
            indent: {
                paddingLeft: '10px'
            }
        };
        return (
            <div style={styles.styleHelp}>
                <div style={styles.heading}>
                    <div style={styles.styleHelpHeading}>Style:</div>
                </div>
                <div style={styles.styleHelpBody}>
                    <div style={styles.bodyElements}>
                        the [style] command is used to customize the look of your terminal.
                    </div>
                    <div style={styles.bodyElements}>
                        with the exception of [-h]/[--help], [style] accepts three modifiers:
                    </div>
                    <div style={[styles.bodyElements, styles.indent, { marginTop: '10px' }]}>
                        [-bg]: allows you to change the background color of the terminal.
                    </div>
                    <div style={[styles.bodyElements, styles.indent]}>
                        [-c]: opens a list of valid colors. In addition to the colors on the list, both [-bg] and [-tc] can be passed the 'default' [option],
                        which will render a low opacity black for [-bg], and #00ff00 for [-tc].
                    </div>
                    <div style={[styles.bodyElements, styles.indent, { marginBottom: '15px' }]}>
                        [-tc]: allows you to change the font color of the terminal.
                    </div>
                    <div>
                        syntax: [style] [option] [modifier] eg. style deeppink -bg
                    </div>
                </div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.validColors = function() {
        var displayTerminalColors = terminalColors.map(function(color) {
            if (color === 'indigo') {
                return <span style={{color: color}}><span style={{ color: '#00ff00' }}>and{ " " }</span>{color}</span>;
            }
            return <span><span style={{color: color}}>{color}</span>,{ " " }</span>;
        });
        var styles = {
            colorsContainer: {
                height: '335px',
                width: '100%'
            },
            colorsHeader: {
                height: '60px',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                boxSizing: 'border-box',
                fontSize: '30px'
            },
            colorsBody: {
                width: '100%',
                paddingLeft: '20px',
                boxSizing: 'border-box'
            }
        };
        return (
            <div style={styles.colorsContainer}>
                <div style={styles.colorsHeader}>
                    List of Colors:
                </div>
                <div style={styles.colorsBody}>
                    {displayTerminalColors}
                </div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.watchTest = function() {
        var styles = {
            test: {
                height: '95%',
                width: '100%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            },
            bubble: {
                position: 'absolute',
                height: '80px',
                width: '80px',
                top: '50%',
                left: '50%',
                transition: 'all 1s ease',
                border: '1px solid rgba(255,255,255,.5)',
                boxShadow: 'inset 0 0 12px rgba(255,255,255,.5)',
                borderRadius: '50%'
            }
        };
        return (
            <div style={styles.test}>
                <div style={styles.bubble}></div>
            </div>
        );
    };


    app.TerminalTemplateModel.prototype.welcome = function() {
        var styles = {
            welcomeContainer: {
                height: '96%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
                paddingTop: '10px',
                boxSizing: 'border-box'
            },
            welcomeHeading: {
                height: '13%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            welcomeHeadingText: {
                fontSize: '40px',
                color: 'white'
            },
            welcomeBody: {
                height: '87%',
                width: '100%',
                boxSizing: 'border-box'
            },
            welcomeBodyElement: {
                marginLeft: '20px',
                marginBottom: '5px'
            }
        }
        return (
            <div style={styles.welcomeContainer}>
                <div style={styles.welcomeHeading}>
                    <div style={styles.welcomeHeadingText}>Welcome</div>
                </div>
                <div style={styles.welcomeBody}>
                    <div style={{marginBottom: '11px'}}>this is the gddynytdtlls.com <span style={{color: 'white'}}><i>Terminal</i></span>.</div>
                    <div style={styles.welcomeBodyElement}>the terminal can be used for <span style={{color: 'white'}}>navigating</span> through the site,</div>
                    <div style={styles.welcomeBodyElement}><span style={{color: 'white'}}>reading</span> about the different pages,</div>
                    <div style={styles.welcomeBodyElement}>and <span style={{color: 'white'}}>watching</span> animations.</div>
                    <div style={styles.welcomeBodyElement}>the terminal can also be <span style={{color: 'white'}}>styled</span>,</div>
                    <div style={styles.welcomeBodyElement}><span style={{color: 'white'}}>minimized</span>, <span style={{color: 'white'}}>closed</span>, and</div>
                    <div style={styles.welcomeBodyElement}>have a set <span style={{color: 'white'}}>username</span>.</div>
                    <div style={styles.welcomeBodyElement}>However, it's just the vegan gravy on the tofurkey:</div>
                    <div style={styles.welcomeBodyElement}>great that it's here, but what needs to happen</div>
                    <div style={styles.welcomeBodyElement}>can happen without it.</div>
                    <div style={styles.welcomeBodyElement}>You can <span style={{color: 'white'}}>minimize</span> the terminal by clicking the <span style={{color: 'white'}}>yellow button</span></div>
                    <div style={styles.welcomeBodyElement}>on the terminal toolbar, and operate the site like any</div>
                    <div style={styles.welcomeBodyElement}>other site. there's a dropdown nav up top.</div>
                    <div style={styles.welcomeBodyElement}>otherwise, <span style={{color: 'white'}}>type 'help'</span></div>
                    <div style={styles.welcomeBodyElement}>to see a <span style={{color: 'white'}}>list</span> of</div>
                    <div style={styles.welcomeBodyElement}><span style={{color: 'white'}}>commands</span>.</div>
                </div>
            </div>
        );//'
    };

})();





















