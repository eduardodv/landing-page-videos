import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import RootLayout from '../../layout'
import { TopBanner } from '.'

describe('<TopBanner>', () => {
  it('should render', () => {
    const { queryByText } = render(
      <RootLayout>
        <TopBanner />
      </RootLayout>,
    )

    const subtitleBanner = queryByText('Menos Conversinha,')

    expect(subtitleBanner).toBeInTheDocument()
  })
})
