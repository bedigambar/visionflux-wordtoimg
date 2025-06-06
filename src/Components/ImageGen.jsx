import React, { useState } from 'react'
import coverPic from '../assets/floral-pic.jpeg'
import { useRef } from 'react';

const ImageGen = () => {
    const [imageUrl, setImageUrl] = useState("/");
    let inputRef = useRef(null);

    const imageGenerate = async () => {
        if (inputRef.current.value === "") {
            return alert("Please enter a description to generate an image.");
        }
        const response = await fetch(
            " ",                                                 // Replace with your API endpoint
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    Authorization:
                    "Bearer ",                                // Replace with your API key
                    "User-Agent" : " ",                       // Replace with your User-Agent if required
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                }),
            }
        );
        let data = await response.json();
        let data_arr = data.data;
        setImageUrl(data_arr[0].url);
    }


    return (
        <div className="min-h-screen animate-fade-in-up bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                
                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-200 via-white to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
                        VisionFlux
                    </h1>
                    <div className="text-3xl md:text-5xl font-semibold text-blue-100">
                        AI Image{' '}
                        <span className="relative inline-block">
                            <span className="underline decoration-emerald-300 decoration-4 underline-offset-8 hover:text-emerald-200 transition-colors duration-300 cursor-pointer">
                                Generator
                            </span>
                        </span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative">
                            <img 
                                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl shadow-2xl border-2 border-white/10 backdrop-blur-sm" 
                                src={imageUrl === "/" ? coverPic : imageUrl} 
                                alt="AI Generated Sample" 
                            />
                        </div>
                    </div>
                </div>

                <div className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                    <span className="text-emerald-300 font-semibold">Create stunning images</span>{' '}
                    with the power of AI. Transform your imagination into reality.
                </div>

                <div className="w-full max-w-3xl mx-auto">
                    <div className="relative group">

                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                        
                        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-600/50 rounded-2xl p-6 shadow-2xl">
                            <div className="flex flex-col md:flex-row gap-4 items-center">

                                <input 
                                    type="text" 
                                    placeholder="Describe your imagination..." 
                                    ref={inputRef}
                                    className="flex-1 px-6 py-4 bg-gray-800/70 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 text-lg backdrop-blur-sm hover:bg-gray-800/90"
                                />
                                
                                <button onClick={() => imageGenerate()} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 min-w-32">
                                    Generate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
                    <div className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300">
                        <div className="text-2xl mb-2">⚡</div>
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">Lightning Fast</h3>
                        <p className="text-gray-400 text-sm">Generate images in seconds with our advanced AI</p>
                    </div>
                    
                    <div className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300">
                        <div className="text-2xl mb-2">🎨</div>
                        <h3 className="text-lg font-semibold text-emerald-200 mb-2">Creative Freedom</h3>
                        <p className="text-gray-400 text-sm">Turn any description into stunning visuals</p>
                    </div>
                    
                    <div className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-300">
                        <div className="text-2xl mb-2">🚀</div>
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">High Quality</h3>
                        <p className="text-gray-400 text-sm">Professional-grade images every time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGen