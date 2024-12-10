import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRow } from '../tableSlice';
import Form from './Form';
import "../index.css";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.table.data);

  const rowsPerPage = 10;
  const filteredData = tableData.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleAddRow = (newRow) => {
    dispatch(addRow(newRow)); // Dispatch action to add a new row
    setIsFormOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded mb-4 sm:mb-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          {isFormOpen ? 'Close Form' : 'Add New Row'}
        </button>
      </div>

      {isFormOpen && <Form onSubmit={handleAddRow} />}

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-gray-200 mt-4">
          <thead>
            <tr className="bg-blue-100">
              <th className="border-gray-300 px-4 py-2 text-sm sm:text-base">Name</th>
              <th className="border-gray-300 px-4 py-2 text-sm sm:text-base">Email</th>
              <th className="border-gray-300 px-4 py-2 text-sm sm:text-base">Phone</th>
              <th className="border-gray-300 px-4 py-2 text-sm sm:text-base">Website</th>
              <th className="border-gray-300 px-4 py-2 text-sm sm:text-base">Industry</th>
              <th className="border-gray-300 px-4 py-2 text-sm sm:text-base">Remark</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr key={index} className="text-center odd:bg-white even:bg-gray-50">
                <td className="border-gray-300 px-4 py-2 text-sm sm:text-base">{row.Account_name}</td>
                <td className="border-gray-300 px-4 py-2 text-sm sm:text-base">{row.email}</td>
                <td className="border-gray-300 px-4 py-2 text-sm sm:text-base">{row.phone}</td>
                <td className="border-gray-300 px-4 py-2 text-sm sm:text-base">{row.website}</td>
                <td className="border-gray-300 px-4 py-2 text-sm sm:text-base">{row.industry}</td>
                <td className="border-gray-300 px-4 py-2 text-sm sm:text-base">{row.Remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>

        <p className="text-sm sm:text-base">
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </p>

        <button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredData.length / rowsPerPage))
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
