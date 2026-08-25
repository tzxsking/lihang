export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function appUrl({ search = '', hash = '' } = {}) {
  return `${import.meta.env.BASE_URL}${search}${hash}`
}
