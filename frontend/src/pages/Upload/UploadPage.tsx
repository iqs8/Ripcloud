import { useAuthStore } from '@/stores/useAuthStore'
import { useEffect } from 'react'
import { Header } from './components/Header';
import { DashboardStats } from './components/DashboardStats';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Music } from 'lucide-react';
import { TabsContent } from '@radix-ui/react-tabs';
import { SongsTabContent } from './components/SongsTabContent';
import { useMusicStore } from '@/stores/useMusicStore';
import { AlbumsTabContent } from './components/AlbumsTabContent';

export const UploadPage = () => {

    const {isLoading} = useAuthStore();
    const {fetchAlbums, fetchSongs, fetchUserStats} = useMusicStore()

    useEffect(() =>{
        fetchAlbums(),
        fetchSongs(),
        fetchUserStats()
    },[fetchAlbums, fetchSongs,fetchUserStats ])

    if (isLoading) return <div>Loading</div>

  return (
    <div className='min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black tex-zinc-100 p-8'>

        <Header/>

        <DashboardStats/>

        <Tabs defaultValue='songs' className='space-y-6'>
            <TabsList className='p-1 bg-zinc-800/50'>
                <TabsTrigger value="songs" className='data-[state=active]:bg-zinc-700'>
                    <Music className='mr-2 size-4' />
                    Songs
                </TabsTrigger>

                <TabsTrigger value="albums" className='data-[state=active]:bg-zinc-700'>
                    <Music className='mr-2 size-4' />
                    Albums
                </TabsTrigger>
            </TabsList>

            <TabsContent value='songs'>
                <SongsTabContent/>
            </TabsContent>
            <TabsContent value='albums'>
                <AlbumsTabContent/>
            </TabsContent>
        </Tabs>

    </div>
  )
}
