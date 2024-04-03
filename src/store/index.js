import { createStore } from "redux";

const INITIAL_VALUE={
    counter:0,
    privacy:false
}


const counterReducer=(store=INITIAL_VALUE,action)=>{
    
    if(action.type=='INCREMENT' && store.privacy==false){
        return{...store,counter: store.counter+1};
    }else if(action.type=='DECREMENT'&& store.privacy==false){
        return{...store,counter: store.counter-1};
    }else if(action.type=='ADD'&& store.privacy==false){
        return{...store,counter: store.counter+ Number(action.payload.num)};
    }else if(action.type=='SUBTRACT'&& store.privacy==false){
        return{...store,counter: store.counter-Number(action.payload.num)};
    }else if(action.type=='PRIVACY_TOGGLE'){
        return{...store,privacy: !store.privacy};
    }else if(action.type=='RESET'){
        return INITIAL_VALUE;
    }
    return store;
}

const counterStore=createStore(counterReducer);

export default counterStore;