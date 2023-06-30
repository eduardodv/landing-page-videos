import styled, { keyframes } from 'styled-components'

const iconSpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingSpinnerContainer = styled.div`
  display: block;
  margin: 2rem auto;
  position: relative;
  width: 60px;
  height: 60px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${(props) => props.theme.colors['blue-400']};
    border-radius: 50%;
    animation: ${iconSpinnerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1)
      infinite;
    border-color: ${(props) => props.theme.colors['blue-400']} transparent
      transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`
