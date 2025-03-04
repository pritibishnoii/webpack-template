import React from "react";
import CommanButton from "./CommanButton";
import InputField from "./InputeField";

const AccordionDetails = ( {
    images,
    handleImageUpload,
    titleValue,
    setTitleValue,
    descriptionValue,
    setDescriptionValue,
} ) => {
    return (
        <div className=" w-full">

            <div className="flex w-full gap-2">
                {/* Image Upload Section */ }
                <div className="flex flex-col w-[20%] py-2 px-4">
                    <label className="text-gray-700 text-md py-1">Add Image</label>
                    <div className="flex flex-wrap gap-4 mt-4 relative">
                        <input
                            type="file"
                            className="border border-gray-300 w-38 h-38 text-white p-1 outline-none placeholder:text-gray-400 rounded-sm"
                            onChange={ handleImageUpload }
                        />
                        { images.map( ( image, index ) => (
                            <img
                                key={ index }
                                src={ image }
                                alt={ `Uploaded ${ index }` }
                                className="w-38 h-38 rounded-md object-cover border border-gray-300 absolute"
                            />
                        ) ) }
                    </div>
                </div>


                {/* Form Section */ }
                <div className="flex flex-col justify-evenly w-3/4">
                    <InputField
                        label="Add Title"
                        type="text"
                        value={ titleValue }
                        onChange={ ( e ) => setTitleValue( e.target.value ) }
                        width="w-[30%]"
                    />

                    <InputField
                        label="Add Description"
                        type="textarea"
                        value={ descriptionValue }
                        onChange={ ( e ) => setDescriptionValue( e.target.value ) }
                        width="w-[30%] py-3"
                    />

                    {/* Buttons */ }
                    <div className="flex w-full my-8 justify-end gap-2">
                        <CommanButton style="bg-[#333333]">Reset</CommanButton>
                        <CommanButton style="bg-[#EC9D0C]">Save changes</CommanButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionDetails;
