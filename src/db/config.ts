import {Sequelize} from "sequelize";

const connection = new Sequelize('factuur','postgres', 'password',{
  dialect: "postgres",
  host:"localhost",
  logging: false,
});

export const connectionDB = async () => {
  try{
    await connection.sync();
    console.log('conented to db')
  }catch(error){
    console.log(error);
  }
};