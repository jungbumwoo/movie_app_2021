import React from "react";
import axios from "axios";
import Movies from "./Movies";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async() => {
    try {
      const { data: { data: { movies }}} = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
      this.setState({ movies, isLoading: false});
    } catch(err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getMovies();
  };
  
  render(){
    let { isLoading, movies} = this.state;
    return (
      <div>
        {isLoading ? "Loading.." 
          : movies.map(mo => (
            <Movies 
              key= {mo.id}
              id= {mo.id}
              imgurl= {mo.medium_cover_image}
              title= {mo.title}
              summary= {mo.summary}
              year= {mo.year}
            />
          )) };
      </div>
    )
  }
};

export default App;
