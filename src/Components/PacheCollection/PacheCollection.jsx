import React, { useState } from "react";
import AccordionDetails from "./AccordianDetails";
import AccordianHeader from "./AccordianHeader";
import VedioUpload from "./VedioUpload";

const PacheCollection = () => {
    const [ images, setImages ] = useState( [] );
    const [ isOn, setIsOn ] = useState( [ false, false ] );
    const [ active, setActive ] = useState( [ false, false ] );

    const [ titleValue, setTitleValue ] = useState( "" );
    const [ descriptionValue, setDescriptionValue ] = useState( "" );

    const toggleOnOffBtn = ( index ) => {
        setIsOn( ( prev ) => {
            console.log( "Previous state:", prev );
            prev = [ ...prev ];
            prev[ index ] = !prev[ index ]
            return prev
        } );
    };


    const handleAccordianClick = ( index ) => {
        if ( isOn[ index ] )
        {
            setActive( s => {
                s = [ ...s ];
                s[ index ] = !s[ index ];
                return s;
            } )
        }
    };

    const handleImageUpload = ( e ) => {
        const file = e.target.files[ 0 ];

        if ( file )
        {
            const newImageURL = URL.createObjectURL( file );
            setImages( ( prevImages ) => [ ...prevImages, newImageURL ] );
        }
    };

    return (
        <div className="w-4/5 bg-[#FFFFFF] flex flex-col m-auto my-8 px-6 py-4 shadow-lg">
            {/* Accordion Header */ }
            <AccordianHeader
                title="Pache collection"
                isOn={ isOn[ 0 ] }
                toggleOnOffBtn={ () => toggleOnOffBtn( 0 ) }
                handleAccordianClick={ () => { handleAccordianClick( 0 ) } }
                id="acc-1"
            />


            {/* Accordion Details */ }
            { active[ 0 ] && (
                <AccordionDetails
                    images={ images }
                    handleImageUpload={ handleImageUpload }
                    titleValue={ titleValue }
                    setTitleValue={ setTitleValue }
                    descriptionValue={ descriptionValue }
                    setDescriptionValue={ setDescriptionValue }
                />
            ) }


            <div className="my-8">
                <VedioUpload
                    isOn={ isOn }
                    toggleOnOffBtn={ toggleOnOffBtn }
                    handleAccordianClick={ handleAccordianClick }
                    active={ active }

                />
            </div>
        </div>



    );
};

export default PacheCollection;
