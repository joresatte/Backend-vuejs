import{_ as I,r as f,a as v,b as p,c as P,o as k,d as S,e,f as b,g as a,u as T,h as V,w,p as E,i as O,j as x,k as $,l as q,F as B}from"./index-xrALW0IQ.js";import{A as N,c as j}from"./appLogo-N81tkM7k.js";const r=o=>(E("data-v-db6dbf44"),o=o(),O(),o),A={class:"modal-backdrop"},M={class:"modal"},F={class:"modal-header"},U={class:"modal-body"},D={class:"p-input-icon-right"},J=r(()=>e("i",{class:"pi pi-user"},null,-1)),L=r(()=>e("br",null,null,-1)),z=r(()=>e("br",null,null,-1)),G={class:"p-input-icon-left"},H=r(()=>e("br",null,null,-1)),K=r(()=>e("br",null,null,-1)),Q={class:"modal-footer"},R={__name:"loginEmployee",props:{login:{type:Object,required:!0}},emits:["input","onChanged","onclicked"],setup(o,{emit:g}){const c=o,d=g,l=f(c.login);let t=v(!1);const u=()=>{d("onChanged",{...l})};function _(){d("onclicked"),t.value=!0,setTimeout(()=>{t.value=!1},1e3)}return(s,n)=>{const i=p("InputText"),m=p("Password"),C=p("Button"),y=P("tooltip");return k(),S("div",A,[e("div",M,[e("header",F,[b(s.$slots,"header",{},()=>[V(" all camps are required! ")],!0)]),e("section",U,[b(s.$slots,"body",{},()=>[e("span",D,[J,w(a(i,{modelValue:o.login.identification,"onUpdate:modelValue":n[0]||(n[0]=h=>o.login.identification=h),type:"text",placeholder:"enter your identifiction",onInput:u},null,8,["modelValue"]),[[y,"Enter your identifiction",void 0,{bottom:!0}]])]),L,z,e("span",G,[w(a(m,{modelValue:o.login.password,"onUpdate:modelValue":n[1]||(n[1]=h=>o.login.password=h),size:"normal",placeholder:"enter your password",onInput:u,class:"input-test",toggleMask:""},null,8,["modelValue"]),[[y,"Enter your password",void 0,{bottom:!0}]])])],!0),H,K]),e("footer",Q,[a(C,{type:"button",label:"Log in",severity:"help",icon:"pi pi-send",loading:T(t),onClick:_,iconPos:"right"},null,8,["loading"])])])])}}},W=I(R,[["__scopeId","data-v-db6dbf44"]]),X=e("br",null,null,-1),Y={class:"login"},oe={__name:"loginPage",setup(o){const g=x(),c=$(),d=v(null),l=v(null),t=f({identification:"",password:""});q(()=>{console.log("login page")});const u=s=>{t.value=s};async function _(){console.log("Send button clicked");const s=f({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identification:t.identification,password:t.password})});if(t.identification&&t.password!=""){const n=await fetch(`${j.login_Path}/get_login/Authenticated`,s).catch(m=>d.value=m),i=n.ok;console.log("request Status Code ",i),i==!0&&(l.value=await n.json(),console.log(l.value),localStorage.setItem("dataIdentity",JSON.stringify(l.value)),g.router.push({path:"/customersPage",name:"customersPage"})),i||c.add({severity:"error",summary:"Error Message",detail:"Failed to login",life:4e3})}else c.add({severity:"error",summary:"Error Message",detail:"All fields are required",life:3e3})}return(s,n)=>{const i=p("Toast");return k(),S(B,null,[a(N),X,e("div",Y,[a(W,{login:t,onOnChanged:u,onOnclicked:_},null,8,["login","onOnclicked"])]),a(i)],64)}}};export{oe as default};