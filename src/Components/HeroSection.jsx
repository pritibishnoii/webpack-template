
import { BsImages } from "react-icons/bs";
import { useState } from "react";
import { LiaCaretSquareDown } from "react-icons/lia";

const HeroSection = ( { handleBannerImageUpload, banners, errors } ) => {


    return (
        <div className="flex justify-center items-center  bg-gray-100 my-8">
            <div className='bg-white shadow-lg w-[80%] mx-12  px-8 py-6 h-1/6 rounded-lg'>
                <h1 className='text-gray-900 text-md   px-2 py-2  flex gap- '>
                    <p className=''>Hero Section </p>
                    <div className='flex items-center'>
                        <LiaCaretSquareDown className='' />
                    </div>
                </h1>
                <div className='flex w-full   '>
                    <div className="w-full flex  gap-4 mt-3 ">
                        { banners.map( ( banner ) => (
                            <label
                                id={ `bannerImg-${ banner.id }` }
                                key={ banner.id }
                                className={ `border border-gray-300 w-1/2 mx-2 px-8 py-12 h-48 flex flex-col items-center justify-center rounded-md cursor-pointer relative ` }
                            >

                                {/* hide input  */ }
                                <input type='file'
                                    htmlfor={ `bannerImg-${ banner.id }` }
                                    onChange={ ( e ) => handleBannerImageUpload( e, banner.id ) }
                                    className=" cursor-pointer inset-0   absolute opacity-0 w-full h-full rounded-md" />

                                {/* show image  */ }

                                {
                                    banner.image ?
                                        ( <img
                                            src={ banner.image } alt="upload"
                                            accept="image/*"
                                            className=' w-full h-full object-cover rounded-md absolute ' /> ) :
                                        (
                                            <>
                                                <BsImages className="text-gray-500" />
                                                <span className="text-gray-700 text-sm">{ banner.text }</span>
                                                <span className="text-gray-700 text-sm">{ banner.size }</span>
                                            </>
                                        )
                                }
                            </label>
                        ) ) }
                    </div>
                </div>

                <div className='w-full  flex mt-4'>
                    <label className='px-2 text-sm text-gray-800 flex items-center '>Add Title </label>
                    <input
                        type="text"
                        name="title"
                        className={ `border px-2 py-1 w-1/2  outline-none  placeholder:text-gray-700 text-gray-700 rounded-md ${ errors.title ? 'border-red-400' : 'border-gray-300 ' } placeholder:text-red-400` } />
                </div>
                <div className=' w-full flex flex-col mt-6 px-2'>
                    <label className=' text-sm text-gray-800 flex items-center mb-2'>Add desecription</label>
                    <textarea
                        className={ `border px-2 py-2 outline-none w-full h-38 text-gray-700 rounded-md ${ errors.description ? 'border-red-400' : 'border-gray-300 ' } placeholder:text-red-400` } ></textarea>
                </div>
            </div>
        </div>
    )
}

export default HeroSection