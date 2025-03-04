import React from "react";

const InputField = ( { label, type, value, onChange, width } ) => {
    return (
        <div className="flex flex-col py-2">
            <label className="text-gray-700 text-md py-1 my-2">{ label }</label>
            <input
                type={ type }
                className={ `border border-gray-300 ${ width } outline-none rounded-sm` }
                value={ value }
                onChange={ onChange }
            />
        </div>
    );
};

export default InputField;
