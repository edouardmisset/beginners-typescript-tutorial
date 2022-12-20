import { Equal, Expect } from './helpers/type-utils'

type AddListenerArg = (state: boolean) => void

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: AddListenerArg) => {
  window.addEventListener('focus', () => {
    onFocusChange(true)
  })

  window.addEventListener('blur', () => {
    onFocusChange(false)
  })
}

addListener(isFocused => {
  console.log({ isFocused })

  type tests = [Expect<Equal<typeof isFocused, boolean>>]
})
