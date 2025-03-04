import React, { useState } from 'react'

const EditCard = ( { tData, closeEditCard, editIndex, setTableData } ) => {
  const [ editCategory, setEditCategory ] = useState( "" )
  const [ edtSubCategory, setEditSubCategory ] = useState( "" )

  const saveData = () => {
    setTableData( prevData => {
      const updatedData = [ ...prevData ];
      updatedData[ editIndex ] = {
        ...updatedData[ editIndex ],
        subcategory: edtSubCategory,
        category: editCategory,
      };
      return updatedData;
    } )

    closeEditCard()
  }

  return (
    <div className='w-[70%] bg-white shadow-lg rounded-lg m-auto mt-8 py-8 px-4 '>
      <h1 className='text-gray-700 font-semibold  text-2xl'>Edit Sub categories </h1>
      <p className='text-lg my-2 text-gray-600'>Sub category Name</p>
      <div className=' w-full '>

        <input
          onChange={ ( e ) => { setEditSubCategory( e.target.value ) } }
          value={ edtSubCategory }
          type="text" placeholder='Subcategory Name' className='py-2 px-8 border border-gray-300  mx-1 outline-none rounded-md' />
        <select className='border border-gray-300  py-2 px-8  outline-none rounded-md' onChange={ ( e ) => { setEditCategory( e.target.value ) } } value={ editCategory }>
          { tData.map( ( item, index ) => (
            <option key={ index } value={ item.category } className='text-gray-600 '>
              { item.category }
            </option>
          ) ) }

        </select>

        <button
          onClick={ saveData }
          className='m-4 py-2 px-18 bg-[#EC9D0C] text-white text-lg cursor-pointer  rounded-md '>Save</button>
        <button
          onClick={ closeEditCard }
          className='py-2 px-8 text-lg bg-[#333333] text-white cursor-pointer rounded-md'>Cancel</button>
      </div>
    </div>
  )
}

export default EditCard