import { Middleware, applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
//import { thunk } from "redux-thunk";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whiteList: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
  blacklist: ["user"], //not persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
/* const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean); */

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
