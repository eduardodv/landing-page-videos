'use client'

import { useEffect, useRef, useState } from 'react'

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

interface CategoriesProps {
  id: number
  name: string
}

interface File {
  name: string
  file: string
  type: string
}

interface VideoProps {
  id: number
  created_at: string
  category: string
  title: string
  video_id: string
  description: string
  files: File[]
}

export function ListVideos() {
  const [categories, setCategories] = useState<CategoriesProps[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [videos, setVideos] = useState<VideoProps[]>([])
  const [loadingVideos, setLoadingVideos] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const [orderByVideos, setOrderByVideos] = useState('')

  const targetRef = useRef<null | HTMLElement>(null)

  let totalPosts = videos.length

  useEffect(() => {
    setCategories(data.categories)
    setVideos(data.videos)
    setLoadingVideos(false)
  }, [])

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber)

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function orderBy(value: string) {
    setOrderByVideos(value)
  }

  function sortVideosById(value: VideoProps[]) {
    return value.sort((a: VideoProps, b: VideoProps) => a.id - b.id)
  }

  function sortVideosByName(value: VideoProps[]) {
    return value.sort((a: VideoProps, b: VideoProps) =>
      a.title.localeCompare(b.title),
    )
  }

  function sortVideosByDate(value: VideoProps[]) {
    return value.sort((a: VideoProps, b: VideoProps) =>
      b.created_at.localeCompare(a.created_at),
    )
  }

  function Sort() {
    if (orderByVideos === 'asc') {
      return sortVideosByName(videos)
    }

    if (orderByVideos === 'date') {
      return sortVideosByDate(videos)
    }

    return sortVideosById(videos)
  }

  function currentPosts() {
    let currentVideos = []
    const sortedVideos = Sort()

    if (selectedCategory === 'all') {
      currentVideos = sortedVideos
    } else {
      currentVideos = sortedVideos.filter(
        (item: VideoProps) => item.category === selectedCategory,
      )
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    totalPosts = currentVideos.length

    return currentVideos.slice(indexOfFirstPost, indexOfLastPost)
  }

  function selectCategory(category: string) {
    if (category === selectedCategory) {
      setSelectedCategory('all')
    } else {
      setSelectedCategory(category)
    }

    setCurrentPage(1)
  }

  return (
    <ListVideosContainer ref={targetRef}>
      <div className="container">
        <HeaderFilters>
          <Categories
            categories={categories}
            selectCategory={selectCategory}
            isSelected={selectedCategory}
          />
          <Sorting orderBy={orderBy} orderByVideos={orderByVideos} />
        </HeaderFilters>
        {loadingVideos && <LoadingSpinner />}
        <List>
          {currentPosts().map((item: VideoProps) => {
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
        {!loadingVideos && currentPosts().length <= 0 && (
          <ErrorMessage>Nenhum vídeo encontrato.</ErrorMessage>
        )}
        {!loadingVideos && totalPosts > 0 && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </ListVideosContainer>
  )
}
