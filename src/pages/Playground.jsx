import React,{useState}from'react';import*as S from'../styles.js';
export default function Playground(){
  const[ep,setEp]=useState('/api/v1/health');const[method,setMethod]=useState('GET');const[token,setToken]=useState('');const[res,setRes]=useState('');const[loading,setLoading]=useState(false);
  const run=async()=>{setLoading(true);try{const r=await fetch('https://it-s-api.vercel.app'+ep,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'}});const d=await r.text();setRes(r.status+' '+r.statusText+'\n\n'+d);}catch(e){setRes('Error: '+e.message);}setLoading(false);};
  const sel={...S.input,width:'auto'};
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'API Playground'),
    React.createElement('div',{style:{...S.card}},
      React.createElement('div',{style:{display:'flex',gap:'0.75rem',marginBottom:'1rem',flexWrap:'wrap'}},
        React.createElement('select',{style:sel,value:method,onChange:e=>setMethod(e.target.value)},['GET','POST','PUT','DELETE'].map(m=>React.createElement('option',{key:m},m))),
        React.createElement('input',{style:{...S.input,flex:1},value:ep,onChange:e=>setEp(e.target.value),placeholder:'/api/v1/health'})
      ),
      React.createElement('div',{style:{marginBottom:'1rem'}},React.createElement('label',{style:S.muted},'API Key'),React.createElement('input',{style:{...S.input,marginTop:'0.3rem'},value:token,onChange:e=>setToken(e.target.value),placeholder:'its_...'})),
      React.createElement('button',{style:S.btn,onClick:run,disabled:loading},loading?'Sending...':'Send Request'),
      res&&React.createElement('pre',{style:{...S.card,marginTop:'1rem',fontFamily:'monospace',fontSize:'0.85rem',whiteSpace:'pre-wrap',overflowX:'auto'}},res)
    )
  );
}