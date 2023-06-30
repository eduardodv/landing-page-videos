import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 998;
  inset: 0;
  overflow-y: auto;
  background-color: rgba(28, 61, 81, 0.6);
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 999;

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100%;
    justify-content: center;
  }
`

export const Content = styled(Dialog.Content)`
  position: relative;
  margin: 2rem auto;
  max-width: calc(100% - 40px);
  width: 37.5rem;
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden;
  border-radius: 12px;
  color: ${(props) => props.theme.colors['blue-800']};

  &:before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    position: absolute;
    background-color: ${(props) => props.theme.colors['blue-400']};
  }

  iframe {
    border: 0;
    display: block;
    background-color: #000;

    @media (max-width: 576px) {
      height: 240px;
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all 0.2s ease;

  img {
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['blue-400']};

    img {
      filter: brightness(200%);
    }
  }
`

export const ContentDescription = styled.div`
  padding: 1.5625rem 1.375rem;
`

export const Title = styled(Dialog.Title)`
  max-width: 25rem;
  padding: 2.1875rem 1.25rem;
  font-size: 1.375rem;
  font-weight: 500;
  margin: auto;
  text-align: center;

  span {
    color: ${(props) => props.theme.colors['blue-400']};
  }
`

export const Subtitle = styled.h3`
  font-size: 0.9375rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.625rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['gray-400']};
`

export const Description = styled.div`
  font-size: 0.9375rem;
`

export const Files = styled.div`
  margin-top: 1.1rem;

  ${Subtitle} {
    margin-bottom: 0.25rem;
  }
`

export const FileItem = styled.a`
  border-radius: 4px;
  display: inline-flex;
  overflow: hidden;
  margin-right: 6px;
  margin-top: 6px;
  color: ${(props) => props.theme.colors['gray-button-600']};
  background-color: ${(props) => props.theme.colors['gray-button-400']};
  transition: all 0.2s ease;

  > div {
    width: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors['gray-button-500']};
    transition: all 0.2s ease;
  }

  img {
    transition: all 0.2s ease;
    filter: ${(props) => props.theme.colors['filter-gray-button-600']};
  }

  span {
    padding: 7px;
    font-size: 12px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors['gray-button-600']};

    > div {
      background-color: ${(props) => props.theme.colors['gray-button-600']};
    }

    img {
      filter: invert() !important;
    }
  }

  &.xls {
    color: ${(props) => props.theme.colors['green-600']};
    background-color: ${(props) => props.theme.colors['green-400']};

    > div {
      background-color: ${(props) => props.theme.colors['green-500']};
    }

    img {
      filter: ${(props) => props.theme.colors['filter-green-600']};
    }

    &:hover {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors['green-600']};

      > div {
        background-color: ${(props) => props.theme.colors['green-600']};
      }
    }
  }

  &.doc {
    color: ${(props) => props.theme.colors['light-blue-600']};
    background-color: ${(props) => props.theme.colors['light-blue-400']};

    > div {
      background-color: ${(props) => props.theme.colors['light-blue-500']};
    }

    img {
      filter: ${(props) => props.theme.colors['filter-light-blue-600']};
    }

    &:hover {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors['light-blue-600']};

      > div {
        background-color: ${(props) => props.theme.colors['light-blue-600']};
      }
    }
  }

  &.ppt {
    color: ${(props) => props.theme.colors['yellow-600']};
    background-color: ${(props) => props.theme.colors['yellow-400']};

    > div {
      background-color: ${(props) => props.theme.colors['yellow-500']};
    }

    img {
      filter: ${(props) => props.theme.colors['filter-yellow-600']};
    }

    &:hover {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors['yellow-600']};

      > div {
        background-color: ${(props) => props.theme.colors['yellow-600']};
      }
    }
  }
`
