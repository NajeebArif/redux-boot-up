import { legacy_createStore } from "redux";
import { rootReducer } from "./rootReducer";

export default function configureStore(){
    const store = legacy_createStore(rootReducer);
    store.subscribe(()=>console.log('Store changed'))
    store.subscribe(() => console.log('Value', store.getState().counterReducer.value))
    return store;
}