const createSlice= require( "@reduxjs/toolkit").createSlice;

const initialState = {
    cakeCups:1000
}

const cakesSlice = createSlice({
    name: 'cakes',
    initialState,
    reducers:{
        cakes_order:(state)=>{
            state.cakeCups--
        }
    }
})

console.log(cakesSlice)

module.exports= cakesSlice.reducer;
module.exports.cakesActions = cakesSlice.actions