(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OJPV:function(e,t,n){"use strict";n.r(t),n.d(t,"DrinkModule",function(){return y});var r=n("ofXK"),i=n("tyNb"),a=n("J1Ni"),o=n("yl57"),c=n("fXoL"),l=n("OgWR"),s=n("jSL6"),p=n("FKr1"),h=n("NFeN");let d=(()=>{class e{constructor(e){this.el=e}ngOnChanges(e){this.appHighlight?(this.el.nativeElement.style.transition="300ms",this.el.nativeElement.style.color="#f44336"):this.el.nativeElement.style.color="white"}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(c.l))},e.\u0275dir=c.Hb({type:e,selectors:[["","appHighlight",""]],inputs:{appHighlight:"appHighlight"},features:[c.zb]}),e})();var g=n("Qu3c");let u=(()=>{class e{transform(e,...t){return(e=e?e.trim():"")?e.substring(0,1).toUpperCase().concat(e.substring(1,e.length)):""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Lb({name:"firstCapital",type:e,pure:!0}),e})();function b(e,t){if(1&e&&(c.Rb(0,"div"),c.xc(1),c.dc(2,"firstCapital"),c.Qb()),2&e){const e=c.cc();c.hc("@apearAnimation",void 0),c.Bb(1),c.zc(" ",c.ec(2,2,null==e.taskProvider.currentTask?null:e.taskProvider.currentTask.taskToPlay),"")}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.playerProvider=e,this.taskProvider=t,this.hotkeyService=n,this.router=r,(!this.playerProvider.resume||this.playerProvider.current<0)&&(this.playerProvider.finsh(),this.playerProvider.start()),this.hotkeyService.add(new o.a(["enter","right"],e=>(this.playerProvider.nextPlayer(null),!1))),this.hotkeyService.add(new o.a(["backspace"],e=>(this.back(),!1)))}ngOnDestroy(){this.hotkeyService.remove(new o.a(["enter","right"],e=>(this.playerProvider.nextPlayer(null),!1))),this.hotkeyService.remove(new o.a(["backspace"],e=>(this.back(),!1)))}ngOnInit(){}back(){this.router.navigate([""])}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(l.a),c.Mb(s.a),c.Mb(o.c),c.Mb(i.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-drink"]],decls:13,vars:7,consts:[[1,"bg","flex-center"],[1,"player","flex-center"],["mat-ripple","",1,"close","ns","pointer","flex-center",3,"click"],[1,"name","ns"],[1,"name","ns",3,"appHighlight"],["mat-ripple","",1,"task","flex-center","pointer",3,"click"],[4,"ngIf"],["mat-ripple","",1,"next","ns","pointer","mat-elevation-z3","flex-center",3,"matTooltip","click"]],template:function(e,t){1&e&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Yb("click",function(){return t.back()}),c.Rb(3,"mat-icon"),c.xc(4,"arrow_back_ios"),c.Qb(),c.Qb(),c.Rb(5,"div",3),c.Rb(6,"div",4),c.xc(7),c.Qb(),c.Qb(),c.Qb(),c.Rb(8,"div",5),c.Yb("click",function(e){return t.playerProvider.nextPlayer(e)}),c.wc(9,b,3,4,"div",6),c.Qb(),c.Rb(10,"div",7),c.Yb("click",function(e){return t.playerProvider.nextPlayer(e)}),c.Rb(11,"mat-icon"),c.xc(12,"navigate_next"),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.Bb(1),c.hc("@playerAnimation",void 0),c.Bb(4),c.hc("@inOutAnimation",null==t.playerProvider.currentPlayer?null:t.playerProvider.currentPlayer.position),c.Bb(1),c.hc("appHighlight",null==t.playerProvider.currentPlayer?null:t.playerProvider.currentPlayer.highlight),c.Bb(1),c.zc(" ",null==t.playerProvider||null==t.playerProvider.currentPlayer?null:t.playerProvider.currentPlayer.name," "),c.Bb(2),c.hc("ngIf",null==t.taskProvider.currentTask?null:t.taskProvider.currentTask.task),c.Bb(1),c.ic("matTooltip","Ronda: ",t.taskProvider.round,""),c.hc("@rotateLeft",void 0))},directives:[p.n,h.a,d,r.k,g.a],pipes:[u],styles:[".bg[_ngcontent-%COMP%]{flex-direction:row}.player[_ngcontent-%COMP%]{height:100%;background-color:#7b1fa2;width:600px;color:#fff;overflow:hidden;padding:0 .8rem}.player[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:block;text-align:center;font-size:2.5rem;width:100%;line-height:50px}.task[_ngcontent-%COMP%]{height:100%;color:hsla(0,0%,100%,.856);font-size:2rem;padding:0 4rem;width:100%}.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;line-height:40px;width:100%;letter-spacing:2px}.close[_ngcontent-%COMP%]{position:fixed;top:2rem;left:2rem;color:#fff;width:50px;height:50px;background:#f44336;border-radius:50px;-moz-border-radius:50px;-webkit-border-radius:50px;z-index:3}@media (max-width:800px){.close[_ngcontent-%COMP%]{top:inherit;left:-5px}.close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:fixed;right:8px}.bg[_ngcontent-%COMP%]{flex-direction:column}.player[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:5rem;width:100%;padding:1rem 0}.player[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1rem}.task[_ngcontent-%COMP%]{height:100%;font-size:1.1rem;padding:.5rem}.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;line-height:1.4rem;width:100%;letter-spacing:2px}}"],data:{animation:[a.f,a.g,a.a,a.j,a.i,a.c]}}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[i.b.forChild(f)],i.b]}),e})();var m=n("PCNd"),P=n("hctd");let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({providers:[],imports:[[r.c,v,m.a,P.a]]}),e})()}}]);