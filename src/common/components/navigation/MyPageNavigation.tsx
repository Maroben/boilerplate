import { MyLanguageButton } from '@components/navigation/MyLanguageButton'
import { INavLink } from '@interfaces'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { useTranslation } from 'react-i18next'
import { MyLinkButton } from './MyLinkButton'

interface MyPageNavigationProps {
  homeTo: string
  links: INavLink[]
}

export function MyPageNavigation({ homeTo, links }: MyPageNavigationProps) {
  const { t } = useTranslation('common')

  return (
    <AppBar position='static' sx={{ bgcolor: '#FFF' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MyLinkButton to={homeTo}>
            <img src={'./elaw.svg'} height={22} />
          </MyLinkButton>

          <Box sx={{ flexGrow: 1, ml: 4 }}>
            {links.map((link) => (
              <MyLinkButton key={link.key} to={link.to}>
                {t(`nav.${link.key}`)}
              </MyLinkButton>
            ))}
          </Box>

          <MyLanguageButton />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
