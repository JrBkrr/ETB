import{g as k,a as P}from"./assets.0d2645b5.js";import{K as C}from"./Card.ff6f6459.js";import{j as y,r as v,_ as x,m as s,n as t,B as u,z as d,F as n,p as f,J as m,v as o,w as r,q as _,A as b}from"./index.eb7a7b4e.js";const A=y({name:"upgrade-plan-modal",components:{},setup(){const a=v("month"),l=v("Startup");return{plans:[{title:"Startup",subTitle:"Best for startups",description:"Optimal for 10+ team size and new startup",priceMonth:"39",priceAnnual:"399",default:!0,custom:!1,features:[{title:"Up to 10 Active Users",supported:!0},{title:"Up to 30 Project Integrations",supported:!0},{title:"Analytics Module",supported:!0},{title:"Finance Module",supported:!1},{title:"Accounting Module",supported:!1},{title:"Network Platform",supported:!1},{title:"Unlimited Cloud Space",supported:!1}]},{title:"Advanced",subTitle:"Best for 100+ team size",description:"Optimal for 100+ team size and grown company",priceMonth:"339",priceAnnual:"3399",default:!1,custom:!1,features:[{title:"Up to 10 Active Users",supported:!0},{title:"Up to 30 Project Integrations",supported:!0},{title:"Analytics Module",supported:!0},{title:"Finance Module",supported:!0},{title:"Accounting Module",supported:!0},{title:"Network Platform",supported:!1},{title:"Unlimited Cloud Space",supported:!1}]},{title:"Enterprise",subTitle:"Best value for 1000+ team",description:"Optimal for 1000+ team and enterpise",priceMonth:"999",priceAnnual:"9999",label:"Most popular",default:!1,custom:!1,features:[{title:"Up to 10 Active Users",supported:!0},{title:"Up to 30 Project Integrations",supported:!0},{title:"Analytics Module",supported:!0},{title:"Finance Module",supported:!0},{title:"Accounting Module",supported:!0},{title:"Network Platform",supported:!0},{title:"Unlimited Cloud Space",supported:!0}]},{title:"Custom",subTitle:"Requet a custom license",default:!1,custom:!0}],current:a,selected:l,getAssetPath:k}}}),$={class:"modal fade",id:"kt_modal_upgrade_plan",tabindex:"-1","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},K={class:"modal-content rounded"},I={class:"modal-header justify-content-end border-0 pb-0"},B={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},N={class:"modal-body pt-0 pb-15 px-5 px-xl-20"},S=t("div",{class:"mb-13 text-center"},[t("h1",{class:"mb-3"},"Upgrade a Plan"),t("div",{class:"text-gray-400 fw-semobold fs-5"},[m(" If you need more info, please check "),t("a",{href:"#",class:"link-primary fw-bold"},"Pricing Guidelines"),m(". ")])],-1),j={class:"d-flex flex-column"},z={class:"nav-group nav-group-outline mx-auto","data-kt-buttons":"true"},F={class:"row mt-10"},V={class:"col-lg-6 mb-10 mb-lg-0"},E={class:"nav flex-column"},O=["onClick","data-bs-target"],q={class:"d-flex align-items-center me-2"},D={class:"form-check form-check-custom form-check-solid form-check-success me-6"},G=["value","checked"],J={class:"flex-grow-1"},L={class:"d-flex align-items-center fs-2 fw-bold flex-wrap"},R={key:0,class:"badge badge-light-success ms-2 fs-7"},W={class:"fw-semobold opacity-50"},H={class:"ms-5"},Q={key:0,class:"btn btn-sm btn-primary"},X=t("span",{class:"mb-2"},"$",-1),Y={class:"fs-3x fw-bold"},Z=t("span",{class:"fs-7 opacity-50"},[m("/ "),t("span",{"data-kt-element":"period"},"Mon")],-1),tt={class:"col-lg-6"},et={class:"tab-content rounded h-100 bg-light p-10"},st=["id"],ot={class:"pb-5"},at=t("h2",{class:"fw-bold text-dark"}," What\u2019s in Startup Plan? ",-1),nt={class:"text-gray-400 fw-semobold"},lt={class:"pt-1"},rt={class:"fw-semobold fs-5 text-gray-700 flex-grow-1"},it={class:"fw-semobold fs-5 text-gray-400 flex-grow-1"},ct=t("div",{class:"d-flex flex-center flex-row-fluid pt-12"},[t("button",{type:"reset",class:"btn btn-light me-3","data-bs-dismiss":"modal"}," Cancel "),t("button",{type:"submit",class:"btn btn-primary"},"Upgrade Plan")],-1);function dt(a,l,h,w,M,U){const c=b("KTIcon");return o(),s("div",$,[t("div",T,[t("div",K,[t("div",I,[t("div",B,[u(c,{"icon-name":"cross","icon-class":"fs-1"})])]),t("div",N,[S,t("div",j,[t("div",z,[t("button",{onClick:l[0]||(l[0]=e=>a.current="month"),class:d([[a.current==="month"&&"active"],"btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2"])}," Monthly ",2),t("button",{onClick:l[1]||(l[1]=e=>a.current="annual"),class:d([[a.current==="annual"&&"active"],"btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"])}," Annual ",2)]),t("div",F,[t("div",V,[t("div",E,[(o(!0),s(n,null,f(a.plans,(e,i)=>(o(),s("div",{key:i,onClick:p=>a.selected=e.title,class:d(["nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6",[i!==a.plans.length-1&&"mb-6",e.default&&"active",!e.custom&&"btn-active btn-active-primary"]]),"data-bs-toggle":"tab","data-bs-target":`#kt_upgrade_plan_${i}`},[t("div",q,[t("div",D,[t("input",{class:"form-check-input",type:"radio",name:"plan",value:e.title,checked:a.selected===e.title},null,8,G)]),t("div",J,[t("h2",L,[m(r(e.title)+" ",1),e.label?(o(),s("span",R,r(e.label),1)):_("",!0)]),t("div",W,r(e.subTitle),1)])]),t("div",H,[e.custom?(o(),s("button",Q," Contact Us ")):(o(),s(n,{key:1},[X,t("span",Y,r(a.current==="month"?e.priceMonth:e.priceAnnual),1),Z],64))])],10,O))),128))])]),t("div",tt,[t("div",et,[(o(!0),s(n,null,f(a.plans,(e,i)=>(o(),s(n,{key:i},[e.custom?_("",!0):(o(),s("div",{key:0,class:d([[e.default&&"show active"],"tab-pane fade"]),id:`kt_upgrade_plan_${i}`},[t("div",ot,[at,t("div",nt,r(e.description),1)]),t("div",lt,[(o(!0),s(n,null,f(e.features,(p,g)=>(o(),s(n,{key:g},[e.features?(o(),s("div",{key:0,class:d([{"mb-7":g!==e.features.length-1},"d-flex align-items-center"])},[p.supported?(o(),s(n,{key:0},[t("span",rt,r(p.title),1),u(c,{"icon-name":"check-circle","icon-class":"fs-1 text-success"})],64)):(o(),s(n,{key:1},[t("span",it,r(p.title),1),u(c,{"icon-name":"cross-circle","icon-class":"fs-1"})],64))],2)):_("",!0)],64))),128))])],10,st))],64))),128))])])])]),ct])])])])}const ut=x(A,[["render",dt]]),pt=y({name:"upgrade-plan",components:{KTModalCard:C,KTUpgradePlanModal:ut},setup(){return{getIllustrationsPath:P,getAssetPath:k}}});function mt(a,l,h,w,M,U){const c=b("KTModalCard"),e=b("KTUpgradePlanModal");return o(),s(n,null,[u(c,{title:"Upgrade Plan Modal Example",description:"Click on the below buttons to launch <br/>a upgrade plan example.",image:a.getIllustrationsPath("8.png"),"button-text":"Upgrade Plan","modal-id":"kt_modal_upgrade_plan"},null,8,["image"]),u(e)],64)}const ht=x(pt,[["render",mt]]);export{ht as default};