import{K as x}from"./Card.ea3922b9.js";import{g as a,a as y}from"./assets.c6e05840.js";import{j as d,_ as p,m as t,n as e,B as c,F as _,p as w,J as r,C as k,v as o,z as M,w as i,A as m}from"./index.8fb207d7.js";const C=d({name:"view-users-modal",components:{},setup(){return{users:[{avatar:a("media/avatars/300-6.jpg"),name:"Emma Smith",email:"e.smith@kpmg.com.au",position:"Art Director",sales:"23,000"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",position:"Marketing Analytic",sales:"50,500"},{avatar:a("media/avatars/300-1.jpg"),name:"Max Smith",email:"max@kt.com",position:"Software Enginer",sales:"75,900"},{avatar:a("media/avatars/300-1.jpg"),name:"Sean Bean",email:"sean@dellito.com",position:"Web Developer",sales:"10,500"},{avatar:a("media/avatars/300-25.jpg"),name:"Brian Cox",email:"brian@exchange.com",position:"UI/UX Designer",sales:"20,000"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",position:"Head Of Marketing",sales:"9,300"},{avatar:a("media/avatars/300-9.jpg"),name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",position:"Software Arcitect",sales:"15,000"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",position:"System Admin",sales:"23,000"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",position:"Account Manager",sales:"45,000"},{avatar:a("media/avatars/300-23.jpg"),name:"Dan Wilson",email:"dam@consilting.com",position:"Web Desinger",sales:"90,500"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",position:"Corporate Finance",sales:"5,000"},{avatar:a("media/avatars/300-12.jpg"),name:"Ana Crown",email:"ana.cf@limtel.com",position:"Customer Relationship",sales:"70,000"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",position:"Marketing Executive",sales:"45,500"}],getAssetPath:a}}}),$={class:"modal fade",id:"kt_modal_view_users",tabindex:"-1","aria-hidden":"true"},A={class:"modal-dialog mw-650px"},U={class:"modal-content"},j={class:"modal-header pb-0 border-0 justify-content-end"},T={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},V={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},K=e("div",{class:"text-center mb-13"},[e("h1",{class:"mb-3"},"Browse Users"),e("div",{class:"text-gray-400 fw-semobold fs-5"},[r(" If you need more info, please check out our "),e("a",{href:"#",class:"link-primary fw-bold"},"Users Directory"),r(". ")])],-1),S={class:"mb-15"},B={class:"mh-375px scroll-y me-n7 pe-7"},D={class:"d-flex align-items-center"},I={class:"symbol symbol-35px symbol-circle"},E=["src"],N={class:"ms-6"},F={href:"#",class:"d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"},P={class:"badge badge-light fs-8 fw-semobold ms-2"},W={class:"fw-semobold text-gray-400"},O={class:"d-flex"},z={class:"text-end"},R={class:"fs-5 fw-bold text-dark"},H=e("div",{class:"fs-7 text-muted"},"Sales",-1),J=k('<div class="d-flex justify-content-between"><div class="fw-semobold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-400"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="" checked><span class="form-check-label fw-semobold text-gray-400"> Allowed </span></label></div>',1);function L(n,b,f,h,v,g){const l=m("KTIcon");return o(),t("div",$,[e("div",A,[e("div",U,[e("div",j,[e("div",T,[c(l,{"icon-name":"cross","icon-class":"fs-1"})])]),e("div",V,[K,e("div",S,[e("div",B,[(o(!0),t(_,null,w(n.users,(s,u)=>(o(),t("div",{key:u,class:"d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed"},[e("div",D,[e("div",I,[s.avatar?(o(),t("img",{key:0,alt:"Pic",src:s.avatar},null,8,E)):(o(),t("span",{key:1,class:M([`bg-light-${s.state} text-${s.state}`,"symbol-label fw-semobold"])},i(s.name.charAt(0)),3))]),e("div",N,[e("a",F,[r(i(s.name)+" ",1),e("span",P,i(s.position),1)]),e("div",W,i(s.email),1)])]),e("div",O,[e("div",z,[e("div",R," $"+i(s.sales),1),H])])]))),128))])]),J])])])])}const X=p(C,[["render",L]]),q=d({name:"view-users",components:{KTModalCard:x,KTViewUsersModal:X},setup(){return{getIllustrationsPath:y}}});function G(n,b,f,h,v,g){const l=m("KTModalCard"),s=m("KTViewUsersModal");return o(),t(_,null,[c(l,{title:"View Users Modal Example",description:"Click on the below buttons to launch <br/>user lists example.",image:n.getIllustrationsPath("10.png"),"button-text":"View Users","modal-id":"kt_modal_view_users"},null,8,["image"]),c(s)],64)}const ee=p(q,[["render",G]]);export{ee as default};