import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FileUpload, InputField, ToggleSwitch } from "./CommonUi";
import { RxCross2 } from "react-icons/rx";
import FooterList from "./FooterList";

const Footer = () => {
    const [ formData, setFormData ] = useState( {
        domain: "",
        address: "",
        copyright: "",
        phone: "",
        email: "",
        socialLinks: {
            Instagram: "",
            Facebook: "",
            Youtube: "",
            Whatsapp: "",
        },
        styling: {
            bgColor: "#000000",
            textColor: "#FFFFFF",
        },
        quickLinks: {
            Blogs: false,
            "Our Story": false,
            "Privacy Policy": false,
            "Terms and Conditions": false,
        },
        paymentLogos: [],
    } );


    // Handle input changes
    const handleInputChange = ( e, section = null, key = null ) => {
        const { name, value } = e.target;

        setFormData( ( prev ) => {
            if ( !section )
            {
                // Update top-level fields
                return { ...prev, [ name ]: value };
            } else
            {
                // Update nested fields
                return {
                    ...prev,
                    [ section ]: {
                        ...prev[ section ],
                        [ key || name ]: value,
                    },
                };
            }
        } );
    };

    // Handle checkbox/toggle changes
    const handleToggleChange = ( key ) => {
        setFormData( ( prev ) => ( {
            ...prev,
            quickLinks: {
                ...prev.quickLinks,
                [ key ]: !prev.quickLinks[ key ],
            },
        } ) );
    };

    // Handle file upload
    const handleFileUpload = ( event ) => {
        const files = Array.from( event.target.files );
        if ( files.length > 0 )
        {
            setFormData( ( prev ) => ( {
                ...prev,
                paymentLogos: [ ...prev.paymentLogos, ...files ],
            } ) );
        }
    };

    // Handle form submission
    const handleSubmit = () => {
        console.log( "Footer Data:", formData );
    };

    return (
        <div className="flex flex-col w-full">
            <div className="w-4/5 h-max bg-white shadow-lg py-8 px-6 flex mt-8 mx-auto rounded-md flex-col">
                <h1 className="text-md text-gray-700 font-light my-3 text-left">
                    Create New Footer
                </h1>
                <div className="flex w-full gap-1 justify-between">
                    <InputField
                        label="Domain"
                        placeholder="Add domain name"
                        name="domain"
                        value={ formData.domain }
                        onChange={ handleInputChange }
                    />
                    <InputField
                        label="Address"
                        placeholder="Add address"
                        name="address"
                        value={ formData.address }
                        onChange={ handleInputChange }
                    />
                    <InputField
                        label="Copyright Text"
                        placeholder="2025 All Rights Reserved"
                        name="copyright"
                        value={ formData.copyright }
                        onChange={ handleInputChange }
                    />
                </div>

                <h1 className="text-md text-gray-700 font-light my-3 mt-9 text-left">
                    Add Contact Details
                </h1>
                <div className="flex w-2/3 gap-4 justify-between">
                    <InputField
                        label="Phone"
                        placeholder="+91 98349489"
                        name="phone"
                        value={ formData.phone }
                        onChange={ handleInputChange }
                    />
                    <InputField
                        label="Email"
                        placeholder="xyz@gmail.com"
                        name="email"
                        value={ formData.email }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mt-8 w-full">
                    <h1 className="text-md text-gray-700 font-light my-3 mt-9 text-left">
                        Social Media Links
                    </h1>
                    <div className="flex w-full gap-1">
                        { Object.keys( formData.socialLinks ).map( ( platform ) => (
                            <InputField
                                key={ platform }
                                label={ platform }
                                placeholder={ `https://${ platform.toLowerCase() }.com` }
                                name={ platform }
                                value={ formData.socialLinks[ platform ] }
                                onChange={ ( e ) => handleInputChange( e, "socialLinks", platform ) }
                            />
                        ) ) }
                    </div>
                </div>

                <h1 className="text-md text-gray-700 font-light my-3 mt-9 text-left">
                    Footer Styling
                </h1>
                <div className="flex w-full gap-1 flex-wrap">
                    <InputField
                        label="Background Colour"
                        placeholder="#000000"
                        name="bgColor"
                        value={ formData.styling.bgColor }
                        onChange={ ( e ) => handleInputChange( e, "styling", "bgColor" ) }
                    />
                    <InputField
                        label="Text Colour"
                        placeholder="#FFFFFF"
                        name="textColor"
                        value={ formData.styling.textColor }
                        onChange={ ( e ) => handleInputChange( e, "styling", "textColor" ) }
                    />
                </div>

                <h1 className="text-md text-gray-700 font-light my-3 mt-9 text-left">
                    Quick Links
                </h1>
                <div className="flex w-[90%] gap-5">
                    { Object.keys( formData.quickLinks ).map( ( label ) => (
                        <ToggleSwitch
                            key={ label }
                            label={ label }
                            isChecked={ formData.quickLinks[ label ] }
                            onChange={ () => handleToggleChange( label ) }
                        />
                    ) ) }
                </div>

                <h1 className="text-md text-gray-700 font-light my-3 mt-9 text-left">
                    Payment Methods Logo
                </h1>
                <div className="w-full flex gap-4">
                    <FileUpload label="Browse to add Logo" onFileUpload={ handleFileUpload } />
                    <div className="w-1/4 border border-gray-300 rounded-md h-48 flex items-center justify-center cursor-pointer">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <FaPlus className="text-lg text-gray-400" />
                            <label className="text-sm text-gray-400 font-extralight">
                                Add More
                            </label>
                            <input type="file" className="hidden" />
                        </div>
                    </div>
                </div>

                <h1 className="text-md text-gray-700 font-light my-3 mt-9 text-left">
                    Recently Added
                </h1>
                <div className="w-full flex gap-4">
                    { formData.paymentLogos.map( ( file, index ) => (
                        <div key={ index } className="w-38 h-28 rounded-md border border-gray-300 relative">
                            <img
                                src={ URL.createObjectURL( file ) }
                                alt="Logo"
                                className="w-full h-full object-cover rounded-md"
                            />
                            <RxCross2
                                className="text-lg text-white cursor-pointer absolute -right-2 -top-2 bg-gray-500 rounded-md"
                                onClick={ () =>
                                    setFormData( ( prev ) => ( {
                                        ...prev,
                                        paymentLogos: prev.paymentLogos.filter( ( _, i ) => i !== index ),
                                    } ) )
                                }
                            />
                        </div>
                    ) ) }
                </div>

                <div className="flex justify-end w-full gap-4 mt-5">
                    <button className="bg-[#F0F0F0] text-black font-light text-sm py-2 px-4 rounded-md">
                        Cancel
                    </button>
                    <button
                        className="bg-[#EC9D0C] text-white font-light text-sm py-2 px-4 rounded-md"
                        onClick={ handleSubmit }
                    >
                        Create footer
                    </button>
                </div>
            </div>

            {/* FooterList  */ }
            {/* Footer Table */ }
            <FooterList
                formData={ formData }
                handleInputChange={ handleInputChange }
                handleToggleChange={ handleToggleChange }
            />

        </div>
    );
};

export default Footer;