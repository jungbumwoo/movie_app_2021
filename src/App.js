import React from "react";
import axios from "axios";
import Movies from "./Movies";



class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=rating
  componentDidMount() {
    async function getMovies() {
      try {
        let {data: {axiosMovies}} = await axios.get('https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=rating');
        console.log(axiosMovies);
        this.setState({movies: axiosMovies})
      } catch(err) {
        console.log(err);
      }
    }
    getMovies();
    setTimeout(()=> {
      this.setState({ isLoading: false});
    }, 6000);
  };
  
  render(){
    const { isLoading } = this.state;
    let { movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading.." 
          : movies.map(mo => (
            <Movies 
              key= {mo.id}
              url= {mo.url}
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
