import styled from 'styled-components'

export const SortingContainer = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: center;
  flex: 1;

  @media (min-width: 992px) {
    justify-content: flex-end;
  }

  strong {
    white-space: nowrap;
  }

  select {
    border: 1px solid ${(props) => props.theme.colors['blue-800']};
    padding: 0.5rem 0.625rem;
    font-size: 1rem;
    background-color: #fff;
    cursor: pointer;
    border-radius: 10px;
    color: ${(props) => props.theme.colors['blue-800']};
  }
`
