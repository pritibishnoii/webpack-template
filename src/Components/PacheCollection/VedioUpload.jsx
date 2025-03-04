import React, { useState } from 'react'
import AccordianHeader from './AccordianHeader'
import CommanButton from './CommanButton'

const VedioUpload = ( { isOn, toggleOnOffBtn, handleAccordianClick, active } ) => {

    const [ fileName, setFileName ] = useState( "" )
    const hadleChangeFile = ( e ) => {
        const file = e.target.files[ 0 ];
        if ( file )
        {
            setFileName( fileName.name )
        }
    }
    return (
        <div className='w-full  flex  flex-col  h-full '>
            <AccordianHeader
                title="Upload ad campaign Video"
                isOn={ isOn[ 1 ] }
                toggleOnOffBtn={ () => toggleOnOffBtn( 1 ) }
                handleAccordianClick={ () => handleAccordianClick( 1 ) }
                id="acc-2"
            />

            {
                active[ 1 ] && <div className='flex  flex-col items-center h-full w-full my-8 py-4 px-8'>
                    <div className='flex flex-col justify-center w-full h-48  items-center  '>
                        <label className='text-gray-600 text-md'>Drag and drop video files to upload</label>
                        <label className='border border-gray-400 py-1 px-6 cursor-pointer my-2 rounded-md text-gray-400'>
                            {
                                fileName ? fileName : " Select file"
                            }
                            <input type="file" className='hidden ' accept="video/*"
                                onChange={ hadleChangeFile }
                            />
                        </label>
                    </div>

                    {/* Buttons */ }
                    <div className="flex w-full my-8 justify-end gap-2">
                        <CommanButton style="bg-[#333333]">Reset</CommanButton>
                        <CommanButton style="bg-[#EC9D0C]">Save changes</CommanButton>
                    </div>
                </div>

            }


        </div>
    )
}

export default VedioUpload