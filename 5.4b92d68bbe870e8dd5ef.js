(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OJPV:function(e,t,n){"use strict";n.r(t),n.d(t,"DrinkModule",function(){return P});var r=n("ofXK"),i=n("tyNb"),o=n("J1Ni"),a=n("yl57"),c=n("fXoL"),l=n("OgWR"),s=n("jSL6"),d=n("FKr1"),h=n("NFeN");function p(e,t){if(1&e&&(c.Rb(0,"div"),c.vc(1),c.dc(2,"titlecase"),c.Qb()),2&e){const e=c.cc();c.hc("@apearAnimation",void 0),c.Bb(1),c.xc(" ",c.ec(2,2,null==e.taskProvider.currentTask?null:e.taskProvider.currentTask.task),"")}}const b=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.playerProvider=e,this.taskProvider=t,this.hotkeyService=n,this.router=r,(!this.playerProvider.resume||this.playerProvider.current<0)&&(this.playerProvider.finsh(),this.playerProvider.start()),this.hotkeyService.add(new a.a(["enter","right"],e=>(this.playerProvider.nextPlayer(),!1))),this.hotkeyService.add(new a.a(["left"],e=>(this.playerProvider.prevPlayer(),!1))),this.hotkeyService.add(new a.a(["backspace"],e=>(this.back(),!1)))}ngOnDestroy(){this.hotkeyService.remove(new a.a(["enter","right"],e=>(this.playerProvider.nextPlayer(),!1))),this.hotkeyService.remove(new a.a(["left"],e=>(this.playerProvider.prevPlayer(),!1))),this.hotkeyService.remove(new a.a(["backspace"],e=>(this.back(),!1)))}ngOnInit(){}back(){this.router.navigate([""])}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(l.a),c.Mb(s.a),c.Mb(a.c),c.Mb(i.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-drink"]],decls:12,vars:5,consts:[[1,"bg","flex-center"],[1,"player","flex-center"],[1,"name"],[1,"task","flex-center"],[4,"ngIf"],["mat-ripple","",1,"close","ns","pointer",3,"click"],["mat-ripple","",1,"next","ns","pointer","mat-elevation-z3",3,"click"]],template:function(e,t){1&e&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.vc(3),c.Qb(),c.Qb(),c.Rb(4,"div",3),c.uc(5,p,3,4,"div",4),c.Qb(),c.Rb(6,"div",5),c.Yb("click",function(){return t.back()}),c.Rb(7,"mat-icon"),c.vc(8,"arrow_back_ios"),c.Qb(),c.Qb(),c.Rb(9,"div",6),c.Yb("click",function(){return t.playerProvider.nextPlayer()}),c.Rb(10,"mat-icon"),c.vc(11,"navigate_next"),c.Qb(),c.Qb(),c.Qb()),2&e&&(c.Bb(1),c.hc("@playerAnimation",void 0),c.Bb(1),c.hc("@inOutAnimation",null==t.playerProvider.currentPlayer?null:t.playerProvider.currentPlayer.position),c.Bb(1),c.xc(" ",null==t.playerProvider||null==t.playerProvider.currentPlayer?null:t.playerProvider.currentPlayer.name," "),c.Bb(2),c.hc("ngIf",null==t.taskProvider.currentTask?null:t.taskProvider.currentTask.task),c.Bb(4),c.hc("@rotateLeft",void 0))},directives:[r.k,d.n,h.a],pipes:[r.r],styles:[".bg[_ngcontent-%COMP%]{flex-direction:row}.player[_ngcontent-%COMP%]{height:100%;background-color:#7b1fa2;width:600px;color:#fff;overflow:hidden;padding:0 .8rem}.player[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:block;text-align:center;font-size:2.5rem;width:100%;line-height:50px}.task[_ngcontent-%COMP%]{height:100%;color:hsla(0,0%,100%,.856);font-size:2rem;padding:0 4rem;width:100%}.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;line-height:40px;width:100%}.close[_ngcontent-%COMP%]{position:fixed;top:0;left:0;color:#fff;width:50px;height:50px;background:tomato;border-radius:0 0 100px 0;-moz-border-radius:0 0 100px 0;-webkit-border-radius:0 0 100px 0}.close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;left:8px;top:8px}@media (max-width:800px){.bg[_ngcontent-%COMP%]{flex-direction:column}.player[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:5rem;width:100%;padding:1rem 0}.player[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1rem}.task[_ngcontent-%COMP%]{height:100%;font-size:.8rem;padding:.5rem}.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center;line-height:1.2rem;width:100%}.task[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]{position:fixed;bottom:2rem;right:2rem}}"],data:{animation:[o.e,o.f,o.a,o.h,o.g,o.c]}}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[i.b.forChild(b)],i.b]}),e})();var g=n("PCNd"),u=n("hctd");let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[r.c,v,g.a,u.a]]}),e})()}}]);