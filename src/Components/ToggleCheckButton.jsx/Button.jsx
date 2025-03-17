import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx';

const Button = ( { isPrimary } ) =>
{



    const isActive = true;
    const isDisabled = false

    // using object
    // const className = clsx( {
    //     "text-green-500": true,
    //     "text-red-500": false,
    //     "font-bold": true,
    // } );
    // using Array
    // const className = clsx( [
    //     "px-4 py-2",
    //     true && "bg-blue-500",
    //     false && "opacity-50",
    // ] );


    // console.log( className ); // Output: "text-green-500 font-bold"

    //* clsx helps handle conditional classes, and twMerge cleans up conflicts.
    // const className = clsx( "bg-red-500", "text-white", "px-4" );
    // console.log( className ); // Output: "bg-red-500 text-white px-4"
    const className = twMerge(
        clsx( "px-4 py-2", { "bg-blue-500": true, "text-white": false } )
    );
    console.log( className ); // Output: "px-4 py-2 bg-blue-500"

    // const className = twMerge( "p-2", "p-4", "bg-indigo-700", "text-3xl" )  //its remove the duplicate 
    // console.log( className )
    return (
        <div className='mx-auto my-auto px-4 flex gap-4 '>

            <button className={ twMerge( clsx( "py-2 px-4 h-10 w-28 text-yellow-300 rounded-md cursor-pointer",
                isActive && "bg-indigo-900 hover:bg-indigo-950",
                isDisabled && "opacity-50 cursor-not-allowed"
            ) ) }

                disabled={ isDisabled }>
                click me
            </button>
            <button className={
                twMerge( "px-2  w-28 h-10 rounded-md cursor-pointer  transition-all delay-200 text-white text-md  mx-auto my-auto",
                    isPrimary ? "bg-indigo-900 hover:bg-indigo-800" : "border-2 border-indigo-900 hover:bg-transparent text-indigo-950 "
                ) }>
                Click here
            </button >

        </div>

    )
}

export default Button