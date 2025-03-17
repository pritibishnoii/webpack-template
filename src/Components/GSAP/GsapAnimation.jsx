import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'


const GsapAnimation = () => {
    const boxRef = useRef( null )
    const boxTwo = useRef( null )
    const boxThree = useRef( null )

    const boxFouth = useRef( null )
    const boxFive = useRef( null )
    const boxSix = useRef( null )
    const tl = useRef( gsap.timeline() )
    console.log( tl )


    const tween = useRef( null )


    console.log( "tween obj->>", tween )
    console.log( window )

    useEffect( () => {

        gsap.to( boxRef.current, {
            rotation: 360,   //  rotate 360deg
            x: 100,
            duration: 1,

        } )
        // Initialize tween animation
        tween.current = gsap.to( boxTwo.current, {
            rotation: 360,
            x: window.screen.availWidth,
            duration: 5,
            // ease: "elastic",
            ease: "none",
            paused: true
        } )

        gsap.fromTo( boxThree.current, { x: -100 }, { rotation: 360, x: 100, duration: 1 } );
    }, [] )




    useEffect( () => {
        // gsap.from( boxTwo.current, { rotation: -360, x: -100, duration: 1 } );

        // //apply a perspective to the PARENT element (the container) to make the perspective apply to all child elements (typically best)
        // gsap.set( container, { perspective: 500 } );

        // //or apply perspective to a single element using "transformPerspective"
        // gsap.set( element, { transformPerspective: 500 } );
        // gsap.set( boxTwo, {
        //     transformPerspective: 500,
        //     rotation: 120,
        //     y: 50

        // } )

        // tl.to( boxFouth.current, {
        //     duration: 2,
        //     x: 100,
        //     opacity: 0.5,
        // } )

        //     //sample CSS that uses a perspective():
        //     .myClass {
        //     transform: perspective( 500px ) translateY( 50px ) rotate( 120deg );
        // }

        //sequenced one-after-the-other
        tl.current.to( boxFouth.current, {
            duration: 2,
            x: 100,
            opacity: 0.5,
        } ).to( boxFive.current, {
            duration: 2,
            x: 100,
            opacity: 0.5
        } ).to( boxSix.current, {
            duration: 3,
            x: 200,
            opacity: .6
        } )

    }, [] )




    return (
        <div>
            <div className='flex  flex-col '>
                <div className='my-3 flex gap-2 justify-center '>
                    <button className='w-28  hover:border hover:border-indigo-950 rounded-full py-2 hover:bg-transparent transition-all delay-200 ease-in-out hover:text-indigo-950  bg-sky-900 text-white shadow-lg text-sm px-6 cursor-pointer'
                        onClick={ () => { tween.current?.play() } }
                    >Play</button>
                    <button className='w-28 hover:border hover:border-indigo-950 rounded-full py-2 hover:bg-transparent transition-all delay-200 ease-in-out hover:text-indigo-950  bg-sky-900 text-white shadow-lg text-sm px-6 cursor-pointer'
                        onClick={ () => { tween.current?.pause() } }
                    >Pause</button>
                    <button className='w-28 hover:border hover:border-indigo-950 rounded-full py-2 hover:bg-transparent transition-all delay-200 ease-in-out hover:text-indigo-950  bg-sky-900 text-white shadow-lg text-sm px-6 cursor-pointer'
                        onClick={ () => { tween.current?.resume() } }
                    >Resume</button>
                    <button className='w-28 hover:border hover:border-indigo-950 rounded-full py-2 hover:bg-transparent transition-all delay-200 ease-in-out hover:text-indigo-950  bg-sky-900 text-white shadow-lg text-sm px-6 cursor-pointer'
                        onClick={ () => { tween.current?.reverse() } }
                    >Reverse</button>
                    <button className='w-28 hover:border hover:border-indigo-950 rounded-full py-2 hover:bg-transparent transition-all delay-200 ease-in-out hover:text-indigo-950  bg-sky-900 text-white shadow-lg text-sm px-6 cursor-pointer'
                        onClick={ () => { tween.current?.restart() } }
                    >Restart</button>
                </div>

                <div className='bg-[#cf99e1] w-28 h-28 rounded-lg my-8 flex items-center justify-center' ref={ boxTwo }>Rose</div>
            </div>
            <div className='my-7 w-full h-full flex  flex-col   items-center  '>
                <h1 className='text-indigo-800 text-3xl  font-semibold tracking-[.1em]'>gsap animation </h1>



                <div className='bg-[#a7f281] w-28 h-28 rounded-lg my-8' ref={ boxRef }></div>

                <div className='bg-[#461158] w-28 h-28 rounded-lg my-8' ref={ boxThree }></div>




                <div className='bg-[#1b370e] w-28 h-28 rounded-lg my-8' ref={ boxFouth }></div>
                <div className='bg-[#7f7f0e] w-28 h-28 rounded-lg my-8' ref={ boxFive }></div>
                <div className='bg-[#152f83] w-28 h-28 rounded-lg my-8' ref={ boxSix }></div>





            </div>


        </div>
    )
}

export default GsapAnimation;  