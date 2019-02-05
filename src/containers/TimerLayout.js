import React from 'react';
import PlayButton from './PlayTimerButton'
import {Component} from 'react'; 
import {connect} from 'react-redux'
import Win from '../components/buttonWin'
import swal from 'sweetalert'


class Timer extends Component{
    render(){
        let iconName = this.props.status ? 'fa-stop':'fa-play';
        let styles = {
            fontSize: (this.props.status) ? 170:90
        }
    return(
        <div className="TimerLayout color-load">
            <div className="info-movie">
                <div className="icon">
                    i
                </div>
                <div className="title-hidden">
                    {this.props.currentMovie}
                </div>
            </div>
            <p id="Timer" className="Timer" style={styles}>
                {this.props.time}
            </p>
            <PlayButton name={iconName} onClick={this.props.onClickPlay}/>
            {this.props.status ?
            <Win onClick={this.onClickWin}/>:null}
        </div>
    )
    }

    onClickWin = (evt)=>{
        const current = this.props.listTeam[this.props.currentPlayer];
        swal("Buen Trabajo!", current.name + ' Tienes un nuevo punto', "success");
        this.props.dispatch({
            type:'ADD_POINT'
        })
        this.props.dispatch({
            type: 'RESET_TIME',
        })
        this.props.dispatch({
            type: 'SWITCH_STATE',
        })
        this.props.dispatch({
            type: 'NEXT_PLAYER',
        })
      clearInterval(this.props.intervalObject)
    }
}



const mapToProps = (store,props) =>{
    return{
        status: store.status, 
        listTeam: store.listTeam, 
        currentPlayer: store.currentPlayer,
        currentMovie: store.currentMovie
    }
}

export default connect(mapToProps)(Timer); 