import{j as o,_ as n,m as a,n as t,w as e,v as r}from"./index.8fb207d7.js";const d=o({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),i={class:"card"},c={class:"card-body p-0"},l={class:"card-px text-center py-20 my-10"},p={class:"fs-2x fw-bold mb-10"},m={class:"text-gray-400 fs-5 fw-semobold mb-13"},_=["innerHTML"],b=["data-bs-target"],g={class:"text-center px-5"},h=["src"];function f(s,u,x,y,S,v){return r(),a("div",i,[t("div",c,[t("div",l,[t("h2",p,e(s.title),1),t("p",m,[t("span",{innerHTML:s.description},null,8,_)]),t("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":`#${s.modalId}`},e(s.buttonText),9,b)]),t("div",g,[t("img",{src:s.image,alt:"",class:"mw-100 mh-300px"},null,8,h)])])])}const $=n(d,[["render",f]]);export{$ as K};
