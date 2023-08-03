import{g as N}from"./assets.c6e05840.js";import{h as T}from"./dom.1a4b7804.js";import{S as g}from"./sweetalert2.b7286a32.js";import{G as D}from"./global.0b0e94df.js";import{j as S,r as u,_ as x,m as _,n as e,B as a,y as o,aA as k,A as m,v as h,J as n,q as w}from"./index.8fb207d7.js";const q=S({name:"new-target-modal",components:{},setup(){const{Action_Start:t,State:s}=D(),f=u(null),b=u(null),c=u(!1),v=u({serialNumber:"0005",province:"\u0130stanbul",district:"Maslak",branch:"Etb Ana \u015Fube",hardwareVersion:{name:"TPS388"},version:{versionNumberSemantic:"1.0.9",name:"Deniz Test Yaz\u0131l\u0131m Version1.0.9",deviceType:"2"}}),p=u({serialNumber:[{required:!0,message:"Please input Activity name",trigger:"blur"}],province:[{required:!0,message:"Please select Activity zone",trigger:"change"}],district:[{required:!0,message:"Please select Activity zone",trigger:"change"}],branch:[{required:!0,message:"Please select Activity zone",trigger:"change"}],hardwareVersion:[{required:!0,message:"Please select Activity zone",trigger:"change"}],versionNumberSemantic:[{required:!0,message:"Please select Activity zone",trigger:"change"}],versionName:[{required:!0,message:"Please select Activity zone",trigger:"change"}],deviceType:[{required:!0,message:"Please select Activity zone",trigger:"change"}]});return{targetData:v,submit:()=>{!f.value||f.value.validate(async r=>{if(console.log("valid",r),r)c.value=!0,await t("post","devices","",v.value),s.Errors?(c.value=!1,g.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})):setTimeout(()=>{c.value=!1,g.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(async()=>{await t("get","devices","Devices"),T(b.value)})},2e3);else return g.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}),!1})},loading:c,formRef:f,rules:p,newTargetModalRef:b,getAssetPath:N}}});const A={class:"modal fade",id:"kt_modal_new_device",ref:"newTargetModalRef",tabindex:"-1","aria-hidden":"true"},C={class:"modal-dialog modal-dialog-centered mw-650px"},P={class:"modal-content rounded"},B={class:"modal-header pb-0 border-0 justify-content-end"},z={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},U={class:"modal-body scroll-y px-10 px-lg-15 pt-0 pb-15"},M=e("div",{class:"mb-13 text-center"},[e("h1",{class:"mb-3"},"Create New Version")],-1),$={class:"d-flex flex-column mb-8 fv-row"},R=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"serialNumber")],-1),E={class:"d-flex flex-column mb-8 fv-row"},O=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"province")],-1),j={class:"d-flex flex-column mb-8 fv-row"},F=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"district")],-1),G={class:"d-flex flex-column mb-8 fv-row"},I=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"branch")],-1),K={class:"d-flex flex-column mb-8 fv-row"},J=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"hardwareVersionName")],-1),Y={class:"d-flex flex-column mb-8 fv-row"},H=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"versionNumberSemantic")],-1),L={class:"d-flex flex-column mb-8 fv-row"},Q=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"versionName")],-1),W={class:"d-flex flex-column mb-8 fv-row"},X=e("label",{class:"required fs-6 fw-semobold mb-2"},"deviceType",-1),Z={class:"text-center"},ee=e("button",{type:"reset",id:"kt_modal_new_target_cancel",class:"btn btn-light me-3"}," Cancel ",-1),te=["data-kt-indicator"],ae={key:0,class:"indicator-label"},se={key:1,class:"indicator-progress"},oe=e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function le(t,s,f,b,c,v){const p=m("KTIcon"),i=m("el-input"),r=m("el-form-item"),d=m("el-option"),y=m("el-select"),V=m("el-form");return h(),_("div",A,[e("div",C,[e("div",P,[e("div",B,[e("div",z,[a(p,{"icon-name":"cross","icon-class":"fs-1"})])]),e("div",U,[a(V,{id:"kt_modal_new_target_form",onSubmit:s[8]||(s[8]=k(l=>t.submit(),["prevent"])),model:t.targetData,rules:t.rules,ref:"formRef",class:"form"},{default:o(()=>[M,e("div",$,[R,a(r,{prop:"serialNumber"},{default:o(()=>[a(i,{modelValue:t.targetData.serialNumber,"onUpdate:modelValue":s[0]||(s[0]=l=>t.targetData.serialNumber=l),placeholder:"serialNumber",name:"serialNumber"},null,8,["modelValue"])]),_:1})]),e("div",E,[O,a(r,{prop:"province"},{default:o(()=>[a(i,{modelValue:t.targetData.province,"onUpdate:modelValue":s[1]||(s[1]=l=>t.targetData.province=l),placeholder:"province",name:"province"},null,8,["modelValue"])]),_:1})]),e("div",j,[F,a(r,{prop:"district"},{default:o(()=>[a(i,{modelValue:t.targetData.district,"onUpdate:modelValue":s[2]||(s[2]=l=>t.targetData.district=l),placeholder:"district",name:"district"},null,8,["modelValue"])]),_:1})]),e("div",G,[I,a(r,{prop:"branch"},{default:o(()=>[a(i,{modelValue:t.targetData.branch,"onUpdate:modelValue":s[3]||(s[3]=l=>t.targetData.branch=l),placeholder:"branch",name:"branch"},null,8,["modelValue"])]),_:1})]),e("div",K,[J,a(r,{prop:"hardwareVersion"},{default:o(()=>[a(y,{modelValue:t.targetData.hardwareVersion.name,"onUpdate:modelValue":s[4]||(s[4]=l=>t.targetData.hardwareVersion.name=l),placeholder:"hardwareVersionName",name:"hardwareVersion",as:"select"},{default:o(()=>[a(d,{value:""},{default:o(()=>[n("Select type...")]),_:1}),a(d,{label:"Type 1",value:"1"},{default:o(()=>[n("Type 1")]),_:1}),a(d,{label:"Type 2",value:"2"},{default:o(()=>[n("Type 2")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e("div",Y,[H,a(r,{prop:""},{default:o(()=>[a(i,{modelValue:t.targetData.version.versionNumberSemantic,"onUpdate:modelValue":s[5]||(s[5]=l=>t.targetData.version.versionNumberSemantic=l),placeholder:"versionNumberSemantic",name:"versionNumberSemantic"},null,8,["modelValue"])]),_:1})]),e("div",L,[Q,a(r,{prop:""},{default:o(()=>[a(i,{modelValue:t.targetData.version.name,"onUpdate:modelValue":s[6]||(s[6]=l=>t.targetData.version.name=l),placeholder:"versionName",name:"versionName"},null,8,["modelValue"])]),_:1})]),e("div",W,[X,a(r,{prop:""},{default:o(()=>[a(y,{modelValue:t.targetData.version.deviceType,"onUpdate:modelValue":s[7]||(s[7]=l=>t.targetData.version.deviceType=l),placeholder:"deviceType",name:"deviceType",as:"select"},{default:o(()=>[a(d,{value:""},{default:o(()=>[n("Select type...")]),_:1}),a(d,{label:"Type 1",value:"1"},{default:o(()=>[n("Type 1")]),_:1}),a(d,{label:"Type 2",value:"2"},{default:o(()=>[n("Type 2")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e("div",Z,[ee,e("button",{"data-kt-indicator":t.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[t.loading?w("",!0):(h(),_("span",ae,[n(" Submit "),a(p,{"icon-name":"arrow-right","icon-class":"fs-3 ms-2 me-0"})])),t.loading?(h(),_("span",se,[n(" Please wait... "),oe])):w("",!0)],8,te)])]),_:1},8,["model","rules"])])])])],512)}const ce=x(q,[["render",le]]);export{ce as D};
