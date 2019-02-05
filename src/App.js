import React, { Component, createRef } from 'react';
import Menu from './components/Menu'
import Categories from './components/Categories'
import Container from './containers/Container'
import MoviesChooser from './components/MovieChooser'
import Timer from './containers/TimerLayout'
import {connect} from 'react-redux'
import CategoriesList from './apis/CategoriesList.js'

class App extends Component {
  
  constructor(props){
    super(props) 
    this.numberPlayers = 0; 
    this.categories = CategoriesList; 
    this.numberMovies  = 0; 
    this.container = createRef();
    this.state={
      'listMovie': [],
      'listTeam': [],
      'interval': {}, 
      'listPlayed':[
        
      ],
    }
  }

  clasesContainer = 'Container container-grid-standard'; 
  onChangeInput(evt){
    console.log(evt.target.value)
  }

  intervalChange =(props)=>{

    if(this.props.status === false){
      let interval = setInterval(function(){
        props.dispatch({
          type:'SEND_SEC',
        })
      },1000)
      this.setState({
        'interval': interval,
      })

    }else{
      clearInterval(this.state.interval)
      this.props.dispatch({
        type: 'RESET_TIME',
      })
      this.props.dispatch({
        type: 'NEXT_PLAYER',
      })
    }
  }

  onClickPlay = (evt) =>{
    this.newState()
    this.intervalChange(this.props)
  }


  newState(){
      this.props.dispatch({
        type:'SWITCH_STATE',
      })
  }

  
  render() {
    return (
      <div className='dump'>
        <Menu/>
        <Container setRef={this.container} 
        intervalObject = {this.state.interval}
        clases={this.clasesContainer}>
          <Categories categories={this.categories}/>
          <Timer 
            intervalObject = {this.state.interval}
            time={this.props.time}
            onClickPlay={this.onClickPlay}
          />
          {!this.props.status ? 
          <MoviesChooser/>:null}
        </Container>
      </div>
    );
  }
}

const mapToProps =(store,props)=>{
  return {
    time: store.time,
    status: store.status
  }
}
export default connect(mapToProps)(App);
