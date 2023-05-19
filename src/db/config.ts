import {Sequelize} from "sequelize-typescript";
import {Client} from './Client';

const checkConnection= async () => {
  try {
    await connection.authenticate();
    console.log('Connection to the DB has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export const connection = new Sequelize('factuur','postgres', 'password',{
  dialect: "postgres",
  host:"localhost",
  logging: false,
  models:[Client]
});

export const connectionDB = async () => {
  try{
    await connection.sync({force : true});
    checkConnection();
  }catch(error){
    console.log(error);
  }
};