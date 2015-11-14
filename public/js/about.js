"use strict";var About=React.createClass({displayName:"About",getInitialState:function(){for(var t=[],e=function(){return Math.floor(100*Math.random()+1).toString()+"%"},a=12;a>=0;a--)t.push([e(),e()]);return{bubbleLocations:t}},componentDidMount:function(){this.timer=setInterval(this.randomLocation,1e3),this.first=setInterval(this.randomLocation,100)},randomLocation:function t(){clearInterval(this.first);for(var e=[],t=function(){return Math.floor(100*Math.random()+1).toString()+"%"},a=33;a>=0;a--)e.push([t(),t()]);this.setState({bubbleLocations:e})},render:function(){var t=this.state.bubbleLocations.map(function(t){var e={bubble:{height:"27px",width:"27px",backgroundColor:"rgba(255,255,255,.04)",borderRadius:"50%",position:"absolute",top:t[0],left:t[1],transition:"all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)"}};return React.createElement("div",{style:e.bubble})}),e={main:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundImage:'url("/images/aboutBG2.jpg")',backgroundPosition:"center",backgroundAttachment:"fixed",backgroundSize:"cover",position:"relative"},backgroundColors:{width:"100%",height:"100%",position:"relative",flex:"1",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",paddingTop:"95px",paddingLeft:"20px",background:"linear-gradient(to right, rgba(255,0,0,.25) 0%,rgba(255,0,255,.25) 100%)"},menuHeading:{color:"white",fontSize:"40px",fontFamily:"helvetica, sans-serif",borderBottom:"2px dashed white",paddingBottom:"10px"},contactBox:{position:"absolute",top:"50%",left:"50%",transform:"translateY(-50%) translateX(-50%)",height:"55px",width:"200px"},contentWrapper:{position:"relative",height:"100%",width:"100%",textAlign:"center"},words:{position:"absolute",fontFamily:"helvetica, sans-serif"}};return React.createElement("div",{style:e.main},React.createElement("div",{style:e.backgroundColors},React.createElement("div",{style:e.menuHeading},"Raven Cole")),t,React.createElement("div",{style:e.contactBox},React.createElement("div",{style:e.contentWrapper},React.createElement("div",{className:"phone",style:[e.words]},"804.263.5802"),React.createElement("div",{className:"email",style:[e.words]},"ravenscole@gmail.com"),React.createElement("div",{className:"activities",style:[e.words]},"sculpture.words.programming"),React.createElement("div",{className:"github",style:[e.words]},React.createElement("a",{href:"http://github.com/ravencole/Portfolio"},React.createElement("img",{height:"30px",src:"/images/github.svg",alt:"github yall"}))))))}});About=Radium(About),ReactDOM.render(React.createElement(About,null),document.getElementById("about"));