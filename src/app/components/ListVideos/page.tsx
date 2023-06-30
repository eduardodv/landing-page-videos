'use client'

import { Pagination } from '@/components/Pagination/page'
import { VideoItem } from './VideoItem/page'
import { Categories } from '@/components/Categories/page'
import { Sorting } from '@/components/Sorting/page'

import {
  ErrorMessage,
  HeaderFilters,
  List,
  ListVideosContainer,
} from './styles'

import data from '@/data/data.json'
const { videos } = data

export function ListVideos() {
  return (
    <ListVideosContainer>
      <div className="container">
        <HeaderFilters>
          <Categories />
          <Sorting />
        </HeaderFilters>
        <List>
          {videos.map((item) => {
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
        {videos.length <= 0 && (
          <ErrorMessage>Nenhum vídeo encontrato.</ErrorMessage>
        )}
        <Pagination />
      </div>
    </ListVideosContainer>
  )
}
