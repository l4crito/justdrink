(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OJPV:function(t,e,n){"use strict";n.r(e),n.d(e,"DrinkModule",function(){return _});var i=n("ofXK"),r=n("tyNb"),o=n("J1Ni"),c=n("fXoL"),a=n("jSL6"),s=n("NFeN"),l=n("bTqV"),h=n("FKr1");let d=(()=>{class t{transform(t,...e){return(t=t?t.trim():"")?t.substring(0,1).toUpperCase().concat(t.substring(1,t.length)):""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Lb({name:"firstCapital",type:t,pure:!0}),t})();function p(t,e){if(1&t){const t=c.Sb();c.Rb(0,"span"),c.wc(1),c.Rb(2,"button",6),c.Yb("click",function(){return c.pc(t),c.cc().initHistory()}),c.Rb(3,"mat-icon"),c.wc(4,"close"),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.cc();c.Bb(1),c.yc("[ ",null==t.selectedPlayer?null:t.selectedPlayer.name," ] ")}}function b(t,e){if(1&t){const t=c.Sb();c.Rb(0,"section",11),c.Yb("click",function(){c.pc(t);const n=e.$implicit;return c.cc(2).filterHistory(n.player)}),c.Rb(1,"div",12),c.wc(2),c.Qb(),c.Rb(3,"div",13),c.wc(4),c.dc(5,"firstCapital"),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit;c.Bb(2),c.xc(null==t.player?null:t.player.name),c.Bb(2),c.xc(c.ec(5,2,null==t.task?null:t.task.taskToPlay))}}function f(t,e){if(1&t&&(c.Rb(0,"div",7),c.Rb(1,"div",8),c.wc(2),c.Qb(),c.Rb(3,"div",9),c.vc(4,b,6,4,"section",10),c.Qb(),c.Qb()),2&t){const t=e.$implicit;c.Bb(2),c.xc(t.round),c.Bb(2),c.hc("ngForOf",t.tasks)}}let g=(()=>{class t{constructor(t){this.taskProvider=t,this.history=[],this.title="Historial",this.selectedPlayer=null,this.initHistory()}ngOnInit(){}initHistory(){var t;this.title="Historial",this.history=[],this.selectedPlayer=null,this.getHisthory(null===(t=this.taskProvider.history)||void 0===t?void 0:t.slice().splice(1))}getHisthory(t){t.forEach(t=>{const e=this.history.find(e=>e.round===t.round);e?e.tasks.push(t):this.history.push({round:t.round,tasks:[t]})})}filterHistory(t){var e;t&&(this.history=[],this.title="Historial de ",this.selectedPlayer=t,this.getHisthory(null===(e=this.taskProvider.history)||void 0===e?void 0:e.filter(e=>{var n;return(null===(n=e.player)||void 0===n?void 0:n.name)===t.name})))}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(a.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-history"]],decls:9,vars:4,consts:[[1,"tit","flex-center"],[1,"flex-center","title"],[4,"ngIf"],["routerLink","/tomar",1,"history-btn","ns","pointer","flex-center"],["class","flex-start history",4,"ngFor","ngForOf"],[1,"blank-space"],["mat-icon-button","",3,"click"],[1,"flex-start","history"],[1,"flex-center","round"],[1,"task-container"],["class","taskk","matRipple","",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"taskk",3,"click"],[1,"player"],[1,"action"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.wc(2),c.vc(3,p,5,1,"span",2),c.Qb(),c.Rb(4,"div",3),c.Rb(5,"mat-icon"),c.wc(6,"keyboard_arrow_down"),c.Qb(),c.Qb(),c.Qb(),c.vc(7,f,5,2,"div",4),c.Nb(8,"div",5)),2&t&&(c.Bb(2),c.yc("",e.title," "),c.Bb(1),c.hc("ngIf",e.selectedPlayer),c.Bb(1),c.hc("@rightToLeft",void 0),c.Bb(3),c.hc("ngForOf",e.history))},directives:[i.k,r.b,s.a,i.j,l.a,h.n],pipes:[d],styles:[".history-btn[_ngcontent-%COMP%]{position:fixed;right:2rem;color:#fff;width:50px;height:50px;background:#f44336;border-radius:50px;z-index:3}.taskk[_ngcontent-%COMP%], .tit[_ngcontent-%COMP%]{color:#fff}.tit[_ngcontent-%COMP%]{height:80px;position:relative;width:100%}.task-container[_ngcontent-%COMP%]{flex-grow:1}.task-container[_ngcontent-%COMP%]   .taskk[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-left:1px solid rgba(255,99,71,.471);padding:.2rem 1rem;flex-grow:1}.task-container[_ngcontent-%COMP%]   .taskk[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{font-weight:350;font-size:.8rem}.task-container[_ngcontent-%COMP%]   .taskk[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:500;color:hsla(0,0%,100%,.577);line-height:.7rem}.round[_ngcontent-%COMP%]{color:#f44336;margin-right:1rem;width:15px;min-width:15px}.history[_ngcontent-%COMP%]{box-sizing:border-box;margin:1rem;flex-grow:1}.close-filter[_ngcontent-%COMP%]{color:#fff;width:25px;height:25px;border:2px solid #fff;border-radius:25px;margin-left:5rem}.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f44336;margin-left:.5rem}@media (max-width:800px){.history-btn[_ngcontent-%COMP%]{top:inherit;right:-5px}.history-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:fixed}}"],data:{animation:[o.h]}}),t})();var u=n("yl57"),y=n("OgWR");let v=(()=>{class t{constructor(t){this.el=t}ngOnChanges(t){this.appHighlight?(this.el.nativeElement.style.transition="300ms",this.el.nativeElement.style.color="#f44336"):this.el.nativeElement.style.color="white"}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(c.l))},t.\u0275dir=c.Hb({type:t,selectors:[["","appHighlight",""]],inputs:{appHighlight:"appHighlight"},features:[c.zb]}),t})();var m=n("Qu3c");function P(t,e){1&t&&(c.Rb(0,"div",10),c.Rb(1,"mat-icon"),c.wc(2,"history"),c.Qb(),c.Qb())}function k(t,e){if(1&t&&(c.Rb(0,"div"),c.wc(1),c.dc(2,"firstCapital"),c.Qb()),2&t){const t=c.cc();c.hc("@apearAnimation",void 0),c.Bb(1),c.yc(" ",c.ec(2,2,null==t.taskProvider.currentTask?null:t.taskProvider.currentTask.taskToPlay),"")}}function x(t,e){if(1&t&&(c.Rb(0,"div",11),c.wc(1),c.Qb()),2&t){const t=c.cc();c.hc("@apearAnimation",void 0),c.Bb(1),c.xc(t.taskProvider.round)}}const w=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.playerProvider=t,this.taskProvider=e,this.hotkeyService=n,this.router=i,(!this.playerProvider.resume||this.playerProvider.current<0)&&(this.playerProvider.resume=!0,this.playerProvider.finsh(),this.playerProvider.start()),this.hotkeyService.add(new u.a(["enter","right","space"],t=>(this.playerProvider.findNextPlayer(),!1))),this.hotkeyService.add(new u.a(["backspace"],t=>(this.back(),!1)))}ngOnDestroy(){this.hotkeyService.remove(new u.a(["enter","right","space"],t=>(this.playerProvider.findNextPlayer(),!1))),this.hotkeyService.remove(new u.a(["backspace"],t=>(this.back(),!1)))}ngOnInit(){}back(){this.router.navigate([""])}goToHistory(){this.router.navigate(["history"])}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(y.a),c.Mb(a.a),c.Mb(u.c),c.Mb(r.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-drink"]],decls:15,vars:8,consts:[[1,"bg","flex-center"],[1,"player","flex-center"],["mat-ripple","",1,"btn","close","ns","pointer","flex-center",3,"click"],["class","btn history-btn  ns pointer flex-center","mat-ripple","","routerLink","history",4,"ngIf"],[1,"name","ns"],[1,"name","ns",3,"appHighlight"],[1,"task","flex-center","pointer",3,"swipe","click"],[4,"ngIf"],["class","round-info flex-center","matTooltip","Ronda",4,"ngIf"],["mat-ripple","",1,"next","ns","pointer","mat-elevation-z3","flex-center",3,"click"],["mat-ripple","","routerLink","history",1,"btn","history-btn","ns","pointer","flex-center"],["matTooltip","Ronda",1,"round-info","flex-center"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Yb("click",function(){return e.back()}),c.Rb(3,"mat-icon"),c.wc(4,"group"),c.Qb(),c.Qb(),c.vc(5,P,3,0,"div",3),c.Rb(6,"div",4),c.Rb(7,"div",5),c.wc(8),c.Qb(),c.Qb(),c.Qb(),c.Rb(9,"div",6),c.Yb("swipe",function(){return e.playerProvider.nextPlayer()})("click",function(t){return e.playerProvider.nextPlayer(t)}),c.vc(10,k,3,4,"div",7),c.Qb(),c.vc(11,x,2,2,"div",8),c.Rb(12,"div",9),c.Yb("click",function(t){return e.playerProvider.nextPlayer(t)}),c.Rb(13,"mat-icon"),c.wc(14,"navigate_next"),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.Bb(1),c.hc("@playerAnimation",void 0),c.Bb(4),c.hc("ngIf",e.taskProvider.history.length>1),c.Bb(1),c.hc("@inOutAnimation",null==e.playerProvider.currentPlayer?null:e.playerProvider.currentPlayer.position),c.Bb(1),c.hc("appHighlight",null==e.playerProvider.currentPlayer?null:e.playerProvider.currentPlayer.highlight),c.Bb(1),c.yc(" ",null==e.playerProvider||null==e.playerProvider.currentPlayer?null:e.playerProvider.currentPlayer.name," "),c.Bb(2),c.hc("ngIf",null==e.taskProvider.currentTask?null:e.taskProvider.currentTask.task),c.Bb(1),c.hc("ngIf",e.taskProvider.round),c.Bb(1),c.hc("@rotateLeft",void 0))},directives:[h.n,s.a,i.k,v,r.b,m.a],pipes:[d],styles:[".bg[_ngcontent-%COMP%]{flex-direction:row}.player[_ngcontent-%COMP%]{height:100%;background-color:#7b1fa2;width:600px;color:#fff;overflow:hidden;padding:0 .8rem}.player[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:block;text-align:center;font-size:2.5rem;width:100%;line-height:50px}.task[_ngcontent-%COMP%]{height:100%;color:hsla(0,0%,100%,.856);font-size:2rem;padding:0 4rem;width:100%}.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;line-height:40px;width:100%;letter-spacing:2px}.close[_ngcontent-%COMP%]{left:2rem}.close[_ngcontent-%COMP%], .history-btn[_ngcontent-%COMP%]{position:fixed;top:2rem}.history-btn[_ngcontent-%COMP%]{right:2rem}.btn[_ngcontent-%COMP%]{color:#fff;width:45px;height:45px;border-radius:45px;-moz-border-radius:45px;-webkit-border-radius:45px;z-index:3;border:2px solid #fff;background-color:#7b1fa2}@media (max-width:800px){.close[_ngcontent-%COMP%]{top:inherit;left:-5px}.history-btn[_ngcontent-%COMP%]{top:inherit;right:-5px}.history-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:fixed}.bg[_ngcontent-%COMP%]{flex-direction:column}.player[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:5rem;width:100%;padding:1rem 0}.player[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1rem}.task[_ngcontent-%COMP%]{height:100%;font-size:1.1rem;padding:.5rem}.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;line-height:1.4rem;width:100%;letter-spacing:2px}}"],data:{animation:[o.f,o.g,o.a,o.j,o.i,o.c]}}),t})()},{path:"history",component:g}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[r.c.forChild(w)],r.c]}),t})();var C=n("PCNd"),M=n("hctd");let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({providers:[],imports:[[i.c,O,C.a,M.a]]}),t})()}}]);