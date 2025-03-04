import React from "react";

const ToggleButton = ( { isOn, toggleOnOffBtn, id } ) => {
    return (
        <div className="flex max-w-28 bg-[#EC9D0C]  rounded-lg text-white  ">
            <input
                type="checkbox"
                id={ id }
                className="sr-only peer"
                checked={ isOn }
                aria-checked={ isOn }
                onChange={ toggleOnOffBtn }


            />

            <label htmlFor={ id }
                className={ `px-4 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200   peer-checked:bg-black ` } > Off</label>

            <label htmlFor={ id }
                className={ `px-4 py-2  rounded-lg text-sm cursor-pointer transition-all duration-200 bg-black peer-checked:bg-[#EC9D0C] ` }> On</label>



        </div>
    );
};

export default ToggleButton;
