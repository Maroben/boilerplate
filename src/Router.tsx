import { HomeLinks, Path } from '@config'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const MyPageLayout = React.lazy(() => import('@components/layout/MyPageLayout'))
const HomeView = React.lazy(() => import('@modules/HomeModule/HomeView'))
const SalaryFinderView = React.lazy(() => import('@modules/SalaryModule/SalaryFinderView'))

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.home} element={<MyPageLayout homeTo={Path.home} links={HomeLinks} />}>
          <Route index element={<HomeView />} />
          <Route path='salary-finder' element={<SalaryFinderView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
