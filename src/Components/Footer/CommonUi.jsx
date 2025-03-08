import React from "react";
const ToggleSwitch = ( { label, isChecked, onChange } ) => (
    <div className="bg-[#F8F8F8] rounded-full w-1/5 py-3 flex justify-center gap-2 items-center">
        <label className="text-sm text-gray-700 font-extralight">{ label }</label>
        <div
            className={ `w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${ isChecked ? "bg-green-500" : "bg-gray-300" }` }
            onClick={ onChange }
        >
            <div
                className={ `w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${ isChecked ? "translate-x-6" : "" }` }
            ></div>
        </div>
    </div>
);

const InputField = ( { label, placeholder, name, value, onChange, type = "text" } ) => (
    <div className="w-1/3 flex flex-col gap-1">
        <label className="text-sm text-gray-500 font-extralight text-left my-2">
            { label }
        </label>
        <div className="relative">
            <input
                type="text" // Always use type="text" for color inputs
                className="border border-gray-200 rounded-md py-1 px-2 w-full placeholder:text-gray-300 text-sm text-gray-700 outline-none font-extralight"
                placeholder={ placeholder }
                name={ name }
                value={ value }
                onChange={ onChange }
            />
        </div>
    </div>
);

const FileUpload = ( { label, onFileUpload } ) => (
    <label className="w-3/4 rounded-md border border-gray-300 py-4 px-8 h-48 flex items-center justify-center cursor-pointer">
        <div className="flex flex-col text-center">
            <span className="text-sm text-gray-400 font-extralight">{ label }</span>
            <span className="text-sm text-gray-400 font-extralight">(upload svg or png)</span>
        </div>
        <input type="file" className="hidden" onChange={ onFileUpload } />
    </label>
);


export { FileUpload, InputField, ToggleSwitch };