import React from 'react';

function List(props) {
    return (
        <div>
            <body>
            <div className="flex items-center justify-center min-h-screen ">
                <div
                    className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">

                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold">
                            {props.type === "Add" &&<div> Add Marks Details</div>}
                            {props.type === "Edit" &&<div> Edit Marks Details</div>}
                        </span>
                        <span className="font-light text-gray-400 mb-8"></span>
                        <div className="py-4">
                            <span className="mb-2 text-md">Product Name</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="productname"
                                id="email"
                            />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Color</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Category</span>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Price</span>
                            <input
                                type="text"
                                name="pass"
                                id="pass"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            />
                        </div>
                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24">

                            </div>

                        </div>
                        {/*<button*/}
                        {/*    className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"*/}
                        {/*>*/}
                        {/*    Sign in*/}
                        {/*</button>*/}
                        {/*<button*/}
                        {/*    className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"*/}
                        {/*>*/}
                        {/*    h<img src="google.svg" alt="img" className="w-6 h-6 inline mr-2"/>*/}
                        {/*    Sign in wit Google*/}
                        {/*</button>*/}

                    </div>

                    <div className="relative">
                        {/*<img*/}
                        {/*    src="image.jpg"*/}
                        {/*    alt="img"*/}
                        {/*    className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"*/}
                        {/*/>*/}

                        {/*<div*/}
                        {/*    className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"*/}
                        {/*>*/}
                        {/*    <span className="text-white text-xl"*/}
                        {/*    >We've been uesing Untitle to kick"<br/>start every new project*/}
                        {/*      and can't <br/>imagine working without it."*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            </body>
        </div>
    );
}

export default List;