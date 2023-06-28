import Link from 'next/link'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding-top: 3rem;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  span {
    color: red;
    font-size: 0.9375rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors['blue-700']};
  }
`
export const MenuFooter = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ul {
    list-style: none;
  }
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 3.2rem;
  color: ${(props) => props.theme.colors['blue-900']};

  @media (max-width: 575px) {
    margin-bottom: 1rem;
  }
`

export const NavbarLink = styled(Link)`
  font-weight: 200;
  font-size: 0.9375rem;
  line-height: 1.6;
  display: inline-block;
  margin-bottom: 1.3rem;
  color: ${(props) => props.theme.colors['blue-600']};

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors['blue-400']};
  }
`

export const SocialButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: -1.5rem 0 1.5rem;

  @media (max-width: 575px) {
    margin-top: 0;
  }

  a {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors['gray-600']};
    background-color: ${(props) => props.theme.colors['gray-200']};
    transition: all, 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors['blue-400']};

      img {
        filter: brightness(200%);
      }
    }
  }
`
export const LabeledLink = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 1rem;

  a {
    color: ${(props) => props.theme.colors['blue-600']};

    &:hover {
      text-decoration: underline;
    }
  }
`
export const FooterInfo = styled.div`
  margin-top: 4rem;
  padding: 2rem 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['blue-700']};
  border-top: 1px solid ${(props) => props.theme.colors['gray-300']};

  @media (max-width: 575px) {
    margin-top: 2rem;
  }

  > div {
    display: flex;
    gap: 2rem;
    justify-content: space-between;

    @media (max-width: 991px) {
      flex-wrap: wrap;
      gap: 1rem 0;
    }

    div:last-child {
      font-weight: 300;
      color: ${(props) => props.theme.colors['gray-600']};
    }
  }

  p {
    display: inline-block;
  }
`

export const LinkSite = styled.a`
  display: inline-block;
  color: #09b7f6;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors['blue-400']};
  }
`

export const LinkTerms = styled.a`
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`
