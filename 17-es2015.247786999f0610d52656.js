(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{lJe0:function(t,e,i){"use strict";i.r(e),i.d(e,"HistoryDemoModule",(function(){return u}));var r=i("ofXK"),o=i("8MG2"),n=i("6Y1o"),a=i("N+3j"),b=i("fXoL"),c=i("0G9f"),s=i("tyNb"),d=i("vAyd");let l=(()=>{class t extends a.a{constructor(t){super("history"),this.historyService=t,this.htmlExample='\n<clr-history [clrUsername]=""admin"" [clrContext]="context"></clr-history>\n',this.htmlExamplePinned='\n<clr-history-pinned [clrUsername]=""admin"" [clrContext]="context"></clr-history-pinned>\n',this.angularExample='\nconst historyEntry1: ClrHistoryModel = {username: "admin", pageName: "DocPage",\nurl: "https://porscheinformatik.github.io/clarity-addons/documentation/latest/get-started", title: "DocPage",\ncontext: {\n    applicationName: "ADDONS"\n}};\nthis.historyService.addHistoryEntry(historyEntry1);\nconst historyEntry2: ClrHistoryModel = {username: "admin", pageName: "SourcePage",\nurl: "https://porscheinformatik.github.io/clarity-addons/documentation/latest/get-started", title: "SourcePage",\ncontext: {\n    applicationName: "ADDONS"\n}};\nthis.historyService.addHistoryEntry(historyEntry2);',this.angularExampleContext='\ncontext = {["applicationName"] : "ADDONS"};\n',this.context={applicationName:"ADDONS"},this.domain="porscheinformatik.github.io"}ngOnInit(){this.historyService.setHistoryPinned("admin",!0,this.domain),this.historyService.addHistoryEntry({username:"admin",pageName:"DocPage",url:"https://porscheinformatik.github.io/clarity-addons/documentation/latest/get-started",title:"DocPage",context:{applicationName:"ADDONS"}},this.domain),this.historyService.addHistoryEntry({username:"admin",pageName:"SourcePage",url:"https://github.com/porscheinformatik/clarity-addons",title:"SourcePage",context:{applicationName:"ADDONS"}},this.domain),this.historyService.addHistoryEntry({username:"admin",pageName:"GitHub",url:"https://github.com/porscheinformatik/clarity-addons",title:"GitHub",context:{applicationName:"ADDONS"}},this.domain)}}return t.\u0275fac=function(e){return new(e||t)(b.Ib(n.r))},t.\u0275cmp=b.Cb({type:t,selectors:[["clr-history-demo"]],hostVars:4,hostBindings:function(t,e){2&t&&b.Ab("content-area",!0)("dox-content-panel",!0)},features:[b.wb([n.r]),b.ub],decls:196,vars:16,consts:[[3,"ng","ui","title","newLayout"],["id","generic-pager-header",1,"component-summary"],["routerLink","/documentation/latest/breadcrumb","routerLinkActive","active",1,"nav-link"],["id","design-guidelines"],[1,"row"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[1,"clr-code"],["routerLink","/full-page-layouts/content-with-history","routerLinkActive","active",1,"nav-link"],[3,"clrCode","clrLanguage"],[1,"clrweb-DoxMedia"],[1,"clrweb-DoxMedia-block"],[1,"clrweb-DoxMedia-img","history-demo"],[3,"clrUsername","clrContext","clrDomain"],[3,"clrCode"]],template:function(t,e){1&t&&(b.Ob(0,"clr-doc-wrapper",0),b.Ob(1,"article"),b.Ob(2,"h5",1),b.Bc(3," The History is used to navigate back to the recently viewed pages similar to the browser's history. It must be pointed out that the history uses a historical path, rather than "),b.Ob(4,"a",2),b.Bc(5,"Breadcrumb"),b.Nb(),b.Bc(6," hierarchical one. "),b.Nb(),b.Ob(7,"div",3),b.Ob(8,"h3"),b.Bc(9,"Usage"),b.Nb(),b.Ob(10,"p"),b.Bc(11,"Use History in your application when the last recently visited pages are to high importance for your user. "),b.Nb(),b.Ob(12,"p"),b.Bc(13," Further the information structure of your application plays an important part. If the information structure forms a semantic net - the History is recommended if it forms a hierarchical tree, breadcrumbs might be suitable to aid your users navigating. "),b.Nb(),b.Ob(14,"h4"),b.Bc(15,"Features"),b.Nb(),b.Ob(16,"p"),b.Bc(17," Pin - The history provides a pin-feature. If the history is pinned it is shown above the page title as a list of links in the history-bar. If the history is unpinned the last visited pages are shown as a dropdown beneath the history icon. "),b.Nb(),b.Ob(18,"p"),b.Bc(19," If the users pins the history this setting must be stored to the users-settings/browser-storage/cookie. Default behavior, pinned or unpinned, should be decided on the applications target "),b.Nb(),b.Ob(20,"h4"),b.Bc(21,"Placement"),b.Nb(),b.Ob(22,"p"),b.Bc(23," The history icon is placed in the command-bar in the upper right of the page layout. "),b.Nb(),b.Ob(24,"h3"),b.Bc(25,"Behavior"),b.Nb(),b.Ob(26,"p"),b.Bc(27,"Some basic rules apply to the History "),b.Nb(),b.Ob(28,"ol"),b.Ob(29,"li"),b.Bc(30,"The current page is not displayed"),b.Nb(),b.Ob(31,"li"),b.Bc(32,"Cycles are not logged, so the same page does not appear multiple times in the path."),b.Nb(),b.Ob(33,"li"),b.Bc(34,"Maximum of 3 items are displayed in the path"),b.Nb(),b.Ob(35,"li"),b.Bc(36,"Browser back (via Browser-functionality or via Back-Link) calls the last recorded page in the history."),b.Nb(),b.Nb(),b.Ob(37,"h3"),b.Bc(38,"Notes"),b.Nb(),b.Ob(39,"p"),b.Bc(40,"Creation pages (when on the last visited page a new entity is created) should be omitted in the historical path at this either requires to update an already created object or triggers a possibly unwanted additional creation (duplicate) of an object."),b.Nb(),b.Ob(41,"p"),b.Bc(42,"Obviously the History AND Breadcrumb SHOULD NOT BE used together on a page."),b.Nb(),b.Nb(),b.Ob(43,"div",4),b.Ob(44,"h3"),b.Bc(45,"Summary of Options"),b.Nb(),b.Ob(46,"table",5),b.Ob(47,"thead"),b.Ob(48,"tr"),b.Ob(49,"th",6),b.Bc(50,"Input"),b.Nb(),b.Ob(51,"th",7),b.Bc(52,"Values"),b.Nb(),b.Ob(53,"th",8),b.Bc(54,"Default"),b.Nb(),b.Ob(55,"th",6),b.Bc(56,"Effect"),b.Nb(),b.Nb(),b.Nb(),b.Ob(57,"tbody"),b.Ob(58,"tr"),b.Ob(59,"td",6),b.Ob(60,"b"),b.Bc(61,"[clrUsername]"),b.Nb(),b.Ob(62,"div",9),b.Bc(63,"Type: String"),b.Nb(),b.Ob(64,"div",9),b.Bc(65,"empty"),b.Nb(),b.Nb(),b.Ob(66,"td",7),b.Bc(67,"string"),b.Nb(),b.Ob(68,"td",8),b.Bc(69,"empty"),b.Nb(),b.Ob(70,"td",6),b.Bc(71,"The current username."),b.Nb(),b.Nb(),b.Ob(72,"tr"),b.Ob(73,"td",6),b.Ob(74,"b"),b.Bc(75,"[clrContext]"),b.Nb(),b.Ob(76,"div",9),b.Bc(77,"List of key:string/value:string"),b.Nb(),b.Jb(78,"div",9),b.Nb(),b.Ob(79,"td",7),b.Bc(80,"List of key:string/value:string"),b.Nb(),b.Jb(81,"td",8),b.Ob(82,"td",6),b.Bc(83,"A map of context attributes. You can define any param you want. The history entries are saved/filtered by context."),b.Nb(),b.Nb(),b.Ob(84,"tr"),b.Ob(85,"td",6),b.Ob(86,"b"),b.Bc(87,"[clrPinActive]"),b.Nb(),b.Ob(88,"div",9),b.Bc(89,"boolean"),b.Nb(),b.Ob(90,"div",9),b.Bc(91,"true"),b.Nb(),b.Nb(),b.Ob(92,"td",7),b.Bc(93,"boolean"),b.Nb(),b.Ob(94,"td",8),b.Bc(95,"true"),b.Nb(),b.Ob(96,"td",6),b.Bc(97,"If true, the pinned history feature is available."),b.Nb(),b.Nb(),b.Ob(98,"tr"),b.Ob(99,"td",6),b.Ob(100,"b"),b.Bc(101,"[clrDropdownHeader]"),b.Nb(),b.Ob(102,"div",9),b.Bc(103,"string"),b.Nb(),b.Ob(104,"div",9),b.Bc(105,"History"),b.Nb(),b.Nb(),b.Ob(106,"td",7),b.Bc(107,"string"),b.Nb(),b.Ob(108,"td",8),b.Bc(109,"History"),b.Nb(),b.Ob(110,"td",6),b.Bc(111,"The header text in the dropdonw. You can provide your own translated text."),b.Nb(),b.Nb(),b.Ob(112,"tr"),b.Ob(113,"td",6),b.Ob(114,"b"),b.Bc(115,"[clrDropdownPin]"),b.Nb(),b.Ob(116,"div",9),b.Bc(117,"string"),b.Nb(),b.Ob(118,"div",9),b.Bc(119,"Pin History"),b.Nb(),b.Nb(),b.Ob(120,"td",7),b.Bc(121,"string"),b.Nb(),b.Ob(122,"td",8),b.Bc(123,"Pin History"),b.Nb(),b.Ob(124,"td",6),b.Bc(125,"The pin histoy text in the dropdonw. You can provide your own translated text. "),b.Nb(),b.Nb(),b.Ob(126,"tr"),b.Ob(127,"td",6),b.Ob(128,"b"),b.Bc(129,"[clrDropdownUnpin]"),b.Nb(),b.Ob(130,"div",9),b.Bc(131,"string"),b.Nb(),b.Ob(132,"div",9),b.Bc(133,"History"),b.Nb(),b.Nb(),b.Ob(134,"td",7),b.Bc(135,"string"),b.Nb(),b.Ob(136,"td",8),b.Bc(137,"History"),b.Nb(),b.Ob(138,"td",6),b.Bc(139,"The unpin histoy text in the dropdonw. You can provide your own translated text."),b.Nb(),b.Nb(),b.Ob(140,"tr"),b.Ob(141,"td",6),b.Ob(142,"b"),b.Bc(143,"[clrDomain]"),b.Nb(),b.Ob(144,"div",9),b.Bc(145,"string"),b.Nb(),b.Jb(146,"div",9),b.Nb(),b.Ob(147,"td",7),b.Bc(148,"string"),b.Nb(),b.Jb(149,"td",8),b.Ob(150,"td",6),b.Bc(151,"The domain name for storing the coockie values for."),b.Nb(),b.Nb(),b.Ob(152,"tr"),b.Ob(153,"td",6),b.Ob(154,"b"),b.Bc(155,"[clrPosition]"),b.Nb(),b.Ob(156,"div",9),b.Bc(157,"string"),b.Nb(),b.Ob(158,"div",9),b.Bc(159,"bottom-right"),b.Nb(),b.Nb(),b.Ob(160,"td",7),b.Bc(161,"string"),b.Nb(),b.Ob(162,"td",8),b.Bc(163,"bottom-right"),b.Nb(),b.Ob(164,"td",6),b.Bc(165,"The style for determining the position of the history component."),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(166,"div",10),b.Ob(167,"h3",11),b.Bc(168,"Code & Examples"),b.Nb(),b.Ob(169,"p"),b.Bc(170," To set the history, the service "),b.Ob(171,"code",12),b.Bc(172,"ClrHistoryService"),b.Nb(),b.Bc(173," in conjunction with "),b.Ob(174,"code",12),b.Bc(175,"ClrHistoryModel"),b.Nb(),b.Bc(176," has to be used. Pagelayout with "),b.Ob(177,"a",13),b.Bc(178,"History"),b.Nb(),b.Bc(179,". "),b.Nb(),b.Jb(180,"clr-code-snippet",14),b.Jb(181,"clr-code-snippet",14),b.Ob(182,"div",15),b.Ob(183,"div",16),b.Ob(184,"div",17),b.Jb(185,"clr-history",18),b.Nb(),b.Nb(),b.Nb(),b.Ob(186,"p"),b.Bc(187," To display the history simply place the angular component. "),b.Nb(),b.Jb(188,"clr-code-snippet",19),b.Ob(189,"div",15),b.Ob(190,"div",16),b.Ob(191,"div",17),b.Jb(192,"clr-history-pinned",18),b.Nb(),b.Nb(),b.Nb(),b.Ob(193,"p"),b.Bc(194," To use the pinned feature simply place the angular component. "),b.Nb(),b.Jb(195,"clr-code-snippet",19),b.Nb(),b.Nb(),b.Nb()),2&t&&(b.fc("ng",e.ng)("ui",e.ui)("title",e.title)("newLayout",e.newLayout),b.xb(180),b.fc("clrCode",e.angularExample)("clrLanguage","typescript"),b.xb(1),b.fc("clrCode",e.angularExampleContext)("clrLanguage","typescript"),b.xb(4),b.fc("clrUsername","admin")("clrContext",e.context)("clrDomain","porscheinformatik.github.io"),b.xb(3),b.fc("clrCode",e.htmlExample),b.xb(4),b.fc("clrUsername","admin")("clrContext",e.context)("clrDomain","porscheinformatik.github.io"),b.xb(3),b.fc("clrCode",e.htmlExamplePinned))},directives:[c.a,s.f,s.e,d.a,n.p,n.q],styles:[".history-demo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { display: block; margin-top: -12px; }",".clrweb-DoxMedia-block[_ngcontent-%COMP%] { min-height: 60px; }"]}),t})();var h=i("JsA7"),p=i("XPsC");let u=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(e){return new(e||t)},imports:[[r.c,p.a,h.a,s.g.forChild([{path:"",component:l}]),o.a,n.b]]}),t})()}}]);