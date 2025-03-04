import React from "react";
import Blog from "./Components/BlogComponents/Blog";
import toast, { Toaster } from 'react-hot-toast';
import JewelleryCategories from "./Components/BlogComponents/JewelleryCategories"


const App = () => {
    return (
        <div className="bg-gray-100  w-full h-full flex">
            <Toaster position="top-right" />
            <Blog />
            <JewelleryCategories />

        </div>
    );
};

export default App;