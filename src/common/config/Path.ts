import { INavLink } from '@interfaces'

export const Path = {
  home: '/',
  feature: '/feature',
}

export const HomeLinks: INavLink[] = [{ key: 'feature', to: Path.feature }]
