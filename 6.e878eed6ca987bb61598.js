(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SDng:function(t,e,n){"use strict";n.r(e),n.d(e,"PlayersModule",function(){return A});var o=n("ofXK"),r=n("tyNb"),i=n("hctd"),a=n("3Pt+"),c=n("yl57"),s=n("J1Ni"),l=n("1S2u"),d=n("fXoL"),b=n("jSL6"),g=n("2ChS"),h=n("kmnG"),p=n("qFsG"),m=n("bTqV"),u=n("NFeN");const f=["txtTask"],y=function(t){return{highlight:t}};function P(t,e){if(1&t){const t=d.Sb();d.Rb(0,"div",7),d.Rb(1,"div"),d.xc(2),d.Qb(),d.Rb(3,"button",8),d.Yb("click",function(){d.qc(t);const n=e.$implicit;return d.cc().deleteTask(n)}),d.Rb(4,"mat-icon"),d.xc(5,"remove_circle_outline"),d.Qb(),d.Qb(),d.Qb()}if(2&t){const t=e.$implicit;d.hc("@leftToRight",void 0)("ngClass",d.kc(3,y,t.highlight)),d.Bb(2),d.yc(t.task)}}let v=(()=>{class t{constructor(t,e,n,o){this.taskProvider=t,this.hotkeyService=n,this._bottomSheetRef=o,this.edited=!1,this.form=e.group({task:["",[a.n.required]]}),this.hotkeyService.add(new c.a(["right"],t=>(this.addTask(),!1),["input","textarea"]))}ngOnDestroy(){this.hotkeyService.remove(new c.a(["right"],t=>(this.addTask(),!1),["input","textarea"])),this._bottomSheetRef.dismiss(this.edited)}ngOnInit(){setTimeout(()=>{this.txtPlayer.nativeElement.focus()},300)}addTask(){if(this.form.invalid)return;const t=this.form.value;t.id=this.getUniqueId(3),this.taskProvider.addTask(t),this.form.controls.task.setValue("")}getUniqueId(t){const e=[];for(let n=0;n<t;n++){const t=(65536*(1+Math.random())|0).toString(16).substring(1);e.push(t)}return e.join("-")}deleteTask(t){this.taskProvider.removeTask(t),this.edited=!0}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(b.a),d.Mb(a.c),d.Mb(c.c),d.Mb(g.c))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-task"]],viewQuery:function(t,e){if(1&t&&d.Ac(f,1),2&t){let t;d.nc(t=d.Zb())&&(e.txtPlayer=t.first)}},decls:11,vars:3,consts:[[1,"flex-around","container",3,"formGroup","ngSubmit"],["appearance","outline","color","warn",1,"input"],["spellcheck","false","autocomplete","off","type","text","matInput","","formControlName","task","matInput",""],["txtTask",""],["mat-fab","","type","submit","color","primary",3,"disabled"],[1,"tasks"],["class","task flex-between line ns",3,"ngClass",4,"ngFor","ngForOf"],[1,"task","flex-between","line","ns",3,"ngClass"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(d.Rb(0,"form",0),d.Yb("ngSubmit",function(){return e.addTask()}),d.Rb(1,"mat-form-field",1),d.Rb(2,"mat-label"),d.xc(3,"Agregue una tarea "),d.Qb(),d.Nb(4,"input",2,3),d.Qb(),d.Rb(6,"button",4),d.Rb(7,"mat-icon"),d.xc(8,"add"),d.Qb(),d.Qb(),d.Qb(),d.Rb(9,"div",5),d.wc(10,P,6,5,"div",6),d.Qb()),2&t&&(d.hc("formGroup",e.form),d.Bb(6),d.hc("disabled",e.form.invalid),d.Bb(4),d.hc("ngForOf",e.taskProvider.tasks))},directives:[a.o,a.k,a.e,h.b,h.e,p.a,a.b,a.j,a.d,m.a,u.a,o.j,o.i],styles:[".container[_ngcontent-%COMP%]{margin:0 2rem}.container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:-15px;margin-left:1rem}.tasks[_ngcontent-%COMP%]{height:300px;overflow-y:auto;margin:0 1rem}.tasks[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:1.5rem}.highlight[_ngcontent-%COMP%]{background-color:#f44336}"],data:{animation:[s.e]}}),t})();var k=n("OgWR"),C=n("Wp6s"),x=n("FKr1");function M(t,e){if(1&t){const t=d.Sb();d.Rb(0,"button",2),d.Yb("click",function(e){d.qc(t);const n=d.cc();return n.playerProvider.removePlayer(n.player,e)}),d.Rb(1,"mat-icon"),d.xc(2,"cancel"),d.Qb(),d.Qb()}}const O=function(t,e,n){return{highlight:t,male:e,female:n}},w=function(t){return{color:t}},_=function(t){return{heart:t}};let R=(()=>{class t{constructor(t){this.playerProvider=t,this.showDelete=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(k.a))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-player"]],inputs:{player:"player",showDelete:"showDelete"},decls:11,vars:19,consts:[["mat-ripple","",1,"line","flex-between","player","ns",3,"ngClass","click"],[1,"flex-start"],["mat-icon-button","",3,"click"],[3,"ngStyle","ngClass"],["mat-icon-button","",3,"click",4,"ngIf"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Yb("click",function(){return e.playerProvider.toogleGender(e.player)}),d.Rb(1,"div",1),d.Rb(2,"button",2),d.Yb("click",function(t){return e.playerProvider.assignPartner(e.player,t)}),d.Rb(3,"mat-icon",3),d.xc(4,"favorite_border"),d.Qb(),d.Qb(),d.Rb(5,"mat-label"),d.xc(6),d.Qb(),d.Qb(),d.Rb(7,"button",2),d.Yb("click",function(t){return e.playerProvider.assignBan(e.player,t)}),d.Rb(8,"mat-icon",3),d.xc(9," block"),d.Qb(),d.Qb(),d.wc(10,M,3,0,"button",4),d.Qb()),2&t&&(d.hc("ngClass",d.mc(7,O,e.player.highlight,!e.player.female,e.player.female)),d.Bb(3),d.hc("ngStyle",d.kc(11,w,e.player.color?e.player.color:"gray"))("ngClass",d.kc(13,_,e.player.assigningPartner)),d.Bb(3),d.zc(" ",e.player.name," "),d.Bb(2),d.hc("ngStyle",d.kc(15,w,e.player.banColor?e.player.banColor:"gray"))("ngClass",d.kc(17,_,e.player.assigningBan)),d.Bb(2),d.hc("ngIf",e.showDelete))},directives:[x.n,o.i,m.a,u.a,o.l,h.e,o.k],styles:["mat-icon[_ngcontent-%COMP%]{transition:.3s ease-in-out}.player[_ngcontent-%COMP%]{color:#fff;font-size:1.2rem}.player[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:1rem}.male[_ngcontent-%COMP%]{color:#02a3fe}.female[_ngcontent-%COMP%]{color:#eb49a6}.flex-start[_ngcontent-%COMP%]{width:100%}.heart[_ngcontent-%COMP%]{animation:beat .25s infinite alternate;transform-origin:center}@keyframes beat{to{transform:scale(1.2)}}@media (max-width:800px){.player[_ngcontent-%COMP%]{font-size:.9rem}.player[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:0}}"],data:{animation:[s.e]}}),t})();const Q=["txtPlayer"];function S(t,e){if(1&t&&d.Nb(0,"app-player",14),2&t){const t=e.$implicit;d.hc("showDelete",!0)("player",t)("@leftToRight",void 0)}}function T(t,e){if(1&t&&(d.Rb(0,"div",18),d.Rb(1,"div"),d.xc(2),d.Qb(),d.Rb(3,"span"),d.xc(4," Desaf\xedos"),d.Qb(),d.Qb()),2&t){const t=d.cc(2);d.hc("@zoomIn",void 0),d.Bb(1),d.hc("@leftRightNumeric",t.taskProvider.tasks.length),d.Bb(1),d.zc(" ",t.taskProvider.tasks.length," ")}}function B(t,e){if(1&t&&(d.Rb(0,"div",15),d.Rb(1,"a",16),d.wc(2,T,5,3,"div",17),d.Qb(),d.Qb()),2&t){const t=d.cc();d.hc("@rightToLeft",void 0),d.Bb(2),d.hc("ngIf",t.taskProvider.animateNumber)}}function z(t,e){if(1&t){const t=d.Sb();d.Rb(0,"button",19),d.Yb("click",function(){return d.qc(t),d.cc().resume()}),d.xc(1," CONTINUAR "),d.Qb()}if(2&t){const t=d.cc();d.hc("disabled",t.playerProvider.players.length<2||!t.taskProvider.tasks.length)("@apearAnimation",void 0)}}const I=function(t,e){return{selected:t,unselected:e}},N=[{path:"",component:(()=>{class t{constructor(t,e,n,o,r,i){this.playerProvider=t,this.taskProvider=e,this.router=n,this.hotkeyService=o,this.matBottomSheet=r,this.form=i.group({name:["",[a.n.required]]}),this.addHotKeys(),window.innerWidth>800&&setTimeout(()=>{this.focusAddPlayer()},300)}addHotKeys(){this.hotkeyService.add(new c.a(["esc"],t=>(this.focusAddPlayer(),!1))),this.hotkeyService.add(new c.a(["down"],t=>(this.taskProvider.getTasks(),!1),["input"])),this.hotkeyService.add(new c.a(["right"],t=>(this.resume(),!1),["input"]))}ngOnDestroy(){this.hotkeyService.remove(new c.a(["right"],t=>(this.resume(),!1),["input"])),this.hotkeyService.remove(new c.a(["down"],t=>(this.taskProvider.getTasks(),!1),["input"]))}ngOnInit(){this.playerProvider.verifyIfCanResume()}addPlayer(){var t;const e=this.form.value;e.name=null===(t=e.name)||void 0===t?void 0:t.toUpperCase(),e.position=l.a.LEFT,this.playerProvider.addPlayer(e),this.form.controls.name.setValue("")}start(){this.play()}resume(){this.play(this.playerProvider.canResume)}play(t=!1){this.playerProvider.players.length<2||!this.taskProvider.tasks.length||(this.playerProvider.resume=t,this.router.navigate(["/tomar"]))}focusAddPlayer(){this.txtPlayer.nativeElement.focus()}addTask(){this.matBottomSheet.open(v).afterDismissed().subscribe(t=>{this.addHotKeys(),t&&(this.playerProvider.canResume=!1)})}toogeType(t){t.status?this.taskProvider.removeType(t.type):this.taskProvider.addType(t.type),t.status=!t.status}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(k.a),d.Mb(b.a),d.Mb(r.a),d.Mb(c.c),d.Mb(g.a),d.Mb(a.c))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-players"]],viewQuery:function(t,e){if(1&t&&d.Ac(Q,1),2&t){let t;d.nc(t=d.Zb())&&(e.txtPlayer=t.first)}},decls:24,vars:16,consts:[[1,"bg","flex-center"],[1,"flex-around","container",3,"formGroup","ngSubmit"],["appearance","outline","w","",1,"input"],["spellcheck","false","autocomplete","off","type","text","matInput","","formControlName","photo","name","photo","formControlName","name"],["photo","","txtPlayer",""],["mat-fab","","type","submit","color","primary",3,"disabled"],[1,"players"],[3,"showDelete","player",4,"ngFor","ngForOf"],[1,"flex-center","buttons"],["class","dear flex-center",4,"ngIf"],["color","primary","mat-raised-button","",1,"start","button",3,"disabled","click"],["color","warn","class","start button","mat-raised-button","",3,"disabled","click",4,"ngIf"],[1,"types","flex-center"],["mat-ripple","",1,"type","ns","pointer",3,"ngClass","click"],[3,"showDelete","player"],[1,"dear","flex-center"],["href","https://docs.google.com/spreadsheets/d/1OrWDh-iwv1UBjwbvqA8wbdMkQzEulyKu/edit#gid=441603836","target","_blank",1,"dears"],["class","number flex-center",4,"ngIf"],[1,"number","flex-center"],["color","warn","mat-raised-button","",1,"start","button",3,"disabled","click"]],template:function(t,e){1&t&&(d.Rb(0,"div",0),d.Rb(1,"mat-card"),d.Rb(2,"form",1),d.Yb("ngSubmit",function(){return e.addPlayer()}),d.Rb(3,"mat-form-field",2),d.Rb(4,"mat-label"),d.xc(5,"JUGADOR "),d.Qb(),d.Nb(6,"input",3,4),d.Qb(),d.Rb(9,"button",5),d.Rb(10,"mat-icon"),d.xc(11," add "),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(12,"div",6),d.wc(13,S,1,3,"app-player",7),d.Qb(),d.Rb(14,"div",8),d.wc(15,B,3,2,"div",9),d.Rb(16,"button",10),d.Yb("click",function(){return e.start()}),d.xc(17," EMPEZAR "),d.Qb(),d.wc(18,z,2,2,"button",11),d.Qb(),d.Rb(19,"div",12),d.Rb(20,"div",13),d.Yb("click",function(){return e.toogeType(e.playerProvider.types.normal)}),d.xc(21," Todo normal"),d.Qb(),d.Rb(22,"div",13),d.Yb("click",function(){return e.toogeType(e.playerProvider.types.hot)}),d.xc(23," Sexosa la cosa"),d.Qb(),d.Qb(),d.Qb()),2&t&&(d.Bb(2),d.hc("formGroup",e.form),d.Bb(7),d.hc("disabled",e.form.invalid),d.Bb(3),d.hc("@zoomSlow",void 0),d.Bb(1),d.hc("ngForOf",e.playerProvider.players),d.Bb(2),d.hc("ngIf",e.taskProvider.taskPool.length&&e.taskProvider.animateBg),d.Bb(1),d.hc("disabled",e.playerProvider.players.length<2||!e.taskProvider.tasks.length),d.Bb(2),d.hc("ngIf",e.playerProvider.taskProvider.round),d.Bb(1),d.hc("@leftToRight",void 0),d.Bb(1),d.hc("ngClass",d.lc(10,I,e.playerProvider.types.normal.status,!e.playerProvider.types.normal.status)),d.Bb(2),d.hc("ngClass",d.lc(13,I,e.playerProvider.types.hot.status,!e.playerProvider.types.hot.status)))},directives:[C.a,a.o,a.k,a.e,h.b,h.e,p.a,a.b,a.j,a.d,m.a,u.a,o.j,o.k,x.n,o.i,R],styles:[".start[_ngcontent-%COMP%]{margin:2rem}mat-card[_ngcontent-%COMP%]{margin:1rem;background-color:initial}.container[_ngcontent-%COMP%]{width:500px}.container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;margin:1rem 1rem 0}a[_ngcontent-%COMP%]{all:unset}.players[_ngcontent-%COMP%]{width:600px;height:400px;margin:0;overflow-y:auto;overflow-x:hidden}app-player[_ngcontent-%COMP%]{display:block}.button[_ngcontent-%COMP%]{height:50px;min-width:300px;border-radius:50px;font-size:1.3rem;margin:2rem;font-weight:700;letter-spacing:3px}.dear[_ngcontent-%COMP%]{background-color:#7b1fa2;position:fixed;top:-3px;right:0;width:225px;height:225px;border-radius:0 0 0 225px}.dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{position:relative;background-color:#f44336;color:#fff;width:150px;height:150px;border-radius:50%;font-size:1.2rem;letter-spacing:2px;left:-38px;bottom:-38px;line-height:1.2rem}.dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%], .types[_ngcontent-%COMP%]{flex-direction:column}.types[_ngcontent-%COMP%]{position:fixed;height:100vh;left:0;top:0;z-index:3}.types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{min-width:370px;border:2px solid #f44336;color:#fff;transition:.3s ease-in-out;padding:0 2.5rem;line-height:3.5rem;border-top-right-radius:3.5rem;border-bottom-right-radius:3.5rem;font-size:2rem;margin:.5rem 0}.selected[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]:hover{background-color:#f44336;transform:translateX(-3px)}.unselected[_ngcontent-%COMP%]{background-color:initial;transform:translateX(-20px)}.unselected[_ngcontent-%COMP%]:hover{background-color:rgba(255,99,71,.397)}@media (max-width:800px){.bg[_ngcontent-%COMP%], .types[_ngcontent-%COMP%]{justify-content:flex-start;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.types[_ngcontent-%COMP%]{position:inherit;overflow:hidden;max-width:100vw;margin:1rem 0}.types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{border:none;box-sizing:border-box;padding:0;line-height:2rem;font-size:1rem;margin:1px 0;border-radius:0;text-align:center}.selected[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]:hover, .unselected[_ngcontent-%COMP%]{transform:translateX(0)}.unselected[_ngcontent-%COMP%], .unselected[_ngcontent-%COMP%]:hover{background-color:initial}.container[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{margin:0;width:100%}.container[_ngcontent-%COMP%]{padding:0}.players[_ngcontent-%COMP%]{width:100%;min-height:50vh;max-height:80vh;padding:0 1rem;margin:0;overflow-y:auto;overflow-x:hidden;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}app-player[_ngcontent-%COMP%]{display:block}.buttons[_ngcontent-%COMP%]{position:relative;flex-direction:column;width:100%;padding:0}.buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:40px;min-width:100px;width:90%;border-radius:40px;font-size:1.2rem;margin:.5rem 0}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:initial;right:4rem;top:10px;z-index:3}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .dears[_ngcontent-%COMP%]{display:none}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{flex-direction:row;position:absolute;min-width:60%;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:25px;font-size:.8rem;letter-spacing:1px;line-height:normal;padding:0 5px;border-radius:25px;font-weight:100;top:-.7rem;right:1rem}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 5px}.buttons[_ngcontent-%COMP%]   .dear[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{min-width:50px;text-align:center}}"],data:{animation:[s.a,s.b,s.e,s.j,s.h,s.k,s.d]}}),t})()}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({imports:[[r.b.forChild(N),i.a],r.b]}),t})();var j=n("PCNd");let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({imports:[[o.c,D,i.a,j.a]]}),t})()}}]);