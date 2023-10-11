"use client"
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Post from "@/components/post";

export default function PostsCarousel({posts} : {posts : any[]}) {

  // emblaRef will be a reference to our carousel viewport
  const [emblaRef, embla] = useEmblaCarousel({

    align: "center",
    // aligns the first slide to the start
    // of the viewport else will align it to the middle.

    loop: true,
		direction: "rtl",
    // we need the carousel to loop to the
    // first slide once it reaches the last slide.
		// dragFree: true,
		
    skipSnaps: true,
    // Allow the carousel to skip scroll snaps if
    // it's dragged vigorously.

    inViewThreshold: 0.7,
    // percentage of a slide that need's to be visible
    // inorder to be considered in view, 0.7 is 70%.
  });

  const [selectedIndex, setSelectedIndex] = useState<any>(0);
  const [scrollSnaps, setScrollSnaps] = useState<any>([]);

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index : any) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
		<div className=" mx-auto w-full lg:max-w-6xl px-5">
			<div className="overflow-hidden" ref={emblaRef}>
			{/* // Carousel container */}
				<div className="flex w-full">
				{/* // Carousel slide's */}
					{posts.map((post, index) => (
						<div
						 className="flex flex-none flex-wrap lg:flex-nowrap w-fit mx-2"
						 key={index}
					 	>{post}</div>
					))}
				</div>
			</div>
		</div>
	);
}