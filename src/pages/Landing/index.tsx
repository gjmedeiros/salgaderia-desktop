import React from 'react'

import { Container, ImageLogo, ButtonLanding } from './styles'

import logo from '../../../assets/images/logo.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <ImageLogo src={logo} alt="Logotipo" />
      <ButtonLanding> Buscar </ButtonLanding>
    </Container>
  )
}

export default Landing
