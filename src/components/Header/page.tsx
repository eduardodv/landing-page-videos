import Image from 'next/image'

import { HeaderContainer } from './styles'

import logoImage from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImage} width={194} height={42} alt="" />
    </HeaderContainer>
  )
}
