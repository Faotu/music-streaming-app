"use client";

// import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import React from "react";

interface MediaItmeProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItmeProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    // Play as default
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="related rounded-md min-h-[48px] min-w-[48px] overflow:hidden ">
        {/* <Image
          fill
          src={imageUrl || "/images.linkedImage.png"}
          alt="Media Item"
          className="object-cover"
        /> */}
      </div>
    </div>
  );
};

export default MediaItem;
