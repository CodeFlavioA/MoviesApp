function reducer(state,action){

    function nextPlayer(){
        let cantPlayers = state.listTeam.length-1;
        let current = state.currentPlayer;
        let newIndex; 
        if(current+1 === cantPlayers){
            newIndex = current+1; 
        }else if (current+1 >cantPlayers){
            newIndex = 0; 
        }else{
            newIndex=current+1;
        }

        return newIndex; 
    }

    switch (action.type) {
    case 'ADD_PLAYER':{
        if(action.payload === '' || action.payload === 'Example'){
            return state
        }
        const newPlayer = {
            'name': action.payload,
            'score': 0,
        }
        let arrayScore = state.listScores; 
        if(state.listTeam[0].name==='Example'){
            arrayScore = [0];
            return { 
                ...state, 
                listTeam: [newPlayer],
                listScores: arrayScore
            }
        }
        arrayScore.push('0');
        return { 
            ...state, 
            listTeam: [...state.listTeam, newPlayer],
            currentPlayer: state.listTeam.length++,
            listScores: arrayScore
        }
    }

    case 'NEXT_PLAYER':{
        let newIndex = nextPlayer();
        return {
            ...state,
            currentPlayer: newIndex,
        }
    }
    case 'ADD_MOVIES':{
        let results =  state.listMovie
        //action.payload.jsonMovies.results;
        results = results.concat(action.payload.jsonMovies.results)
        return {
            ...state, 
            listMovie: results
        }
    }
    case 'SWITCH_STATE':{
        return{
            ...state, 
            status: !state.status,
        }
    }
    case 'RESET_TIME':{
        return{
            ...state, 
            time: 0,
        }
    }
    case 'ADD_POINT':{
        let newstate = Object.assign({},state); //new state from current state
        let current = newstate.currentPlayer   //get current player 
        let listTeam = newstate.listTeam;  //getListTeam
        listTeam[current].score++; //+1 to score 
        let newArrayScore = state.listScores
        newArrayScore[current]++; 
        return {
            ...state, 
            listTeam,
            listScores: {...newArrayScore}
        } 
        //Object.assign({},state,listTeam,newArrayScore)
    }
    case 'SEND_SEC':{
        if(state.time>=120){
            let newIndex = nextPlayer();
            return {
                ...state,
                status: !state.status,
                time: 0, 
                currentPlayer: newIndex,
                
            }
        }
        return{
            ...state, 
            time: state.time+1,
        }
    }
    case 'CURRENT_MOVIE':{
        return{
            ...state, 
            currentMovie: action.payload,
        }
    }
    case 'ADD_COLLECTION_MOVIE':{
        let listMovie = state.listMovie
        let results = action.payload; 
        let newlist = listMovie.concat(results)
        return{
            ...state, 
            listMovie: newlist,
        }
    }

    default:
    return state
    }
}

export default reducer; 