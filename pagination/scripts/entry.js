import React from'react';
import Paginate from 'react-paginate';

require('../style/style.scss')

class App extends React.Component{
  render(){
    return (
      <div >
        <Paginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<li className="break">...</li>}
                       pageNum={20}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={(data) => {console.log(data.selected)}}
                       containerClassName={"paginationComponent"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    )
  }
}

React.render(<App />, document.querySelector('#app'));
