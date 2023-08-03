import{g as w}from"./assets.0d2645b5.js";import{j as v,Y as k,aC as x,Z as y,at as S,r as p,aN as A,I as V,_ as B,m as C,B as l,y as f,A as m,v as F,n as e,J as o}from"./index.eb7a7b4e.js";import{S as _}from"./sweetalert2.2401e230.js";import{c as P,a as h}from"./object.2b9e6402.js";import{G as N}from"./global.f6b8c10a.js";const $=v({name:"sign-in",components:{Field:k,VForm:x,ErrorMessage:y},setup(){const s=S();N();const r=V(),c=p("admin"),u=p("pass"),n=p(null),g=P().shape({username:h().min(3).required().label("User Name"),password:h().min(4).required().label("Password")});return{onSubmitLogin:async a=>{var d;a=a,s.logout(),n.value&&(n.value.disabled=!0,n.value.setAttribute("data-kt-indicator","on"));const i=new Headers;i.append("Authorization","Basic YWRtaW46c2VjcmV0"),fetch(`https://78.187.121.71:8000/oauth/token?grant_type=password&username=${c.value}&password=${u.value}&tenant_id=d391351c-33b2-416a-92e1-748e2c4e7102`,{method:"POST",headers:i,redirect:"follow"}).then(t=>t.text()).then(async t=>{await s.setAuth({api_token:JSON.parse(t).access_token}),_.fire({text:"You have successfully logged in!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn fw-semobold btn-light-primary"}}).then(async()=>{localStorage.setItem("username",c.value),await r.push({name:"dashboard"})})}).catch(t=>{console.log("error",t),_.fire({text:t[0],icon:"error",buttonsStyling:!1,confirmButtonText:"Try again!",heightAuto:!1,customClass:{confirmButton:"btn fw-semobold btn-light-danger"}}).then(()=>{s.errors={}})}),A.saveToken(a.api_token),s.setAuth({api_token:a.api_token}),(d=n.value)==null||d.removeAttribute("data-kt-indicator"),n.value.disabled=!1},login:g,submitButton:n,getAssetPath:w,username:c,password:u}}}),L={class:"w-lg-500px p-10"},T={class:"text-center mb-10"},U=e("h1",{class:"text-dark mb-3"},"Sign In",-1),E={class:"text-gray-400 fw-semobold fs-4 d-none"},I=e("div",{class:"mb-10 bg-light-info p-8 rounded d-none"},[e("div",{class:"text-info"},[o(" Use account "),e("strong",null,"admin@demo.com"),o(" and password "),e("strong",null,"demo"),o(" to continue. ")])],-1),G={class:"fv-row mb-10"},H=e("label",{class:"form-label fs-6 fw-bold text-dark"},"User Name",-1),J={class:"fv-plugins-message-container"},M={class:"fv-help-block"},O={class:"fv-row mb-10"},Y={class:"d-flex flex-stack mb-2"},j=e("label",{class:"form-label fw-bold text-dark fs-6 mb-0"},"Password",-1),q={class:"fv-plugins-message-container"},R={class:"fv-help-block"},W={class:"text-center"},z={tabindex:"3",type:"submit",ref:"submitButton",id:"kt_sign_in_submit",class:"btn btn-lg btn-primary w-100 mb-5"},Z=e("span",{class:"indicator-label"}," Continue ",-1),D=e("span",{class:"indicator-progress"},[o(" Please wait... "),e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),K=[Z,D],Q=e("div",{class:"text-center text-muted text-uppercase fw-bold mb-5 d-none"},"or",-1),X={href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100 mb-5 d-none"},ee=["src"],se={href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100 mb-5 d-none"},te=["src"],oe={href:"#",class:"btn btn-flex flex-center btn-light btn-lg w-100 d-none"},ne=["src"];function ae(s,r,c,u,n,g){const b=m("router-link"),a=m("Field"),i=m("ErrorMessage"),d=m("VForm");return F(),C("div",L,[l(d,{class:"form w-100",id:"kt_login_signin_form",onSubmit:s.onSubmitLogin,"validation-schema":s.login,"initial-values":{username:"",password:""}},{default:f(()=>[e("div",T,[U,e("div",E,[o(" New Here? "),l(b,{to:"/sign-up",class:"link-primary fw-bold"},{default:f(()=>[o(" Create an Account ")]),_:1})])]),I,e("div",G,[H,l(a,{tabindex:"1",class:"form-control form-control-lg form-control-solid",type:"text",name:"username",autocomplete:"off",modelValue:s.username,"onUpdate:modelValue":r[0]||(r[0]=t=>s.username=t)},null,8,["modelValue"]),e("div",J,[e("div",M,[l(i,{name:"email"})])])]),e("div",O,[e("div",Y,[j,l(b,{to:"/password-reset",class:"link-primary fs-6 fw-bold"},{default:f(()=>[o(" Forgot Password ? ")]),_:1})]),l(a,{tabindex:"2",class:"form-control form-control-lg form-control-solid",type:"password",name:"password",autocomplete:"off",modelValue:s.password,"onUpdate:modelValue":r[1]||(r[1]=t=>s.password=t)},null,8,["modelValue"]),e("div",q,[e("div",R,[l(i,{name:"password"})])])]),e("div",W,[e("button",z,K,512),Q,e("a",X,[e("img",{alt:"Logo",src:s.getAssetPath("media/svg/brand-logos/google-icon.svg"),class:"h-20px me-3"},null,8,ee),o(" Continue with Google ")]),e("a",se,[e("img",{alt:"Logo",src:s.getAssetPath("media/svg/brand-logos/facebook-4.svg"),class:"h-20px me-3"},null,8,te),o(" Continue with Facebook ")]),e("a",oe,[e("img",{alt:"Logo",src:s.getAssetPath("media/svg/brand-logos/apple-black.svg"),class:"h-20px me-3"},null,8,ne),o(" Continue with Apple ")])])]),_:1},8,["onSubmit","validation-schema"])])}const me=B($,[["render",ae]]);export{me as default};
