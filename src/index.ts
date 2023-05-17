import Express from 'express';
import ClientRouter from './routes/Client';
import {Sequelize} from "sequelize";
import {connectionDB, connection} from './db/config';



const app = Express();

connectionDB();


app.use(Express.json())

const PORT = 3000;

app.use('/client', ClientRouter);

app.listen(PORT, ()=> {
  console.log('Server running on port ' + PORT);
})
