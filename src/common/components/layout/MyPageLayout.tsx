import { MyPageNavigation } from '@components/navigation/MyPageNavigation'
import { INavLink } from '@interfaces'
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router'

interface MyPageLayoutProps {
  homeTo: string
  links: INavLink[]
}

export default function MyPageLayout({ homeTo, links }: MyPageLayoutProps) {
  return (
    <Box>
      <MyPageNavigation homeTo={homeTo} links={links}></MyPageNavigation>

      <Container maxWidth='xl'>
        <Outlet></Outlet>
      </Container>
    </Box>
  )
}
