"use strict";var Intro=React.createClass({displayName:"Intro",getInitialState:function(){return{text:"",count:0,done:!1}},getDefaultProps:function(){return{fullText:"gddynytdtlls.com"}},componentDidMount:function(){this.timer=setInterval(this.handleText,190)},handleText:function(){this.state.count===this.props.fullText.length?(clearInterval(this.timer),this.fadeOut=setInterval(this.handleFadeOut,5e3)):this.setState({text:this.state.text+this.props.fullText.substring(this.state.count,this.state.count+1)+"|",count:this.state.count+1})},handleFadeOut:function(){clearInterval(this.fadeOut),this.setState({done:!0})},render:function(){var t={text:{transition:"all 1000ms ease"},textColor:{opacity:"0"}};return React.createElement("div",{className:"intro--cont"},React.createElement("div",{className:"intro--text",style:[t.text,this.state.done&&t.textColor]},this.state.text),React.createElement("video",{className:"intro__video",loop:!0,muted:!0,autoPlay:!0},React.createElement("source",{src:"/videos/fridge.mp4",type:"video/mp4"})))}});Intro=Radium(Intro),ReactDOM.render(React.createElement(Intro,null),document.getElementById("intro"));