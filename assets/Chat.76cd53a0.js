import{g as o}from"./assets.0d2645b5.js";import{j as M,r,H as C,l as j,_ as B,m as l,n as e,B as f,F as d,p as v,W as T,a1 as H,a2 as N,C as P,v as a,z as A,w as m,q as h,x,A as p}from"./index.eb7a7b4e.js";import{M as O,a as I,D as R}from"./Dropdown4.130e896d.js";import{c as D}from"./contacts.e7219e4b.js";const V=M({name:"private-chat",components:{MessageIn:O,MessageOut:I,Dropdown4:R},setup(){const s=r(null),n=r(null),b=r(null),y=j(),c=r([{type:"in",name:"Brian Cox",image:o("media/avatars/300-25.jpg"),time:"5 Hours",text:"How likely are you to recommend our company to your friends and family ?"},{type:"out",image:o("media/avatars/300-1.jpg"),time:"2 Hours",text:"Hey there, we\u2019re just writing to let you know that you\u2019ve been subscribed to a repository on GitHub."},{type:"in",name:"Brian Cox",image:o("media/avatars/300-25.jpg"),time:"2 Hour",text:"Ok, Understood!"},{type:"out",image:o("media/avatars/300-1.jpg"),time:"2 Hours",text:"You\u2019ll receive notifications for all issues, pull requests!"},{type:"in",name:"Brian Cox",image:o("media/avatars/300-25.jpg"),time:"1 Hour",text:"You can unwatch this repository immediately by clicking here: Keenthemes.com"},{type:"out",image:o("media/avatars/300-1.jpg"),time:"4 mins",text:"Most purchased Business courses during this sale!"},{type:"in",name:"Brian Cox",image:o("media/avatars/300-25.jpg"),time:"2 mins",text:"Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided"}]),i=r(""),u=()=>{!i.value||(c.value.push({type:"out",image:o("media/avatars/300-1.jpg"),time:"Just now",text:i.value}),setTimeout(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)},1),i.value="",setTimeout(()=>{c.value.push({type:"in",name:"Ja Morant",image:o("media/avatars/300-25.jpg"),time:"Just now",text:"Thank you for your awesome support!"}),setTimeout(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)},1)},2e3))},_=C(()=>y.path.indexOf("/group-chat")!==-1);return{messages:c,messagesRef:s,newMessageText:i,addNewMessage:u,messagesInRef:n,messagesOutRef:b,contacts:D,isGroupChat:_,getAssetPath:o}}}),$={class:"d-flex flex-column flex-lg-row"},K={class:"flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0"},S={class:"card card-flush"},q={class:"card-header pt-7",id:"kt_chat_contacts_header"},F={class:"w-100 position-relative",autocomplete:"off"},G=e("input",{type:"text",class:"form-control form-control-solid px-15",name:"search",value:"",placeholder:"Search by username or email..."},null,-1),J={class:"card-body pt-5",id:"kt_chat_contacts_body"},z={class:"scroll-y me-n5 pe-5 h-200px h-lg-auto","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header","data-kt-scroll-wrappers":"#kt_content, #kt_chat_contacts_body","data-kt-scroll-offset":"0px"},U={class:"d-flex align-items-center"},Y={class:"symbol symbol-45px symbol-circle"},E=["src"],L={key:2,class:"symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"},Q={class:"ms-5"},W={href:"#",class:"fs-5 fw-bold text-gray-900 text-hover-primary mb-2"},X={class:"fw-semobold text-gray-400"},Z={class:"d-flex flex-column align-items-end ms-2"},ee={class:"text-muted fs-7 mb-1"},te={class:"flex-lg-row-fluid ms-lg-7 ms-xl-10"},se={class:"card",id:"kt_chat_messenger"},ae={class:"card-header",id:"kt_chat_messenger_header"},oe={class:"card-title"},le={class:"d-flex justify-content-center flex-column me-3"},ne={key:0,class:"symbol-group symbol-hover"},ie={class:"symbol symbol-35px symbol-circle"},re=["src"],ce={class:"symbol symbol-35px symbol-circle"},de=["src"],me=e("div",{class:"symbol symbol-35px symbol-circle"},[e("span",{class:"symbol-label bg-light-warning text-warning 40px"},"M")],-1),pe={class:"symbol symbol-35px symbol-circle"},ue=["src"],_e=e("div",{class:"symbol symbol-35px symbol-circle"},[e("span",{class:"symbol-label bg-light-danger text-danger 40px"},"O")],-1),ge=e("div",{class:"symbol symbol-35px symbol-circle"},[e("span",{class:"symbol-label bg-light-primary text-primary 40px"},"N")],-1),he={class:"symbol symbol-35px symbol-circle"},be=["src"],ye=e("a",{href:"#",class:"symbol symbol-35px symbol-circle","data-bs-toggle":"modal","data-bs-target":"#kt_modal_view_users"},[e("span",{class:"symbol-label fs-8 fw-bold","data-bs-toggle":"tooltip","data-bs-trigger":"hover",title:"","data-bs-original-title":"View more users"},"+42")],-1),fe=e("a",{href:"#",class:"fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"},"Brian Cox",-1),ve=e("div",{class:"mb-0 lh-1"},[e("span",{class:"badge badge-success badge-circle w-10px h-10px me-1"}),e("span",{class:"fs-7 fw-semobold text-gray-400"},"Active")],-1),xe={class:"card-toolbar"},ke={class:"me-n3"},we=e("button",{class:"btn btn-sm btn-icon btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},[e("i",{class:"bi bi-three-dots fs-2"})],-1),Me={class:"card-body",id:"kt_chat_messenger_body"},Ce={class:"scroll-y me-n5 pe-5 h-300px h-lg-auto",ref:"messagesRef","data-kt-element":"messages","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer","data-kt-scroll-wrappers":"#kt_content, #kt_app_content, #kt_chat_messenger_body","data-kt-scroll-offset":"5px"},je={class:"card-footer pt-4",id:"kt_chat_messenger_footer"},Be={class:"d-flex flex-stack"},Te=P('<div class="d-flex align-items-center me-2"><button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon"><i class="bi bi-paperclip fs-3"></i></button><button class="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon"><i class="bi bi-upload fs-3"></i></button></div>',1);function He(s,n,b,y,c,i){const u=p("KTIcon"),_=p("Dropdown4"),k=p("MessageIn"),w=p("MessageOut");return a(),l("div",$,[e("div",K,[e("div",S,[e("div",q,[e("form",F,[f(u,{"icon-name":"magnifier","icon-class":"fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"}),G])]),e("div",J,[e("div",z,[(a(!0),l(d,null,v(s.contacts,(t,g)=>(a(),l("div",{key:g,class:"d-flex flex-stack py-4"},[e("div",U,[e("div",Y,[t.image?(a(),l("img",{key:0,src:t.image,alt:""},null,8,E)):(a(),l("span",{key:1,class:A([`bg-light-${t.color} text-${t.color}`,"symbol-label fs-6 fw-bold"])},m(t.name.charAt(0)),3)),t.online?(a(),l("div",L)):h("",!0)]),e("div",Q,[e("a",W,m(t.name),1),e("div",X,m(t.email),1)])]),e("div",Z,[e("span",ee,m(t.time),1)])]))),128))])])])]),e("div",te,[e("div",se,[e("div",ae,[e("div",oe,[e("div",le,[s.isGroupChat?(a(),l("div",ne,[e("div",ie,[e("img",{alt:"Pic",src:s.getAssetPath("media/avatars/300-5.jpg")},null,8,re)]),e("div",ce,[e("img",{alt:"Pic",src:s.getAssetPath("media/avatars/300-25.jpg")},null,8,de)]),me,e("div",pe,[e("img",{alt:"Pic",src:s.getAssetPath("media/avatars/300-9.jpg")},null,8,ue)]),_e,ge,e("div",he,[e("img",{alt:"Pic",src:s.getAssetPath("media/avatars/300-23.jpg")},null,8,be)]),ye])):(a(),l(d,{key:1},[fe,ve],64))])]),e("div",xe,[e("div",ke,[we,f(_)])])]),e("div",Me,[e("div",Ce,[(a(!0),l(d,null,v(s.messages,(t,g)=>(a(),l(d,{key:g},[t.type==="in"?(a(),x(k,{key:0,ref_for:!0,ref:"messagesInRef",name:t.name,image:t.image,time:t.time,text:t.text},null,8,["name","image","time","text"])):h("",!0),t.type==="out"?(a(),x(w,{key:1,ref_for:!0,ref:"messagesOutRef",image:t.image,time:t.time,text:t.text},null,8,["image","time","text"])):h("",!0)],64))),128))],512)]),e("div",je,[T(e("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>s.newMessageText=t),onKeydown:n[1]||(n[1]=N((...t)=>s.addNewMessage&&s.addNewMessage(...t),["enter"])),class:"form-control form-control-flush mb-3","data-kt-element":"input",placeholder:"Type a message"},null,544),[[H,s.newMessageText]]),e("div",Be,[Te,e("button",{onClick:n[2]||(n[2]=(...t)=>s.addNewMessage&&s.addNewMessage(...t)),class:"btn btn-primary",type:"button","data-kt-element":"send"}," Send ")])])])])])}const Ie=B(V,[["render",He]]);export{Ie as default};
