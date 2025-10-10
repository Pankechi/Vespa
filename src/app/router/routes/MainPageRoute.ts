import type { RouteRecordRaw } from 'vue-router'
import { ROUTER_NAMESPACE } from '@shared/routes'

export const MainPageRoute: RouteRecordRaw = {
  name: ROUTER_NAMESPACE.MAIN_PAGE.name,
  path: ROUTER_NAMESPACE.MAIN_PAGE.path,
  component: () => import('@pages/MainPage'),
}
