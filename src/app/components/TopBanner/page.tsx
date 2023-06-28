'use client'

import {
  Gradient,
  IconTitle,
  Subtitle,
  Tag,
  Title,
  TopBannerContainer,
} from './styles'

import iconTitle from '@/assets/asset-header.png'

import data from '@/data/data.json'
const { banner_top: bannerTop } = data

export function TopBanner() {
  return (
    <TopBannerContainer>
      <div className="container">
        <Tag>{bannerTop.tag}</Tag>
        <Title>
          <span>{bannerTop.title}</span>
          <Gradient>
            {bannerTop.title_custom} <IconTitle src={iconTitle} alt="" />
          </Gradient>
        </Title>
        <Subtitle
          dangerouslySetInnerHTML={{ __html: bannerTop.subtitle }}
        ></Subtitle>
      </div>
    </TopBannerContainer>
  )
}
