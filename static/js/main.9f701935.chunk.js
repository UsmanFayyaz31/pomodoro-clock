(window["webpackJsonppomodoro-clock"]=window["webpackJsonppomodoro-clock"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/beep.006ba76b.mp3"},12:function(e,t,n){},20:function(e,t,n){e.exports=n(46)},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(18),r=n.n(i),c=(n(25),n(3)),o=n(4),h=n(6),p=n(5),m=n(1),b=n(7),l=(n(12),n(2)),d=n(10),u=n.n(d),g={type:"PAUSE",min:25,sec:0,sLength:25,bLength:5},L=function(e){return"START"===e?{type:"START"}:"PAUSE"===e?{type:"PAUSE"}:"RESET"===e?{type:"RESET"}:"sessionIncrement"===e.type?{type:"sessionIncrement",min:e.min,bLength:e.bLength,sLength:e.sLength}:"sessionDecrement"===e.type?{type:"sessionDecrement",min:e.min,bLength:e.bLength,sLength:e.sLength}:"breakIncrement"===e.type?{type:"breakIncrement",bLength:e.bLength,sLength:e.sLength}:"breakDecrement"===e.type?{type:"breakDecrement",bLength:e.bLength,sLength:e.sLength}:"UPDATE"===e.type?{type:"UPDATE",min:e.min,sec:e.sec}:void 0},k=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"START":return{type:"START",min:t.min,sec:t.sec,sLength:t.sLength,bLength:t.bLength};case"PAUSE":return clearInterval(e),{type:"PAUSE",min:t.min,sec:t.sec,sLength:t.sLength,bLength:t.bLength};case"RESET":return{type:"RESET",min:25,sec:0,sLength:25,bLength:5};case"sessionIncrement":case"sessionDecrement":return{type:"PAUSE",min:n.min,sec:0,sLength:n.sLength,bLength:n.bLength};case"breakIncrement":case"breakDecrement":return{type:"PAUSE",min:t.min,sec:t.sec,sLength:n.sLength,bLength:n.bLength};case"UPDATE":return{type:"START",min:n.min,sec:n.sec,sLength:t.sLength,bLength:t.bLength};default:return t}},E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={min:n.props.data.min,sec:n.props.data.sec,isBreak:!1,timer:null},n.start=n.start.bind(Object(m.a)(n)),n.pause=n.pause.bind(Object(m.a)(n)),n.stop=n.stop.bind(Object(m.a)(n)),n.tick=n.tick.bind(Object(m.a)(n)),n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"tick",value:function(){var e=parseInt(this.state.min,10),t=parseInt(this.state.sec,10),n=parseInt(this.props.data.bLength,10);return 0!==e||0!==t||this.state.isBreak?0===e&&0===t&&this.state.isBreak?(new Audio(u.a).play(),this.setState({isBreak:!1,min:this.props.data.sLength}),void this.props.timerStates({type:"UPDATE",min:n,sec:0})):(0===t?(e--,t=59):t--,this.props.timerStates({type:"UPDATE",min:e,sec:t}),void this.setState({min:e,sec:t})):(new Audio(u.a).play(),this.setState({isBreak:!0,min:n}),void this.props.timerStates({type:"UPDATE",min:n,sec:0}))}},{key:"start",value:function(){if(null===this.state.timer){this.props.timerStates("START");var e=setInterval(this.tick,200);this.setState({min:this.props.data.min,sec:this.props.data.sec,timer:e})}}},{key:"pause",value:function(){this.props.timerStates("PAUSE"),clearInterval(this.state.timer),this.setState({timer:null})}},{key:"stop",value:function(){this.props.timerStates("RESET"),clearInterval(this.state.timer),this.setState({timer:null,isBreak:!1})}},{key:"render",value:function(){return a.a.createElement("div",{id:"timerBody"},a.a.createElement("h3",{id:"timer-label"},this.state.isBreak?"Break":"Session"),a.a.createElement("div",{id:"timer-container"},a.a.createElement("h1",{className:"timer",id:"mins"},this.props.data.min),a.a.createElement("h1",{className:"timer"}," : "),a.a.createElement("h1",{className:"timer",id:"sec"},this.props.data.sec)),a.a.createElement("div",{id:"button-container"},a.a.createElement("button",{id:"start",onClick:this.start},"start"),a.a.createElement("button",{id:"pause",onClick:this.pause},"pause"),a.a.createElement("button",{id:"reset",onClick:this.stop},"reset")))}}]),t}(a.a.Component),y=Object(l.connect)(function(e){return{data:e}},function(e){return{timerStates:function(t){e(L(t))}}})(E),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).sessionIncrement=n.sessionIncrement.bind(Object(m.a)(n)),n.sessionDecrement=n.sessionDecrement.bind(Object(m.a)(n)),n.breakIncrement=n.breakIncrement.bind(Object(m.a)(n)),n.breakDecrement=n.breakDecrement.bind(Object(m.a)(n)),n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"sessionIncrement",value:function(){if("START"!==this.props.data.type){var e=parseInt(this.props.data.sLength,10);console.log(this.props.data.sLength,this.props.data.bLength),60!==e&&(e+=1,this.props.timerStates({type:"sessionIncrement",min:e,bLength:this.props.data.bLength,sLength:e}))}}},{key:"sessionDecrement",value:function(){if("START"!==this.props.data.type){var e=parseInt(this.props.data.sLength,10);1!==e&&(e-=1,this.props.timerStates({type:"sessionDecrement",min:e,bLength:this.props.data.bLength,sLength:e}))}}},{key:"breakIncrement",value:function(){if("START"!==this.props.data.type){var e=parseInt(this.props.data.bLength,10);60!==e&&(e+=1,this.props.timerStates({type:"breakIncrement",bLength:e,sLength:this.props.data.sLength}))}}},{key:"breakDecrement",value:function(){if("START"!==this.props.data.type){var e=parseInt(this.props.data.bLength,10);1!==e&&(e-=1,this.props.timerStates({type:"breakDecrement",bLength:e,sLength:this.props.data.sLength}))}}},{key:"render",value:function(){return a.a.createElement("div",{id:"main-container"},a.a.createElement("h1",{id:"title"},"Pomodoro Clock"),a.a.createElement("p",{id:"break-label"},"Break Length"),a.a.createElement("button",{id:"break-decrement",onClick:this.breakDecrement},"-"),a.a.createElement("p",{id:"break-length"},this.props.data.bLength),a.a.createElement("button",{id:"break-increment",onClick:this.breakIncrement},"+"),a.a.createElement("br",null),a.a.createElement("p",{id:"session-label"},"Session Length"),a.a.createElement("button",{id:"session-decrement",onClick:this.sessionDecrement},"-"),a.a.createElement("p",{id:"session-length"},this.props.data.sLength),a.a.createElement("button",{id:"session-increment",onClick:this.sessionIncrement},"+"),a.a.createElement(y,null))}}]),t}(a.a.Component),v=Object(l.connect)(function(e){return{data:e}},function(e){return{timerStates:function(t){e(L(t))}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(8),T=Object(f.createStore)(k);r.a.render(a.a.createElement(l.Provider,{store:T},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.9f701935.chunk.js.map