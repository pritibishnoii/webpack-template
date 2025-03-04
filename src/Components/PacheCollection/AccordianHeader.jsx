import React from 'react'
import ToggleButton from "./ToggleButton";
import { LiaCaretSquareDown } from "react-icons/lia";


const AccordianHeader = ( { title, isOn, toggleOnOffBtn, handleAccordianClick, id } ) => {
    return (
        <>
            <div onClick={ handleAccordianClick } className="flex w-full justify-between px-4 cursor-pointer">
                <div className="flex items-center gap-1">
                    <h1 className="text-lg text-gray-800">{ title }</h1>
                    <LiaCaretSquareDown className="cursor-pointer" />
                </div>
                <ToggleButton isOn={ isOn } toggleOnOffBtn={ toggleOnOffBtn } id={ id } />
            </div>
        </>
    )
}

export default AccordianHeader