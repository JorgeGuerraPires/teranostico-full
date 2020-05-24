function _toArray(l){return _arrayWithHoles(l)||_iterableToArray(l)||_unsupportedIterableToArray(l)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(l,n){if(l){if("string"==typeof l)return _arrayLikeToArray(l,n);var a=Object.prototype.toString.call(l).slice(8,-1);return"Object"===a&&l.constructor&&(a=l.constructor.name),"Map"===a||"Set"===a?Array.from(l):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(l,n):void 0}}function _arrayLikeToArray(l,n){(null==n||n>l.length)&&(n=l.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=l[a];return e}function _iterableToArray(l){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(l))return Array.from(l)}function _arrayWithHoles(l){if(Array.isArray(l))return l}function _defineProperties(l,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,a){return n&&_defineProperties(l.prototype,n),a&&_defineProperties(l,a),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3Nbe":function(l,n,a){"use strict";a.r(n);var e=a("8Y7J"),u=function l(){_classCallCheck(this,l)},t=a("fNgX"),r=a("t68o"),i=a("zbXB"),o=a("pMnS"),b=a("HsOI"),d=a("SVse"),s=a("ura0"),c=a("/q54"),m=a("VDRc"),f=a("lzlj"),p=a("igqZ"),F=a("omvX"),h=a("Nv++"),g=a("cUpR"),_=a("s7LF"),v=a("dJrM"),y=a("Xd0L"),C=a("IP0z"),w=a("/HVE"),D=a("ZwOa"),k=a("oapL"),S=a("Mr+X"),x=a("Gi4r"),M=a("bujt"),I=a("Fwaw"),q=a("5GAg"),K=a("TtEo"),L=a("02hT"),P=a("wHSu"),j=function(){function l(n,a,e){_classCallCheck(this,l),this.fb=n,this.authenticationService=a,this.utilService=e,this.hide=!0,this.isActive=!1,this.pageContent={header:{title:"Register"},info:{note:" After you create your account, we need to activate before you can access our system. It may take a while.",contactus:"Should you prefer, contact us on teranostico@gmail.com"}},this.faUserPlus=P.l,this.formModel=n.group({name:["",[_.q.required,_.q.minLength(3)]],email:["",[_.q.required,_.q.email]],passwordsGroup:n.group({password:["",[_.q.minLength(5),_.q.required]],pconfirm:[""]},{validator:A})},{updateOn:"blur"})}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"register",value:function(){var l=this;this.authenticationService.register({email:this.formModel.value.email,password:this.formModel.value.passwordsGroup.password,name:this.formModel.value.name}).subscribe((function(n){return l.utilService.openSnackBar(n.success_msg,"x")}))}}]),l}();function A(l){var n=l.value,a=_toArray(Object.keys(n||{})),e=a[0];return a.slice(1).every((function(l){return n[l]===n[e]}))?null:{equal:!0}}var O=a("TTF2"),T=a("kEHr"),N=e.rb({encapsulation:0,styles:[[".card-center[_ngcontent-%COMP%]{padding-top:8rem}.text-block[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.example-header-image[_ngcontent-%COMP%]{background-image:url(Fiocruz.84e54333e59992938942.png);background-size:cover}.section-title-xs-margin[_ngcontent-%COMP%]{margin-right:5%;margin-left:5%;margin-bottom:10%}.error[_ngcontent-%COMP%]{color:red}.hasError[_ngcontent-%COMP%]{border:1px solid red}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]],data:{}});function E(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(1,16384,[[6,4]],0,b.b,[],null,null),(l()(),e.Mb(-1,null,[" The name is too short, should at least 2 character long."]))],null,(function(l,n){l(n,0,0,e.Fb(n,1).id)}))}function J(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(1,16384,[[6,4]],0,b.b,[],null,null),(l()(),e.Mb(-1,null,[" Required."]))],null,(function(l,n){l(n,0,0,e.Fb(n,1).id)}))}function z(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(1,16384,[[15,4]],0,b.b,[],null,null),(l()(),e.Mb(-1,null,[" Required "]))],null,(function(l,n){l(n,0,0,e.Fb(n,1).id)}))}function H(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(1,16384,[[15,4]],0,b.b,[],null,null),(l()(),e.Mb(-1,null,[" invalid Email "]))],null,(function(l,n){l(n,0,0,e.Fb(n,1).id)}))}function V(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,166,"section",[["ngClass.gt-md","card-center"]],null,null,null,null,null)),e.Jb(512,null,d.w,d.x,[e.r,e.s,e.k,e.D]),e.sb(2,933888,null,0,s.a,[e.k,c.j,c.f,d.w,[8,null]],{"ngClass.gt-md":[0,"ngClass.gt-md"]},null),(l()(),e.tb(3,0,null,null,163,"div",[["class","parent"],["fxFlexFill",""],["fxLayout","row"],["fxLayout.lt-md","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),e.sb(4,671744,null,0,m.c,[e.k,c.j,[2,m.i],c.f],{fxLayout:[0,"fxLayout"],"fxLayout.lt-md":[1,"fxLayout.lt-md"]},null),e.sb(5,671744,null,0,m.b,[e.k,c.j,[2,m.h],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.sb(6,671744,null,0,m.d,[e.k,c.j,m.e,c.f],null,null),(l()(),e.tb(7,0,null,null,159,"div",[["fxFlex","30%"],["ngClass.lt-md","section-title-xs-margin"]],null,null,null,null,null)),e.sb(8,671744,null,0,m.a,[e.k,c.j,c.e,m.g,c.f],{fxFlex:[0,"fxFlex"]},null),e.Jb(512,null,d.w,d.x,[e.r,e.s,e.k,e.D]),e.sb(10,933888,null,0,s.a,[e.k,c.j,c.f,d.w,[8,null]],{"ngClass.lt-md":[0,"ngClass.lt-md"]},null),(l()(),e.tb(11,0,null,null,155,"mat-card",[["class","mat-card"]],[[2,"mat-elevation-z2",null],[2,"mat-elevation-z8",null],[2,"_mat-animation-noopable",null]],null,null,f.d,f.a)),e.sb(12,49152,null,0,p.a,[[2,F.a]],null,null),(l()(),e.tb(13,0,null,0,16,"mat-card-header",[["class","mat-card-header"]],null,null,null,f.c,f.b)),e.sb(14,49152,null,0,p.e,[],null,null),(l()(),e.tb(15,0,null,0,1,"div",[["class","example-header-image mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),e.sb(16,16384,null,0,p.c,[],null,null),(l()(),e.tb(17,0,null,1,5,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),e.sb(18,16384,null,0,p.i,[],null,null),(l()(),e.tb(19,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),e.tb(20,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,t.d,t.c)),e.sb(21,573440,null,0,h.c,[g.b,h.a,h.d,[2,h.i]],{icon:[0,"icon"]},null),(l()(),e.Mb(22,null,[" "," "])),(l()(),e.tb(23,0,null,1,6,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),e.sb(24,16384,null,0,p.h,[],null,null),(l()(),e.tb(25,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.tb(26,0,null,null,3,"h6",[["class","text-justify"]],null,null,null,null,null)),(l()(),e.Mb(27,null,[" "," "])),(l()(),e.tb(28,0,null,null,1,"span",[["class","text-success"]],null,null,null,null,null)),(l()(),e.Mb(29,null,[" ",""])),(l()(),e.tb(30,0,null,0,129,"mat-card-content",[["class","text-block mat-card-content"]],null,null,null,null,null)),e.sb(31,16384,null,0,p.d,[],null,null),(l()(),e.tb(32,0,null,null,127,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,a){var u=!0;return"submit"===n&&(u=!1!==e.Fb(l,34).onSubmit(a)&&u),"reset"===n&&(u=!1!==e.Fb(l,34).onReset()&&u),u}),null,null)),e.sb(33,16384,null,0,_.u,[],null,null),e.sb(34,540672,null,0,_.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Jb(2048,null,_.b,null,[_.f]),e.sb(36,16384,null,0,_.m,[[4,_.b]],null,null),(l()(),e.tb(37,0,null,null,29,"mat-form-field",[["appearance","fill"],["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.sb(38,7520256,null,9,b.c,[e.k,e.h,[2,y.f],[2,C.b],[2,b.a],w.a,e.y,[2,F.a]],{appearance:[0,"appearance"]},null),e.Kb(603979776,1,{_controlNonStatic:0}),e.Kb(335544320,2,{_controlStatic:0}),e.Kb(603979776,3,{_labelChildNonStatic:0}),e.Kb(335544320,4,{_labelChildStatic:0}),e.Kb(603979776,5,{_placeholderChild:0}),e.Kb(603979776,6,{_errorChildren:1}),e.Kb(603979776,7,{_hintChildren:1}),e.Kb(603979776,8,{_prefixChildren:1}),e.Kb(603979776,9,{_suffixChildren:1}),(l()(),e.tb(48,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.sb(49,16384,[[3,4],[4,4]],0,b.g,[],null,null),(l()(),e.Mb(-1,null,["Name"])),(l()(),e.tb(51,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","name"],["matInput",""],["placeholder","e.g., Walter O'Brien"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,a){var u=!0;return"input"===n&&(u=!1!==e.Fb(l,52)._handleInput(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,52).onTouched()&&u),"compositionstart"===n&&(u=!1!==e.Fb(l,52)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e.Fb(l,52)._compositionEnd(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,56)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==e.Fb(l,56)._focusChanged(!0)&&u),"input"===n&&(u=!1!==e.Fb(l,56)._onInput()&&u),u}),null,null)),e.sb(52,16384,null,0,_.c,[e.D,e.k,[2,_.a]],null,null),e.Jb(1024,null,_.j,(function(l){return[l]}),[_.c]),e.sb(54,671744,null,0,_.e,[[3,_.b],[8,null],[8,null],[6,_.j],[2,_.t]],{name:[0,"name"]},null),e.Jb(2048,null,_.k,null,[_.e]),e.sb(56,999424,null,0,D.a,[e.k,w.a,[6,_.k],[2,_.n],[2,_.f],y.b,[8,null],k.a,e.y],{placeholder:[0,"placeholder"]},null),e.sb(57,16384,null,0,_.l,[[4,_.k]],null,null),e.Jb(2048,[[1,4],[2,4]],b.d,null,[D.a]),(l()(),e.tb(59,0,null,4,3,"mat-icon",[["class","mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,S.b,S.a)),e.sb(60,16384,[[9,4]],0,b.h,[],null,null),e.sb(61,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a],[2,e.l]],null,null),(l()(),e.Mb(-1,0,["sentiment_very_satisfied"])),(l()(),e.ib(16777216,null,5,1,null,E)),e.sb(64,16384,null,0,d.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,5,1,null,J)),e.sb(66,16384,null,0,d.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(67,0,null,null,32,"mat-form-field",[["appearance","fill"],["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.sb(68,7520256,null,9,b.c,[e.k,e.h,[2,y.f],[2,C.b],[2,b.a],w.a,e.y,[2,F.a]],{appearance:[0,"appearance"]},null),e.Kb(603979776,10,{_controlNonStatic:0}),e.Kb(335544320,11,{_controlStatic:0}),e.Kb(603979776,12,{_labelChildNonStatic:0}),e.Kb(335544320,13,{_labelChildStatic:0}),e.Kb(603979776,14,{_placeholderChild:0}),e.Kb(603979776,15,{_errorChildren:1}),e.Kb(603979776,16,{_hintChildren:1}),e.Kb(603979776,17,{_prefixChildren:1}),e.Kb(603979776,18,{_suffixChildren:1}),(l()(),e.tb(78,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.sb(79,16384,[[12,4],[13,4]],0,b.g,[],null,null),(l()(),e.Mb(-1,null,["Email"])),(l()(),e.tb(81,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","email"],["matInput",""],["placeholder","meuemail@email.com"],["type","email"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,a){var u=!0;return"input"===n&&(u=!1!==e.Fb(l,82)._handleInput(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,82).onTouched()&&u),"compositionstart"===n&&(u=!1!==e.Fb(l,82)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e.Fb(l,82)._compositionEnd(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,86)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==e.Fb(l,86)._focusChanged(!0)&&u),"input"===n&&(u=!1!==e.Fb(l,86)._onInput()&&u),u}),null,null)),e.sb(82,16384,null,0,_.c,[e.D,e.k,[2,_.a]],null,null),e.Jb(1024,null,_.j,(function(l){return[l]}),[_.c]),e.sb(84,671744,null,0,_.e,[[3,_.b],[8,null],[8,null],[6,_.j],[2,_.t]],{name:[0,"name"]},null),e.Jb(2048,null,_.k,null,[_.e]),e.sb(86,999424,null,0,D.a,[e.k,w.a,[6,_.k],[2,_.n],[2,_.f],y.b,[8,null],k.a,e.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.sb(87,16384,null,0,_.l,[[4,_.k]],null,null),e.Jb(2048,[[10,4],[11,4]],b.d,null,[D.a]),(l()(),e.tb(89,0,null,4,3,"mat-icon",[["class","mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,S.b,S.a)),e.sb(90,16384,[[18,4]],0,b.h,[],null,null),e.sb(91,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a],[2,e.l]],null,null),(l()(),e.Mb(-1,0,["sentiment_very_satisfied"])),(l()(),e.tb(93,0,null,6,2,"mat-hint",[["class","mat-hint"]],[[2,"mat-right",null],[1,"id",0],[1,"align",0]],null,null,null,null)),e.sb(94,16384,[[16,4]],0,b.f,[],null,null),(l()(),e.Mb(-1,null,["The email cannot be in our database already. It is a unique identifier."])),(l()(),e.ib(16777216,null,5,1,null,z)),e.sb(97,16384,null,0,d.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,5,1,null,H)),e.sb(99,16384,null,0,d.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.tb(100,0,null,null,59,"div",[["formGroupName","passwordsGroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),e.sb(101,212992,null,0,_.g,[[3,_.b],[8,null],[8,null]],{name:[0,"name"]},null),e.Jb(2048,null,_.b,null,[_.g]),e.sb(103,16384,null,0,_.m,[[4,_.b]],null,null),(l()(),e.tb(104,0,null,null,27,"mat-form-field",[["appearance","fill"],["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.sb(105,7520256,null,9,b.c,[e.k,e.h,[2,y.f],[2,C.b],[2,b.a],w.a,e.y,[2,F.a]],{appearance:[0,"appearance"]},null),e.Kb(603979776,19,{_controlNonStatic:0}),e.Kb(335544320,20,{_controlStatic:0}),e.Kb(603979776,21,{_labelChildNonStatic:0}),e.Kb(335544320,22,{_labelChildStatic:0}),e.Kb(603979776,23,{_placeholderChild:0}),e.Kb(603979776,24,{_errorChildren:1}),e.Kb(603979776,25,{_hintChildren:1}),e.Kb(603979776,26,{_prefixChildren:1}),e.Kb(603979776,27,{_suffixChildren:1}),(l()(),e.tb(115,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","password"],["matInput",""],["placeholder","password"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,a){var u=!0;return"input"===n&&(u=!1!==e.Fb(l,116)._handleInput(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,116).onTouched()&&u),"compositionstart"===n&&(u=!1!==e.Fb(l,116)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e.Fb(l,116)._compositionEnd(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,120)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==e.Fb(l,120)._focusChanged(!0)&&u),"input"===n&&(u=!1!==e.Fb(l,120)._onInput()&&u),u}),null,null)),e.sb(116,16384,null,0,_.c,[e.D,e.k,[2,_.a]],null,null),e.Jb(1024,null,_.j,(function(l){return[l]}),[_.c]),e.sb(118,671744,null,0,_.e,[[3,_.b],[8,null],[8,null],[6,_.j],[2,_.t]],{name:[0,"name"]},null),e.Jb(2048,null,_.k,null,[_.e]),e.sb(120,999424,null,0,D.a,[e.k,w.a,[6,_.k],[2,_.n],[2,_.f],y.b,[8,null],k.a,e.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.sb(121,16384,null,0,_.l,[[4,_.k]],null,null),e.Jb(2048,[[19,4],[20,4]],b.d,null,[D.a]),(l()(),e.tb(123,0,null,4,5,"button",[["mat-icon-button",""],["matSuffix",""]],[[1,"aria-label",0],[1,"aria-pressed",0],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var e=!0,u=l.component;return"click"===n&&(e=0!=(u.hide=!u.hide)&&e),e}),M.d,M.b)),e.sb(124,180224,null,0,I.b,[e.k,q.f,[2,F.a]],null,null),e.sb(125,16384,[[27,4]],0,b.h,[],null,null),(l()(),e.tb(126,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,S.b,S.a)),e.sb(127,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a],[2,e.l]],null,null),(l()(),e.Mb(128,0,["",""])),(l()(),e.tb(129,0,null,5,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),e.sb(130,16384,[[24,4]],0,b.b,[],null,null),(l()(),e.Mb(-1,null,["The password is at least 6 character long"])),(l()(),e.tb(132,0,null,null,27,"mat-form-field",[["appearance","fill"],["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.sb(133,7520256,null,9,b.c,[e.k,e.h,[2,y.f],[2,C.b],[2,b.a],w.a,e.y,[2,F.a]],{appearance:[0,"appearance"]},null),e.Kb(603979776,28,{_controlNonStatic:0}),e.Kb(335544320,29,{_controlStatic:0}),e.Kb(603979776,30,{_labelChildNonStatic:0}),e.Kb(335544320,31,{_labelChildStatic:0}),e.Kb(603979776,32,{_placeholderChild:0}),e.Kb(603979776,33,{_errorChildren:1}),e.Kb(603979776,34,{_hintChildren:1}),e.Kb(603979776,35,{_prefixChildren:1}),e.Kb(603979776,36,{_suffixChildren:1}),(l()(),e.tb(143,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","pconfirm"],["matInput",""],["placeholder","repeat the password"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,a){var u=!0;return"input"===n&&(u=!1!==e.Fb(l,144)._handleInput(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,144).onTouched()&&u),"compositionstart"===n&&(u=!1!==e.Fb(l,144)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e.Fb(l,144)._compositionEnd(a.target.value)&&u),"blur"===n&&(u=!1!==e.Fb(l,148)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==e.Fb(l,148)._focusChanged(!0)&&u),"input"===n&&(u=!1!==e.Fb(l,148)._onInput()&&u),u}),null,null)),e.sb(144,16384,null,0,_.c,[e.D,e.k,[2,_.a]],null,null),e.Jb(1024,null,_.j,(function(l){return[l]}),[_.c]),e.sb(146,671744,null,0,_.e,[[3,_.b],[8,null],[8,null],[6,_.j],[2,_.t]],{name:[0,"name"]},null),e.Jb(2048,null,_.k,null,[_.e]),e.sb(148,999424,null,0,D.a,[e.k,w.a,[6,_.k],[2,_.n],[2,_.f],y.b,[8,null],k.a,e.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.sb(149,16384,null,0,_.l,[[4,_.k]],null,null),e.Jb(2048,[[28,4],[29,4]],b.d,null,[D.a]),(l()(),e.tb(151,0,null,4,5,"button",[["mat-icon-button",""],["matSuffix",""]],[[1,"aria-label",0],[1,"aria-pressed",0],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var e=!0,u=l.component;return"click"===n&&(e=0!=(u.hide=!u.hide)&&e),e}),M.d,M.b)),e.sb(152,180224,null,0,I.b,[e.k,q.f,[2,F.a]],null,null),e.sb(153,16384,[[36,4]],0,b.h,[],null,null),(l()(),e.tb(154,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,S.b,S.a)),e.sb(155,9158656,null,0,x.b,[e.k,x.d,[8,null],[2,x.a],[2,e.l]],null,null),(l()(),e.Mb(156,0,["",""])),(l()(),e.tb(157,0,null,6,2,"mat-hint",[["class","error mat-hint"]],[[8,"hidden",0],[2,"mat-right",null],[1,"id",0],[1,"align",0]],null,null,null,null)),e.sb(158,16384,[[34,4]],0,b.f,[],null,null),(l()(),e.Mb(-1,null,[" Passwords must be the same"])),(l()(),e.tb(160,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,K.b,K.a)),e.sb(161,49152,null,0,L.a,[],null,null),(l()(),e.tb(162,0,null,0,4,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),e.sb(163,16384,null,0,p.b,[],null,null),(l()(),e.tb(164,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var e=!0;return"click"===n&&(e=!1!==l.component.register()&&e),e}),M.d,M.b)),e.sb(165,180224,null,0,I.b,[e.k,q.f,[2,F.a]],{disabled:[0,"disabled"]},null),(l()(),e.Mb(-1,0,["Register"]))],(function(l,n){var a=n.component;l(n,2,0,"card-center"),l(n,4,0,"row","column"),l(n,5,0,"center center"),l(n,8,0,"30%"),l(n,10,0,"section-title-xs-margin"),l(n,21,0,a.faUserPlus),l(n,34,0,a.formModel),l(n,38,0,"fill"),l(n,54,0,"name"),l(n,56,0,"e.g., Walter O'Brien"),l(n,61,0),l(n,64,0,a.formModel.controls.name.hasError("minlength")),l(n,66,0,a.formModel.controls.name.hasError("required")),l(n,68,0,"fill"),l(n,84,0,"email"),l(n,86,0,"meuemail@email.com","email"),l(n,91,0),l(n,97,0,!a.formModel.controls.email.dirty&&a.formModel.controls.email.touched),l(n,99,0,a.formModel.controls.email.invalid&&a.formModel.controls.email.dirty),l(n,101,0,"passwordsGroup"),l(n,105,0,"fill"),l(n,118,0,"password"),l(n,120,0,"password",a.hide?"password":"text"),l(n,127,0),l(n,133,0,"fill"),l(n,146,0,"pconfirm"),l(n,148,0,"repeat the password",a.hide?"password":"text"),l(n,155,0),l(n,165,0,a.formModel.invalid)}),(function(l,n){var a=n.component;l(n,11,0,!a.isActive,a.isActive,"NoopAnimations"===e.Fb(n,12)._animationMode),l(n,20,0,e.Fb(n,21).title,e.Fb(n,21).renderedIconHTML),l(n,22,0,a.pageContent.header.title),l(n,27,0,a.pageContent.info.note),l(n,29,0,a.pageContent.info.contactus),l(n,32,0,e.Fb(n,36).ngClassUntouched,e.Fb(n,36).ngClassTouched,e.Fb(n,36).ngClassPristine,e.Fb(n,36).ngClassDirty,e.Fb(n,36).ngClassValid,e.Fb(n,36).ngClassInvalid,e.Fb(n,36).ngClassPending),l(n,37,1,["standard"==e.Fb(n,38).appearance,"fill"==e.Fb(n,38).appearance,"outline"==e.Fb(n,38).appearance,"legacy"==e.Fb(n,38).appearance,e.Fb(n,38)._control.errorState,e.Fb(n,38)._canLabelFloat,e.Fb(n,38)._shouldLabelFloat(),e.Fb(n,38)._hasFloatingLabel(),e.Fb(n,38)._hideControlPlaceholder(),e.Fb(n,38)._control.disabled,e.Fb(n,38)._control.autofilled,e.Fb(n,38)._control.focused,"accent"==e.Fb(n,38).color,"warn"==e.Fb(n,38).color,e.Fb(n,38)._shouldForward("untouched"),e.Fb(n,38)._shouldForward("touched"),e.Fb(n,38)._shouldForward("pristine"),e.Fb(n,38)._shouldForward("dirty"),e.Fb(n,38)._shouldForward("valid"),e.Fb(n,38)._shouldForward("invalid"),e.Fb(n,38)._shouldForward("pending"),!e.Fb(n,38)._animationsEnabled]),l(n,51,1,[e.Fb(n,56)._isServer,e.Fb(n,56).id,e.Fb(n,56).placeholder,e.Fb(n,56).disabled,e.Fb(n,56).required,e.Fb(n,56).readonly&&!e.Fb(n,56)._isNativeSelect||null,e.Fb(n,56)._ariaDescribedby||null,e.Fb(n,56).errorState,e.Fb(n,56).required.toString(),e.Fb(n,57).ngClassUntouched,e.Fb(n,57).ngClassTouched,e.Fb(n,57).ngClassPristine,e.Fb(n,57).ngClassDirty,e.Fb(n,57).ngClassValid,e.Fb(n,57).ngClassInvalid,e.Fb(n,57).ngClassPending]),l(n,59,0,e.Fb(n,61).inline,"primary"!==e.Fb(n,61).color&&"accent"!==e.Fb(n,61).color&&"warn"!==e.Fb(n,61).color),l(n,67,1,["standard"==e.Fb(n,68).appearance,"fill"==e.Fb(n,68).appearance,"outline"==e.Fb(n,68).appearance,"legacy"==e.Fb(n,68).appearance,e.Fb(n,68)._control.errorState,e.Fb(n,68)._canLabelFloat,e.Fb(n,68)._shouldLabelFloat(),e.Fb(n,68)._hasFloatingLabel(),e.Fb(n,68)._hideControlPlaceholder(),e.Fb(n,68)._control.disabled,e.Fb(n,68)._control.autofilled,e.Fb(n,68)._control.focused,"accent"==e.Fb(n,68).color,"warn"==e.Fb(n,68).color,e.Fb(n,68)._shouldForward("untouched"),e.Fb(n,68)._shouldForward("touched"),e.Fb(n,68)._shouldForward("pristine"),e.Fb(n,68)._shouldForward("dirty"),e.Fb(n,68)._shouldForward("valid"),e.Fb(n,68)._shouldForward("invalid"),e.Fb(n,68)._shouldForward("pending"),!e.Fb(n,68)._animationsEnabled]),l(n,81,1,[e.Fb(n,86)._isServer,e.Fb(n,86).id,e.Fb(n,86).placeholder,e.Fb(n,86).disabled,e.Fb(n,86).required,e.Fb(n,86).readonly&&!e.Fb(n,86)._isNativeSelect||null,e.Fb(n,86)._ariaDescribedby||null,e.Fb(n,86).errorState,e.Fb(n,86).required.toString(),e.Fb(n,87).ngClassUntouched,e.Fb(n,87).ngClassTouched,e.Fb(n,87).ngClassPristine,e.Fb(n,87).ngClassDirty,e.Fb(n,87).ngClassValid,e.Fb(n,87).ngClassInvalid,e.Fb(n,87).ngClassPending]),l(n,89,0,e.Fb(n,91).inline,"primary"!==e.Fb(n,91).color&&"accent"!==e.Fb(n,91).color&&"warn"!==e.Fb(n,91).color),l(n,93,0,"end"==e.Fb(n,94).align,e.Fb(n,94).id,null),l(n,100,0,e.Fb(n,103).ngClassUntouched,e.Fb(n,103).ngClassTouched,e.Fb(n,103).ngClassPristine,e.Fb(n,103).ngClassDirty,e.Fb(n,103).ngClassValid,e.Fb(n,103).ngClassInvalid,e.Fb(n,103).ngClassPending),l(n,104,1,["standard"==e.Fb(n,105).appearance,"fill"==e.Fb(n,105).appearance,"outline"==e.Fb(n,105).appearance,"legacy"==e.Fb(n,105).appearance,e.Fb(n,105)._control.errorState,e.Fb(n,105)._canLabelFloat,e.Fb(n,105)._shouldLabelFloat(),e.Fb(n,105)._hasFloatingLabel(),e.Fb(n,105)._hideControlPlaceholder(),e.Fb(n,105)._control.disabled,e.Fb(n,105)._control.autofilled,e.Fb(n,105)._control.focused,"accent"==e.Fb(n,105).color,"warn"==e.Fb(n,105).color,e.Fb(n,105)._shouldForward("untouched"),e.Fb(n,105)._shouldForward("touched"),e.Fb(n,105)._shouldForward("pristine"),e.Fb(n,105)._shouldForward("dirty"),e.Fb(n,105)._shouldForward("valid"),e.Fb(n,105)._shouldForward("invalid"),e.Fb(n,105)._shouldForward("pending"),!e.Fb(n,105)._animationsEnabled]),l(n,115,1,[e.Fb(n,120)._isServer,e.Fb(n,120).id,e.Fb(n,120).placeholder,e.Fb(n,120).disabled,e.Fb(n,120).required,e.Fb(n,120).readonly&&!e.Fb(n,120)._isNativeSelect||null,e.Fb(n,120)._ariaDescribedby||null,e.Fb(n,120).errorState,e.Fb(n,120).required.toString(),e.Fb(n,121).ngClassUntouched,e.Fb(n,121).ngClassTouched,e.Fb(n,121).ngClassPristine,e.Fb(n,121).ngClassDirty,e.Fb(n,121).ngClassValid,e.Fb(n,121).ngClassInvalid,e.Fb(n,121).ngClassPending]),l(n,123,0,"Hide password",a.hide,e.Fb(n,124).disabled||null,"NoopAnimations"===e.Fb(n,124)._animationMode),l(n,126,0,e.Fb(n,127).inline,"primary"!==e.Fb(n,127).color&&"accent"!==e.Fb(n,127).color&&"warn"!==e.Fb(n,127).color),l(n,128,0,a.hide?"visibility_off":"visibility"),l(n,129,0,e.Fb(n,130).id),l(n,132,1,["standard"==e.Fb(n,133).appearance,"fill"==e.Fb(n,133).appearance,"outline"==e.Fb(n,133).appearance,"legacy"==e.Fb(n,133).appearance,e.Fb(n,133)._control.errorState,e.Fb(n,133)._canLabelFloat,e.Fb(n,133)._shouldLabelFloat(),e.Fb(n,133)._hasFloatingLabel(),e.Fb(n,133)._hideControlPlaceholder(),e.Fb(n,133)._control.disabled,e.Fb(n,133)._control.autofilled,e.Fb(n,133)._control.focused,"accent"==e.Fb(n,133).color,"warn"==e.Fb(n,133).color,e.Fb(n,133)._shouldForward("untouched"),e.Fb(n,133)._shouldForward("touched"),e.Fb(n,133)._shouldForward("pristine"),e.Fb(n,133)._shouldForward("dirty"),e.Fb(n,133)._shouldForward("valid"),e.Fb(n,133)._shouldForward("invalid"),e.Fb(n,133)._shouldForward("pending"),!e.Fb(n,133)._animationsEnabled]),l(n,143,1,[e.Fb(n,148)._isServer,e.Fb(n,148).id,e.Fb(n,148).placeholder,e.Fb(n,148).disabled,e.Fb(n,148).required,e.Fb(n,148).readonly&&!e.Fb(n,148)._isNativeSelect||null,e.Fb(n,148)._ariaDescribedby||null,e.Fb(n,148).errorState,e.Fb(n,148).required.toString(),e.Fb(n,149).ngClassUntouched,e.Fb(n,149).ngClassTouched,e.Fb(n,149).ngClassPristine,e.Fb(n,149).ngClassDirty,e.Fb(n,149).ngClassValid,e.Fb(n,149).ngClassInvalid,e.Fb(n,149).ngClassPending]),l(n,151,0,"Hide password",a.hide,e.Fb(n,152).disabled||null,"NoopAnimations"===e.Fb(n,152)._animationMode),l(n,154,0,e.Fb(n,155).inline,"primary"!==e.Fb(n,155).color&&"accent"!==e.Fb(n,155).color&&"warn"!==e.Fb(n,155).color),l(n,156,0,a.hide?"visibility_off":"visibility"),l(n,157,0,!a.formModel.hasError("equal","passwordsGroup"),"end"==e.Fb(n,158).align,e.Fb(n,158).id,null),l(n,160,0,e.Fb(n,161).vertical?"vertical":"horizontal",e.Fb(n,161).vertical,!e.Fb(n,161).vertical,e.Fb(n,161).inset),l(n,162,0,"end"===e.Fb(n,163).align),l(n,164,0,e.Fb(n,165).disabled||null,"NoopAnimations"===e.Fb(n,165)._animationMode)}))}var R=e.pb("ter-register",j,(function(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"ter-register",[],null,null,null,V,N)),e.sb(1,114688,null,0,j,[_.d,O.a,T.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),U=a("POq0"),B=a("QQfA"),G=a("gavF"),X=a("s6ns"),W=a("821u"),Q=a("zMNK"),Z=a("hOhj"),Y=a("BzsH"),$=a("5Bek"),ll=a("c9fC"),nl=a("BV1i"),al=a("FVPZ"),el=a("zQui"),ul=a("8rEH"),tl=a("Hemz"),rl=a("Nhcz"),il=a("u9T3"),ol=a("iInd");a.d(n,"RegisterModuleNgFactory",(function(){return bl}));var bl=e.qb(u,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[t.b,t.a,r.a,i.b,i.a,o.a,R]],[3,e.j],e.w]),e.Db(4608,d.n,d.m,[e.t,[2,d.B]]),e.Db(4608,U.c,U.c,[]),e.Db(4608,y.b,y.b,[]),e.Db(4608,B.a,B.a,[B.g,B.c,e.j,B.f,B.d,e.q,e.y,d.d,C.b,[2,d.h]]),e.Db(5120,B.h,B.i,[B.a]),e.Db(5120,G.c,G.j,[B.a]),e.Db(5120,X.b,X.c,[B.a]),e.Db(135680,X.d,X.d,[B.a,e.q,[2,d.h],[2,X.a],X.b,[3,X.d],B.c]),e.Db(4608,W.h,W.h,[]),e.Db(5120,W.a,W.b,[B.a]),e.Db(4608,y.a,y.n,[[2,y.e],w.a]),e.Db(5120,e.b,(function(l,n){return[c.k(l,n)]}),[d.d,e.A]),e.Db(4608,_.d,_.d,[]),e.Db(4608,_.s,_.s,[]),e.Db(1073742336,h.j,h.j,[]),e.Db(1073742336,C.a,C.a,[]),e.Db(1073742336,y.i,y.i,[[2,y.c],[2,g.f]]),e.Db(1073742336,p.g,p.g,[]),e.Db(1073742336,d.c,d.c,[]),e.Db(1073742336,L.b,L.b,[]),e.Db(1073742336,w.b,w.b,[]),e.Db(1073742336,y.m,y.m,[]),e.Db(1073742336,I.c,I.c,[]),e.Db(1073742336,k.c,k.c,[]),e.Db(1073742336,U.d,U.d,[]),e.Db(1073742336,b.e,b.e,[]),e.Db(1073742336,D.b,D.b,[]),e.Db(1073742336,x.c,x.c,[]),e.Db(1073742336,Q.f,Q.f,[]),e.Db(1073742336,Z.c,Z.c,[]),e.Db(1073742336,B.e,B.e,[]),e.Db(1073742336,G.i,G.i,[]),e.Db(1073742336,G.f,G.f,[]),e.Db(1073742336,Y.b,Y.b,[]),e.Db(1073742336,$.c,$.c,[]),e.Db(1073742336,ll.d,ll.d,[]),e.Db(1073742336,X.g,X.g,[]),e.Db(1073742336,q.a,q.a,[]),e.Db(1073742336,W.i,W.i,[]),e.Db(1073742336,y.o,y.o,[]),e.Db(1073742336,y.k,y.k,[]),e.Db(1073742336,nl.h,nl.h,[]),e.Db(1073742336,y.j,y.j,[]),e.Db(1073742336,al.b,al.b,[]),e.Db(1073742336,el.p,el.p,[]),e.Db(1073742336,ul.l,ul.l,[]),e.Db(1073742336,tl.a,tl.a,[]),e.Db(1073742336,c.c,c.c,[]),e.Db(1073742336,m.f,m.f,[]),e.Db(1073742336,s.b,s.b,[]),e.Db(1073742336,rl.a,rl.a,[]),e.Db(1073742336,il.a,il.a,[[2,c.h],e.A]),e.Db(1073742336,_.r,_.r,[]),e.Db(1073742336,_.p,_.p,[]),e.Db(1073742336,_.h,_.h,[]),e.Db(1073742336,ol.n,ol.n,[[2,ol.s],[2,ol.k]]),e.Db(1073742336,u,u,[]),e.Db(256,y.d,y.g,[]),e.Db(1024,ol.i,(function(){return[[{path:"",component:j}]]}),[])])}))}}]);