import React, { Component } from 'react'
import ImageMovie from '../containers/ImageMovie'
import MoviesLayout from '../containers/MoviesLayout'
import TitleMovie from '../containers/TitleMovie'
import NextMovieButton from '../containers/NextMovieButton'
import {connect} from 'react-redux';

class MovieChooser extends Component{
    constructor(props){
        super(props)
        this.state = {
            'currentMovie': {}
        }
    }
    nextMovie = ()=>{
        let rand = this.random()
        this.setState({
            'currentMovie': rand ,
        })
        this.props.dispatch({
            type:'CURRENT_MOVIE',
            payload: rand.title,
        })
    }
    
    random(){
        let rand = this.props.listMovie[Math.floor(Math.random() * this.props.listMovie.length)]
        return rand
    }
  
    componentWillReceiveProps(nextProps){
        let index = Math.floor(nextProps.listMovie.length-1);
        let  rand = nextProps.listMovie[index]
        this.setState({
            'currentMovie': rand,
            'listMovie': nextProps.listMovie
        })
        this.props.dispatch({
            type:'CURRENT_MOVIE',
            payload: rand.title,
        })
    }

    render(){
        let path = (this.state.currentMovie!==undefined) ? (this.state.currentMovie.poster_path):null;
        return(
            <MoviesLayout>
                <ImageMovie src={'https://image.tmdb.org/t/p/w200' + path }/>
                <TitleMovie movie = {this.state.currentMovie}>
                    <NextMovieButton onClick={this.nextMovie.bind(this)}/>
                </TitleMovie>
            </MoviesLayout>       
        )
    }
    
}

const mapToProps = (store,props)=>{
    return {
        listMovie: store.listMovie,
    }
}

export default connect(mapToProps)(MovieChooser); 