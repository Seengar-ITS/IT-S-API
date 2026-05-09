import React,{useState}from'react';import*as S from'../styles.js';
const sections=[{title:'Authentication',content:'All API requests require a Bearer token in the Authorization header. Get your API key from IT-S Console.'},{title:'Rate Limiting',content:'Free tier: 100 requests/hour. Pro: 10,000 requests/hour. Enterprise: unlimited.'},{title:'Errors',content:'The API uses standard HTTP status codes. 400 = Bad Request, 401 = Unauthorized, 429 = Rate Limited, 500 = Server Error.'},{title:'Versioning',content:'Current version: v1. All endpoints prefixed with /api/v1/. Breaking changes introduce new versions.'}];
export default function Reference(){
  const[open,setOpen]=useState(null);
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'API Reference'),
    sections.map(s=>React.createElement('div',{key:s.title,style:S.card},
      React.createElement('h2',{style:{...S.h2,cursor:'pointer'},onClick:()=>setOpen(open===s.title?null:s.title)},s.title+(open===s.title?' ▲':' ▼')),
      open===s.title&&React.createElement('p',{style:{...S.muted,marginTop:'0.5rem',lineHeight:1.7}},s.content)
    ))
  );
}