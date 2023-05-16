import Express from 'express';
import ClientRouter from './routes/Client';
import {Sequelize} from "sequelize";
import {connectionDB} from './db/config';

// const checkConnection= async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

const app = Express();

connectionDB();


app.use(Express.json())

const PORT = 3000;

app.use('/client', ClientRouter);

// checkConnection();

app.listen(PORT, ()=> {
  console.log('Server running on port ' + PORT);
})
