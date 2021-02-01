(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rbve:function(c,e,a){"use strict";a.r(e),a.d(e,"CardsDemoModule",(function(){return f}));var t=a("3Pt+"),d=a("ofXK"),n=a("8MG2"),l=a("N+3j"),i=a("fXoL"),r=a("0G9f"),o=a("vAyd");function b(c,e){1&c&&(i.Ob(0,"div",7),i.Bc(1," Click to select me "),i.Nb())}function s(c,e){1&c&&(i.Ob(0,"div",7),i.Bc(1," I am the selected card "),i.Nb())}function v(c,e){if(1&c){const c=i.Pb();i.Ob(0,"div",4),i.Ob(1,"div",20),i.Vb("click",(function(){i.rc(c);const a=e.index;return i.Xb().activateCard(a)})),i.Ob(2,"div",6),i.Bc(3),i.Nb(),i.zc(4,b,2,0,"div",21),i.zc(5,s,2,0,"div",21),i.Nb(),i.Nb()}if(2&c){const c=e.$implicit;i.xb(1),i.Ab("card-active",c.active),i.xb(2),i.Dc(" ",c.title," "),i.xb(1),i.fc("ngIf",!c.active),i.xb(1),i.fc("ngIf",c.active)}}function h(c,e){1&c&&(i.Ob(0,"clr-dropdown-menu",22),i.Ob(1,"button",23),i.Bc(2," Edit "),i.Nb(),i.Ob(3,"button",23),i.Bc(4," Duplicate "),i.Nb(),i.Ob(5,"button",23),i.Bc(6," Delete "),i.Nb(),i.Nb())}let p=(()=>{class c extends l.a{constructor(){super("cards"),this.htmlExample='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n',this.htmlExamplePlaceholder='\n<div class="card card-placeholder">\n    <div class="card-header">\n        Placeholder card\n    </div>\n    <div class="card-block">\n        Card block\n        <div>\n            <a class="btn btn-link">Action</a>\n        </div>\n    </div>\n</div>\n',this.htmlExampleCustomActions='\n<div class="card">\n    <div class="card-header">\n        Card header with custom actions\n        <clr-dropdown class="card-actions">\n            <button type="button" class="btn btn-icon btn-link card-action dropdown-toggle" clrDropdownTrigger>\n                <clr-icon shape="ellipsis-vertical"></clr-icon>\n            </button>\n            <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n                ...\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    <div class="card-block">\n        Card Block\n    </div>\n</div>\n',this.cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}]}activateCard(c){for(let e of this.cards)e.active=!1;this.cards[c].active=!0}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=i.Cb({type:c,selectors:[["clr-cards-demo"]],hostVars:4,hostBindings:function(c,e){2&c&&i.Ab("content-area",!0)("dox-content-panel",!0)},features:[i.ub],decls:85,vars:5,consts:[[3,"title"],["id","cards-header",1,"component-summary"],["id","design-guidelines"],[1,"clr-row"],[1,"clr-col-4"],[1,"card","clickable"],[1,"card-header"],[1,"card-block"],["href","https://clarity.design/documentation/cards"],["class","clr-col-4",4,"ngFor","ngForOf"],[1,"clr-code"],["id","examples"],[3,"clrCode"],[1,"card","card-placeholder"],[1,"btn","btn-link"],[1,"card"],[1,"card-actions"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","card-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],[1,"card","selectable",3,"click"],["class","card-block",4,"ngIf"],["clrPosition","bottom-right"],["type","button","clrDropdownItem",""]],template:function(c,e){1&c&&(i.Ob(0,"clr-doc-wrapper",0),i.Ob(1,"article"),i.Ob(2,"h5",1),i.Bc(3,"The Addons extend the default Clarity cards by providing following additional types:"),i.Nb(),i.Ob(4,"ul"),i.Ob(5,"li"),i.Bc(6,"Selectable card. The selected stays visually highlighted."),i.Nb(),i.Ob(7,"li"),i.Bc(8,"Placeholder card. Represents an empty card which can be filled by user actions."),i.Nb(),i.Nb(),i.Ob(9,"h2"),i.Bc(10,"Selectable card"),i.Nb(),i.Ob(11,"div",2),i.Ob(12,"h3"),i.Bc(13,"Behavior"),i.Nb(),i.Ob(14,"p"),i.Bc(15,"Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below."),i.Nb(),i.Ob(16,"h6"),i.Bc(17,"Default clickable card (Standard Clarity)"),i.Nb(),i.Ob(18,"div",3),i.Ob(19,"div",4),i.Ob(20,"div",5),i.Ob(21,"div",6),i.Bc(22," Default card "),i.Nb(),i.Ob(23,"div",7),i.Bc(24," See the official "),i.Ob(25,"a",8),i.Bc(26,"Clarity documentation"),i.Nb(),i.Bc(27," for details. "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(28,"h6"),i.Bc(29,"Selectable card (Clarity Addons)"),i.Nb(),i.Ob(30,"div",3),i.zc(31,v,6,5,"div",9),i.Nb(),i.Ob(32,"h3"),i.Bc(33,"Usage"),i.Nb(),i.Ob(34,"p"),i.Bc(35," On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "),i.Ob(36,"code",10),i.Bc(37,"selectable"),i.Nb(),i.Bc(38," instead of the clarity-default "),i.Ob(39,"code",10),i.Bc(40,"clickable"),i.Nb(),i.Bc(41," class. Use the "),i.Ob(42,"code",10),i.Bc(43,"card-active"),i.Nb(),i.Bc(44," class to mark the currently selected one. "),i.Nb(),i.Nb(),i.Ob(45,"div",11),i.Jb(46,"clr-code-snippet",12),i.Nb(),i.Ob(47,"h2"),i.Bc(48,"Placeholder card"),i.Nb(),i.Bc(49," The placeholder card represents an empty card by a dashed border. The style is provided by class "),i.Ob(50,"code",10),i.Bc(51,"card-placeholder"),i.Nb(),i.Bc(52,". All buttons inside a placeholder card should be flat (btn-link). "),i.Ob(53,"div",3),i.Ob(54,"div",4),i.Ob(55,"div",13),i.Ob(56,"div",6),i.Bc(57," Placeholder card "),i.Nb(),i.Ob(58,"div",7),i.Bc(59," Card block "),i.Ob(60,"div"),i.Ob(61,"a",14),i.Bc(62,"Action"),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Jb(63,"clr-code-snippet",12),i.Ob(64,"h2"),i.Bc(65,"Card with custom actions"),i.Nb(),i.Bc(66," To use a card with custom actions, use the classes "),i.Ob(67,"code",10),i.Bc(68,"card-actions"),i.Nb(),i.Bc(69," on the dropdown itself and "),i.Ob(70,"code",10),i.Bc(71,"card-action"),i.Nb(),i.Bc(72," on the dropdown-toggle. "),i.Ob(73,"div",3),i.Ob(74,"div",4),i.Ob(75,"div",15),i.Ob(76,"div",6),i.Bc(77," Card header with custom actions "),i.Ob(78,"clr-dropdown",16),i.Ob(79,"button",17),i.Jb(80,"clr-icon",18),i.Nb(),i.zc(81,h,7,0,"clr-dropdown-menu",19),i.Nb(),i.Nb(),i.Ob(82,"div",7),i.Bc(83," Card Block "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Jb(84,"clr-code-snippet",12),i.Nb(),i.Nb()),2&c&&(i.fc("title",e.title),i.xb(31),i.fc("ngForOf",e.cards),i.xb(15),i.fc("clrCode",e.htmlExample),i.xb(17),i.fc("clrCode",e.htmlExamplePlaceholder),i.xb(21),i.fc("clrCode",e.htmlExampleCustomActions))},directives:[r.a,d.p,o.a,n.u,n.x,n.B,n.D,d.q,n.w,n.v],encapsulation:2}),c})();var u=a("JsA7"),O=a("tyNb"),m=a("XPsC"),N=a("6Y1o");let f=(()=>{class c{}return c.\u0275mod=i.Gb({type:c}),c.\u0275inj=i.Fb({factory:function(e){return new(e||c)},imports:[[d.c,t.h,n.a,m.a,u.a,O.g.forChild([{path:"",component:p}]),N.b]]}),c})()}}]);