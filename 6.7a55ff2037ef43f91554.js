(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SDng:function(t,e,n){"use strict";n.r(e),n.d(e,"PlayersModule",function(){return D});var o=n("ofXK"),i=n("tyNb"),r=n("hctd"),a=n("3Pt+"),c=n("yl57"),s=n("J1Ni"),d=n("1S2u"),l=n("fXoL"),h=n("jSL6"),b=n("2ChS"),p=n("kmnG"),m=n("qFsG"),g=n("bTqV"),u=n("NFeN");const f=["txtTask"],v=function(t){return{highlight:t}};function y(t,e){if(1&t){const t=l.Sb();l.Rb(0,"div",7),l.Rb(1,"div"),l.vc(2),l.Qb(),l.Rb(3,"button",8),l.Yb("click",function(){l.oc(t);const n=e.$implicit;return l.cc().deleteTask(n)}),l.Rb(4,"mat-icon"),l.vc(5,"remove_circle_outline"),l.Qb(),l.Qb(),l.Qb()}if(2&t){const t=e.$implicit;l.hc("@leftToRight",void 0)("ngClass",l.jc(3,v,t.highlight)),l.Bb(2),l.wc(t.task)}}let P=(()=>{class t{constructor(t,e,n,o){this.taskProvider=t,this.hotkeyService=n,this._bottomSheetRef=o,this.edited=!1,this.form=e.group({task:["",[a.n.required]]}),this.hotkeyService.add(new c.a(["right"],t=>(this.addTask(),!1),["input","textarea"]))}ngOnDestroy(){this.hotkeyService.remove(new c.a(["right"],t=>(this.addTask(),!1),["input","textarea"])),this._bottomSheetRef.dismiss(this.edited)}ngOnInit(){setTimeout(()=>{this.txtPlayer.nativeElement.focus()},300)}addTask(){if(this.form.invalid)return;const t=this.form.value;t.id=this.getUniqueId(3),this.taskProvider.addTask(t),this.form.controls.task.setValue("")}getUniqueId(t){const e=[];for(let n=0;n<t;n++){const t=(65536*(1+Math.random())|0).toString(16).substring(1);e.push(t)}return e.join("-")}deleteTask(t){this.taskProvider.removeTask(t),this.edited=!0}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(h.a),l.Mb(a.c),l.Mb(c.c),l.Mb(b.c))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-task"]],viewQuery:function(t,e){if(1&t&&l.yc(f,1),2&t){let t;l.lc(t=l.Zb())&&(e.txtPlayer=t.first)}},decls:11,vars:3,consts:[[1,"flex-around","container",3,"formGroup","ngSubmit"],["appearance","outline","color","warn",1,"input"],["spellcheck","false","autocomplete","off","type","text","matInput","","formControlName","task","matInput",""],["txtTask",""],["mat-fab","","type","submit","color","primary",3,"disabled"],[1,"tasks"],["class","task flex-between line ns",3,"ngClass",4,"ngFor","ngForOf"],[1,"task","flex-between","line","ns",3,"ngClass"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(l.Rb(0,"form",0),l.Yb("ngSubmit",function(){return e.addTask()}),l.Rb(1,"mat-form-field",1),l.Rb(2,"mat-label"),l.vc(3,"Agregue una tarea "),l.Qb(),l.Nb(4,"input",2,3),l.Qb(),l.Rb(6,"button",4),l.Rb(7,"mat-icon"),l.vc(8,"add"),l.Qb(),l.Qb(),l.Qb(),l.Rb(9,"div",5),l.uc(10,y,6,5,"div",6),l.Qb()),2&t&&(l.hc("formGroup",e.form),l.Bb(6),l.hc("disabled",e.form.invalid),l.Bb(4),l.hc("ngForOf",e.taskProvider.tasks))},directives:[a.o,a.k,a.e,p.b,p.e,m.a,a.b,a.j,a.d,g.a,u.a,o.j,o.i],styles:[".container[_ngcontent-%COMP%]{margin:0 2rem}.container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:-15px;margin-left:1rem}.tasks[_ngcontent-%COMP%]{height:300px;overflow-y:auto;margin:0 1rem}.tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:1.5rem}.highlight[_ngcontent-%COMP%]{background-color:tomato}"],data:{animation:[s.e]}}),t})();var k=n("OgWR"),C=n("Wp6s"),M=n("FKr1");function O(t,e){if(1&t){const t=l.Sb();l.Rb(0,"button",2),l.Yb("click",function(){l.oc(t);const e=l.cc();return e.playerProvider.removePlayer(e.player)}),l.Rb(1,"mat-icon"),l.vc(2,"remove_circle_outline"),l.Qb(),l.Qb()}}const x=function(t){return{highlight:t}};let w=(()=>{class t{constructor(t){this.playerProvider=t,this.showDelete=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(k.a))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-player"]],inputs:{player:"player",showDelete:"showDelete"},decls:4,vars:5,consts:[[1,"line","flex-between","player","ns",3,"ngClass"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"mat-label"),l.vc(2),l.Qb(),l.uc(3,O,3,0,"button",1),l.Qb()),2&t&&(l.hc("ngClass",l.jc(3,x,e.player.highlight)),l.Bb(2),l.xc(" ",e.player.name," "),l.Bb(1),l.hc("ngIf",e.showDelete))},directives:[o.i,p.e,o.k,g.a,u.a],styles:[".player[_ngcontent-%COMP%]{color:#fff;font-size:1.2rem}@media (max-width:800px){.player[_ngcontent-%COMP%]{font-size:.9rem}}"],data:{animation:[s.e]}}),t})();const _=["txtPlayer"];function R(t,e){if(1&t&&l.Nb(0,"app-player",14),2&t){const t=e.$implicit;l.hc("showDelete",!0)("player",t)("@leftToRight",void 0)}}function Q(t,e){if(1&t&&(l.Rb(0,"div",17),l.Rb(1,"div"),l.vc(2),l.Qb(),l.Rb(3,"span",18),l.vc(4," Desaf\xedos"),l.Qb(),l.Qb()),2&t){const t=l.cc(2);l.hc("@zoomIn",void 0),l.Bb(1),l.hc("@leftRightNumeric",t.taskProvider.tasks.length),l.Bb(1),l.xc(" ",t.taskProvider.tasks.length," ")}}function T(t,e){if(1&t&&(l.Rb(0,"div",15),l.uc(1,Q,5,3,"div",16),l.Qb()),2&t){const t=l.cc();l.hc("@rightToLeft",void 0),l.Bb(1),l.hc("ngIf",t.taskProvider.animateNumber)}}function S(t,e){if(1&t){const t=l.Sb();l.Rb(0,"button",19),l.Yb("click",function(){return l.oc(t),l.cc().resume()}),l.vc(1," CONTINUAR "),l.Qb()}if(2&t){const t=l.cc();l.hc("disabled",t.playerProvider.players.length<2||!t.taskProvider.tasks.length)("@apearAnimation",void 0)}}const B=function(t,e){return{selected:t,unselected:e}},z=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,r){this.playerProvider=t,this.taskProvider=e,this.router=n,this.hotkeyService=o,this.matBottomSheet=i,this.form=r.group({name:["",[a.n.required]]}),this.addHotKeys(),window.innerWidth>800&&setTimeout(()=>{this.focusAddPlayer()},300)}addHotKeys(){this.hotkeyService.add(new c.a(["esc"],t=>(this.focusAddPlayer(),!1))),this.hotkeyService.add(new c.a(["up"],t=>(this.addTask(),!1),["input"])),this.hotkeyService.add(new c.a(["right"],t=>(this.resume(),!1),["input"]))}ngOnDestroy(){this.hotkeyService.remove(new c.a(["right"],t=>(this.resume(),!1),["input"]))}ngOnInit(){this.playerProvider.verifyIfCanResume()}addPlayer(){var t;const e=this.form.value;e.name=null===(t=e.name)||void 0===t?void 0:t.toUpperCase(),e.position=d.a.LEFT,this.playerProvider.addPlayer(e),this.form.controls.name.setValue("")}start(){this.play()}resume(){this.play(this.playerProvider.canResume)}play(t=!1){this.playerProvider.players.length<2||!this.taskProvider.tasks.length||(this.playerProvider.resume=t,this.router.navigate(["/tomar"]))}focusAddPlayer(){this.txtPlayer.nativeElement.focus()}addTask(){this.matBottomSheet.open(P).afterDismissed().subscribe(t=>{this.addHotKeys(),t&&(this.playerProvider.canResume=!1)})}toogeType(t){t.status?this.taskProvider.removeType(t.type):this.taskProvider.addType(t.type),t.status=!t.status}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(k.a),l.Mb(h.a),l.Mb(i.a),l.Mb(c.c),l.Mb(b.a),l.Mb(a.c))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-players"]],viewQuery:function(t,e){if(1&t&&l.yc(_,1),2&t){let t;l.lc(t=l.Zb())&&(e.txtPlayer=t.first)}},decls:24,vars:16,consts:[[1,"bg","flex-center"],[1,"flex-around","container",3,"formGroup","ngSubmit"],["appearance","outline","w","",1,"input"],["spellcheck","false","autocomplete","off","type","text","matInput","","formControlName","photo","name","photo","formControlName","name"],["photo","","txtPlayer",""],["mat-fab","","type","submit","color","primary",3,"disabled"],[1,"players"],[3,"showDelete","player",4,"ngFor","ngForOf"],[1,"flex-center","buttons"],["class","dear flex-center",4,"ngIf"],["color","primary","mat-raised-button","",1,"start","button",3,"disabled","click"],["color","warn","class","start button","mat-raised-button","",3,"disabled","click",4,"ngIf"],[1,"types","flex-center"],["mat-ripple","",1,"type","ns","pointer",3,"ngClass","click"],[3,"showDelete","player"],[1,"dear","flex-center"],["class","number flex-center",4,"ngIf"],[1,"number","flex-center"],[1,"dears"],["color","warn","mat-raised-button","",1,"start","button",3,"disabled","click"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"mat-card"),l.Rb(2,"form",1),l.Yb("ngSubmit",function(){return e.addPlayer()}),l.Rb(3,"mat-form-field",2),l.Rb(4,"mat-label"),l.vc(5,"JUGADOR "),l.Qb(),l.Nb(6,"input",3,4),l.Qb(),l.Rb(9,"button",5),l.Rb(10,"mat-icon"),l.vc(11," add "),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(12,"div",6),l.uc(13,R,1,3,"app-player",7),l.Qb(),l.Rb(14,"div",8),l.uc(15,T,2,2,"div",9),l.Rb(16,"button",10),l.Yb("click",function(){return e.start()}),l.vc(17," EMPEZAR "),l.Qb(),l.uc(18,S,2,2,"button",11),l.Qb(),l.Rb(19,"div",12),l.Rb(20,"div",13),l.Yb("click",function(){return e.toogeType(e.playerProvider.types.normal)}),l.vc(21," Todo normal"),l.Qb(),l.Rb(22,"div",13),l.Yb("click",function(){return e.toogeType(e.playerProvider.types.hot)}),l.vc(23," Sexosa la cosa"),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.Bb(2),l.hc("formGroup",e.form),l.Bb(7),l.hc("disabled",e.form.invalid),l.Bb(3),l.hc("@zoomSlow",void 0),l.Bb(1),l.hc("ngForOf",e.playerProvider.players),l.Bb(2),l.hc("ngIf",e.taskProvider.taskPool.length&&e.taskProvider.animateBg),l.Bb(1),l.hc("disabled",e.playerProvider.players.length<2||!e.taskProvider.tasks.length),l.Bb(2),l.hc("ngIf",e.playerProvider.canResume),l.Bb(1),l.hc("@leftToRight",void 0),l.Bb(1),l.hc("ngClass",l.kc(10,B,e.playerProvider.types.normal.status,!e.playerProvider.types.normal.status)),l.Bb(2),l.hc("ngClass",l.kc(13,B,e.playerProvider.types.hot.status,!e.playerProvider.types.hot.status)))},directives:[C.a,a.o,a.k,a.e,p.b,p.e,m.a,a.b,a.j,a.d,g.a,u.a,o.j,o.k,M.n,o.i,w],styles:[".start[_ngcontent-%COMP%]{margin:2rem}mat-card[_ngcontent-%COMP%]{margin:1rem;background-color:initial}.container[_ngcontent-%COMP%]{width:500px}.container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;margin:1rem 1rem 0}.players[_ngcontent-%COMP%]{width:600px;height:400px;margin:0;overflow-y:auto;overflow-x:hidden}app-player[_ngcontent-%COMP%]{display:block}.button[_ngcontent-%COMP%]{height:50px;min-width:300px;border-radius:50px;font-size:1.3rem;margin:2rem;font-weight:700;letter-spacing:3px}.dear[_ngcontent-%COMP%]{background-color:#7b1fa2;position:fixed;top:-3px;right:0;width:225px;height:225px;border-radius:0 0 0 225px}.dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{position:relative;background-color:tomato;color:#fff;width:150px;height:150px;border-radius:50%;font-size:1.2rem;letter-spacing:2px;left:-38px;bottom:-38px;line-height:1.2rem}.dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%], .types[_ngcontent-%COMP%]{flex-direction:column}.types[_ngcontent-%COMP%]{position:fixed;height:100vh;left:0;top:0;z-index:3}.types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{min-width:370px;border:2px solid tomato;color:#fff;transition:.3s ease-in-out;padding:0 2.5rem;line-height:3.5rem;border-top-right-radius:3.5rem;border-bottom-right-radius:3.5rem;font-size:2rem;margin:.5rem 0}.selected[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]:hover{background-color:tomato;transform:translateX(-3px)}.unselected[_ngcontent-%COMP%]{background-color:initial;transform:translateX(-20px)}.unselected[_ngcontent-%COMP%]:hover{background-color:rgba(255,99,71,.397)}@media (max-width:800px){.bg[_ngcontent-%COMP%], .types[_ngcontent-%COMP%]{justify-content:flex-start;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.types[_ngcontent-%COMP%]{position:static;margin-bottom:2rem;width:100%}.types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{border:none;box-sizing:border-box;width:100%;padding:0 2.5rem;line-height:2rem;font-size:1rem;margin:.25rem 0;border-radius:0;text-align:center}.selected[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]:hover, .unselected[_ngcontent-%COMP%]{transform:translateX(0)}.unselected[_ngcontent-%COMP%], .unselected[_ngcontent-%COMP%]:hover{background-color:initial}.container[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{margin:0;width:100%}.container[_ngcontent-%COMP%]{padding:0}.players[_ngcontent-%COMP%]{width:100%;min-height:50vh;max-height:80vh;padding:0 1rem;margin:0;overflow-y:auto;overflow-x:hidden;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}app-player[_ngcontent-%COMP%]{display:block}.buttons[_ngcontent-%COMP%]{position:relative;flex-direction:column;width:100%;padding:1rem 2rem}.buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:40px;min-width:100px;width:90%;border-radius:40px;font-size:1.2rem;margin:.5rem 0}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:initial;right:4rem;top:10px;z-index:3}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .dears[_ngcontent-%COMP%]{display:none}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{flex-direction:row;position:static;min-width:60%;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:25px;font-size:.8rem;letter-spacing:1px;line-height:normal;padding:0 5px;border-radius:25px;font-weight:100}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 5px}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{min-width:50px;text-align:center}}"],data:{animation:[s.a,s.b,s.e,s.j,s.h,s.k,s.d]}}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({imports:[[i.b.forChild(z),r.a],i.b]}),t})();var N=n("PCNd");let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({imports:[[o.c,I,r.a,N.a]]}),t})()}}]);