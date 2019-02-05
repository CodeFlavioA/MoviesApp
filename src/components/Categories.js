import React, { Component } from 'react'
import Movies from '../apis/MoviesApi'
import { connect } from 'react-redux'

import ButtonsCategory from '../containers/ButtonsCategories'
//import MoviesApi from '../../themoviedb_nonused'
class Categories extends Component{

    onClickCategory = async evt =>{
        let target = evt.target
        let index = (target.attributes.datacattegory.value)
        target.classList.add('color-load')
        target.setAttribute('disabled','true')
        switch (index) {
            case '0':{ //Infantil
                let jsonMovies = await Movies.getCategory(16);
                this.props.dispatch({
                    type: 'ADD_MOVIES',
                    payload: {jsonMovies}, 
                })
            }
            break; 
            case '1':{ //Familiar
                let jsonMovies = await Movies.getCategory(10721);
                this.props.dispatch({
                    type: 'ADD_MOVIES',
                    payload: {jsonMovies}, 
                })
            }
                break;
            case '2':{ //Accion
                let jsonMovies = await Movies.getCategory(28);
                this.props.dispatch({
                    type: 'ADD_MOVIES',
                    payload: {jsonMovies}, 
                })
            }
                break;
            case '3':{ //Clasicos
                let jsonMovies = await Movies.getCategory(10770);
                this.props.dispatch({
                    type: 'ADD_MOVIES',
                    payload: {jsonMovies}, 
                })
            }
                break;
            case '4':{ //Marvel
                let jsonMovies = await Movies.getByCompany(13252);
                this.props.dispatch({
                    type: 'ADD_MOVIES',
                    payload: { jsonMovies }, 
                })
            }
                break;
            case '5': //A
                    console.log('Quinta Categoria')
                break;
        
            default:
                break;
        }
    }
    categories = 0; 
    render(){
        return(
            <div className="categoryContainer">
                <p className="categoriesText">Categorias</p>
                <ButtonsCategory 
                    categories={this.props.categories}
                    onClick={this.onClickCategory}
                />
            </div>

        )
    }
}


export default connect()(Categories); 