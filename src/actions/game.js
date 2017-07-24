import { scrollTo } from '../helpers'

export function changeMode(mode) {
  return mode
}

export function flick(light) {
  return light
}

export function info() {
  setTimeout(() => {
    scrollTo(document.body, document.body.scrollHeight, 500)
  }, 100)

  return
}

export function reset() {
  return
}

export function settings() {
  return
}
