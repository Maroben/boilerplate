import { MyLanguageButton } from '@components/navigation/MyLanguageButton'
import { INavLink } from '@interfaces'
import { Link, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { useTranslation } from 'react-i18next'
import { Link as ReactLink } from 'react-router'
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
          <Link
            component={ReactLink}
            to={homeTo}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'inherit',
              textTransform: 'none',
              textDecoration: 'none',
            }}
          >
            <img src='./logo.svg' height={38} />
            <Typography variant='h6' sx={{ color: '#000' }}>
              {t('home.title')}
            </Typography>
          </Link>

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
