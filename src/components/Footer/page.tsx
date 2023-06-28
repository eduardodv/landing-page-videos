import Image from 'next/image'

import data from '../../data/data.json'

import { phoneNumberFormat } from '@/utils/phoneNumberFormat'

import {
  FooterContainer,
  FooterInfo,
  ImageContainer,
  LabeledLink,
  LinkSite,
  LinkTerms,
  MenuFooter,
  NavbarLink,
  SocialButtons,
  Title,
} from './styles'

import logoImage from '../../assets/logo.png'

import iconLinkedin from '../../assets/icons/social/linkedin.svg'
import iconFacebook from '../../assets/icons/social/facebook.svg'
import iconInstagram from '../../assets/icons/social/instagram.svg'

export function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <ImageContainer>
          <Image src={logoImage} width={278} height={68} alt="" />
          <span>Transformando visitantes em clientes.</span>
        </ImageContainer>
        <MenuFooter>
          {data.footer.nav.map((item) => {
            return (
              <nav key={item.id}>
                <Title>{item.title}</Title>
                <ul>
                  {item.links.map((link) => {
                    return (
                      <li key={link.label}>
                        <NavbarLink href={link.url}>{link.label}</NavbarLink>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            )
          })}
          <nav>
            <Title>{data.footer.customn_nav.title}</Title>
            <SocialButtons>
              {data.footer.customn_nav.socials.map((item) => {
                return (
                  <a
                    key={item.label}
                    href={item.url}
                    title={item.label}
                    target="_blank"
                  >
                    <Image
                      src={
                        (item.type === 'linkedin' && iconLinkedin.src) ||
                        (item.type === 'facebook' && iconFacebook.src) ||
                        (item.type === 'instagram' && iconInstagram.src)
                      }
                      alt=""
                      width={18}
                      height={18}
                    />
                  </a>
                )
              })}
            </SocialButtons>
            <LabeledLink>
              <span>E-mail: </span>
              <a href={`mailto:${data.footer.customn_nav.email}`}>
                {data.footer.customn_nav.email}
              </a>
            </LabeledLink>
            <LabeledLink>
              <span>Telefone: </span>
              <a href={`tel:+55${data.footer.customn_nav.phone}`}>
                {phoneNumberFormat(data.footer.customn_nav.phone)}
              </a>
            </LabeledLink>
          </nav>
        </MenuFooter>
      </div>
      <FooterInfo>
        <div className="container">
          <div>
            {data.footer.info.copyright} |{' '}
            <LinkSite href={data.footer.info.link_site} target="_blank">
              Leadster
            </LinkSite>
          </div>
          <div>
            {data.footer.info.address} |{' '}
            <LinkTerms href={data.footer.info.use_term} target="_blank">
              Termos de Uso
            </LinkTerms>
          </div>
        </div>
      </FooterInfo>
    </FooterContainer>
  )
}
