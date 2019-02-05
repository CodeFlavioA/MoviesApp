import React, {Component} from 'react';
import MenuContainer from '../containers/MenuContainer'
import HeaderMenu from '../containers/HeaderMenu'
import ListTeam from './ListTeam'
import Swal from 'sweetalert'
import { connect } from 'react-redux'
import MoviesAPI from '../apis/MoviesApi'

class Menu extends Component{
    profile = 'https://picsum.photos/200/300'

    name = this.props.currentPlayer
    //hi
    async moreClick(){
        Swal("¡Cuantas peliculas quieres agregar?:", {
            content: "input",
          })
          .then(async (value) => {
              if(!isNaN(value) && value!==null){
                  const colection = await MoviesAPI.getCollection(value)
                  this.sendCollection(colection); 
                  Swal('Estamos agregando',`${value} Peliculas Nuevas`,'success');
              }
              else{
                  Swal('Error','Ingresa un numero');
              }
          });
        
    }

    sendCollection(responses){
        let movies =[];

        responses.map(function(item){
            movies.push(...item.results)
        })

        console.log(movies)

        this.props.dispatch({
            type:'ADD_COLLECTION_MOVIE',
            payload: movies,
        })
    }

    render(){
        let type = this.props.listTeam[this.props.currentPlayer].score;
        return(
            <MenuContainer>
                <HeaderMenu 
                    moreClick={this.moreClick.bind(this)}
                    profile={this.profile}
                    name = { this.props.listTeam[this.props.currentPlayer].name }
                    type = {'Score: ' + type }
                />
                <ListTeam/>
            </MenuContainer>
        )
    }
}
const mapToProps = (store,props)=>{
    return {
        listTeam: store.listTeam,
        currentPlayer: store.currentPlayer,
    }
}
export default connect(mapToProps)(Menu); 