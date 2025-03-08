import React from "react";
import { ToggleSwitch } from "./CommonUi";

const FooterList = ( { formData, handleToggleChange } ) => {
    return (
        <div className="w-4/5 h-max bg-white shadow-lg py-8 px-6 flex mt-8 mx-auto rounded-md flex-col">
            <h1 className="text-md text-gray-700 font-light my-3 mt-9 text-left">Footer List</h1>
            <div className="overflow-x-auto mt-8">
                <div className="min-w-[800px]">
                    <table className="w-full border-collapse border border-gray-300">
                        {/* Header Row */ }
                        <thead>
                            <tr className="border border-gray-200 h-18">
                                {/* Domain, Address, Copyright */ }
                                { [ "domain", "address", "copyright" ].map( ( field ) => (
                                    <th key={ field } className="p-2 text-left bg-gray-100 whitespace-nowrap text-md font-light">
                                        { field }
                                    </th>
                                ) ) }

                                {/* Phone & Email */ }
                                { [ "phone", "email" ].map( ( field ) => (
                                    <th key={ field } className="p-2 text-left bg-gray-100 whitespace-nowrap text-md font-light">
                                        { field }
                                    </th>
                                ) ) }

                                {/* Social Links */ }
                                { Object.keys( formData.socialLinks ).map( ( platform ) => (
                                    <th key={ platform } className="p-2 text-left bg-gray-100 whitespace-nowrap text-md font-light">
                                        { platform }
                                    </th>
                                ) ) }

                                {/* Footer Styling */ }
                                { [ "bgColor", "textColor" ].map( ( style ) => (
                                    <th key={ style } className="p-2 text-left bg-gray-100 whitespace-nowrap text-md font-light">
                                        { style }
                                    </th>
                                ) ) }

                                {/* Quick Links */ }
                                <th className="p-2 text-left bg-gray-100 whitespace-nowrap text-md font-light">Quick Links</th>

                                {/* Payment Logos */ }
                                <th className="p-2 text-left bg-gray-100 whitespace-nowrap text-md font-light">Payment Logos</th>
                            </tr>
                        </thead>

                        {/* Data Row */ }
                        <tbody>
                            <tr className="border border-gray-200 ">
                                {/* Domain, Address, Copyright */ }
                                { [ "domain", "address", "copyright" ].map( ( field ) => (
                                    <td key={ field } className="p-2 whitespace-nowrap text-sm font-light text-gray-500">
                                        { formData[ field ] || "www.khwahish.com" }
                                    </td>
                                ) ) }

                                {/* Phone & Email */ }
                                { [ "phone", "email" ].map( ( field ) => (
                                    <td key={ field } className="p-2 whitespace-nowrap text-sm font-light text-gray-500">
                                        { formData[ field ] || "91 92785634" }
                                    </td>
                                ) ) }

                                {/* Social Links */ }
                                { Object.keys( formData.socialLinks ).map( ( platform ) => (
                                    <td key={ platform } className="p-2 whitespace-nowrap text-sm font-light text-gray-500">
                                        { formData.socialLinks[ platform ] || "www.whatsapp.com" }
                                    </td>
                                ) ) }

                                {/* Footer Styling */ }
                                { [ "bgColor", "textColor" ].map( ( style ) => (
                                    <td key={ style } className="p-2 whitespace-nowrap text-sm font-light text-gray-500">
                                        { formData.styling[ style ] }
                                    </td>
                                ) ) }

                                {/* Quick Links */ }
                                <td className="p-2 flex gap-3 whitespace-nowrap text-sm font-light text-gray-500">
                                    { Object.keys( formData.quickLinks ).map( ( label ) => (
                                        <ToggleSwitch
                                            key={ label }
                                            label={ label }
                                            isChecked={ formData.quickLinks[ label ] }
                                            onChange={ () => handleToggleChange( label ) }
                                        />
                                    ) ) }
                                </td>

                                {/* Payment Logos */ }
                                <td className="p-2 flex gap-2 flex-wrap whitespace-nowrap text-sm font-light text-gray-500">
                                    { formData.paymentLogos.map( ( file, index ) => (
                                        <img
                                            key={ index }
                                            src={ URL.createObjectURL( file ) }
                                            alt="Payment Logo"
                                            className="w-16 h-16 border border-gray-300 rounded-md"
                                        />
                                    ) ) }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FooterList;