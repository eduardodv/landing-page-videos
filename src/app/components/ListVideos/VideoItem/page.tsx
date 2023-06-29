'use client'

import {
  IconPLay,
  ImageContainer,
  ImageVideo,
  Title,
  VideoItemContainer,
} from './styles'

import playImage from '@/assets/icons/play.svg'

interface VideoItemProps {
  title: string
  imageSrc: string
}

export function VideoItem({ title, imageSrc }: VideoItemProps) {
  return (
    <VideoItemContainer>
      <ImageContainer>
        <ImageVideo src={imageSrc} alt="" width={368} height={200} />
        <IconPLay src={playImage} alt="" />
      </ImageContainer>
      <Title>{title}</Title>
    </VideoItemContainer>
  )
}
