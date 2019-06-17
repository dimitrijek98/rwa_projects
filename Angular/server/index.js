const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const config = require("./Config");



var sequelize = new Sequelize(config.db_name, config.db_user, config.db_pass, {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    }

)
var Card = sequelize.define('card',{
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    number:{
        type: Sequelize.STRING,
        field: 'number'
    },
    cvv: {
        type: Sequelize.INTEGER,
        field: 'cvv'
    },
    money: {
        type: Sequelize.INTEGER,
        field: 'money',
        
    },
    createdAt:{
        type: Sequelize.DATE,
        field: 'createdAt'
        },
    updatedAt:{
        type: Sequelize.DATE,
        field: 'updatedAt'
    }

})

var Product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            field: 'name'
        },
        price:{
            type: Sequelize.FLOAT,
            field: 'price'
        },
        description: {
            type: Sequelize.STRING,
            field: 'description'
        },
        createdAt:{
            type: Sequelize.DATE,
            field: 'createdAt'
            },
        updatedAt:{
            type: Sequelize.DATE,
            field: 'updatedAt'
        }
})

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
      type: Sequelize.STRING,
      field: 'username'
    },
    password: {
      type: Sequelize.STRING,
      field:'password'  
    },
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    surname: {
        type: Sequelize.STRING,
        field: 'surname'
    },
    createdAt:{
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt:{
        type: Sequelize.DATE,
        field: 'updatedAt'
    }
});

sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database');
    });

app.listen(3200, function() {
    console.error("App listening on 3200");
});

app.use(express.static('./profileIcons'))


app.get("/AllUsers", async function(req,res){  
    let users = await GetAllUsers();
    if(users){
        res.json({success: true, data: users})
    }
    res.json({success: false, data: users})
});
app.post("/Login", async function(req,res){
    let user = await loginUser("neko","neko");
    if(user){
        res.json({success: true, data: user})
    }
    res.json({success: false, data: user})
})

async function loginUser(username,password){
    let user = await User.findOne({where: {username: username}});
    if(user){
        if(user.dataValues.password === password)
            return user.dataValues;
    }
}
async function GetAllUsers(){
    let users = await User.findAll({where: {username: 'neko'}});
    if(users)
    {
        let usersData = await users.map(user =>user.dataValues);
        console.log(usersData);
        return usersData
    }
    return users
}







