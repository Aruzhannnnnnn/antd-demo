import React, { useState } from "react";

const Pagination = ({ perPage = 20, total, onChange, isLoading }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
       pageNumbers.push(i);
    }
  
    return (
       <div className={`pagination-container ${!isLoading ? 'pagination-disabled' : ''}`}>
             {pageNumbers.map((number) => (
                <button
                type="button"
                   key={number}
                   onClick={() => onChange(number)}
                   className={`page-number`}
                >
                   {number}
                </button>
             ))}
       </div>
    );
 };
  
 export default Pagination;