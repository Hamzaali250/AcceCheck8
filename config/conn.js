const mongose = require('mongoose');
const DB = process.env.DATABASE;
 mongose.connect(DB).then(()=>{
  console.log('Database connection established')
 }).catch((error)=> console.log('DATABASE connection error'))
