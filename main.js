import Aqua from 'https://deno.land/x/aqua@v1.2.4/mod.ts';

const portN = 8800;
const app = new Aqua(portN);
console.log(`Server running at http://localhost:${portN}`);

app.serve('public', '/public');

app.get('/', async (req) => {
  return await app.render('public/index.html');
});

app.get('/api', async (req) => {
  const zipcode = req.query.zipcode;
  const url = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=66ac2c75187dfec5&format=json&name=${zipcode}`;
  const res = await fetch(url);
  const obj = await res.json();

  return JSON.stringify(obj);
});
