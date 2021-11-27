const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));


// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass
function create(req, res, next){
    const { data: {
        name, description, price, image_url }
    } = req.body;
    const newDish = {
        id: nextId(),
        name,
        description,
        price:Number(),
        image_url
    }
    dishes.push(newDish);
    res.status(201).json({ data: newDish });
}

function dishExists(req, res, next){
    const { data: 
        { name, description, price, image_url } = {} } 
            = req.body;
    if ({name, description, price, image_url}){
        return next();
    }
}

function dishHasProperties(req, res, next) {
    const {data} = req.body;
    const requiredFields = ["name", "description", "image_url", "price"];
    for (const field of requiredFields) {
        if (!data[field]) {
            next({
                status: 400,
                message: `Dish must include a ${field}`,
            })
        }
    }
    next();
}

function dishPriceIsRight(req, res, next) {
    const {data: { price }} = req.body;
    if ( price < 1 || !Number.isInteger(price) ){
        next({
            status: 400,
            message: "Dish must have a price that is an integer greater than 0"
        })
    }
    next();
}

function update(req, res, next){
    const {dishId} = req.params;
    const foundDish = dishes.find((dish) => dish.id === dishId);
  
    const { data: { name, description, price, image_url } = {} } = req.body;
  
    foundDish.name = name;
    foundDish.description = description;
    foundDish.price = price;
    foundDish.image_url = image_url;
  
    res.json({ data: foundDish });
}
function dishIdExists(req, res, next){
    const {dishId} = req.params;
    const foundDish = dishes.find((dish) => dish.id === dishId);
    if (!foundDish){
        next({
            status: 404,
            message: `Dish does not exist: ${dishId}.`
        })
    }
    next();
}

function dishIdInBodyMatches(req, res, next){
    const {dishId} = req.params;
    const {data: { id, name, description, price, image_url } = {} } = req.body;
    if (id && id !== dishId){
        next({
            status: 400,
            message: `Dish id does not match route id. Dish: ${id}, Route: ${dishId}`
        })
    }
    next();
}


function list(req, res, next){
    res.json({data: dishes})
}

function read(req, res, next){
    const {dishId} = req.params;
    const foundDish = dishes.find((dish) => dish.id === dishId);
    if (foundDish){
        res.json({ data: foundDish });
    }
    else{
        return next({
            status: 404,
            message: `${dishId} does not exist.`
        })
    }

}

module.exports = {
    list,
    read,
    create:[dishExists, dishHasProperties, dishPriceIsRight, create],
    update:[dishExists, dishIdExists, dishIdInBodyMatches, dishHasProperties, dishPriceIsRight, update],
};