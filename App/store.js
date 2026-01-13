const configureStore = require('@reduxjs/toolkit').configureStore;

const pizzaReducer = require('../features/pizza/pizzaSlice')
const burgerReducer = require('../features/burger/burgerSlice')
const cakesReducer = require('../features/cakes/cakesSlice')

const store=configureStore({
    reducer:{
        pizza:pizzaReducer,
        burger:burgerReducer,
        cakes: cakesReducer
    }
})

module.exports = store