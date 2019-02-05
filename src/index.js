import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; 
import reducer from './reducers/reducer'
import {Provider} from 'react-redux'; 
import MoviesApi from './apis/MoviesApi'

const initialState = {
    'listMovie': [],
    'listTeam': [
        {name:'Example',score:100}
    ],
    'listScores':['100'],
    'currentPlayer': 0,
    'time':0,
    'status': false,
    'currentTitle': '',
}

// Kevin Altamar 
// 32
// 3028789 
// Cra 19 23 36 
// 3022852334

async function getMovies(id = 1){
   const jsonMovies  = await MoviesApi.firstLoad(id);
   store.dispatch({
    type:'ADD_MOVIES',
    payload:{
        jsonMovies
    }
})
}

getMovies(); 
getMovies(2);
getMovies(3);
getMovies(4);

const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const HOC = (
    <Provider store={store}>
        <App/>
    </Provider>)

ReactDOM.render(HOC, document.getElementById('root'));
serviceWorker.unregister();
