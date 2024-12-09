import { HomeLinks, Path } from '@config'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const MyPageLayout = React.lazy(() => import('@components/layout/MyPageLayout'))
const HomeView = React.lazy(() => import('@modules/HomeModule/HomeView'))
const FeatureView = React.lazy(() => import('@modules/FeatureModule/FeatureView'))

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.home} element={<MyPageLayout homeTo={Path.home} links={HomeLinks} />}>
          <Route index element={<HomeView />} />
          <Route path={Path.feature} element={<FeatureView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
