'use client'

import Image from 'next/image'

import {
  ChartImage,
  ContainerColumns,
  DemoBannerContainer,
  DemoButton,
  Subtitle,
  Title,
  TwoColumns,
} from './styles'

import chartImage from '@/assets/chart.png'
import top10Image from '@/assets/selo_RD.png'
import noCardIcon from '@/assets/no-card-dark.webp'
import rating from '@/assets/rating.webp'

import data from '@/data/data.json'
const { banner_demo: bannerDemo } = data

export function DemoBanner() {
  return (
    <DemoBannerContainer>
      <ContainerColumns className="container">
        <div>
          <ChartImage src={chartImage} alt="" />
        </div>
        <div>
          <Title dangerouslySetInnerHTML={{ __html: bannerDemo.title }}></Title>
          <Subtitle
            dangerouslySetInnerHTML={{ __html: bannerDemo.subtitle }}
          ></Subtitle>
          <TwoColumns>
            <DemoButton href={bannerDemo.button.link} target="_blank">
              {bannerDemo.button.label}
            </DemoButton>
            <Image src={top10Image} width={183} alt="" />
          </TwoColumns>
          <TwoColumns>
            <p>
              <Image src={noCardIcon} width={16} height={16} alt="" />
              <strong>Não</strong> é necessário cartão de crétido
            </p>
            <p>
              <Image src={rating} width={92} height={16} alt="" />
              <strong>4.9</strong>/5 média de satisfação
            </p>
          </TwoColumns>
        </div>
      </ContainerColumns>
    </DemoBannerContainer>
  )
}
