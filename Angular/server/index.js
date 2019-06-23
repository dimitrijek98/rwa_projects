const Sequelize = require('sequelize');
const express = require('express');
const app = express();
var cors = require('cors');
const config = require("./Config");
const bodyParser = require('body-parser')

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())

app.use(cors());



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
var Card = sequelize.define('card', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },
    number: {
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
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt: {
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
    price: {
        type: Sequelize.FLOAT,
        field: 'price'
    },
    category: {
        type: Sequelize.STRING,
        field: 'category'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt: {
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
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
    firstName: {
        type: Sequelize.STRING,
        field: 'firstName'
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'lastName'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt'
    },
    updatedAt: {
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

app.listen(3200, function () {
    console.error("App listening on 3200");
});

app.use(express.static('./productPictures'))


app.get("/AllProducts", async function (req, res) {
    let products = await Product.findAll();
    let productsArray = await products.map(product => product.dataValues);
    res.header(200);
    res.json(productsArray);

});


app.get('/Category', async function (req, res) {
    let category = req.query.category;
    console.log(category);
    let response = await Product.findAll({
        where: {
            category: category
        }
    });
    if (response) {
        let productsArray = await response.map(product => product.dataValues);
        res.json(productsArray);
    } else {
        res.json(null);
    }
})

app.put('/Pay', async function (req, res) {
    console.log(req.body);
    let card = req.body;
    let cardFound = await Card.findOne({
        where: {
            number: card.number,
            cvv: card.cvv
        }
    });
    if (!cardFound) {
        res.json(null);
    } else {
        if (card.money < cardFound.dataValues.money) {
            let payment = await Card.update({
                money: cardFound.dataValues.money - card.money
            }, {
                returning: true,
                where: {
                    number: card.number,
                    cvv: card.cvv
                }
            })
            res.header(200);
            res.json(payment);
        }
        else{
            res.json(null);
        }
    }
})

app.post("/Login", async function (req, res) {
    let user = await User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    });
    if (!user) {
        res.json(null);
    } else {
        res.header(200);
        res.json(user.dataValues);
    }
});
app.post("/Register", async function (req, res) {

    let alredyThere = await findUser(req.body.email, req.body.password);
    console.log(alredyThere);
    if (alredyThere) {
        res.json(null);
    } else {
        let user =
            await User.create({
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                createdAt: new Date(),
                updatedAt: new Date()
            });

        res.header(200);
        res.json(user.dataValues);

    }

})
async function findUser(email, password) {
    let alredyThere = await User.findOne({
        where: {
            email: email,
            password: password
        }
    });
    console.log(alredyThere)
    if (!alredyThere)
        return null;
    return alredyThere.dataValues;
}