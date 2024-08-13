import{r as I,j as t}from"./index-DHbi3jFW.js";import{u as A}from"./goober.modern-DovPBWGu.js";import{F as r,T as j}from"./index-BdUXuDu2.js";import{a as o}from"./index-CvDb4HLs.js";import{D as T,L as v,T as E,F as i,C as b}from"./index-Cco75LKM.js";import"./button-RnNGfyFq.js";import"./addEventListener-3bC8WVjU.js";const N={appointment_info:{date:"00:00AM MONDAY, JAN 31, 2024",provider:"Dr.Yao",time:"0h 00min",note:"",patient_name:"ALEXANDER WANG",patient_gender:"M",patient_age:100},medical_alert:[],treatment_info:{scheduled:[{time:"Today",info:"Tx: #19 imp package deal, Visit 1",treatment:[{tooth:19,surface:"",code:"D4265",procedure:"Materials to Aid Regeneration"},{tooth:19,surface:"",code:"D6010",procedure:"Implant Placement"}]}],unscheduled:[{time:"2024-06-16 00:00:00",info:"Tx: #19 imp package deal, Visit 2",treatment:[{tooth:19,surface:"",code:"D6057",procedure:"Implant Crown - Custom Abutment"},{tooth:19,surface:"",code:"D6059",procedure:"Implant Crown - Procelain/HNM Crown"}]},{time:"2024-06-26 00:00:00",info:"Tx: #19 imp package deal, Visit 3",treatment:[{tooth:19,surface:"",code:"imcrdivy",procedure:"Implant Crown Delivery"}]}]},prophy:["prophy","x-ray","polish"],prescription:["ibuprofen-600","clindamycin-300","peridex"],upcoming_appointment:[{date:"MONDAY, JAN 31, 2024",time:"00:00 AM",provider:"DR.YAO",reason:"Prophy, TopFl, PerioEx, Recall"}]},S=()=>{var c,s,p,d,u,h,m,x,f,y;const{Text:n}=j,[e,P]=I.useState(N),a=[{title:"TOOTH",dataIndex:"tooth",key:"tooth"},{title:"SURFACE",dataIndex:"surface",key:"surface"},{title:"CODE",dataIndex:"code",key:"code"},{title:"PROCEDURE",dataIndex:"procedure",key:"procedure"}],g=[{title:"DATE",dataIndex:"date",key:"date"},{title:"TIME",dataIndex:"time",key:"time"},{title:"PROVIDER",dataIndex:"provider",key:"provider"},{title:"REASON",dataIndex:"reason",key:"reason"}];return t.jsx(t.Fragment,{children:t.jsxs(r,{vertical:!0,justify:"space-between",gap:"middle",className:A`
          .ant-card {
            border-radius: 20px;
            border-width: 2px;
          }
        `,children:[t.jsx(o,{title:"APPOINTMENT INFORMATION",children:t.jsx(T,{title:"",items:[{key:"date",label:"APPOINTMENT TIME/DATE",children:((c=e==null?void 0:e.appointment_info)==null?void 0:c.date)||""},{key:"provider",label:"PROVIDER",children:((s=e==null?void 0:e.appointment_info)==null?void 0:s.provider)||""},{key:"time",label:"SCHEDULED TIME",children:((p=e==null?void 0:e.appointment_info)==null?void 0:p.time)||""},{key:"patient",label:"PATIENT INFO",children:t.jsx(T,{title:"",layout:"vertical",size:"small",colon:!1,items:[{key:"name",label:"NAME",children:((d=e==null?void 0:e.appointment_info)==null?void 0:d.patient_name)||""},{key:"age",label:"AGE",children:((u=e==null?void 0:e.appointment_info)==null?void 0:u.patient_age)||""},{key:"gender",label:"GENDER",children:((h=e==null?void 0:e.appointment_info)==null?void 0:h.patient_gender)||""}],labelStyle:{color:"#000000",fontWeight:500}})},{key:"note",label:"NOTE",children:((m=e==null?void 0:e.appointment_info)==null?void 0:m.note)||""}],labelStyle:{color:"#000000",fontWeight:500}})}),t.jsx(o,{title:"MEDICAL ALERTS",children:t.jsx(v,{header:null,footer:null,dataSource:(e==null?void 0:e.medical_alert)||[],size:"small",style:{height:(x=e==null?void 0:e.medical_alert)!=null&&x.length?100:0}})}),t.jsxs(o,{title:"TREATMENT INFORMATION",children:[t.jsxs(r,{vertical:!0,children:[t.jsx(E,{color:"success",style:{fontSize:18,width:220,fontWeight:"bold",textAlign:"center"},children:"Scheduled Procedure"}),(((f=e==null?void 0:e.treatment_info)==null?void 0:f.scheduled)||[]).map(l=>t.jsx(i,{columns:a,dataSource:(l==null?void 0:l.treatment)||[],title:()=>t.jsxs(n,{children:[t.jsx(n,{strong:!0,children:(l==null?void 0:l.time)||""}),t.jsx(n,{children:" - "+(l==null?void 0:l.info)})]}),pagination:!1}))]}),t.jsxs(r,{vertical:!0,style:{marginTop:50},children:[t.jsx(E,{color:"warning",style:{fontSize:18,width:220,fontWeight:"bold",textAlign:"center"},children:"Unscheduled Procedure"}),(((y=e==null?void 0:e.treatment_info)==null?void 0:y.unscheduled)||[]).map(l=>t.jsx(i,{columns:a,dataSource:(l==null?void 0:l.treatment)||[],title:()=>t.jsxs(n,{children:[t.jsx(n,{strong:!0,children:(l==null?void 0:l.time)||""}),t.jsx(n,{children:" - "+(l==null?void 0:l.info)})]}),pagination:!1}))]})]}),t.jsx(o,{title:"PROPHY CHECKLIST",children:t.jsx(b.Group,{options:[{label:"Prophy",value:"prophy"},{label:"Exam",value:"exam"},{label:"X-Ray",value:"x-ray"},{label:"Polish",value:"polish"},{label:"Floride",value:"floride"}],value:(e==null?void 0:e.prophy)||[]})}),t.jsx(o,{title:"PRESCRIPTION",children:t.jsx(b.Group,{options:[{label:"Amox 500",value:"amox-500"},{label:"Ibuprofen 600",value:"ibuprofen-600"},{label:"Prevident",value:"prevident"},{label:"Clindamycin 300",value:"clindamycin-300"},{label:"Halcion",value:"halcion"},{label:"Peridex",value:"peridex"},{label:"Ice Bag",value:"ice-bag"}],value:(e==null?void 0:e.prescription)||[]})}),t.jsx(o,{title:"UPCOMING APPOINTMENTS",children:t.jsx(i,{columns:g,dataSource:(e==null?void 0:e.upcoming_appointment)||[],pagination:!1})})]})})};export{S as default};
