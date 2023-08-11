import React from 'react';

const Hero = () => {
    return (
        <section>
        <div class="relative grid w-full bg-indigo-500 h-96 lg:h-[32rem] place-items-center">
            <div class="flex flex-col items-center mx-auto text-center">
                <h1 class="text-4xl font-semibold text-white uppercase md:text-6xl">Online resell Market</h1>

                <p class="mt-6 text-lg leading-5 text-white">Stay cool and beat the heat with our reliable air conditioning units. Experience a comfortable indoor environment with our range of ACs, featuring efficient cooling, smart temperature control, and quiet operation. Whether it's a window AC, split AC, or portable unit, we have the right solution for your cooling needs..</p>

                <a href="#about" class="mt-8 cursor-pointer animate-bounce">
                    <p className='text-center'>lets Explore Our Products</p>
                    <svg width="64" height="64" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
                        <path
                            d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                            fill="white" />
                    </svg>
                </a>
            </div>
        </div>

        <svg class="fill-indigo-500" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
        </svg>
    </section>
    );
};

export default Hero;