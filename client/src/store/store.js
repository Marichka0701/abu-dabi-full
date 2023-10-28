// import {configureStore} from "@reduxjs/toolkit";
//
// import {dronesHistoryReducer} from "./slices/dronesHistorySlice";
//
// export const store = configureStore({
//     reducer: {
//         dronesHistory: dronesHistoryReducer,
//     }
// })





import {combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {configureStore} from "@reduxjs/toolkit";

import {dronesHistoryReducer} from "./slices/dronesHistorySlice";

const reducers = combineReducers({
    dronesHistory: dronesHistoryReducer,
})

export const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
