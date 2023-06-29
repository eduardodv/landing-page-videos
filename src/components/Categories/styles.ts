import styled from 'styled-components'

export const CategoriesContainer = styled.nav`
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    gap: 0.5rem;
  }
`

export const Category = styled.button`
  color: ${(props) => props.theme.colors['blue-800']};
  border: 1px solid ${(props) => props.theme.colors['blue-800']};
  padding: 0.4375rem 1.3125rem;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.4;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.white};
  transition: all 0.2s ease;

  @media (max-width: 992px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors['blue-400']};
    border-color: ${(props) => props.theme.colors['blue-400']};
  }

  &.active {
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors['blue-400']};
    background-color: ${(props) => props.theme.colors['blue-400']};
  }
`
