export function fetchApi(t,e,h,n=!0){fetch(t).then((t=>{if(!t.ok)throw t;return t.json()})).then((t=>{e(t)})).catch((t=>{h()}))}