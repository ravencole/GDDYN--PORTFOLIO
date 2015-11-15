var docCookies = {
  getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};


var terminalColors = [
    'palevioletred', 'mediumturquoise', 'orange', 'hotpink', 'darkred', 'wheat', 'darkslategrey', 'orangered', 'mintcream', 'darkorchid', 'mediumseagreen', 'salmon', 'lightslategrey', 'rebeccapurple', 'lavender', 'black', 'darkviolet', 'gainsboro', 'slateblue', 'deeppink', 'pink', 'darkslateblue', 'cyan', 'lime', 'blue', 'mediumspringgreen', 'chartreuse', 'mediumslateblue', 'lightsalmon', 'mediumorchid', 'sienna', 'dodgerblue', 'grey', 'aliceblue', 'honeydew', 'goldenrod', 'azure', 'floralwhite', 'lightsteelblue', 'powderblue', 'purple', 'darkolivegreen', 'firebrick', 'midnightblue', 'darkseagreen', 'turquoise', 'darkgreen', 'ghostwhite', 'blanchedalmond', 'coral', 'lavenderblush', 'darkmagenta', 'darksalmon', 'rosybrown', 'lemonchiffon', 'paleturquoise', 'magenta', 'cornsilk', 'brown', 'olivedrab', 'maroon', 'yellowgreen', 'steelblue', 'lightgreen', 'orchid', 'lightcoral', 'cadetblue', 'lightgoldenrodyellow', 'gray', 'darkkhaki', 'fuchsia', 'peachpuff', 'dimgray', 'indianred', 'crimson', 'khaki', 'darkcyan', 'deepskyblue', 'mistyrose', 'royalblue', 'mediumaquamarine', 'mediumvioletred', 'lightgray', 'olive', 'aqua', 'navy', 'peru', 'whitesmoke', 'red', 'lawngreen', 'gold', 'silver', 'lightskyblue', 'forestgreen', 'thistle', 'green', 'tomato', 'beige', 'mediumblue', 'chocolate', 'darkgray', 'dimgray', 'limegreen', 'lightpink', 'burlywood', 'plum', 'oldlace', 'darkturquoise', 'violet', 'skyblue', 'darkgoldenrod', 'snow', 'teal', 'blueviolet', 'ivory', 'saddlebrown', 'palegoldenrod', 'lightgrey', 'darkorange', 'lightcyan', 'yellow', 'linen', 'slategrey', 'bisque', 'papayawhip', 'sandybrown', 'springgreen', 'palegreen', 'lightseagreen', 'lightslategrey', 'darkgrey', 'lightyellow', 'aquamarine', 'seagreen', 'lightblue', 'slategray', 'mediumpurple', 'seashell', 'darkblue', 'tan', 'greenyellow', 'white', 'antiquewhite', 'cornflowerblue', 'navajowhite', 'moccasin', 'indigo' // hell yes i actually typed this out, but I'm sure you'll be happy to know my recovery is going well.
];

var app = app || {};

(function() {

    'use strict';

    app.TerminalModel = function() {};

    app.TerminalModel.prototype.formatTerminalCommand = function(terminalCommand) {
        
        var command = {
                command: null,
                option: null,
                modifier: null
            },
            commandParse = terminalCommand.split(" ");

        command.command = commandParse[0];

        if (commandParse[1]) {
            if (commandParse[1].substring(0,1) == '-') {
                command.modifier = commandParse[1];
            } else {
                command.option = commandParse[1];
            }
        }

        if (commandParse[2]) 
            command.modifier = commandParse[2];
        return command;
    };


    app.TerminalModel.prototype.notAModifier = function(command) {
        return {
            message: true, 
            content: '"' + command.modifier + '" is not a [modifier] of [' + command.command + ']'
        };
    };


    app.TerminalModel.prototype.notAnOption = function(command) {
        return {
            message: true, 
            content: '"' + command.option + '" is not an [option] of command [' + command.command + ']'
        };
    };


    app.TerminalModel.prototype.notACommand = function(command_, previousCommands_, lastCommand_) {
        var command = command_;
        var previousCommands = previousCommands_;
        var lastCommand = lastCommand_;
        var notACommandMessage = '"' + command.command + '" is not a command. A list of commands can be read by calling "help"';
        return {
            terminalPreviousCommands: previousCommands.concat( this.terminalLogCommand(lastCommand), {message: true, content: notACommandMessage})
        };
    };


    app.TerminalModel.prototype.terminalBackgroundColorChange = function(command_, previousCommands_, lastCommand_) {
        var command = command_;
        var previousCommands = previousCommands_;
        var lastCommand = lastCommand_;

        if (!command.option) {
            return { 
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: false, content: 'an [option] must be passed to execute a background-color change. A list of valid colors can be found by executing "style -c".'})
            };
        }
        if (command.option == 'default') {
            docCookies.setItem('terminalBackgroundColor', 'rgba(0,0,0,.5)');
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalBackgroundColor: 'rgba(0,0,0,.5)'
            };
        }
        if (this.isInArray(command.option, terminalColors)) {
            docCookies.setItem('terminalBackgroundColor', command.option.toString());
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalBackgroundColor: command.option
            };
        } else {
            var notAValidColorMessage = '"' + command.option + '" is not a valid color.';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand),{message: true, template: false, content: notAValidColorMessage }, {template: 'validColors',message: true, content: ''})
            };
        }
    };


    app.TerminalModel.prototype.terminalCommandClear = function(command, previousCommands, lastCommand) {
        if (!command.option && !command.modifier) {
            return { 
                terminalPreviousCommands: [],
                terminalPreviousCommandsCount: 0
            };
        }

        if (command.option) {
            return { 
                terminalPreviousCommands: previousCommands.concat( this.terminalLogCommand(lastCommand), {message: true, content: '[clear] does not have any [option]'})
            };
        }

        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h': 
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: 'clearHelp', content: ''})
                    };
                    break;
                default:
                    return { 
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, content: '[clear] does not have any [modifiers]'}) 
                    };
            }
        }
    };


    app.TerminalModel.prototype.terminalCommandHide = function(command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: false, template:'hideHelp', content: ''})
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }
        if (command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAnOption(command))
            };
        }
        docCookies.setItem('terminalHidden', true);
        return {
            terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
            terminalHidden: true
        };
    };

    app.TerminalModel.prototype.terminalCommandClose = function(command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: false, template:'closeHelp', content: ''})
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }
        if (command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAnOption(command))
            };
        }
        docCookies.setItem('terminalClosed', true);
        return {
            terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
            terminalClosed: true
        };
    };


    app.TerminalModel.prototype.terminalCommandGit = function(command, previousCommands, lastCommand) {
        if (!command.option && !command.modifier) {
            window.location = 'https://github.com/ravencole/GDDYN--PORTFOLIO';
        }
        if (command.option) {
            var notAGitCommandOption = '[git] does not accept any options';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: false, content: notAGitCommandOption})
            };
        }
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: false, template: 'gitHelp', content: ''})
                    };
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }
    };


    app.TerminalModel.prototype.terminalCommandGoto = function(command, previousCommands, lastCommand) {
        var routes           = ['home', 'about', 'gifs', 'map'],
            minimizeTerminal = false;

        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: false, template:'gotoHelp', content: ''})
                    };
                    break;
                case '-l':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: false, template:'gotoList', content: ''})
                    };
                    break;
                case '-m':
                    minimizeTerminal = true;
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }
        if (this.isInArray(command.option, routes) && command.option) {
            if (command.option == 'home') {
                window.location.pathname = '/';
                if (minimizeTerminal) {
                    docCookies.setItem('terminalHidden', true);
                    return { terminalHidden: true };
                }
                return;  
            }
            if (minimizeTerminal) {
                docCookies.setItem('terminalHidden', true);
                window.location.pathname = '/' + command.option;
                return { terminalHidden: true };
            }
            window.location.pathname = '/' + command.option;
            return;
        } else {
            if (command.option) {
                var notARouteMessage = '"' + command.option + '" is not a route. You can get a list of routes by calling "goto -l".';
                return { 
                    terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: false, content: notARouteMessage  })
                };
            } else {
                var requiresAnOptionMessage = '[goto] requires that a valid route [option] be passed. You can get a list of routes by calling "goto -l".';
                return { 
                    terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: false, content: requiresAnOptionMessage  })
                };
            }
        }
    };


    app.TerminalModel.prototype.terminalCommandHelp = function(command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h':
                    return { 
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: 'helpHelp', content: ''})
                    };
                    break;
                default: 
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }

        if (command.option) {
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAnOption(command))
            };
        }

        return {
            terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: 'help', content: ''})
        };
    };


    app.TerminalModel.prototype.terminalCommandName = function(command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: 'nameHelp', content: ''})
                    };
                    break;
                case '--uppercase':
                    //fallthrough
                case '-u':
                    command.option = command.option.toUpperCase();
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        }

        if (command.option) {
            docCookies.setItem('terminalUserName', command.option);
            return { 
                terminalUserName: command.option,
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand))
            };
        } else {
            var requiredOptionMessage = '[name] requires that you pass an [option] for your username.';
            return {
               terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: false, content: requiredOptionMessage }) 
            };
        }
    };



    app.TerminalModel.prototype.terminalCommandAbout = function(command, previousCommands, lastCommand, currentPath) {
        if (command.option) {
            var noOptions = 'the [about] command does not accept any options';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {template: false, message: true, content: noOptions}) 
            };
        }
        if (command.modifier) {
            switch (command.modifier) {
                case '--help':
                    //fallthrough
                case '-h':
                    return {
                       terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {template: 'aboutHelp',message: true, content: ''}) 
                    };
                    break;
                case '-p':
                    var formatAboutTemplateName = function(path) {
                        var path = path.charAt(0).toUpperCase() + path.slice(1);
                        return 'about' + path;
                    };
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: formatAboutTemplateName(currentPath), message: true, content: ''}) 
                    };
                    break;
                case '-s':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), { template: 'aboutSite', message: true, content: ''}) 
                    };
                    break;
                default:
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        } else {
           return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {template: false, message: true, content: '[about] requires that a [modifier] be passed.'})
            }; 
        }
    };


    app.TerminalModel.prototype.terminalCommandStyle = function(command, previousCommands, lastCommand) {
        if (command.modifier) {
            switch (command.modifier) {
                case '--background':
                    //fallthrough
                case '-bg':
                    return this.terminalBackgroundColorChange(command, previousCommands, lastCommand);
                    break;
                case '-c':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {template: 'validColors',message: true, content: ''})
                    };
                    break;
                case '--help':
                    //fallthrough
                case '-h':
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {template: 'styleHelp',message: true, content: ''})
                    };
                    break;
                case '--textcolor':
                    //fallthrough
                case '-tc':
                    return this.terminalTextColorChange(command, previousCommands, lastCommand);
                    break;
                default: 
                    return {
                        terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), this.notAModifier(command))
                    };
            }
        } else {
            return {
               terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, content: '[style] requires a valid [modifier]'}) 
            }
        }
    };


    app.TerminalModel.prototype.terminalCommandWatch = function(command, previousCommands, lastCommand) {
        var animations = ['test'];
        if (command.option && this.isInArray(command.option, animations)) {
            var animationTemplate = 'watch' + command.option.substring(0,1).toUpperCase() + command.option.substring(1);
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: animationTemplate, content: ''})
            };
        }
    };


    app.TerminalModel.prototype.terminalLogCommand = function(lastCommand) {
        return { 
            message: false, content: lastCommand 
        };
    };


    app.TerminalModel.prototype.terminalTextColorChange = function(command, previousCommands, lastCommand) {
        if (!command.option) {
            return { 
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand), {message: true, template: false, content: 'an [option] must be passed to execute a text-color change. A list of valid colors can be found by executing "style -c".'})
            };
        }
        if (command.option == 'default') {
            docCookies.setItem('terminalTextColor', '#00ff00');
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalTextColor: '#00ff00'
            };
        }
        if (this.isInArray(command.option, terminalColors)) {
            docCookies.setItem('terminalTextColor', command.option);
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand)),
                terminalTextColor: command.option
            };
        } else {
            var notAValidColorMessage = '"' + command.option + '" is not a valid color.';
            return {
                terminalPreviousCommands: previousCommands.concat(this.terminalLogCommand(lastCommand),{message: true, template: false, content: notAValidColorMessage }, {template: 'validColors',message: true, content: ''})
            };
        }
    };


    app.TerminalModel.prototype.isInArray = function(needle, haystack) {
        var found = false;
        for (var i = haystack.length - 1; i >= 0; i--) {
            if (haystack[i] == needle) {
                found = true;
            }
        };
        return found;
    };


})();









