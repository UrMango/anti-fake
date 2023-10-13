// TODO: Add Data Table view and posts view
"use client"
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";

export default function PostRow({posts} : {posts : any[]}) {

    return (
        <div className="flex flex-col lg:flex-row w-2/3 gap-2">           
            {posts.map((post, index) => (
                <div 
                    key={index}
                >{post}</div>
            ))}				
        </div>
    )
}