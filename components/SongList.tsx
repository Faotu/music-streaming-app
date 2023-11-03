"use client";

import { Song } from "@/types";
import React from "react";

interface SongListProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongList: React.FC<SongListProps> = ({ data, onClick }) => {
  return <div>Song List</div>;
};

export default SongList;
