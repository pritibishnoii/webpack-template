import React from "react";
import Blog from "./Components/BlogComponents/Blog";
import toast, { Toaster } from 'react-hot-toast';
import JewelleryCategories from "./Components/BlogComponents/JewelleryCategories"
import DNSManagment from "./Components/DNSManagment";


const App = () => {
    return (
        <div className="bg-gray-100  w-full h-full flex">
            <Toaster position="top-right" />
            {/* <Blog />
            <JewelleryCategories /> */}
            <DNSManagment />

        </div>
    );
};

export default App;