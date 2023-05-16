import Express from 'express';

const app = Express();

app.use(Express.json())

const PORT = 3000;

app.get("/ping", (_req, res)=>{
  res.send('pong');
});

app.listen(PORT, ()=> {
  console.log('Server running on port ' + PORT);
})