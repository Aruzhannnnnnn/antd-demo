import React, { useState } from "react";

// total={characters?.info?.count} onChange={onChange} current={currentPage}

const Pagination = ({ perPage = 20, total, onChange }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
       pageNumbers.push(i);
    }
  
    return (
       <div className="pagination-container">
             {pageNumbers.map((number) => (
                <button
                   key={number}
                   onClick={() => onChange(number)}
                   className="page-number"
                >
                   {number}
                </button>
             ))}
       </div>
    );
 };
  
 export default Pagination;