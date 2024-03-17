import React from "react";

function Card({ blog }) {
    const { imgSrc, excerpt, title, datePublished, author } = blog;
    return (
        <div className='cardlayout '>
            <div className="image overflow-hidden">
                <img src={imgSrc} className='w-full h-52 object-cover object-center transform transition ease-out duration-200 hover:scale-125' alt="" />
            </div>
            <div className="content p-8 relative">
                <h3 className='font-rosario font-extrabold pb-2 uppercase text-lg leading-tight'>{title}</h3>
                <p className='text-gray-500 2024-02-28'>  {excerpt}</p>
                <p className='text-gray-500 pt-3 text-sm'>By: <span>{author}</span> Date: {datePublished}</p>

            </div>
        </div>
    )
}
export default Card;