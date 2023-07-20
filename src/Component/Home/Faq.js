import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="232db96b-4aa2-422f-9086-5a77996d1df1"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span class="relative">CHILL</span>
                        </span>{' '}
                        Deal ONLiNE
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg ">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
                <div class="space-y-4">
                    <Item title="What is Chill Deals Online and  how does it work?">
                        With our extensive collection of televisions, you can enjoy stunning visuals, vibrant colors, and immersive sound for your favorite movies, shows, and gaming sessions. From sleek LED TVs to cutting-edge smart TVs, we have the perfect screen size and features to match your preferences.
                    </Item>
                    <Item title="Find Easy all Product">
                    Upgrade your kitchen with our range of premium fridges that combine style, functionality, and energy efficiency. Keep your groceries fresh and organized with advanced cooling technologies and adjustable compartments. Our fridges come in various sizes and designs to suit your space and aesthetic.
                    </Item>
                    <Item title="Is the Space Pope reptilian!?">
                    Stay cool and beat the heat with our reliable air conditioning units. Experience a comfortable indoor environment with our range of ACs, featuring efficient cooling, smart temperature control, and quiet operation. Whether it's a window AC, split AC, or portable unit, we have the right solution for your cooling needs.
                    </Item>
                    <Item title="How much money you got on you?">
                    Browse our website and explore our wide selection of TVs, fridges, and ACs. With competitive prices and frequent deals, you'll find the perfect appliance that fits your budget. Experience the convenience of online shopping and have your chosen products delivered right to your doorstep.
                    </Item>
                </div>
            </div>
        </div>
    );
};