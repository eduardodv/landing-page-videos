import styled from 'styled-components'

export const PaginationContainer = styled.nav`
  margin-top: 4.375rem;
  padding-top: 2.1875rem;
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  align-items: center;
  font-size: 22px;
  justify-content: center;
  color: ${(props) => props.theme.colors['blue-800']};
  border-top: 2px solid ${(props) => props.theme.colors['gray-400']};

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`

export const PageItem = styled.button`
  height: 43px;
  min-width: 43px;
  padding: 0.25rem;
  border-radius: 6px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  background: none;
  font-size: inherit;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors['blue-400']};
  }

  &.active {
    font-weight: bold;
    pointer-events: none;
    color: ${(props) => props.theme.colors['blue-400']};
    border-color: ${(props) => props.theme.colors['blue-400']};
  }
`
