import{K as v}from"./Card.ff6f6459.js";import{g as k,a as x}from"./assets.0d2645b5.js";import{C as w}from"./clipboard.fc795a9b.js";import{j as u,r as p,o as y,_ as f,m as b,n as e,B as i,J as a,C as T,v as g,A as d,F as C}from"./index.eb7a7b4e.js";const M=u({name:"share-and-earn-modal",components:{},setup(){const s=p(null),t=p(null);return y(()=>{new w(s.value).on("success",function(r){var c,o,l;const n=(c=s.value)==null?void 0:c.innerHTML;(o=t.value)==null||o.classList.add("bg-success"),(l=t.value)==null||l.classList.add("text-inverse-success"),s.value&&(s.value.innerHTML="Copied!"),setTimeout(function(){var _,h;s.value&&n&&(s.value.innerHTML=n),(_=t.value)==null||_.classList.remove("bg-success"),(h=t.value)==null||h.classList.remove("text-inverse-success")},3e3),r.clearSelection()})}),{copyButtonRef:s,inputRef:t,getAssetPath:k}}}),A={class:"modal fade",id:"kt_modal_share_earn",tabindex:"-1","aria-hidden":"true"},L={class:"modal-dialog modal-dialog-centered mw-800px"},S={class:"modal-content"},K={class:"modal-header pb-0 border-0 justify-content-end"},$={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},E={class:"modal-body scroll-y pt-0 pb-15"},I={class:"mw-lg-600px mx-auto"},B=e("div",{class:"mb-13 text-center"},[e("h1",{class:"mb-3"},"Share & Earn"),e("div",{class:"text-gray-400 fw-semobold fs-5"},[a(" If you need more info, please check "),e("a",{href:"#",class:"link-primary fw-bold"},"Author Commision"),a(". ")])],-1),P={class:"mb-10"},N=e("h4",{class:"fs-5 fw-semobold text-gray-800"}," Share my referral link with friends ",-1),R={class:"d-flex"},V={ref:"inputRef",id:"kt_share_earn_link_input",type:"text",class:"form-control form-control-solid me-3 flex-grow-1",name:"search",value:"https://keenthemes.com/?ref=skitechnology"},F={ref:"copyButtonRef",id:"kt_share_earn_link_copy_button",class:"btn btn-light fw-bold flex-shrink-0","data-clipboard-target":"#kt_share_earn_link_input"},H={class:"d-flex"},j={href:"#",class:"btn btn-light-primary w-100"},J=["src"],U={href:"#",class:"btn btn-icon btn-facebook w-100 mx-6"},q=["src"],z={href:"#",class:"btn btn-icon btn-twitter w-100"},D=["src"],G=T('<div class="d-flex align-items-center mt-10"><div class="flex-grow-1"><span class="fs-6 fw-semobold text-gray-800 d-block">Adding Users by Team Members</span><span class="fs-7 fw-semobold text-gray-400">If you need more info, please check budget planning</span></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked><span class="form-check-label"> Allowed </span></label></div>',1);function O(s,t,m,r,n,c){const o=d("KTIcon");return g(),b("div",A,[e("div",L,[e("div",S,[e("div",K,[e("div",$,[i(o,{"icon-name":"cross","icon-class":"fs-1"})])]),e("div",E,[e("div",I,[B,e("div",P,[N,e("div",R,[e("input",V,null,512),e("button",F," Copy Link ",512)])]),e("div",H,[e("a",j,[e("img",{alt:"Logo",src:s.getAssetPath("media/svg/brand-logos/google-icon.svg"),class:"h-15px me-3"},null,8,J),a(" Import Contacts ")]),e("a",U,[e("img",{alt:"Logo",src:s.getAssetPath("media/svg/brand-logos/facebook-2.svg"),class:"h-20px me-3"},null,8,q),a(" Facebook ")]),e("a",z,[e("img",{alt:"Logo",src:s.getAssetPath("media/svg/brand-logos/twitter.svg"),class:"h-20px me-3"},null,8,D),a(" Twitter ")])]),G])])])])])}const Q=f(M,[["render",O]]),W=u({name:"share-and-earn",components:{KTModalsCard:v,KTShareAndEarnModal:Q},setup(){return{getIllustrationsPath:x}}});function X(s,t,m,r,n,c){const o=d("KTModalsCard"),l=d("KTShareAndEarnModal");return g(),b(C,null,[i(o,{title:"Share & Earn Modal Example",description:"Click on the below buttons to launch <br/>a share & earn example.",image:s.getIllustrationsPath("9.png"),"button-text":"Share & Earn","modal-id":"kt_modal_share_earn"},null,8,["image"]),i(l)],64)}const te=f(W,[["render",X]]);export{te as default};
