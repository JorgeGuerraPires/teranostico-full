(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1gDh":function(l,n,a){"use strict";a.r(n);var u=a("8Y7J");class e{}var t=a("fNgX"),i=a("t68o"),o=a("zbXB"),r=a("NcP4"),b=a("pMnS"),s=a("SVse"),d=a("ura0"),c=a("/q54"),m=a("VDRc"),p=a("lzlj"),h=a("igqZ"),f=a("omvX"),g=a("Nv++"),F=a("cUpR"),v=a("Mr+X"),_=a("HsOI"),w=a("Gi4r"),D=a("s7LF"),C=a("dJrM"),y=a("Xd0L"),k=a("IP0z"),x=a("/HVE"),L=a("ZwOa"),S=a("oapL"),N=a("bujt"),P=a("Fwaw"),M=a("5GAg"),j=a("TtEo"),q=a("02hT"),O=a("wHSu");class T{constructor(l,n,a,u){this.fb=l,this.authenticationService=n,this.utilService=a,this.route=u,this.hide=!0,this.isActive=!1,this.pageContent={header:{title:"Password Reset"},info:{note:"Once you reset the password, you no longer will be able to use the old one. The change is immediately. The passwords are hashed, thus, we cannot provide it to you if you lose it. Keep that in mind! ",contactus:"Should you prefer, contact us on teranostico@gmail.com"}},this.faKey=O.h,this.formModel=l.group({passwordsGroup:l.group({password:["",[D.s.minLength(6),D.s.required]],pconfirm:[""]},{validator:[I]})},{updateOn:"blur"}),this.jwt=this.route.snapshot.paramMap.get("jwt"),this.payload=JSON.parse(atob(this.jwt.split(".")[1]))}ngOnInit(){}resetPassword(){this.authenticationService.resetpasswordWithToken(this.route.snapshot.paramMap.get("jwt"),this.formModel.value.passwordsGroup.password).subscribe(l=>this.utilService.openSnackBar(l.success_msg,"x"))}}function I({value:l}){const[n,...a]=Object.keys(l||{});return a.every(a=>l[a]===l[n])?null:{equal:!0}}var z=a("TTF2"),A=a("kEHr"),K=a("iInd"),H=u.rb({encapsulation:0,styles:[[".card-center[_ngcontent-%COMP%]{padding-top:8rem}.text-block[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}.example-header-image[_ngcontent-%COMP%]{background-image:url(Fiocruz.84e54333e59992938942.png);background-size:cover}.section-title-xs-margin[_ngcontent-%COMP%]{margin-right:5%;margin-left:5%;margin-bottom:10%}.error[_ngcontent-%COMP%]{color:red}.hasError[_ngcontent-%COMP%]{border:1px solid red}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]],data:{}});function E(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,112,"section",[["ngClass.gt-md","card-center"]],null,null,null,null,null)),u.Kb(512,null,s.w,s.x,[u.r,u.s,u.k,u.D]),u.sb(2,933888,null,0,d.a,[u.k,c.j,c.f,s.w,[8,null]],{"ngClass.gt-md":[0,"ngClass.gt-md"]},null),(l()(),u.tb(3,0,null,null,109,"div",[["class","parent"],["fxFlexFill",""],["fxLayout","row"],["fxLayout.lt-md","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),u.sb(4,671744,null,0,m.c,[u.k,c.j,[2,m.i],c.f],{fxLayout:[0,"fxLayout"],"fxLayout.lt-md":[1,"fxLayout.lt-md"]},null),u.sb(5,671744,null,0,m.b,[u.k,c.j,[2,m.h],c.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),u.sb(6,671744,null,0,m.d,[u.k,c.j,m.e,c.f],null,null),(l()(),u.tb(7,0,null,null,105,"div",[["fxFlex","30%"],["ngClass.lt-md","section-title-xs-margin"]],null,null,null,null,null)),u.sb(8,671744,null,0,m.a,[u.k,c.j,c.e,m.g,c.f],{fxFlex:[0,"fxFlex"]},null),u.Kb(512,null,s.w,s.x,[u.r,u.s,u.k,u.D]),u.sb(10,933888,null,0,d.a,[u.k,c.j,c.f,s.w,[8,null]],{"ngClass.lt-md":[0,"ngClass.lt-md"]},null),(l()(),u.tb(11,0,null,null,101,"mat-card",[["class","mat-card"]],[[2,"mat-elevation-z2",null],[2,"mat-elevation-z8",null],[2,"_mat-animation-noopable",null]],null,null,p.d,p.a)),u.sb(12,49152,null,0,h.a,[[2,f.a]],null,null),(l()(),u.tb(13,0,null,0,25,"mat-card-header",[["class","mat-card-header"]],null,null,null,p.c,p.b)),u.sb(14,49152,null,0,h.f,[],null,null),(l()(),u.tb(15,0,null,0,1,"div",[["class","example-header-image mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),u.sb(16,16384,null,0,h.c,[],null,null),(l()(),u.tb(17,0,null,1,5,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),u.sb(18,16384,null,0,h.j,[],null,null),(l()(),u.tb(19,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),u.tb(20,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,t.d,t.c)),u.sb(21,573440,null,0,g.c,[F.b,g.a,g.d,[2,g.i]],{icon:[0,"icon"]},null),(l()(),u.Nb(22,null,[" "," "])),(l()(),u.tb(23,0,null,1,15,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),u.sb(24,16384,null,0,h.i,[],null,null),(l()(),u.tb(25,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u.tb(26,0,null,null,3,"h6",[["class","text-justify"]],null,null,null,null,null)),(l()(),u.Nb(27,null,[" "," "])),(l()(),u.tb(28,0,null,null,1,"span",[["class","text-success"]],null,null,null,null,null)),(l()(),u.Nb(29,null,[" ",""])),(l()(),u.tb(30,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),u.Nb(31,null,[" Hey there ","! "])),(l()(),u.tb(32,0,null,null,1,"span",[["class","text-warning"]],null,null,null,null,null)),(l()(),u.Nb(-1,null,[" Isn't that you? "])),(l()(),u.Nb(-1,null,[" ask for a new token and report the misunderstanding "])),(l()(),u.tb(35,0,null,null,3,"mat-icon",[["class","mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,v.b,v.a)),u.sb(36,16384,null,0,_.h,[],null,null),u.sb(37,9158656,null,0,w.b,[u.k,w.d,[8,null],[2,w.a],[2,u.l]],null,null),(l()(),u.Nb(-1,0,["sentiment_very_satisfied"])),(l()(),u.tb(39,0,null,0,66,"mat-card-content",[["class","text-block mat-card-content"]],null,null,null,null,null)),u.sb(40,16384,null,0,h.d,[],null,null),(l()(),u.tb(41,0,null,null,64,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,a){var e=!0;return"submit"===n&&(e=!1!==u.Fb(l,43).onSubmit(a)&&e),"reset"===n&&(e=!1!==u.Fb(l,43).onReset()&&e),e}),null,null)),u.sb(42,16384,null,0,D.w,[],null,null),u.sb(43,540672,null,0,D.g,[[8,null],[8,null]],{form:[0,"form"]},null),u.Kb(2048,null,D.c,null,[D.g]),u.sb(45,16384,null,0,D.n,[[4,D.c]],null,null),(l()(),u.tb(46,0,null,null,59,"div",[["formGroupName","passwordsGroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u.sb(47,212992,null,0,D.h,[[3,D.c],[8,null],[8,null]],{name:[0,"name"]},null),u.Kb(2048,null,D.c,null,[D.h]),u.sb(49,16384,null,0,D.n,[[4,D.c]],null,null),(l()(),u.tb(50,0,null,null,27,"mat-form-field",[["appearance","fill"],["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),u.sb(51,7520256,null,9,_.c,[u.k,u.h,[2,y.h],[2,k.b],[2,_.a],x.a,u.y,[2,f.a]],{appearance:[0,"appearance"]},null),u.Lb(603979776,1,{_controlNonStatic:0}),u.Lb(335544320,2,{_controlStatic:0}),u.Lb(603979776,3,{_labelChildNonStatic:0}),u.Lb(335544320,4,{_labelChildStatic:0}),u.Lb(603979776,5,{_placeholderChild:0}),u.Lb(603979776,6,{_errorChildren:1}),u.Lb(603979776,7,{_hintChildren:1}),u.Lb(603979776,8,{_prefixChildren:1}),u.Lb(603979776,9,{_suffixChildren:1}),(l()(),u.tb(61,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","password"],["matInput",""],["placeholder","password"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,a){var e=!0;return"input"===n&&(e=!1!==u.Fb(l,62)._handleInput(a.target.value)&&e),"blur"===n&&(e=!1!==u.Fb(l,62).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Fb(l,62)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Fb(l,62)._compositionEnd(a.target.value)&&e),"blur"===n&&(e=!1!==u.Fb(l,66)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==u.Fb(l,66)._focusChanged(!0)&&e),"input"===n&&(e=!1!==u.Fb(l,66)._onInput()&&e),e}),null,null)),u.sb(62,16384,null,0,D.d,[u.D,u.k,[2,D.a]],null,null),u.Kb(1024,null,D.k,(function(l){return[l]}),[D.d]),u.sb(64,671744,null,0,D.f,[[3,D.c],[8,null],[8,null],[6,D.k],[2,D.v]],{name:[0,"name"]},null),u.Kb(2048,null,D.l,null,[D.f]),u.sb(66,999424,null,0,L.b,[u.k,x.a,[6,D.l],[2,D.o],[2,D.g],y.b,[8,null],S.a,u.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),u.sb(67,16384,null,0,D.m,[[4,D.l]],null,null),u.Kb(2048,[[1,4],[2,4]],_.d,null,[L.b]),(l()(),u.tb(69,0,null,4,5,"button",[["mat-icon-button",""],["matSuffix",""]],[[1,"aria-label",0],[1,"aria-pressed",0],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var u=!0,e=l.component;return"click"===n&&(u=0!=(e.hide=!e.hide)&&u),u}),N.d,N.b)),u.sb(70,180224,null,0,P.b,[u.k,M.g,[2,f.a]],null,null),u.sb(71,16384,[[9,4]],0,_.h,[],null,null),(l()(),u.tb(72,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,v.b,v.a)),u.sb(73,9158656,null,0,w.b,[u.k,w.d,[8,null],[2,w.a],[2,u.l]],null,null),(l()(),u.Nb(74,0,["",""])),(l()(),u.tb(75,0,null,5,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),u.sb(76,16384,[[6,4]],0,_.b,[],null,null),(l()(),u.Nb(-1,null,["The password is at least 6 character long"])),(l()(),u.tb(78,0,null,null,27,"mat-form-field",[["appearance","fill"],["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),u.sb(79,7520256,null,9,_.c,[u.k,u.h,[2,y.h],[2,k.b],[2,_.a],x.a,u.y,[2,f.a]],{appearance:[0,"appearance"]},null),u.Lb(603979776,10,{_controlNonStatic:0}),u.Lb(335544320,11,{_controlStatic:0}),u.Lb(603979776,12,{_labelChildNonStatic:0}),u.Lb(335544320,13,{_labelChildStatic:0}),u.Lb(603979776,14,{_placeholderChild:0}),u.Lb(603979776,15,{_errorChildren:1}),u.Lb(603979776,16,{_hintChildren:1}),u.Lb(603979776,17,{_prefixChildren:1}),u.Lb(603979776,18,{_suffixChildren:1}),(l()(),u.tb(89,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","pconfirm"],["matInput",""],["placeholder","repeat the password"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,a){var e=!0;return"input"===n&&(e=!1!==u.Fb(l,90)._handleInput(a.target.value)&&e),"blur"===n&&(e=!1!==u.Fb(l,90).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Fb(l,90)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Fb(l,90)._compositionEnd(a.target.value)&&e),"blur"===n&&(e=!1!==u.Fb(l,94)._focusChanged(!1)&&e),"focus"===n&&(e=!1!==u.Fb(l,94)._focusChanged(!0)&&e),"input"===n&&(e=!1!==u.Fb(l,94)._onInput()&&e),e}),null,null)),u.sb(90,16384,null,0,D.d,[u.D,u.k,[2,D.a]],null,null),u.Kb(1024,null,D.k,(function(l){return[l]}),[D.d]),u.sb(92,671744,null,0,D.f,[[3,D.c],[8,null],[8,null],[6,D.k],[2,D.v]],{name:[0,"name"]},null),u.Kb(2048,null,D.l,null,[D.f]),u.sb(94,999424,null,0,L.b,[u.k,x.a,[6,D.l],[2,D.o],[2,D.g],y.b,[8,null],S.a,u.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),u.sb(95,16384,null,0,D.m,[[4,D.l]],null,null),u.Kb(2048,[[10,4],[11,4]],_.d,null,[L.b]),(l()(),u.tb(97,0,null,4,5,"button",[["mat-icon-button",""],["matSuffix",""]],[[1,"aria-label",0],[1,"aria-pressed",0],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var u=!0,e=l.component;return"click"===n&&(u=0!=(e.hide=!e.hide)&&u),u}),N.d,N.b)),u.sb(98,180224,null,0,P.b,[u.k,M.g,[2,f.a]],null,null),u.sb(99,16384,[[18,4]],0,_.h,[],null,null),(l()(),u.tb(100,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,v.b,v.a)),u.sb(101,9158656,null,0,w.b,[u.k,w.d,[8,null],[2,w.a],[2,u.l]],null,null),(l()(),u.Nb(102,0,["",""])),(l()(),u.tb(103,0,null,6,2,"mat-hint",[["class","error mat-hint"]],[[8,"hidden",0],[2,"mat-right",null],[1,"id",0],[1,"align",0]],null,null,null,null)),u.sb(104,16384,[[16,4]],0,_.f,[],null,null),(l()(),u.Nb(-1,null,[" Passwords must be the same "])),(l()(),u.tb(106,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,j.b,j.a)),u.sb(107,49152,null,0,q.a,[],null,null),(l()(),u.tb(108,0,null,0,4,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),u.sb(109,16384,null,0,h.b,[],null,null),(l()(),u.tb(110,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var u=!0;return"click"===n&&(u=!1!==l.component.resetPassword()&&u),u}),N.d,N.b)),u.sb(111,180224,null,0,P.b,[u.k,M.g,[2,f.a]],{disabled:[0,"disabled"]},null),(l()(),u.Nb(-1,0,["Reset"]))],(function(l,n){var a=n.component;l(n,2,0,"card-center"),l(n,4,0,"row","column"),l(n,5,0,"center center"),l(n,8,0,"30%"),l(n,10,0,"section-title-xs-margin"),l(n,21,0,a.faKey),l(n,37,0),l(n,43,0,a.formModel),l(n,47,0,"passwordsGroup"),l(n,51,0,"fill"),l(n,64,0,"password"),l(n,66,0,"password",a.hide?"password":"text"),l(n,73,0),l(n,79,0,"fill"),l(n,92,0,"pconfirm"),l(n,94,0,"repeat the password",a.hide?"password":"text"),l(n,101,0),l(n,111,0,a.formModel.invalid)}),(function(l,n){var a=n.component;l(n,11,0,!a.isActive,a.isActive,"NoopAnimations"===u.Fb(n,12)._animationMode),l(n,20,0,u.Fb(n,21).title,u.Fb(n,21).renderedIconHTML),l(n,22,0,a.pageContent.header.title),l(n,27,0,a.pageContent.info.note),l(n,29,0,a.pageContent.info.contactus),l(n,31,0,a.payload.name),l(n,35,0,u.Fb(n,37).inline,"primary"!==u.Fb(n,37).color&&"accent"!==u.Fb(n,37).color&&"warn"!==u.Fb(n,37).color),l(n,41,0,u.Fb(n,45).ngClassUntouched,u.Fb(n,45).ngClassTouched,u.Fb(n,45).ngClassPristine,u.Fb(n,45).ngClassDirty,u.Fb(n,45).ngClassValid,u.Fb(n,45).ngClassInvalid,u.Fb(n,45).ngClassPending),l(n,46,0,u.Fb(n,49).ngClassUntouched,u.Fb(n,49).ngClassTouched,u.Fb(n,49).ngClassPristine,u.Fb(n,49).ngClassDirty,u.Fb(n,49).ngClassValid,u.Fb(n,49).ngClassInvalid,u.Fb(n,49).ngClassPending),l(n,50,1,["standard"==u.Fb(n,51).appearance,"fill"==u.Fb(n,51).appearance,"outline"==u.Fb(n,51).appearance,"legacy"==u.Fb(n,51).appearance,u.Fb(n,51)._control.errorState,u.Fb(n,51)._canLabelFloat,u.Fb(n,51)._shouldLabelFloat(),u.Fb(n,51)._hasFloatingLabel(),u.Fb(n,51)._hideControlPlaceholder(),u.Fb(n,51)._control.disabled,u.Fb(n,51)._control.autofilled,u.Fb(n,51)._control.focused,"accent"==u.Fb(n,51).color,"warn"==u.Fb(n,51).color,u.Fb(n,51)._shouldForward("untouched"),u.Fb(n,51)._shouldForward("touched"),u.Fb(n,51)._shouldForward("pristine"),u.Fb(n,51)._shouldForward("dirty"),u.Fb(n,51)._shouldForward("valid"),u.Fb(n,51)._shouldForward("invalid"),u.Fb(n,51)._shouldForward("pending"),!u.Fb(n,51)._animationsEnabled]),l(n,61,1,[u.Fb(n,66)._isServer,u.Fb(n,66).id,u.Fb(n,66).placeholder,u.Fb(n,66).disabled,u.Fb(n,66).required,u.Fb(n,66).readonly&&!u.Fb(n,66)._isNativeSelect||null,u.Fb(n,66)._ariaDescribedby||null,u.Fb(n,66).errorState,u.Fb(n,66).required.toString(),u.Fb(n,67).ngClassUntouched,u.Fb(n,67).ngClassTouched,u.Fb(n,67).ngClassPristine,u.Fb(n,67).ngClassDirty,u.Fb(n,67).ngClassValid,u.Fb(n,67).ngClassInvalid,u.Fb(n,67).ngClassPending]),l(n,69,0,"Hide password",a.hide,u.Fb(n,70).disabled||null,"NoopAnimations"===u.Fb(n,70)._animationMode),l(n,72,0,u.Fb(n,73).inline,"primary"!==u.Fb(n,73).color&&"accent"!==u.Fb(n,73).color&&"warn"!==u.Fb(n,73).color),l(n,74,0,a.hide?"visibility_off":"visibility"),l(n,75,0,u.Fb(n,76).id),l(n,78,1,["standard"==u.Fb(n,79).appearance,"fill"==u.Fb(n,79).appearance,"outline"==u.Fb(n,79).appearance,"legacy"==u.Fb(n,79).appearance,u.Fb(n,79)._control.errorState,u.Fb(n,79)._canLabelFloat,u.Fb(n,79)._shouldLabelFloat(),u.Fb(n,79)._hasFloatingLabel(),u.Fb(n,79)._hideControlPlaceholder(),u.Fb(n,79)._control.disabled,u.Fb(n,79)._control.autofilled,u.Fb(n,79)._control.focused,"accent"==u.Fb(n,79).color,"warn"==u.Fb(n,79).color,u.Fb(n,79)._shouldForward("untouched"),u.Fb(n,79)._shouldForward("touched"),u.Fb(n,79)._shouldForward("pristine"),u.Fb(n,79)._shouldForward("dirty"),u.Fb(n,79)._shouldForward("valid"),u.Fb(n,79)._shouldForward("invalid"),u.Fb(n,79)._shouldForward("pending"),!u.Fb(n,79)._animationsEnabled]),l(n,89,1,[u.Fb(n,94)._isServer,u.Fb(n,94).id,u.Fb(n,94).placeholder,u.Fb(n,94).disabled,u.Fb(n,94).required,u.Fb(n,94).readonly&&!u.Fb(n,94)._isNativeSelect||null,u.Fb(n,94)._ariaDescribedby||null,u.Fb(n,94).errorState,u.Fb(n,94).required.toString(),u.Fb(n,95).ngClassUntouched,u.Fb(n,95).ngClassTouched,u.Fb(n,95).ngClassPristine,u.Fb(n,95).ngClassDirty,u.Fb(n,95).ngClassValid,u.Fb(n,95).ngClassInvalid,u.Fb(n,95).ngClassPending]),l(n,97,0,"Hide password",a.hide,u.Fb(n,98).disabled||null,"NoopAnimations"===u.Fb(n,98)._animationMode),l(n,100,0,u.Fb(n,101).inline,"primary"!==u.Fb(n,101).color&&"accent"!==u.Fb(n,101).color&&"warn"!==u.Fb(n,101).color),l(n,102,0,a.hide?"visibility_off":"visibility"),l(n,103,0,!a.formModel.hasError("equal","passwordsGroup"),"end"==u.Fb(n,104).align,u.Fb(n,104).id,null),l(n,106,0,u.Fb(n,107).vertical?"vertical":"horizontal",u.Fb(n,107).vertical,!u.Fb(n,107).vertical,u.Fb(n,107).inset),l(n,108,0,"end"===u.Fb(n,109).align),l(n,110,0,u.Fb(n,111).disabled||null,"NoopAnimations"===u.Fb(n,111)._animationMode)}))}function V(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"ter-resetpasswordwithtoken",[],null,null,null,E,H)),u.sb(1,114688,null,0,T,[D.e,z.a,A.a,K.a],null,null)],(function(l,n){l(n,1,0)}),null)}var G=u.pb("ter-resetpasswordwithtoken",T,V,{},{},[]),B=a("POq0"),J=a("QQfA"),R=a("gavF"),U=a("s6ns"),X=a("821u"),Q=a("Mz6y"),Z=a("zMNK"),W=a("hOhj"),Y=a("BzsH"),$=a("5Bek"),ll=a("c9fC"),nl=a("BV1i"),al=a("FVPZ"),ul=a("zQui"),el=a("8rEH"),tl=a("8P0U"),il=a("elxJ"),ol=a("r0V8"),rl=a("Hemz"),bl=a("Nhcz"),sl=a("u9T3");a.d(n,"ResetpasswordwithtokenModuleNgFactory",(function(){return dl}));var dl=u.qb(e,[],(function(l){return u.Cb([u.Db(512,u.j,u.bb,[[8,[t.b,t.a,i.a,o.b,o.a,r.a,b.a,G]],[3,u.j],u.w]),u.Db(4608,s.n,s.m,[u.t,[2,s.B]]),u.Db(4608,B.c,B.c,[]),u.Db(4608,y.b,y.b,[]),u.Db(4608,J.a,J.a,[J.g,J.c,u.j,J.f,J.d,u.q,u.y,s.d,k.b,[2,s.h]]),u.Db(5120,J.h,J.i,[J.a]),u.Db(5120,R.c,R.j,[J.a]),u.Db(5120,U.b,U.c,[J.a]),u.Db(135680,U.d,U.d,[J.a,u.q,[2,s.h],[2,U.a],U.b,[3,U.d],J.c]),u.Db(4608,X.i,X.i,[]),u.Db(5120,X.a,X.b,[J.a]),u.Db(4608,y.a,y.p,[[2,y.f],x.a]),u.Db(5120,Q.b,Q.c,[J.a]),u.Db(4608,F.e,y.c,[[2,y.g],[2,y.k]]),u.Db(5120,u.b,(function(l,n){return[c.k(l,n)]}),[s.d,u.A]),u.Db(4608,D.e,D.e,[]),u.Db(4608,D.u,D.u,[]),u.Db(1073742336,s.c,s.c,[]),u.Db(1073742336,g.j,g.j,[]),u.Db(1073742336,k.a,k.a,[]),u.Db(1073742336,y.k,y.k,[[2,y.d],[2,F.f]]),u.Db(1073742336,h.h,h.h,[]),u.Db(1073742336,q.b,q.b,[]),u.Db(1073742336,x.b,x.b,[]),u.Db(1073742336,y.o,y.o,[]),u.Db(1073742336,P.c,P.c,[]),u.Db(1073742336,S.c,S.c,[]),u.Db(1073742336,B.d,B.d,[]),u.Db(1073742336,_.e,_.e,[]),u.Db(1073742336,L.c,L.c,[]),u.Db(1073742336,w.c,w.c,[]),u.Db(1073742336,Z.f,Z.f,[]),u.Db(1073742336,W.c,W.c,[]),u.Db(1073742336,J.e,J.e,[]),u.Db(1073742336,R.i,R.i,[]),u.Db(1073742336,R.f,R.f,[]),u.Db(1073742336,Y.b,Y.b,[]),u.Db(1073742336,$.c,$.c,[]),u.Db(1073742336,ll.d,ll.d,[]),u.Db(1073742336,U.g,U.g,[]),u.Db(1073742336,M.a,M.a,[]),u.Db(1073742336,X.j,X.j,[]),u.Db(1073742336,y.q,y.q,[]),u.Db(1073742336,y.m,y.m,[]),u.Db(1073742336,nl.h,nl.h,[]),u.Db(1073742336,y.l,y.l,[]),u.Db(1073742336,al.b,al.b,[]),u.Db(1073742336,ul.p,ul.p,[]),u.Db(1073742336,el.l,el.l,[]),u.Db(1073742336,tl.c,tl.c,[]),u.Db(1073742336,il.d,il.d,[]),u.Db(1073742336,ol.d,ol.d,[]),u.Db(1073742336,ol.c,ol.c,[]),u.Db(1073742336,Q.e,Q.e,[]),u.Db(1073742336,rl.a,rl.a,[]),u.Db(1073742336,c.c,c.c,[]),u.Db(1073742336,m.f,m.f,[]),u.Db(1073742336,d.b,d.b,[]),u.Db(1073742336,bl.a,bl.a,[]),u.Db(1073742336,sl.a,sl.a,[[2,c.h],u.A]),u.Db(1073742336,D.t,D.t,[]),u.Db(1073742336,D.r,D.r,[]),u.Db(1073742336,D.i,D.i,[]),u.Db(1073742336,K.n,K.n,[[2,K.s],[2,K.k]]),u.Db(1073742336,e,e,[]),u.Db(256,y.e,y.i,[]),u.Db(1024,K.i,(function(){return[[{path:"",component:T}]]}),[])])}))}}]);