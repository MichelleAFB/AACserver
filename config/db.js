

const mysql=require('mysql')


const db=mysql.createConnection({
  host:'us-cdbr-east-06.cleardb.net',
  user:'b9a25f42e722fd',
  password:'0331ec28',
  database:'heroku_74ccdb90d27e5ae'
})

/*
mysql://b9a25f42e722fd:0331ec28@us-cdbr-east-06.cleardb.net/heroku_74ccdb90d27e5ae?reconnect=true
*/




module.exports=db