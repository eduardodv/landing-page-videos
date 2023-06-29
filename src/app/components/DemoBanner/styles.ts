import Image from 'next/image'
import styled from 'styled-components'

export const DemoBannerContainer = styled.section`
  padding: 0.7rem 0 1.0625rem;
  color: ${(props) => props.theme.colors['blue-800']};
  background-color: ${(props) => props.theme.colors['blue-300']};

  @media (max-width: 767px) {
    text-align: center;
    padding: 3.125rem 0 1.875rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 1.875rem 0;
  }
`

export const ContainerColumns = styled.div`
  display: grid;
  align-items: center;
  gap: 5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1rem;

    div:first-child {
      order: 2;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1250px;
  }
`

export const ChartImage = styled(Image)`
  max-width: calc(100% + 5vw);
  height: auto;
  margin-left: -5vw;

  @media (max-width: 767px) {
    width: 400px;
  }
`

export const Title = styled.h2`
  max-width: 550px;
  font-size: 2.4375rem;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: 576px) {
    font-size: 1.8125rem;
  }

  @media (max-width: 767px) {
    margin: auto;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 1.875rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 2.1875rem;
  }

  strong {
    font-weight: 600;
  }
`

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 1.2;
  margin-top: 0.4375rem;
  margin-bottom: 20px;

  @media (max-width: 991px) {
    font-size: 1rem;
  }
`

export const TwoColumns = styled.div`
  display: flex;
  gap: 1.125rem;
  padding-top: 1.3rem;
  font-size: 0.875rem;
  border-top: 2px solid ${(props) => props.theme.colors['gray-500']};

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    justify-content: center;
  }

  @media (max-width: 1250px) {
    &:last-child {
      flex-direction: column;
    }

    p {
      margin-bottom: 0.7rem;
      &:first-child {
        padding-right: 0;
        &:after {
          display: none;
        }
      }
    }
  }

  @media (min-width: 1201px) and (max-width: 1250px) {
    font-size: 13px;
  }

  p {
    &:first-child {
      position: relative;
      padding-right: 20px;
      &:after {
        content: '|';
        position: absolute;
        font-size: 1rem;
        top: 0;
        right: 8px;
      }
    }
  }

  &:last-child {
    padding-top: 0.8rem;
    border: 0;
    gap: 0;

    img {
      transform: translateY(2px);
      margin-right: 6px;
    }
  }
`

export const DemoButton = styled.a`
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  color: ${(props) => props.theme.colors.white};
  transition: all 0.2s ease;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors['blue-500']};

  @media (min-width: 768px) and (max-width: 992px) {
    align-self: flex-start;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 0.8rem;
    padding: 1.3rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['blue-200']};
  }
`
