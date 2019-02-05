
class MoviesApi{

    URL = 'https://api.themoviedb.org/3/discover/movie';
    api_key = '?api_key=93f1a0e6c75a28028c864451dcfe0b5d'
    //extras contain: language, order, adult security, video included
    page_uri = '&page='
    extras = '&language=es-ES&sort_by=popularity.desc&include_video=false'+this.page_uri
    url_basic = this.URL + this.api_key + this.extras;

    async firstLoad(page = 1){
        let promise = await fetch(this.url_basic + page)
        let jsonMovies = await promise.json()
        return jsonMovies;
    }

    async getStandardPage(page = 10){
        let promise = await fetch(this.url_basic + page)
        console.log(this.url_basic + page)
        let jsonMovies = await promise.json()
        return jsonMovies;
    }

    async getCategory(id){
        let genre = '&with_genres=' + id; 
        let page = Math.floor((Math.random() * 9) + 5)
        const url_feetch = this.url_basic + page + genre; 
        let promise = await fetch(url_feetch); 
        let jsonMovies = await promise.json();
        return jsonMovies;
    }

    async getByCompany(key){
        const companies = '&with_companies='.key
        const url_feetch = this.url_basic + 1 + companies
        let promise = await fetch(url_feetch)
        let jsonMovies = await promise.json()

        return jsonMovies

    }

    async getCollection(cant = 10){
        let numpages = parseInt(cant/20); 
        let arrayMovies = [];
        let arrayPromises = [];
        if(numpages === 0) {
            let movies = await this.firstLoad(6);
            arrayMovies = [...movies.results]
        }else{
            for (let index = 1; index < numpages; index++) {
                let random = Math.floor(Math.random() * 100)
                arrayPromises.push(this.firstLoad(random))
            }
        }
        const responses = await Promise.all(arrayPromises);
        arrayMovies = [...responses]
        return arrayMovies; 
    }

}

export default new MoviesApi();