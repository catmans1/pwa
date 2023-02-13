export function storeData(key: string, data: string) {
  window.localStorage.setItem(key, data)
}

export function getData(key: string) {
  return window.localStorage.getItem(key)
}

export function removeData(key: string) {
  window.localStorage.removeItem(key)
}