'use client';
import { useState } from 'react';
export default function Page(){
  const [uid, setUid] = useState('04A1B2C3');
  const [deviceKey, setDeviceKey] = useState('devkey-demo-123');
  const [msg, setMsg] = useState('');
  async function simulate(){
    const api = (process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000') + '/tap';
    const r = await fetch(api, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ deviceKey, uid }) });
    const d = await r.json();
    setMsg(JSON.stringify(d));
  }
  return (<main style={{padding:20}}>
    <h1>Demo Web (simulate tap)</h1>
    <input value={uid} onChange={e=>setUid(e.target.value)} placeholder='UID' />
    <input value={deviceKey} onChange={e=>setDeviceKey(e.target.value)} placeholder='deviceKey' />
    <button onClick={simulate}>Send Tap</button>
    <pre>{msg}</pre>
  </main>);
}
