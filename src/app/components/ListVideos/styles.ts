import styled from 'styled-components'

export const ListVideosContainer = styled.section`
  padding: 5rem 0;
  color: ${(props) => props.theme.colors['blue-800']};

  @media (max-width: 576px) {
    padding: 3rem 0;
  }
`

export const List = styled.div`
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
`
