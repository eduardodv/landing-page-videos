import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

export const TopBannerContainer = styled.section`
  text-align: center;
  padding: 6rem 0;
  display: flex;
  background-color: ${(props) => props.theme.colors['blue-300']};

  @media (min-width: 992px) {
    min-height: 600px;
  }
`

export const Tag = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  font-size: 0.875rem;
  border-radius: 40px 40px 40px 12px;
  padding: 0.38rem 1.3rem 0.4rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors['blue-gradient-1']};
  border: 2px solid ${(props) => props.theme.colors['blue-gradient-1']};

  @media (max-width: 576px) {
    font-size: 9px;
    padding: 0.25rem 0.8125rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 0.6875rem;
  }
`

export const Title = styled.h1`
  font-size: 2.9375rem;
  font-weight: normal;
  line-height: 1.15;
  color: ${(props) => props.theme.colors['blue-800']};

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 2.0625rem;
  }

  span:first-child {
    display: block;
  }
`

export const Gradient = styled.span`
  display: inline-block;
  position: relative;
  font-size: 5.5rem;
  font-weight: 700;
  background: -webkit-linear-gradient(
    45deg,
    ${(props) => props.theme.colors['blue-gradient-1']},
    ${(props) => props.theme.colors['blue-gradient-2']}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 576px) {
    font-size: 2.25rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 3.75rem;
  }
`

const iconTitleAnimation = keyframes`
  from {
    right: -40px;
    top: -30px;
    opacity: 0;
  }
`

export const IconTitle = styled(Image)`
  height: auto;
  position: absolute;
  right: -18px;
  top: 10px;
  animation: ${iconTitleAnimation} 1s linear;

  @media (max-width: 576px) {
    width: 20px;
    right: -9px;
    top: 5px;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    width: 33px;
    right: -13px;
    top: 7px;
  }
`

export const Subtitle = styled.p`
  margin: 1.3rem auto 0;
  padding-top: 1.1rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors['blue-800']};
  font-size: 1.125rem;
  border-top: 1px solid ${(props) => props.theme.colors['gray-500']};

  @media (min-width: 992px) {
    width: 730px;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 1rem;
  }
`
