import React from "react";
import Link from "next/link";


const About = () => {
    return (
        <div className="w-full h-full flex text-white justify-center">
            <div className="flex flex-col w-full items-center justify-center rounded-xl space-x-5 space-y-3 h-full">
                <div className="flex flex-col rounded-xl md:w-9/12 w-10/12 py-10">
                    <div className="h-full flex flex-col space-y-6 mobile:pt-3 ">
                        <section id="about" className="space-y-2">
                            <div className="-space-y-05 z-[10]">
                                <h1 className="text-4xl mobile:text-4xl">Mert Dogu</h1>
                                <p className="text-blue-400 text-md">Front-end Developer</p>
                            </div>
                            
                            <div className="flex space-x-2">
                                <p className="text-sm font-semibold">{">"}</p>
                                <p className="md:w-1/2 text-sm mobile:text-left">Im a {new Date().getFullYear() - 2007} years old self taught front-end developer from Izmir, Turkey. I am currently working with React, Next.js, Svelte and Vue.js. I am also learning Python and C#. My current goal is to improve and become a professional in front-end development.</p>
                            </div>
                            <div className="flex space-x-2">
                                <p className="text-sm font-semibold">{">"}</p>
                                <p className="md:w-1/2 text-sm mobile:text-left">Currently, our team and I are developing OpenAnime, a top-notch anime platform aimed at providing the best viewing experience.</p>
                            </div>
                            <div className="flex space-x-2 text-stone-400">
                                <p className="text-sm font-semibold text-stone-200">{">"}</p>
                                <div className="md:w-1/2 text-sm mobile:text-left">If you want to have a look at my experiences, you can <Link className="text-blue-400" href="/experiance">click here</Link> or select the experiences section from the Navigation bar.</div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
