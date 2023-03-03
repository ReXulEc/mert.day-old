import React from "react";

const About = () => {
    return (
        <div className=" w-full h-full flex text-white justify-center">
            <div className="flex flex-col w-full items-center rounded-xl space-x-5 space-y-3 h-full">
                <div className="flex flex-col rounded-xl md:w-9/12 w-10/12 py-10">
                    <div className="h-[60%] flex flex-col space-y-4 mobile:pt-3 ">
                        <div className="-space-y-05 z-[10]">
                            <h1 className="text-4xl mobile:text-4xl">Mert Dogu</h1>
                            <p className="text-blue-400 text-md">Front-end Developer</p>
                        </div>
                        
                        <div className="flex space-x-2">
                            <p className="text-sm font-semibold">{">"}</p>
                            <p className="md:w-1/2 text-sm mobile:text-left">Im a {new Date().getFullYear() - 2007} years old self taught front-end developer from Izmir, Turkey. I'm currently working with React, Next.js, Svelte and Vue.js. I'm also learning Python and C#. My current goal is to improve and become a professional in front-end development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
