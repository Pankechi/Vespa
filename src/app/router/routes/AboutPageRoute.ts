import type { RouteRecordRaw } from 'vue-router'
import { ROUTER_NAMESPACE } from '@shared/routes'

export const AboutPageRoute: RouteRecordRaw = {
  name: ROUTER_NAMESPACE.ABOUT_PAGE.name,
  path: ROUTER_NAMESPACE.ABOUT_PAGE.path,
  component: () => import('@pages/AboutPage'),
}
