import { axiosInstance } from '@/lib/axios';
import {create} from 'zustand';
import type { Song, Album, Stats } from '@/types';
import toast from 'react-hot-toast';

interface MusicStore {
    songs: Song[];
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;
    mostListenedToSongs: Song[];
    sharedWithMeSongs: Song[];
    defaultSongs: Song[];
    stats:Stats


    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    fetchMostListenedToSongs: () => Promise<void>;
    fetchSharedWithMeSongs: () => Promise<void>;
    fetchDefaultSongs: () => Promise<void>;
    fetchStats: () => Promise<void>;
    fetchSongs: () => Promise<void>;
    deleteSong: (id: string) => Promise<void>;
    deleteAlbum: (id: string) => Promise<void>
}

export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading:false,
    error: null,
    currentAlbum: null,
    mostListenedToSongs: [],
    sharedWithMeSongs: [],
    defaultSongs: [],
    stats:{
        totalSongs:0,
        totalAlbums:0,
        totalUsers: 0,
        totalArtists: 0,
    },

     deleteAlbum: async (id) => {
		set({ isLoading: true, error: null });
		try {
			await axiosInstance.delete(`/admin/albums/${id}`);
			set((state) => ({
				albums: state.albums.filter((album) => album._id !== id),
				songs: state.songs.map((song) =>
					song.albumId === state.albums.find((a) => a._id === id)?.title ? { ...song, album: null } : song
				),
			}));
			toast.success("Album deleted successfully");
		} catch (error: any) {
			toast.error("Failed to delete album: " + error.message);
		} finally {
			set({ isLoading: false });
		}
	},

    deleteSong: async (id) => {
        set({ isLoading: true, error: null})
        try{
            await axiosInstance.delete(`/admin/songs/${id}`)
            set(state => ({
                songs: state.songs.filter(song => song._id !== id)
            }))
            toast.success("Song deleted successfully")

        } catch (error: any){
            console.log("Error in deleteSong", error)
            toast.error("Error deleting song")
        } finally {
            set ({ isLoading: false})
        }
    },

    fetchSongs: async () => {
        set({isLoading: true, error: null})
        try {
            const response = await axiosInstance.get("/songs")
            set({songs: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally {
            set({ isLoading: false})
        }
    },

    fetchStats: async () => {
        set({isLoading: true, error: null})
        try {
            const response = await axiosInstance.get("/stats")
            set({stats: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally {
            set({ isLoading: false})
        }
    },
    
    fetchAlbums: async () => {

        set({isLoading: true, error: null})
        try {
            const response = await axiosInstance.get("/albums")
            set({albums: response.data})
        } catch (error: any) {
            set({error: error.response.data.message})
        } finally {
            set({ isLoading: false})
        }
    },

    fetchAlbumById: async(id) => {
        set({ isLoading: true, error: null })
        try {
            const response = await axiosInstance.get(`/albums/${id}`)
            set({ currentAlbum: response.data })
        } catch (error: any) {
            set({ error: error.response.data.message})
        } finally {
            set({ isLoading: false})
        }
    },

    fetchDefaultSongs: async () => {
        set({isLoading: true, error: null})
        try{
            const response = await axiosInstance.get("/songs/featured")
            set({ defaultSongs: response.data})
        } catch (error: any) {
            set({ error: error.response.data.message})
        } finally {
            set({ isLoading: false})
        }
    },

    fetchMostListenedToSongs: async () => {
        set({ isLoading: true, error: null})
        try{ 
            const response = await axiosInstance.get("/songs/made-for-you")
            set({ mostListenedToSongs: response.data})
        } catch (error: any) {
            set({ error: error.response.data.message})
        } finally {
            set({ isLoading: false})
        }
    },

    fetchSharedWithMeSongs: async () => {
        set({ isLoading: true, error: null})
        try {
            const response = await axiosInstance.get("/songs/trending")
            set({ sharedWithMeSongs: response.data})
        } catch (error: any) {
            set({ error: error.response.data.message})
        } finally {
            set({ isLoading: false})
        }
    }

}))
