(this.webpackJsonp3316lab02=this.webpackJsonp3316lab02||[]).push([[0],{12:function(t,e,r){},14:function(t,e,r){"use strict";r.r(e);var i=r(1),n=r.n(i),a=r(3),s=r.n(a),o=(r(12),r(4)),h=r(5),c=r(7),u=r(6),l=r(0),w=function(t){Object(c.a)(r,t);var e=Object(u.a)(r);function r(t){var i;return Object(o.a)(this,r),(i=e.call(this,t)).state={rows:6,columns:7,moves:[],currentX:null,currentY:null,playerTurn:"red",winner:null,boardArray:[["white","white","white","white","white","white","white"],["white","white","white","white","white","white","white"],["white","white","white","white","white","white","white"],["white","white","white","white","white","white","white"],["white","white","white","white","white","white","white"],["white","white","white","white","white","white","white"]]},i}return Object(h.a)(r,[{key:"checkForWinner",value:function(t,e){for(var r=0,i=null,n=0;n<6;n++){r=0;for(var a=0;a<=6;a++)console.log("H "+n+" "+a),console.log(this.state.boardArray[n][a]),console.log(this.state.boardArray[n][a]===this.state.boardArray[n][a+1]),this.state.boardArray[n][a]===this.state.boardArray[n][a+1]&&"white"!==this.state.boardArray[n][a]&&(r++,console.log("Line 45 "+r),i=this.state.boardArray[n][a]);4==r&&(console.log("WIN"),this.setState({winner:i}))}console.log("END")}},{key:"onTurn",value:function(t,e){var r=this;this.state.currentX=t,this.state.currentY=e,"red"===this.state.playerTurn&&"white"===this.state.boardArray[t][e]&&(this.setState((function(i){return{boardArray:i.boardArray.map((function(i,n){return i.map((function(i,a){return n===t&&a===e?r.state.playerTurn:i}))}))}})),this.setState({playerTurn:"yellow"})),"yellow"===this.state.playerTurn&&"white"===this.state.boardArray[t][e]&&(this.setState((function(i){return{boardArray:i.boardArray.map((function(i,n){return i.map((function(i,a){return n===t&&a===e?r.state.playerTurn:i}))}))}})),this.setState({playerTurn:"red"}))}},{key:"componentDidUpdate",value:function(){this.checkForWinner(this.currentX,this.currentY)}},{key:"renderBoard",value:function(){for(var t=this,e=this.state,r=(e.rows,e.columns,[]),i=function(e){for(var i=[],n=function(r){i.push(Object(l.jsx)("div",{onClick:function(){t.onTurn(e,r)},style:{width:"7vw",height:"7vw",backgroundColor:t.state.boardArray[e][r],border:"1px solid  black",cursor:"pointer"}}))},a=0;a<t.state.columns;a+=1)n(a);r.push(Object(l.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:i}))},n=0;n<this.state.rows;n+=1)i(n);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"winner:"+this.state.winner}),r]})}},{key:"render",value:function(){var t=this.props.style;return Object(l.jsx)("div",{style:t?Object.assign({},d.container,t):d.container,children:Object(l.jsx)("div",{children:this.renderBoard()})})}}]),r}(n.a.Component),d={container:{height:"100%",padding:5,display:"flex",justifyContent:"center",alignItems:"center"}},y=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(e){var r=e.getCLS,i=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;r(t),i(t),n(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),y()}},[[14,1,2]]]);
//# sourceMappingURL=main.f6f7eab8.chunk.js.map