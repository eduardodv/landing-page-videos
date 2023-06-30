'use client'

import { useEffect, useState } from 'react'

import { Pagination } from '@/components/Pagination/page'
import { VideoItem } from './VideoItem/page'
import { Categories } from '@/components/Categories/page'
import { Sorting } from '@/components/Sorting/page'
import { LoadingSpinner } from '@/components/LoadingSpinner/page'

import {
  ErrorMessage,
  HeaderFilters,
  List,
  ListVideosContainer,
} from './styles'

import data from '@/data/data.json'

interface File {
  name: string
  file: string
  type: string
}

interface VideoProps {
  id: number
  category: string
  title: string
  video_id: string
  description: string
  files: File[]
}

export function ListVideos() {
  const [videos, setVideos] = useState<VideoProps[]>([])
  const [loadingVideos, setLoadingVideos] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  useEffect(() => {
    setVideos(data.videos)
    setLoadingVideos(false)
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost)

  function paginate(pageNumber: any) {
    setCurrentPage(pageNumber)
  }

  return (
    <ListVideosContainer>
      <div className="container">
        <HeaderFilters>
          <Categories />
          <Sorting />
        </HeaderFilters>
        {loadingVideos && <LoadingSpinner />}
        <List>
          {currentPosts.map((item) => {
            return (
              <VideoItem
                key={item.id}
                category={item.category}
                title={item.title}
                videoId={item.video_id}
                description={item.description}
                files={item.files}
              />
            )
          })}
        </List>
        {!loadingVideos && videos.length <= 0 && (
          <ErrorMessage>Nenhum vídeo encontrato.</ErrorMessage>
        )}
        {!loadingVideos && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={videos.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </ListVideosContainer>
  )
}
