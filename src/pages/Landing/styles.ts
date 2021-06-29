import styled from 'styled-components'

import { Button } from '../../components/Button/styles'

import fundo from '../../../assets/images/fundo.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background: url(${fundo});

  overflow: hidden;
`

export const ImageLogo = styled.img`
  height: 100vh;
  width: 100vw;
  background: none;
`

export const ButtonLanding = styled(Button)`
  background: var(--color-secundary);

  &:not(:last-child) {
    margin-right: 1.6rem;
  }
  &:hover {
    background: var(--color-secundary-dark);
  }
`
