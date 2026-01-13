const store=require('./App/store');
const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions;
const burgerActions = require('./features/burger/burgerSlice').burgerActions;
const cakesActions = require('./features/cakes/cakesSlice').cakesActions
console.log('Initial State', store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()));
store.dispatch(pizzaActions.pizza_order())
store.dispatch(burgerActions.burger_order())
store.dispatch(cakesActions.cakes_order())
unsubscribe()
