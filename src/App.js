import React from "react";
import Blog from "./Components/BlogComponents/Blog";
import toast, { Toaster } from 'react-hot-toast';
import JewelleryCategories from "./Components/BlogComponents/JewelleryCategories"
import DNSManagment from "./Components/DNSManagment";
import Footer from "./Components/Footer/Footer";
import ToggleCheckBox from "./Components/ToggleCheckButton.jsx/ToggleCheckBox";
import Button from "./Components/ToggleCheckButton.jsx/Button";
import GsapAnimation from "./Components/GSAP/GsapAnimation";




const App = () =>
{




    return (
        <div className="bg-gray-100  w-full h-full flex flex-col ">
            <Toaster position="top-right" />
            {/* <Blog />
            <JewelleryCategories /> */}
            {/* <DNSManagment /> */ }
            {/* <Footer /> */ }

            <ToggleCheckBox />
            <Button isPrimary={ true } />

            <GsapAnimation />

        </div>
    );
};

export default App;