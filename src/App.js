import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyA6AFf44p-EeJnDthVYhsyaw7WM-B8ttvM",
            authDomain: "manager-c3e80.firebaseapp.com",
            databaseURL: "https://manager-c3e80.firebaseio.com",
            projectId: "manager-c3e80",
            storageBucket: "",
            messagingSenderId: "391989446135"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;