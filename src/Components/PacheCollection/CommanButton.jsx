import React from 'react';

const CommanButton = ( { children, style } ) => {
    return (
        <button className={ `px-6 py-2 rounded-md text-md  text-white  transition ${ style } cursor-pointer` }>
            { children }
        </button>
    );
};

export default CommanButton;
