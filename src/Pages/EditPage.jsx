import React, { useState, useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import CarouselSection from "../Components/CarouselSection";
import { validateCarousel, validateHero } from "../utils/validation";
import Swal from 'sweetalert2'
import CommanButton from '../Components/PacheCollection/CommanButton'


const EditPage = () => {
    const [ imageBoxes, setImageBoxes ] = useState( [] );
    const [ errors, setErrors ] = useState( {} );
    const [ banners, setBanners ] = useState( [
        { id: 1, text: "Browse to add mobile banner", size: "(320x480 pixels)", image: null },
        { id: 2, text: "Browse to add desktop banner", size: "(1200x1400 pixels)", image: null },
    ] );
    const [ carouselData, setCarouselData ] = useState( {
        styleInput: "",
        textDescription: "",
        buttonLink: ""
    } );



    const handleCarouselDataChange = ( newData ) => {
        setCarouselData( newData );
    };
    const handleHeroChange = ( newData ) => {
        setHeroData( newData )
    }

    // Load data from local storage when component mounts
    useEffect( () => {
        const storedBanners = JSON.parse( localStorage.getItem( "banners" ) );
        const storedImages = JSON.parse( localStorage.getItem( "imageBoxes" ) );


        if ( storedBanners ) setBanners( storedBanners );
        if ( storedImages ) setImageBoxes( storedImages );

    }, [] );

    // ✅ Save to local storage whenever `banners`, `imageBoxes`, or `description` change
    useEffect( () => {
        localStorage.setItem( "banners", JSON.stringify( banners ) );
        localStorage.setItem( "imageBoxes", JSON.stringify( imageBoxes ) );

    }, [ banners, imageBoxes ] );


    const handleImageChange = ( e, index ) => {
        const file = e.target.files[ 0 ];
        console.log( index )
        if ( file )
        {
            const newImageBoxes = [ ...imageBoxes ];
            newImageBoxes[ index ] = URL.createObjectURL( file );
            setImageBoxes( newImageBoxes );
        }
    };
    const handleImageAdd = ( e ) => {
        const file = e.target.files[ 0 ];
        if ( file )
        {
            // const newImageBoxes = [ ...imageBoxes,URL.createObjectURL( file ) ];
            const newImageBoxes = [ ...imageBoxes ];
            newImageBoxes.push( URL.createObjectURL( file ) )
            setImageBoxes( newImageBoxes );
        }
    };

    const handleBannerImageUpload = ( e, id ) => {
        const file = e.target.files[ 0 ];
        if ( file )
        {
            const newBanners = banners.map( ( banner ) =>
                banner.id === id ? { ...banner, image: URL.createObjectURL( file ) } : banner
            );
            setBanners( newBanners );
        }
    };

    const handleDescriptionChange = ( e ) => {
        setDescription( e.target.value );
    };


    const handleSubmit = ( e ) => {
        e.preventDefault();

        const carouselErrors = validateCarousel( carouselData, imageBoxes );
        const heroErrors = validateHero( banners, );

        const allErrors = { ...carouselErrors, ...heroErrors };

        if ( Object.keys( allErrors ).length > 0 )
        {
            setErrors( allErrors );

        }
        setErrors( {} );
        Swal.fire( {
            title: "Data saved ✔️!",
            text: "Your data has been saved successfully!",
            icon: "success"
        } );

    };

    return (
        <>
            <form className="w-full h-full flex flex-col bg-gray-100 overflow-x-hidden gap-2" onSubmit={ handleSubmit }>
                <HeroSection
                    handleBannerImageUpload={ handleBannerImageUpload }
                    banners={ banners }
                    handleDescriptionChange={ handleDescriptionChange }
                    errors={ errors }
                    handleHeroChange={ handleHeroChange }
                />
                <CarouselSection
                    handleImageChange={ handleImageChange }
                    handleImageAdd={ handleImageAdd }
                    imageBoxes={ imageBoxes }
                    handleCarouselDataChange={ handleCarouselDataChange }
                    errors={ errors }
                />
                {/* Buttons */ }
                <div className="flex w-full my-8 justify-end gap-2">
                    <CommanButton style="bg-[#333333]">Reset</CommanButton>
                    <CommanButton style="bg-[#EC9D0C]">Save changes</CommanButton>
                </div>


            </form>



        </>

    );
};

export default EditPage;
