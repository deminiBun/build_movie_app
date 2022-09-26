import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';
import '../../App.css';
 
function PageNumber() {
  const [items, setItems] = useState([]);

    useEffect(()=> {
      const getMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=582e6ad21c0a9e8b30fb0048cac7e305&language=en-US&page=1`);
        const data = await res.json();
        setItems(data.results); 
      };
      getMovie();
    }, []);

    // console.log(items);

      const fetchMovie = async (page) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=582e6ad21c0a9e8b30fb0048cac7e305&language=en-US&page=${page}`);
        const data = await res.json();
        return data.results;
      }

      const handlePageClick = async (data) => {
        console.log(data.selected);
        let page = data.selected + 1;
        const movieServer = await fetchMovie(page);
        setItems(movieServer);
      };

  return (
    <div>
      <ReactPaginate 
        previousLabel = {"<<"}
        nextLabel = {'>>'} 
        pageCount = {500}  
        marginPagesDisplayed = {2}
        pageRangeDisplayed = {3}
        onPageChange = {handlePageClick}
        containerClassName = {'pagination pagination-sm justify-content-center'}
        pageClassName = {'page-item'}
        pageLinkClassName = {'page-link'}
        previousClassName = {'page-item'}
        previousLinkClassName = {'page-link'}
        nextClassName = {'page-item'}
        nextLinkClassName = {'page-link'}
        breakClassName = {'page-item'}
        breakLinkClassName = {'page-link'}
        activeClassName = {'active'}
        />
      {/* {items.map((item)=> {
        // Edit from here...
            return <div>
              Title: {item.title}
              <br></br>
              Release Date: {item.release_date}
            </div> */}
          {/* })} */}
    </div>
  )
}

export default PageNumber