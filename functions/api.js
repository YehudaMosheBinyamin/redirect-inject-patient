export async function onRequest() {
  const r = await fetch('https://6xc8wy8oje.execute-api.eu-north-1.amazonaws.com/injectRandomPatient',  {
    method: 'POST,
 headers: {
    'Content-Type': 'application/json'
},
 body: JSON.stringify({}) // if your Lambda expects data
  });
  const json = await r.json();
  return new Response(JSON.stringify(json), {
    headers: { 'content-type': 'application/json',
               'Access-Control-Allow-Origin': '*' }
  });
}
