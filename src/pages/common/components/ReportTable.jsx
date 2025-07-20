import React, { useState } from 'react';

const ReportTable = ({ title = 'Report Summary', columns = [], data, rowsPerPage = 10 }) => {
  const safeData = Array.isArray(data) ? data : [];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(safeData.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const currentData = safeData.slice(startIdx, startIdx + rowsPerPage);


  return (
    <div className="bg-white shadow rounded-md p-4">
      <h2 className="text-xl font-semibold text-[#09327B] mb-4">{title}</h2>

      {/* ✅ Table view for md and up */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full table-fixed text-sm overflow-hidden rounded-xl border border-gray-200">
          <thead className="bg-[#00B2EC] text-white text-base lg:text-md">
            <tr>
              <th className="px-4 py-2 border-r border-white font-semibold text-center w-[60px]">Sl.No</th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-2 border-r border-white font-semibold text-center`}
                  style={{ width: col.width || 'auto' }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#09327B] text-sm lg:text-base">
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? 'bg-[#F5F9FC]' : 'bg-white'}
                >
                  <td className="px-4 py-2 border border-gray-100 text-center">
                    {(currentPage - 1) * rowsPerPage + rowIndex + 1}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-4 py-2 border border-gray-100 text-center"
                      style={{ width: col.width || 'auto' }}
                    >
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-4 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Fancy Card View for Mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {currentData.length > 0 ? (
          currentData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] border border-[#a7d8de] shadow-md rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-bold text-[#007B8F]">
                  #{(currentPage - 1) * rowsPerPage + rowIndex + 1}
                </div>
                <div className="text-xs bg-[#00B2EC] text-white px-3 py-1 rounded-full font-medium">
                  Applied Job
                </div>
              </div>

              {columns.map((col) => (
                <div key={col.key} className="mb-3">
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wide">
                    {col.label}
                  </div>
                  <div className="text-[#09327B] text-sm mt-1">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No records found.</div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-end items-center gap-2 text-sm">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportTable;
