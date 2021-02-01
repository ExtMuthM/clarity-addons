(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{SH1n:function(e,r,b){"use strict";b.r(r),b.d(r,"BreadcrumbDemoModule",function(){return p});var c=b("ofXK"),a=b("8MG2"),t=b("6Y1o"),n=b("N+3j"),i=b("fXoL"),o=b("0G9f"),d=b("vAyd");let l=(()=>{class e extends n.a{constructor(e){super("breadcrumb"),this.breadcrumbService=e,this.htmlExample="\n<clr-breadcrumb></clr-breadcrumb>\n",this.angularExample='\nconst breadcrumb1: ClrBreadcrumbModel = { label: "Home", url: "/" }\nconst breadcrumb2: ClrBreadcrumbModel = { label: "Parent", url: "/" }\nconst breadcrumb3: ClrBreadcrumbModel = { label: "Current Page" }\nthis.breadcrumbService.updateBreadcrumb([\n    breadcrumb1, breadcrumb2, breadcrumb3\n]);\n'}ngOnInit(){this.breadcrumbService.updateBreadcrumb([{label:"Home",url:"/"},{label:"Parent",url:"/"},{label:"Current Page"}])}}return e.\u0275fac=function(r){return new(r||e)(i.Jb(t.e))},e.\u0275cmp=i.Db({type:e,selectors:[["clr-breadcrumb-demo"]],hostVars:4,hostBindings:function(e,r){2&e&&i.Bb("content-area",!0)("dox-content-panel",!0)},features:[i.vb],decls:73,vars:4,consts:[[3,"title"],["id","generic-pager-header",1,"component-summary"],["id","design-guidelines"],[1,"row"],[1,"col-md-12","col-lg-6"],[1,"clrweb-DoxMedia","is-do-block"],[1,"clrweb-DoxMedia-block"],[1,"clrweb-DoxMedia-img","breadcrumb-demo"],[1,"clrweb-DoxMedia-text"],[1,"clrweb-DoxMedia-do-dont"],[1,"clrweb-DoxMedia","is-dont-block"],[1,"clrweb-DoxMedia-img","breadcrumb-demo-long"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","/"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"clrweb-DoxMedia"],[3,"clrCode","clrLanguage"],[3,"clrCode"]],template:function(e,r){1&e&&(i.Pb(0,"clr-doc-wrapper",0),i.Pb(1,"article"),i.Pb(2,"h5",1),i.Ac(3," Breadcrumbs are a type of secondary navigation scheme that reveals the user\u2019s location in a site or web app. "),i.Ob(),i.Pb(4,"div",2),i.Pb(5,"h3"),i.Ac(6,"Design Guidelines"),i.Ob(),i.Pb(7,"p"),i.Ac(8,"The use of breadcrumbs have been widely discussed in several ui/ux communities. Some users stick to them, others don't even recognize them."),i.Ob(),i.Pb(9,"p"),i.Ac(10,"For complex business applications, that provide a clear hierarchical structure (with parent-child relation between pages, which are probably deeply nested) the use can be justified."),i.Ob(),i.Pb(11,"p"),i.Ac(12,"Avoided should be solutions with historical breadcrumbs, since they are very seldom used, may lead to cycles inside the breadcrumb-trail and basically duplicate the browser's back functionality."),i.Ob(),i.Pb(13,"h3"),i.Ac(14,"Use when"),i.Ob(),i.Pb(15,"p"),i.Ac(16,"Your application provides a clear hierarchical structure. "),i.Kb(17,"br"),i.Ac(18," The site structure is deeply nested and the primary navigation scheme is not sufficient."),i.Ob(),i.Pb(19,"h3"),i.Ac(20,"Don't use when"),i.Ob(),i.Pb(21,"p"),i.Ac(22,"Your information architecture represent a network instead of a hierarchical tree of pages."),i.Kb(23,"br"),i.Ac(24," In that case you can not clearly name the current page's parent, and the breadcrumb trail can not represent the path the user has been taken through the application. "),i.Ob(),i.Ob(),i.Pb(25,"div",3),i.Pb(26,"div",4),i.Pb(27,"div",5),i.Pb(28,"div",6),i.Pb(29,"div",7),i.Kb(30,"clr-breadcrumb"),i.Ob(),i.Ob(),i.Pb(31,"div",8),i.Pb(32,"h6",9),i.Ac(33,"Do"),i.Ob(),i.Pb(34,"p"),i.Ac(35," Use breadcrumbs as hierarchical path to the current displayed page. "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(36,"div",4),i.Pb(37,"div",10),i.Pb(38,"div",6),i.Pb(39,"div",11),i.Pb(40,"ol",12),i.Pb(41,"li",13),i.Pb(42,"a",14),i.Ac(43,"Page before last"),i.Ob(),i.Ob(),i.Pb(44,"li",13),i.Pb(45,"a",14),i.Ac(46,"Last page"),i.Ob(),i.Ob(),i.Pb(47,"li",13),i.Ac(48,"Current Page"),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(49,"div",8),i.Pb(50,"h6",9),i.Ac(51,"Don't"),i.Ob(),i.Pb(52,"p"),i.Ac(53," Don't use historical breadcrumbs as browsing history. "),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(54,"div",15),i.Pb(55,"h3",16),i.Ac(56,"Code & Examples"),i.Ob(),i.Pb(57,"p"),i.Ac(58," To set the breadcrumbs, the service "),i.Pb(59,"code",17),i.Ac(60,"ClrBreadcrumbService"),i.Ob(),i.Ac(61," in conjunction with "),i.Pb(62,"code",17),i.Ac(63,"ClrBreadcrumbModel"),i.Ob(),i.Ac(64," has to be used. "),i.Ob(),i.Pb(65,"div",18),i.Pb(66,"div",6),i.Pb(67,"div",7),i.Kb(68,"clr-breadcrumb"),i.Ob(),i.Ob(),i.Ob(),i.Kb(69,"clr-code-snippet",19),i.Pb(70,"p"),i.Ac(71," To display the breadcrumbs simply place the angular component anywhere needed. "),i.Ob(),i.Kb(72,"clr-code-snippet",20),i.Ob(),i.Ob(),i.Ob()),2&e&&(i.gc("title",r.title),i.yb(69),i.gc("clrCode",r.angularExample)("clrLanguage","typescript"),i.yb(3),i.gc("clrCode",r.htmlExample))},directives:[o.a,t.d,d.a],styles:[".breadcrumb-demo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { display: block; margin-top: -12px; }",".breadcrumb-demo-long[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { margin-top: -12px; }",".clrweb-DoxMedia-block[_ngcontent-%COMP%] { min-height: 60px; }"]}),e})();var s=b("JsA7"),u=b("tyNb"),m=b("XPsC");let p=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(r){return new(r||e)},imports:[[c.c,m.a,s.a,u.g.forChild([{path:"",component:l}]),a.a,t.b]]}),e})()}}]);