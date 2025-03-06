import React, { useState } from 'react';
import { LiaCaretSquareDown, LiaCaretSquareUp } from "react-icons/lia";
import toast from 'react-hot-toast';

const Blog = () => {
    const [ active, setActive ] = useState( true );
    const [ image, setImage ] = useState( null );
    const [ blogData, setBlogData ] = useState( {
        title: "",
        subtitle: "",
        date: "",
        description: "",
        buttonText: "",
    } );

    const handleAccordianClick = () => {
        setActive( !active );
    };

    const handleInputChange = ( e ) => {
        const { name, value } = e.target;
        setBlogData( ( prevData ) => ( {
            ...prevData,
            [ name ]: value
        } ) );
    };

    const handleImageUpload = ( event ) => {
        const file = event.target.files[ 0 ];
        if ( file )
        {
            const reader = new FileReader();
            // console.log( reader.readAsDataURL )
            console.log( reader.result )
            reader.onloadend = () => {
                setImage( reader.result );
            };
            reader.readAsDataURL( file );
        }
    };

    const handleSave = () => {
        console.log( "Saved Blog Data:", { ...blogData, image } );
        toast.success( "Blog saved successfully!" );
    };

    const handleReset = () => {
        setBlogData( {
            title: "",
            subtitle: "",
            date: "",
            description: "",
            buttonText: "",
        } );
        setImage( null );
    };

    const handleAddMore = () => {
        console.log( "Adding more blog fields..." );
        alert( "Add more functionality can be implemented here." );
    };

    return (
        <div className='bg-white w-1/2 shadow-2xl mx-8 my-4 flex flex-col rounded-lg p-4 h-full'>
            {/* Header Section */ }
            <div className="flex gap-1 px-4 cursor-pointer items-center" onClick={ handleAccordianClick }>
                <h1 className="text-lg text-gray-700 text-md">Blog</h1>
                { active ? <LiaCaretSquareUp className="text-xl" /> : <LiaCaretSquareDown className="text-xl" /> }
            </div>

            {/* Input Fields (Hidden/Visible on Toggle) */ }
            { active && (
                <div className='w-full flex flex-col mt-4 space-y-4'>
                    <div className='flex w-full gap-2 items-center'>
                        <label className='text-sm font-medium text-gray-600'>Add Title</label>
                        <input
                            type="text"
                            name="title"
                            value={ blogData.title }
                            onChange={ handleInputChange }
                            className='border border-gray-300 rounded-sm p-1 focus:outline-none w-[80%]'
                        />
                    </div>

                    <div className='flex w-full gap-4'>
                        <div className='w-1/2 flex items-center gap-2'>
                            <label className='text-sm font-medium text-gray-600'>Add Sub-title</label>
                            <input
                                type="text"
                                name="subtitle"
                                value={ blogData.subtitle }
                                onChange={ handleInputChange }
                                className='border border-gray-300 rounded-sm p-1 focus:outline-none w-3/4'
                            />
                        </div>
                        <div className='w-1/2 flex items-center gap-2'>
                            <label className='text-sm font-medium text-gray-600'>Date</label>
                            <input
                                type="date"
                                name="date"
                                value={ blogData.date }
                                onChange={ handleInputChange }
                                className='border border-gray-300 rounded-sm p-1 focus:outline-none w-2/3 cursor-pointer'
                            />
                        </div>
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <div className='w-1/2 flex flex-col gap-1'>
                            <label className='text-sm font-medium text-gray-600 text-left'>Add Image</label>
                            <label className='border border-gray-300 h-48 rounded-sm w-full' id="imgBox">
                                { image && <img src={ image } alt="Uploaded" className="w-full h-full object-cover rounded-md" /> }
                                <input
                                    type="file"
                                    accept="image/*"
                                    className='w-full border cursor-pointer opacity-0 h-full'
                                    id="imgBox"
                                    onChange={ handleImageUpload }
                                />
                            </label>
                        </div>
                        <div className='w-2/3 flex flex-col my-6'>
                            <div className='w-full flex flex-col gap-1'>
                                <label className='text-sm font-medium text-gray-600 text-left'>Add Description</label>
                                <textarea
                                    name="description"
                                    value={ blogData.description }
                                    onChange={ handleInputChange }
                                    className='border border-gray-300 rounded-sm p-2 focus:outline-none w-1/2'
                                ></textarea>
                            </div>
                            <div className='w-full flex flex-col gap-1 my-4'>
                                <label className='text-sm font-medium text-gray-600 text-left'>Button</label>
                                <input
                                    type="text"
                                    name="buttonText"
                                    value={ blogData.buttonText }
                                    onChange={ handleInputChange }
                                    className='border border-gray-300 rounded-sm p-2 focus:outline-none w-1/3'
                                />
                            </div>
                        </div>
                    </div>
                    {/* Buttons */ }
                    <div className='flex gap-2 justify-end mt-4'>
                        <button onClick={ handleAddMore } className='bg-[#37D160] text-white text-md rounded-sm px-4 py-2 cursor-pointer'>Add more</button>
                        <button onClick={ handleReset } className='bg-[#333333] text-white text-md rounded-sm px-4 py-2 cursor-pointer'>Reset</button>
                        <button onClick={ handleSave } className='bg-[#EC9D0C] text-white text-md rounded-sm px-4 py-2 cursor-pointer'>Save changes</button>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default Blog;
