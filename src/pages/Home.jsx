import React from'react';import*as S from'../styles.js';
const endpoints=[{method:'GET',path:'/api/v1/health',desc:'Check API health'},{method:'POST',path:'/api/v1/ai/chat',desc:'Send message to IT-S AI'},{method:'GET',path:'/api/v1/docs/list',desc:'List documents'},{method:'POST',path:'/api/v1/translate',desc:'Translate text'},{method:'GET',path:'/api/v1/search',desc:'Search across services'}];
export default function Home(){
  return React.createElement('div',{style:S.page},
    React.createElement('h1',{style:S.h1},'IT-S API'),React.createElement('p',{style:{...S.muted,marginBottom:'2rem'}},'Programmatic access to all IT-S Universe services'),
    React.createElement('h2',{style:S.h2},'Quick Start'),
    React.createElement('div',{style:{...S.card,fontFamily:'monospace',fontSize:'0.85rem',whiteSpace:'pre'}},`GET https://it-s-api.vercel.app/api/v1/health
Authorization: Bearer {your-api-key}`),
    React.createElement('h2',{style:{...S.h2,marginTop:'1.5rem'}},'Endpoints'),
    endpoints.map(e=>React.createElement('div',{key:e.path,style:S.card},
      React.createElement('div',{style:{display:'flex',gap:'0.75rem',alignItems:'center'}},
        React.createElement('span',{style:S.badge(e.method==='GET'?'#0ea5e9':'#7c3aed')},e.method),
        React.createElement('code',{style:{color:'#a78bfa'}},e.path)
      ),React.createElement('p',{style:{...S.muted,marginTop:'0.5rem'}},e.desc)
    ))
  );
}