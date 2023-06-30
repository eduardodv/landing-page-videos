import Image from 'next/image'

import * as Dialog from '@radix-ui/react-dialog'

import {
  CloseButton,
  Content,
  ContentDescription,
  Description,
  Files,
  FileItem,
  Overlay,
  Subtitle,
  Title,
  ModalContainer,
} from './styles'

import iconClose from '@/assets/icons/close.svg'
import iconDownload from '@/assets/icons/download.svg'

interface File {
  name: string
  file: string
  type: string
}

interface ModalProps {
  category: string
  title: string
  videoId: string
  description: string
  files: File[]
}

export function Modal({
  category,
  title,
  videoId,
  description,
  files,
}: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <ModalContainer>
        <div>
          <Content>
            <CloseButton>
              <Image src={iconClose} width={18} height={18} alt="" />
            </CloseButton>
            <Title>
              <span>{category}: </span>
              {title}
            </Title>
            <iframe
              id="ytplayer"
              width="100%"
              height={350}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
            ></iframe>
            <ContentDescription>
              <Description>
                <Subtitle>Descrição</Subtitle>
                {description}
              </Description>
              {files.length > 0 && (
                <Files>
                  <Subtitle>Downloads</Subtitle>
                  {files.map((item) => {
                    return (
                      <FileItem
                        href={item.file}
                        key={item.name}
                        className={item.type}
                      >
                        <div>
                          <Image
                            src={iconDownload}
                            width={15}
                            height={15}
                            alt=""
                          />
                        </div>
                        <span>{item.name}</span>
                      </FileItem>
                    )
                  })}
                </Files>
              )}
            </ContentDescription>
          </Content>
        </div>
      </ModalContainer>
    </Dialog.Portal>
  )
}
