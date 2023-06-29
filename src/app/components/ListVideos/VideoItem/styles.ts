import styled from 'styled-components'
import Image from 'next/image'

export const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.theme.colors['gray-300']};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    background-color: ${(props) => props.theme.colors['blue-400']};
    transition: all 0.3s ease;
  }
`

export const ImageVideo = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease;
`

export const IconPLay = styled(Image)`
  width: 75px;
  height: 75px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  opacity: 0;
  transition: all 0.2s ease;
`

export const Title = styled.h3`
  height: 100%;
  padding: 1.3125rem 1.875rem;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors['blue-800']};
  transition: all 0.2s ease;
`
export const VideoItemContainer = styled.button`
  width: 100%;
  min-height: 260px;
  border-radius: 16px;
  text-align: left;
  border: 0;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 13px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    ${ImageVideo} {
      transform: scale(1.2);
    }

    ${Title} {
      color: ${(props) => props.theme.colors['blue-400']};
    }

    ${ImageContainer} {
      &:before {
        opacity: 0.3;
      }
    }

    ${IconPLay} {
      opacity: 1;
    }
  }
`
