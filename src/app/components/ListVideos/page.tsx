'use client'

import { Pagination } from '@/components/Pagination/page'
import { VideoItem } from './VideoItem/page'
import {
  ErrorMessage,
  HeaderFilters,
  List,
  ListVideosContainer,
} from './styles'

import data from '@/data/data.json'
import { Categories } from '@/components/Categories/page'
import { Sorting } from '@/components/Sorting/page'
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
                title={item.title}
                imageSrc={item.image_src}
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
