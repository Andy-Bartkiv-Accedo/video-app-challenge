import { createContext } from "react";

interface MediaItem {
    id: number,
    type: string,
    title: string,
    overview?: string,
    releaseDate?: string,
    poster?: string,
    background?: string
}

export const MediaContext = createContext<MediaItem[]>([]);