import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
import '../style/PaginationBasic.css';

let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} >
      {number}
    </Pagination.Item>,
  );
}

const PaginationBasic = () =>{
    return(
        <div className="bt-pagination">
            <Pagination>
              <Pagination.Prev />
                {items}
              <Pagination.Next />
            </Pagination>
        </div>
    );
}

export default PaginationBasic;