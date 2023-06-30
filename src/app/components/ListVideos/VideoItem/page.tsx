'use client'

import * as Dialog from '@radix-ui/react-dialog'

import {
  IconPLay,
  ImageContainer,
  ImageVideo,
  Title,
  VideoItemContainer,
} from './styles'

import playImage from '@/assets/icons/play.svg'
import { Modal } from '@/components/Modal/page'

interface File {
  name: string
  file: string
  type: string
}

interface VideoItemProps {
  category: string
  title: string
  videoId: string
  description: string
  files: File[]
}

export function VideoItem({
  title,
  category,
  videoId,
  description,
  files,
}: VideoItemProps) {
  const imageSrc = `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <VideoItemContainer>
          <ImageContainer>
            <ImageVideo src={imageSrc} alt="" width={368} height={200} />
            <IconPLay src={playImage} alt="" />
          </ImageContainer>
          <Title>{title}</Title>
        </VideoItemContainer>
      </Dialog.Trigger>
      <Modal
        category={category}
        title={title}
        videoId={videoId}
        description={description}
        files={files}
      />
    </Dialog.Root>
  )
}
