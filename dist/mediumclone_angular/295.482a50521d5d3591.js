"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[295],{1295:(y,g,i)=>{i.r(g),i.d(g,{routes:()=>W});var p={};i.r(p),i.d(p,{getArticleEffect$:()=>F,redirectAfterUpdateEffect$:()=>x,updateArticleEffect$:()=>$});var t=i(5879),m=i(8281),l=i(7483),n=i(4221);const c=(0,n.R7)({source:"edit article",events:{"Get article":(0,n.Ky)(),"Get article success":(0,n.Ky)(),"Get article failure":(0,n.uZ)(),"Update article":(0,n.Ky)(),"Update article success":(0,n.Ky)(),"Update article failure":(0,n.Ky)()}});var d=i(4664),f=i(7398),v=i(6306),h=i(2096),C=i(9397),U=i(553),I=i(9862);let E=(()=>{var e;class r{constructor(s){this.http=s}updateArticle(s,o){return this.http.put(`${U.N.API_URL}/articles/${o}`,s).pipe((0,f.U)(X=>X.article))}}return(e=r).\u0275fac=function(s){return new(s||e)(t.LFG(I.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),r})();var M=i(5157);const F=(0,l.GW)((e=(0,t.f3M)(l.eX),r=(0,t.f3M)(M.n))=>e.pipe((0,l.l4)(c.getArticle),(0,d.w)(({slug:a})=>r.getArticle(a).pipe((0,f.U)(s=>c.getArticleSuccess({article:s})),(0,v.K)(()=>(0,h.of)(c.getArticleFailure()))))),{functional:!0}),$=(0,l.GW)((e=(0,t.f3M)(l.eX),r=(0,t.f3M)(E))=>e.pipe((0,l.l4)(c.updateArticle),(0,d.w)(({request:a,slug:s})=>r.updateArticle(a,s).pipe((0,f.U)(o=>c.updateArticleSuccess({article:o})),(0,v.K)(o=>(0,h.of)(c.updateArticleFailure({errors:o.error.errors})))))),{functional:!0}),x=(0,l.GW)((e=(0,t.f3M)(l.eX),r=(0,t.f3M)(m.F0))=>e.pipe((0,l.l4)(c.updateArticleSuccess),(0,C.b)(({article:a})=>{r.navigate(["/articles",a.slug])})),{functional:!0,dispatch:!1});var K=i(493);const S={article:null,isLoading:!1,isSubmitting:!1,validationErrors:null},T=(0,n.Tz)({name:"editArticle",reducer:(0,n.Lq)(S,(0,n.on)(c.getArticle,e=>({...e,isLoading:!0})),(0,n.on)(c.getArticleSuccess,(e,r)=>({...e,isLoading:!1,article:r.article})),(0,n.on)(c.getArticleFailure,e=>({...e,isLoading:!1})),(0,n.on)(c.updateArticle,e=>({...e,isSubmitting:!0})),(0,n.on)(c.updateArticleSuccess,e=>({...e,isSubmitting:!1})),(0,n.on)(c.updateArticleFailure,(e,r)=>({...e,isSubmitting:!1,validationErrors:r.errors})),(0,n.on)(K.hn,()=>S))}),{name:V,reducer:G,selectArticle:L,selectIsLoading:N,selectIsSubmitting:O,selectValidationErrors:Y}=T;var A=i(6814),z=i(5257),Z=i(2181),D=i(2572),J=i(6992);function P(e,r){1&e&&t._UZ(0,"app-loading")}function Q(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"app-article-form",2),t.NdJ("articleSubmit",function(o){t.CHM(a);const u=t.oxw(2);return t.KtG(u.onSubmit(o))}),t.qZA()}if(2&e){const a=t.oxw().ngIf;t.Q6J("initialValues",a.initialValues)("isSubmitting",a.isSubmitting)("errors",a.backendErrors)}}function R(e,r){if(1&e&&(t.ynx(0),t.YNc(1,P,1,0,"app-loading",0),t.YNc(2,Q,1,3,"app-article-form",1),t.BQk()),2&e){const a=r.ngIf;t.xp6(1),t.Q6J("ngIf",a.isLoading),t.xp6(1),t.Q6J("ngIf",a.initialValues)}}const W=[{path:"",component:(()=>{var e;class r{constructor(s,o){this.store=s,this.route=o,this.initialValues$=this.store.pipe((0,n.Ys)(L),(0,Z.h)(u=>null!==u),(0,f.U)(u=>({title:u.title,description:u.description,body:u.body,tagList:u.tagList}))),this.slug=this.route.snapshot.paramMap.get("slug")??"",this.data$=(0,D.a)({isSubmitting:this.store.select(O),backendErrors:this.store.select(Y),isLoading:this.store.select(N),article:this.store.select(L),initialValues:this.initialValues$})}ngOnInit(){this.store.dispatch(c.getArticle({slug:this.slug}))}onSubmit(s){this.store.dispatch(c.updateArticle({request:{article:s},slug:this.slug}))}}return(e=r).\u0275fac=function(s){return new(s||e)(t.Y36(n.yh),t.Y36(m.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-article"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"initialValues","isSubmitting","errors","articleSubmit",4,"ngIf"],[3,"initialValues","isSubmitting","errors","articleSubmit"]],template:function(s,o){1&s&&(t.YNc(0,R,3,2,"ng-container",0),t.ALo(1,"async")),2&s&&t.Q6J("ngIf",t.lcZ(1,1,o.data$))},dependencies:[A.ez,A.O5,A.Ov,z.E,J.N],encapsulation:2}),r})(),providers:[E,(0,n.oY)(V,G),(0,l.y3)(p)]}]},6992:(y,g,i)=>{i.d(g,{N:()=>m});var p=i(6814),t=i(5879);let m=(()=>{var l;class n{}return(l=n).\u0275fac=function(d){return new(d||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-loading"]],standalone:!0,features:[t.jDz],decls:2,vars:0,template:function(d,f){1&d&&(t.TgZ(0,"div"),t._uU(1,"Loading..."),t.qZA())},dependencies:[p.ez],encapsulation:2}),n})()}}]);