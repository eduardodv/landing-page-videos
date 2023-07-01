import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'

import { ListVideos } from '.'
import RootLayout from '../../layout'

describe('<ListVideos>', () => {
  it('should render', () => {
    const { queryByText } = render(
      <RootLayout>
        <ListVideos />
      </RootLayout>,
    )

    const categoryButton = queryByText('Chatbot')

    expect(categoryButton).toBeInTheDocument()
  })

  it('should render correct element on click', () => {
    const { getByText, queryByText } = render(
      <RootLayout>
        <ListVideos />
      </RootLayout>,
    )

    const videoTitleOtherCategory = queryByText(
      'Principais plataformas de marketing conversacional',
    )

    expect(videoTitleOtherCategory).toBeInTheDocument()

    const categoryButton = getByText('Chatbot')
    fireEvent.click(categoryButton)

    const videoTitleChatbot = queryByText(
      'Como usar a inteligência artificial nos negócios?',
    )

    expect(videoTitleChatbot).toBeInTheDocument()
    expect(videoTitleOtherCategory).not.toBeInTheDocument()
  })
})
