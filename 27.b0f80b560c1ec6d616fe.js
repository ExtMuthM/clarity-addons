(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{cK1b:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),r=u("zl1X"),a=u("pMnS"),s=u("8KBR"),c=u("+Xo0"),b=u("0G9f"),o=u("gIcY"),i=u("xLE1"),d=u("6/Z3"),g=u("QkwE"),m=u("vAyd"),p=u("mrSG"),C=u("N+3j"),h='\n<clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data1"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template1">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-input>\n<clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template2">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-textarea>\n',v='\ndata1 = new Map();\nthis.data1.set("EN", "english text");\nthis.data1.set("DE", "deutscher text");\nthis.data1.set("FR", "texte fran\xe7ais");\n',f='\n<form clrForm [formGroup]="exampleForm">\n    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample1"\n        clrControlClasses="clr-col-md-5" name="reactive1">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-input>\n    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample2"\n        clrControlClasses="clr-col-md-5" name="reactive2">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-textarea>\n</form>\n',A='\nreactiveData1 = new Map();\nthis.reactiveData1.set("EN", "english text");\nthis.reactiveData1.set("DE", "deutscher text");\nthis.reactiveData1.set("FR", "texte fran\xe7ais");\n\nexampleForm = new FormGroup({\n  sample1: new FormControl(this.reactiveData1, {\n    updateOn: "blur",\n    validators: [ClrMultilingualInputValidators.requiredAll()]\n  })\n});\n',x=function(l){function n(){var n=l.call(this,"multilingual-input")||this;return n.templateExample=h,n.templateTSExample=v,n.reactiveExample=f,n.reactiveTSExample=A,n.data1=new Map,n.data2=new Map,n.reactiveData1=new Map,n.reactiveData2=new Map,n.exampleForm=new o.h({sample1:new o.f(n.reactiveData1,{updateOn:"blur",validators:[d.y.requiredAll()]}),sample2:new o.f(n.reactiveData2,{updateOn:"blur",validators:[d.y.requiredAll()]})}),n}return Object(p.c)(n,l),n.prototype.ngOnInit=function(){this.data1.set("EN","english text"),this.data1.set("DE","deutscher text"),this.data1.set("FR","texte fran\xe7ais"),this.data2.set("EN","english text\nSecond line with a little more text"),this.data2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.data2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte"),this.reactiveData1.set("EN","english text"),this.reactiveData1.set("DE","deutscher text"),this.reactiveData1.set("FR","texte fran\xe7ais"),this.reactiveData2.set("EN","english text\nSecond line with a little more text"),this.reactiveData2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.reactiveData2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte")},n}(C.a),K=e.qb({encapsulation:2,styles:[],data:{}});function y(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,222,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),e.rb(1,49152,null,0,b.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.sb(2,0,null,0,220,"article",[],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["The multilingual input/textarea fields are used to enter texts in different languages."])),(l()(),e.sb(5,0,null,null,217,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.sb(6,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Code & Examples"])),(l()(),e.sb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The multilingual input/textarea components require you to use custom validators: "])),(l()(),e.sb(10,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.sb(11,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Reactive forms: "])),(l()(),e.sb(13,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["ClrMultilingualInputValidators"])),(l()(),e.sb(15,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Template-driven forms: "])),(l()(),e.sb(17,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["clrRequiredOneMultilang, clrRequiredAllMultilang"])),(l()(),e.sb(19,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Angular Component"])),(l()(),e.sb(21,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Summary of Options"])),(l()(),e.sb(23,0,null,null,53,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.sb(24,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.sb(25,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.sb(26,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Parameter"])),(l()(),e.sb(28,0,null,null,1,"th",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Values"])),(l()(),e.sb(30,0,null,null,1,"th",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default"])),(l()(),e.sb(32,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Effect"])),(l()(),e.sb(34,0,null,null,42,"tbody",[],null,null,null,null,null)),(l()(),e.sb(35,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.sb(36,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.sb(37,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["value binding (ngModel or reactive)"])),(l()(),e.sb(39,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Type: Map<string, string>"])),(l()(),e.sb(41,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Default: null"])),(l()(),e.sb(43,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Map of language and translation"])),(l()(),e.sb(45,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["null"])),(l()(),e.sb(47,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Value binding for control represented by a map of language as key and translation as value."])),(l()(),e.sb(49,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.sb(50,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.sb(51,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["[clrSelectedLang]"])),(l()(),e.sb(53,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Type: String"])),(l()(),e.sb(55,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,['Default: ""'])),(l()(),e.sb(57,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Javascript String"])),(l()(),e.sb(59,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,['""'])),(l()(),e.sb(61,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Defines the currently selected language."])),(l()(),e.sb(63,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.sb(64,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.sb(65,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["[clrControlClasses]"])),(l()(),e.sb(67,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Type: String"])),(l()(),e.sb(69,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,['Default: "clr-col-md-10"'])),(l()(),e.sb(71,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Javascript String"])),(l()(),e.sb(73,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,['"clr-col-md-10"'])),(l()(),e.sb(75,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Defines the css classes applied to the input control."])),(l()(),e.sb(77,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Reactive forms"])),(l()(),e.sb(79,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Validation will happen on blur"])),(l()(),e.sb(81,0,null,null,60,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Cb(l,83).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Cb(l,83).onReset()&&t),t},null,null)),e.rb(82,16384,null,0,o.G,[],null,null),e.rb(83,540672,null,0,o.i,[[8,null],[8,null]],{form:[0,"form"]},null),e.Hb(2048,null,o.c,null,[o.i]),e.rb(85,16384,null,0,o.q,[[4,o.c]],null,null),e.Hb(512,null,i.Mc,i.Mc,[]),e.Hb(512,null,i.Pc,i.Pc,[]),e.rb(88,16384,null,0,i.cb,[i.Mc,i.Pc],null,null),(l()(),e.sb(89,0,null,null,15,"clr-multilingual-input",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrSelectedLang","EN"],["formControlName","sample1"],["name","reactive1"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,s.N,s.n)),e.rb(90,4374528,null,0,d.x,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Hb(1024,null,o.n,function(l){return[l]},[d.x]),e.rb(92,671744,null,0,o.g,[[3,o.c],[8,null],[8,null],[6,o.n],[2,o.E]],{name:[0,"name"]},null),e.Hb(2048,null,o.o,null,[o.g]),e.rb(94,16384,null,0,o.p,[[4,o.o]],null,null),e.Hb(512,null,i.Nc,i.Nc,[]),(l()(),e.sb(96,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.rb(97,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Kb(-1,null,["Reactive"])),(l()(),e.sb(99,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,r.K,r.o)),e.rb(100,49152,null,0,i.x,[],null,null),(l()(),e.Kb(-1,0,["Helper text"])),(l()(),e.sb(102,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,r.J,r.n)),e.rb(103,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Kb(-1,0,["Please translate in every language!"])),(l()(),e.sb(105,0,null,null,15,"clr-multilingual-textarea",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrSelectedLang","EN"],["formControlName","sample2"],["name","reactive2"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,s.O,s.o)),e.rb(106,4374528,null,0,d.A,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Hb(1024,null,o.n,function(l){return[l]},[d.A]),e.rb(108,671744,null,0,o.g,[[3,o.c],[8,null],[8,null],[6,o.n],[2,o.E]],{name:[0,"name"]},null),e.Hb(2048,null,o.o,null,[o.g]),e.rb(110,16384,null,0,o.p,[[4,o.o]],null,null),e.Hb(512,null,i.Nc,i.Nc,[]),(l()(),e.sb(112,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.rb(113,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Kb(-1,null,["Reactive"])),(l()(),e.sb(115,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,r.K,r.o)),e.rb(116,49152,null,0,i.x,[],null,null),(l()(),e.Kb(-1,0,["Helper text"])),(l()(),e.sb(118,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,r.J,r.n)),e.rb(119,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Kb(-1,0,["Please translate in every language!"])),(l()(),e.sb(121,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Output texts"])),(l()(),e.sb(123,0,null,null,18,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.sb(124,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.sb(125,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Input"])),(l()(),e.sb(127,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(128,null,[" EN: ",""])),(l()(),e.sb(129,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(130,null,[" DE: ",""])),(l()(),e.sb(131,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(132,null,[" FR: "," "])),(l()(),e.sb(133,0,null,null,8,"div",[["class","clr-col-8"]],null,null,null,null,null)),(l()(),e.sb(134,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Textarea"])),(l()(),e.sb(136,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(137,null,[" EN: ",""])),(l()(),e.sb(138,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(139,null,[" DE: ",""])),(l()(),e.sb(140,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(141,null,[" FR: "," "])),(l()(),e.sb(142,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),e.rb(143,4243456,null,0,m.a,[],{code:[0,"code"]},null),(l()(),e.sb(144,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,g.b,g.a)),e.rb(145,4243456,null,0,m.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.sb(146,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Template driven"])),(l()(),e.sb(148,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Validation will happen on blur"])),(l()(),e.sb(150,0,null,null,68,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Cb(l,152).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Cb(l,152).onReset()&&t),t},null,null)),e.rb(151,16384,null,0,o.G,[],null,null),e.rb(152,4210688,null,0,o.r,[[8,null],[8,null]],null,null),e.Hb(2048,null,o.c,null,[o.r]),e.rb(154,16384,null,0,o.q,[[4,o.c]],null,null),e.Hb(512,null,i.Mc,i.Mc,[]),e.Hb(512,null,i.Pc,i.Pc,[]),e.rb(157,16384,null,0,i.cb,[i.Mc,i.Pc],null,null),(l()(),e.sb(158,0,null,null,18,"clr-multilingual-input",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrRequiredAllMultilang",""],["clrSelectedLang","EN"],["name","template1"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.data1=u)&&e),e},s.N,s.n)),e.rb(159,16384,null,0,d.R,[],null,null),e.Hb(1024,null,o.m,function(l){return[l]},[d.R]),e.rb(161,4374528,null,0,d.x,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Hb(1024,null,o.n,function(l){return[l]},[d.x]),e.rb(163,671744,null,0,o.s,[[2,o.c],[6,o.m],[8,null],[6,o.n]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),e.Fb(164,{updateOn:0}),e.Hb(2048,null,o.o,null,[o.s]),e.rb(166,16384,null,0,o.p,[[4,o.o]],null,null),e.Hb(512,null,i.Nc,i.Nc,[]),(l()(),e.sb(168,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.rb(169,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Kb(-1,null,["Template"])),(l()(),e.sb(171,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,r.J,r.n)),e.rb(172,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Kb(-1,0,["Please translate in every language!"])),(l()(),e.sb(174,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,r.K,r.o)),e.rb(175,49152,null,0,i.x,[],null,null),(l()(),e.Kb(-1,0,["Helper text"])),(l()(),e.sb(177,0,null,null,18,"clr-multilingual-textarea",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrRequiredAllMultilang",""],["clrSelectedLang","EN"],["name","template2"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.data2=u)&&e),e},s.O,s.o)),e.rb(178,16384,null,0,d.R,[],null,null),e.Hb(1024,null,o.m,function(l){return[l]},[d.R]),e.rb(180,4374528,null,0,d.A,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Hb(1024,null,o.n,function(l){return[l]},[d.A]),e.rb(182,671744,null,0,o.s,[[2,o.c],[6,o.m],[8,null],[6,o.n]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),e.Fb(183,{updateOn:0}),e.Hb(2048,null,o.o,null,[o.s]),e.rb(185,16384,null,0,o.p,[[4,o.o]],null,null),e.Hb(512,null,i.Nc,i.Nc,[]),(l()(),e.sb(187,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.rb(188,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Kb(-1,null,["Template"])),(l()(),e.sb(190,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,r.J,r.n)),e.rb(191,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Kb(-1,0,["Please translate in every language!"])),(l()(),e.sb(193,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,r.K,r.o)),e.rb(194,49152,null,0,i.x,[],null,null),(l()(),e.Kb(-1,0,["Helper text"])),(l()(),e.sb(196,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Output texts"])),(l()(),e.sb(198,0,null,null,18,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.sb(199,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.sb(200,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Input"])),(l()(),e.sb(202,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(203,null,[" EN: ",""])),(l()(),e.sb(204,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(205,null,[" DE: ",""])),(l()(),e.sb(206,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(207,null,[" FR: "," "])),(l()(),e.sb(208,0,null,null,8,"div",[["class","clr-col-8"]],null,null,null,null,null)),(l()(),e.sb(209,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Textarea"])),(l()(),e.sb(211,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(212,null,[" EN: ",""])),(l()(),e.sb(213,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(214,null,[" DE: ",""])),(l()(),e.sb(215,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(216,null,[" FR: "," "])),(l()(),e.sb(217,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Output texts"])),(l()(),e.sb(219,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),e.rb(220,4243456,null,0,m.a,[],{code:[0,"code"]},null),(l()(),e.sb(221,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,g.b,g.a)),e.rb(222,4243456,null,0,m.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,83,0,u.exampleForm),l(n,90,0,"clr-col-md-5","EN"),l(n,92,0,"sample1"),l(n,97,0),l(n,103,0),l(n,106,0,"clr-col-md-5","EN"),l(n,108,0,"sample2"),l(n,113,0),l(n,119,0),l(n,143,0,u.reactiveExample),l(n,145,0,u.reactiveTSExample,"typescript"),l(n,161,0,"clr-col-md-5","EN");var e=u.data1,t=l(n,164,0,"blur");l(n,163,0,"template1",e,t),l(n,169,0),l(n,172,0),l(n,180,0,"clr-col-md-5","EN");var r=u.data2,a=l(n,183,0,"blur");l(n,182,0,"template2",r,a),l(n,188,0),l(n,191,0),l(n,220,0,u.templateExample),l(n,222,0,u.templateTSExample,"typescript")},function(l,n){var u=n.component;l(n,0,0,!0),l(n,81,0,e.Cb(n,85).ngClassUntouched,e.Cb(n,85).ngClassTouched,e.Cb(n,85).ngClassPristine,e.Cb(n,85).ngClassDirty,e.Cb(n,85).ngClassValid,e.Cb(n,85).ngClassInvalid,e.Cb(n,85).ngClassPending,!0,e.Cb(n,88).layoutService.isHorizontal(),e.Cb(n,88).layoutService.isCompact()),l(n,89,0,e.Cb(n,90).formControl,e.Cb(n,90).multi,e.Cb(n,90).invalid,e.Cb(n,94).ngClassUntouched,e.Cb(n,94).ngClassTouched,e.Cb(n,94).ngClassPristine,e.Cb(n,94).ngClassDirty,e.Cb(n,94).ngClassValid,e.Cb(n,94).ngClassInvalid,e.Cb(n,94).ngClassPending),l(n,96,0,e.Cb(n,97).forAttr),l(n,99,0,!0),l(n,102,0,!0,"polite",e.Cb(n,103).describedByAttr),l(n,105,0,e.Cb(n,106).formControl,e.Cb(n,106).multi,e.Cb(n,106).invalid,e.Cb(n,110).ngClassUntouched,e.Cb(n,110).ngClassTouched,e.Cb(n,110).ngClassPristine,e.Cb(n,110).ngClassDirty,e.Cb(n,110).ngClassValid,e.Cb(n,110).ngClassInvalid,e.Cb(n,110).ngClassPending),l(n,112,0,e.Cb(n,113).forAttr),l(n,115,0,!0),l(n,118,0,!0,"polite",e.Cb(n,119).describedByAttr),l(n,128,0,u.exampleForm.get("sample1").value.get("EN")),l(n,130,0,u.exampleForm.get("sample1").value.get("DE")),l(n,132,0,u.exampleForm.get("sample1").value.get("FR")),l(n,137,0,u.exampleForm.get("sample2").value.get("EN")),l(n,139,0,u.exampleForm.get("sample2").value.get("DE")),l(n,141,0,u.exampleForm.get("sample2").value.get("FR")),l(n,150,0,e.Cb(n,154).ngClassUntouched,e.Cb(n,154).ngClassTouched,e.Cb(n,154).ngClassPristine,e.Cb(n,154).ngClassDirty,e.Cb(n,154).ngClassValid,e.Cb(n,154).ngClassInvalid,e.Cb(n,154).ngClassPending,!0,e.Cb(n,157).layoutService.isHorizontal(),e.Cb(n,157).layoutService.isCompact()),l(n,158,0,e.Cb(n,161).formControl,e.Cb(n,161).multi,e.Cb(n,161).invalid,e.Cb(n,166).ngClassUntouched,e.Cb(n,166).ngClassTouched,e.Cb(n,166).ngClassPristine,e.Cb(n,166).ngClassDirty,e.Cb(n,166).ngClassValid,e.Cb(n,166).ngClassInvalid,e.Cb(n,166).ngClassPending),l(n,168,0,e.Cb(n,169).forAttr),l(n,171,0,!0,"polite",e.Cb(n,172).describedByAttr),l(n,174,0,!0),l(n,177,0,e.Cb(n,180).formControl,e.Cb(n,180).multi,e.Cb(n,180).invalid,e.Cb(n,185).ngClassUntouched,e.Cb(n,185).ngClassTouched,e.Cb(n,185).ngClassPristine,e.Cb(n,185).ngClassDirty,e.Cb(n,185).ngClassValid,e.Cb(n,185).ngClassInvalid,e.Cb(n,185).ngClassPending),l(n,187,0,e.Cb(n,188).forAttr),l(n,190,0,!0,"polite",e.Cb(n,191).describedByAttr),l(n,193,0,!0),l(n,203,0,u.data1.get("EN")),l(n,205,0,u.data1.get("DE")),l(n,207,0,u.data1.get("FR")),l(n,212,0,u.data2.get("EN")),l(n,214,0,u.data2.get("DE")),l(n,216,0,u.data2.get("FR"))})}function w(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"clr-multilingual-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,y,K)),e.rb(1,114688,null,0,x,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,!0,!0)})}var E=e.ob("clr-multilingual-demo",x,w,{},{},[]),D=u("Ip0R"),M=u("XPsC"),N=u("ZYCi"),F=u("JsA7");u.d(n,"MultilingualInputDemoModuleNgFactory",function(){return H});var H=e.pb(t,[],function(l){return e.zb([e.Ab(512,e.j,e.db,[[8,[r.ab,r.a,r.b,r.d,r.e,r.f,r.g,r.h,r.c,r.bb,r.cb,r.db,r.eb,a.a,s.a,E]],[3,e.j],e.z]),e.Ab(4608,D.s,D.r,[e.w,[2,D.K]]),e.Ab(4608,o.D,o.D,[]),e.Ab(4608,o.e,o.e,[]),e.Ab(4608,d.f,d.f,[]),e.Ab(1073742336,D.c,D.c,[]),e.Ab(1073742336,o.C,o.C,[]),e.Ab(1073742336,o.k,o.k,[]),e.Ab(1073742336,o.x,o.x,[]),e.Ab(1073742336,i.gb,i.gb,[]),e.Ab(1073742336,i.Hc,i.Hc,[]),e.Ab(1073742336,i.Fe,i.Fe,[]),e.Ab(1073742336,i.Y,i.Y,[]),e.Ab(1073742336,i.i,i.i,[]),e.Ab(1073742336,i.ab,i.ab,[]),e.Ab(1073742336,i.u,i.u,[]),e.Ab(1073742336,i.Qc,i.Qc,[]),e.Ab(1073742336,i.s,i.s,[]),e.Ab(1073742336,i.Tc,i.Tc,[]),e.Ab(1073742336,i.O,i.O,[]),e.Ab(1073742336,i.lb,i.lb,[]),e.Ab(1073742336,i.Bb,i.Bb,[]),e.Ab(1073742336,i.Fb,i.Fb,[]),e.Ab(1073742336,i.Jb,i.Jb,[]),e.Ab(1073742336,i.dc,i.dc,[]),e.Ab(1073742336,i.db,i.db,[]),e.Ab(1073742336,i.rb,i.rb,[]),e.Ab(1073742336,i.dd,i.dd,[]),e.Ab(1073742336,i.gd,i.gd,[]),e.Ab(1073742336,i.S,i.S,[]),e.Ab(1073742336,i.H,i.H,[]),e.Ab(1073742336,i.Tb,i.Tb,[]),e.Ab(1073742336,i.jc,i.jc,[]),e.Ab(1073742336,i.y,i.y,[]),e.Ab(1073742336,i.vb,i.vb,[]),e.Ab(1073742336,i.qb,i.qb,[]),e.Ab(1073742336,i.n,i.n,[]),e.Ab(1073742336,i.o,i.o,[]),e.Ab(1073742336,i.tb,i.tb,[]),e.Ab(1073742336,i.yb,i.yb,[]),e.Ab(1073742336,i.de,i.de,[]),e.Ab(1073742336,i.ac,i.ac,[]),e.Ab(1073742336,i.oc,i.oc,[]),e.Ab(1073742336,i.ob,i.ob,[]),e.Ab(1073742336,i.Mb,i.Mb,[]),e.Ab(1073742336,i.gc,i.gc,[]),e.Ab(1073742336,i.Cb,i.Cb,[]),e.Ab(1073742336,i.sc,i.sc,[]),e.Ab(1073742336,i.se,i.se,[]),e.Ab(1073742336,i.re,i.re,[]),e.Ab(1073742336,i.a,i.a,[]),e.Ab(1073742336,M.a,M.a,[]),e.Ab(1073742336,N.p,N.p,[[2,N.u],[2,N.l]]),e.Ab(1073742336,F.a,F.a,[]),e.Ab(1073742336,d.cb,d.cb,[]),e.Ab(1073742336,d.M,d.M,[]),e.Ab(1073742336,d.s,d.s,[]),e.Ab(1073742336,d.K,d.K,[]),e.Ab(1073742336,d.h,d.h,[]),e.Ab(1073742336,d.e,d.e,[]),e.Ab(1073742336,d.w,d.w,[]),e.Ab(1073742336,d.o,d.o,[]),e.Ab(1073742336,d.C,d.C,[]),e.Ab(1073742336,d.u,d.u,[]),e.Ab(1073742336,d.c,d.c,[]),e.Ab(1073742336,d.F,d.F,[]),e.Ab(1073742336,d.T,d.T,[]),e.Ab(1073742336,d.Y,d.Y,[]),e.Ab(1073742336,d.O,d.O,[]),e.Ab(1073742336,d.j,d.j,[]),e.Ab(1073742336,d.q,d.q,[]),e.Ab(1073742336,d.Q,d.Q,[]),e.Ab(1073742336,d.lb,d.lb,[]),e.Ab(1073742336,d.z,d.z,[]),e.Ab(1073742336,d.a,d.a,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,N.j,function(){return[[{path:"",component:x}]]},[])])})}}]);