const store=require('./App/store');
const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions;
console.log('Initial State', store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()));
store.dispatch(pizzaActions.pizza_order())
