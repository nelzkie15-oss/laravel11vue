import{T as y,f as r,a as n,u as s,w as u,o as d,Z as _,b as t,j as c,d as m,e as g,i as p,k as f,t as b,g as v}from"./app-BfnqYjN1.js";import{_ as k}from"./MainLayout-CaHPxJzG.js";const w={class:"mx-4 mt-4"},P={class:"flex justify-between"},h={class:"grid grid-cols-12 gap-4"},N={class:"col-span-3"},V={class:"mb-3"},B={key:0,class:"text-red-500"},C={class:"mb-3"},S={key:0,class:"text-red-500"},j={class:"mb-3"},T=["disabled"],D={key:0},M={key:1},E={__name:"create",props:{errors:Object},setup(i){const o=y({name:"",price:""}),x=()=>{o.post(route("products.store"))&&o.reset()};return(l,e)=>(d(),r("div",null,[n(s(_),{title:"Create Product"}),n(k,null,{default:u(()=>[t("div",w,[t("div",P,[e[4]||(e[4]=t("h5",{class:"mb-2"},"Create Product",-1)),n(s(c),{href:l.route("products.index"),class:"p-2 mt-3 mb-4 text-white bg-red-500 rounded float-end"},{default:u(()=>e[3]||(e[3]=[m("Back")])),_:1},8,["href"])]),t("form",{onSubmit:e[2]||(e[2]=g(a=>x(),["prevent"]))},[t("div",h,[t("div",N,[t("div",V,[e[5]||(e[5]=t("label",{for:"Product Name"},"Product Name",-1)),p(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s(o).name=a),class:"w-full py-1"},null,512),[[f,s(o).name]]),i.errors.name?(d(),r("div",B,b(i.errors.name),1)):v("",!0)]),t("div",C,[e[6]||(e[6]=t("label",{for:"Product Price"},"Product Price",-1)),p(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>s(o).price=a),class:"w-full py-1"},null,512),[[f,s(o).price]]),i.errors.price?(d(),r("div",S,b(i.errors.price),1)):v("",!0)]),t("div",j,[n(s(c),{href:l.route("products.index"),class:"inline-block px-5 py-2 mb-4 mr-2 text-white bg-red-600 rounded"},{default:u(()=>e[7]||(e[7]=[m("Back")])),_:1},8,["href"]),t("button",{type:"submit",class:"px-5 py-2 mb-4 text-white bg-red-600 rounded",disabled:s(o).processing},[s(o).processing?(d(),r("span",D,"Save...")):(d(),r("span",M,"Save"))],8,T)])])])],32)])]),_:1})]))}};export{E as default};