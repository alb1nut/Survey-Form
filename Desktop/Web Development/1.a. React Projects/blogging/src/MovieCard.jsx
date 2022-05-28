

const MovieCard = ({movie}) =>{
    return (
      
        <div style={{
            marginBottom : '50px',
            padding:0,
            // border:'1px solid black',
        }}>
          <h4 style={{
             fontFamily: 'Roboto',
             fontSize:'2rem',
          }}>{movie.Year}</h4>
          <img style={{
              width:'20rem',
              height: 'auto'
              
          }}
           src={
            movie.Poster !== 'N/A'
           ? movie.Poster 
           : 'https://essentialoilsbulgaria.com/wp-content/uploads/2015/07/import_placeholder.png' }
            alt={movie.Title}>

            </img>
          <div >
            <p>{movie.Type}</p>
            <h2>{movie.Title}</h2>
          </div>
        </div>

     
    )
}

export default MovieCard 