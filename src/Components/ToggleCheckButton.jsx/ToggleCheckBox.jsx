import React, { useState } from 'react';

const ToggleCheckBox = () =>
{
    const [ check, setCheck ] = useState( false );

    console.log( check );

    return (
        <label className='border-2 border-indigo-900 w-20 h-10 rounded-full my-5 mx-8 cursor-pointer relative peer' htmlFor='check'>
            <input
                type="checkbox"
                id='check'
                className='sr-only peer'
                onChange={ () => setCheck( !check ) }
                checked={ check }
            />

            <span className='w-2/5 h-4/5 bg-indigo-900 rounded-full absolute top-1 left-1 peer-checked:bg-yellow-500 peer-checked:left-11 transition-all duration-500 z-10'></span>
            {/* Change the background color of the label when checked */ }
            <div className='absolute inset-0 rounded-full bg-white peer-checked:bg-indigo-900 transition-all duration-500'></div>
        </label>
    );
};

export default ToggleCheckBox;