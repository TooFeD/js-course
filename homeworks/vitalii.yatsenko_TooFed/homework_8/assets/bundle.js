!function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={exports:{},id:s,loaded:!1};return e[s].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var s=n(1);new s},function(e,t){"use strict";var n=function(){function e(e){this.name=e,this.wins=0}return e}(),s=[];s.push(new n("Player 1")),s.push(new n("Player 2"));var r=function(){function e(){this.names=[],this.names.push(document.querySelector("[data-player-one]")),this.names.push(document.querySelector("[data-player-two]")),this.players=s,this.table=document.querySelector(".table"),this.gamefield=document.querySelector(".gamefield"),this.setName(),this.firstStep(),this.step()}return e.prototype.setName=function(){for(var e=0;e<this.names.length;e++)this.names[e].innerHTML=this.players[e].name},e.prototype.firstStep=function(){return this.players[Math.floor(2*Math.random())].name},e.prototype.step=function(){var e=this;document.addEventListener("keydown",function(t){var n,s=e.table.querySelector(".chosen");68===t.keyCode&&(s.parentNode.cells.length<=s.cellIndex+1?(n=e.table.rows[s.parentNode.rowIndex+1].cells[0],n.classList.add("chosen"),s.classList.remove("chosen")):(n=s.parentNode.cells[s.cellIndex+1],n.classList.add("chosen"),s.classList.remove("chosen")))})},e}();e.exports=r}]);
//# sourceMappingURL=bundle.js.map