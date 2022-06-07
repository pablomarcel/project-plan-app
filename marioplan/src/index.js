import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import {reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import {BrowserRouter} from "react-router-dom";

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'))

store.firebaseAuthIsReady.then(() => {
  root.render(<Provider store={store}><App /></Provider>);
  registerServiceWorker();
});

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//         reduxFirestore(fbConfig) // redux bindings for firestore
//     )
// );
//
// const rrfProps = {
//     firebase,
//     config: fbConfig,
//     dispatch: store.dispatch
// }


// store.firebaseAuthIsReady.then(() => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <ReactReduxFirebaseProvider firebase={...rrfProps} config={fbConfig} dispatch={store.dispatch}>
//
//                 <App />
//
//             </ReactReduxFirebaseProvider>
//
//         </Provider>, document.getElementById('root'));
//     registerServiceWorker();
// });

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//
//       </Provider>
//     </React.StrictMode>
// )

