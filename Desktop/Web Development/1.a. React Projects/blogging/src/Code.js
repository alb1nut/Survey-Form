// import { useEffect, useState } from 'react';
// import './App.css';
// import SearchIcon from './search.svg';

// //Components
// import MovieCard from './MovieCard';
// const API_URL = 'http://www.omdbapi.com/?apikey=83fd835';

// const  App = () => {
//   const [movie , setMovie] = useState([]);
//   const [searchTerm , setSearchTerm] = useState("")

//   const fetchMovies = async(title) =>{
//     const res = await fetch(`${API_URL}&s=${title}`);
//     const data =await res.json();
//     setMovie(data.Search);
//   }

//   useEffect(()=>{

//   },[])
  
//   return (
//     <div className="App">
//       <div>
//      <header style={{
//        fontSize: '40px',
//        color: 'green',
             
//           }}>Movie World</header>
//        <div>
//          <input style={{
//               padding: '1rem 5rem',
//               fontSize: '20px',
//           }}
//          placeholder='Enter your movie'
//          value= {searchTerm}
//          onChange={(e) =>{
//            return setSearchTerm(e.target.value)}}
//          ></input>
//         <img 
//         src={SearchIcon}
//         onClick={() => fetchMovies(searchTerm)}
//         alt= "search"
//         ></img>
//        </div>
//       </div>

//       <div>
//         {
//         movie?.length > 0 
//         ?(
//           <div>
//            { movie.map((movie)=>(
//               <MovieCard movie={movie}/>
//             ))}

//           </div>
//         ):(
//           <div>
//             <h2>No Movies found</h2>
//           </div>
//         )
//         }
//       </div>
    
   
  

//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';
// import './App.css';


// //Components

// const  App = () => {
  
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
