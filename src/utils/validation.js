const validateCarousel = ( formData, imageBoxes ) => {
    const errors = {};

    if ( !formData.styleInput.trim() || formData.styleInput.length < 0 )
    {
        errors.styleInput = "Style Name is required";
    }

    if ( imageBoxes.length === 0 || imageBoxes.every( img => img === null ) )
    {
        errors.imageBoxes = "At least one image is required";
    }
    if ( !formData.buttonLink.trim() || formData.buttonLink.lenght < 0 )
    {
        errors.buttonLink = "Link  is required";
    }
    if ( !formData.textDescription.trim() || formData.textDescription < 0 )
    {
        errors.textDescription = "Description is required";
    }

    return errors;
};

const validateHero = ( banners, description ) => {
    const errors = {};

};

export { validateCarousel, validateHero };
