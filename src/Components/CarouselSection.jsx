
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LiaCaretSquareDown } from "react-icons/lia";

const CarouselSection = ( { handleImageChange, imageBoxes, handleCarouselDataChange, errors, handleImageAdd } ) => {

  const [ formData, setFormData ] = useState( {
    styleInput: "",
    textDescription: "",
    buttonLink: ""
  } );

  const handleInputChange = ( e ) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [ name ]: value };
    setFormData( updatedData );
    handleCarouselDataChange( updatedData );
  };
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg w-[80%] mx-auto px-8 py-6 h-auto rounded-lg">
        <h1 className="text-gray-900 text-md flex gap-1">
          <p>Carousel</p>
          <div className="flex items-center">
            <LiaCaretSquareDown />
          </div>
        </h1>
        <div className="mt-4 flex gap-2">
          <label className="text-gray-800 text-sm flex items-center">
            Style Name
          </label>
          <input
            name="styleInput"
            value={ formData.styleInput }
            onChange={ handleInputChange }
            type="text"
            placeholder={ errors.styleInput ? errors.styleInput : "" }
            className={ `border outline-none px-2  py-1 w-48 text-gray-700 text-sm rounded-md ${ errors.styleInput ? 'border border-red-400' : 'border-gray-300' } placeholder:text-red-400  placeholder:text-sm ` }
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-sm text-gray-800 mb-2">Images</h3>
          <div className="w-full flex flex-wrap gap-6">



            { imageBoxes.map( ( image, index ) => (
              <label htmlFor={ `bannerUploadImg-${ index }` } key={ index } className="relative border border-gray-300 w-30 h-38 flex items-center justify-center cursor-pointer overflow-hidden rounded-md">
                {
                  image && <img src={ image } alt="Uploaded" className="w-full h-full object-cover rounded-md" />
                }
                <input
                  id={ `bannerUploadImg-${ index }` }
                  type="file"
                  accept="image/*"
                  onChange={ ( e ) => handleImageChange( e, index ) }
                  className={ `cursor-pointer rounded-md hidden` }
                />
              </label>
            ) ) }
            <label
              id="bannerUploadImg"
              className="border border-gray-300 w-30 h-38 flex items-center justify-center cursor-pointer rounded-md"
            >
              <input
                id={ `bannerUploadImg` }
                type="file"
                accept="image/*"
                onChange={ ( e ) => handleImageAdd( e ) }
                className={ `cursor-pointer rounded-md hidden` }
              />
              <GoPlus className="text-lg text-gray-500" />
            </label>
          </div>
        </div>

        <div className="w-full flex flex-col mt-4">
          <label className="text-sm text-gray-800 flex items-center mb-2">
            Add description
          </label>
          <textarea
            name="textDescription"
            placeholder={ errors.textDescription ? errors.textDescription : "" }
            value={ formData.textDescription }
            onChange={ handleInputChange }
            className={ `border  px-2 py-2 outline-none w-2/3 h-28 text-gray-700 text-sm rounded-md ${ errors.textDescription ? 'border-red-500' : 'border-gray-300' } placeholder:text-red-500 placeholder:text-sm ` }></textarea>
        </div>

        <div className="w-[80%] mt-4 flex justify-between">
          <div className="flex gap-2">
            <label className="text-gray-800 text-sm flex items-center">
              Button link
            </label>
            <input
              type="text"
              name="buttonLink"
              placeholder={ errors.buttonLink ? errors.buttonLink : "" }
              className={ `text-gray-700 border border-gray-300 outline-none w-48 px-2 rounded-md text-sm ${ errors.buttonLink ? 'border-red-500' : 'border-gray-300 ' } placeholder:text-red-500` }
            />
          </div>
          <button
            onClick={ ( e ) => console.log( e ) }
            className="px-6 py-2 text-sm text-white rounded-sm bg-[#EC9D0C] cursor-pointer">
            Add More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
