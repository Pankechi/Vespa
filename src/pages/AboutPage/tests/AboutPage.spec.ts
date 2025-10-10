import { mount, type VueWrapper } from '@vue/test-utils'
import { it, describe, expect, beforeEach, afterEach } from 'vitest'
import AboutPage from '@pages/AboutPage'

let wrapper: VueWrapper

beforeEach(() => {
  wrapper = mount(AboutPage)
})

afterEach(() => {
  wrapper.unmount()
})

describe('AboutPage.spec.ts', () => {
  it('renders inner text', () => {
    expect(wrapper.text()).toContain('ABOUT PAGE')
  })
})
