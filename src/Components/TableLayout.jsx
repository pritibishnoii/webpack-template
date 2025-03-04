import React, { useState } from "react";
import { TABLE_DATA } from "../utils/Data";
import EditCard from "./EditCard";
import Navbars from "./Navbars";

const TableLayout = () => {

  const [ tableData, setTableData ] = useState( TABLE_DATA )
  const [ editIndex, setEditIndex ] = useState( null )


  const openEditCard = ( index ) => {
    // console.log(index)   // 
    setEditIndex( index )
  }
  const closeEditCard = () => {
    setEditIndex( null )
  }


  const deleteCardOpen = ( index ) => {
    const filteredItems = tableData.filter( ( _, id ) => {
      return id !== index
    } )
    // console.log(filteredItems)
    setTableData( filteredItems )

  }


  return (
    <>
    <Navbars />
      
      <div className="w-full flex flex-col items-center">
      {
        editIndex !== null &&
        <EditCard
          tData={ tableData }
          closeEditCard={ closeEditCard }
          editIndex={ editIndex }
          setTableData={ setTableData } />
      }
        <h1 className="text-black text-2xl text-left w-[70%]  py-2 font-semibold ">Existing Subcategories</h1>
        <table className="border border-black  w-[70%] text-center  ">
          <thead className="bg-[#A2C6F4] text-black">
            <tr className="">
              <th className="border px-4 py-4 text-lg font-semibold w-1/4">Category</th>
              <th className="border px-4 py-4 text-lg font-semibold w-1/4">Subcategory</th>
              <th className="border px-4 py-4 text-lg font-semibold w-1/4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              tableData.map( ( item, index ) => {
                return <tr key={ index } className="border-t">
                  <td className="border px-4 py-2 text-gray-700">{ item.category }</td>
                  <td className="border px-4 py-2 text-gray-700">{ item.subcategory }</td>
                  <td className="border px-4 py-2 text-gray-700 ">
                    <button
                      onClick={ () => openEditCard( index ) }
                      className="py-2 px-6 bg-[#EC9D0C]  mx-2 rounded-md text-white  cursor-pointer">Edit</button>
                    <button
                      onClick={ () => deleteCardOpen( index ) }
                      className="py-2 px-5 bg-[#EC390C]  rounded-md text-white cursor-pointer">Delete</button>
                  </td>
                </tr>
              } )
            }
          </tbody>
        </table>
      </div>
    </>
  )


};

export default TableLayout;
