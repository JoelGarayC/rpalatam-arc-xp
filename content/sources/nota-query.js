const schemaName = 'story'

const resolve = (query) => {
  if (!query.hasOwnProperty('website_url'))
    throw new Error('Esta fuente de contenido requiere una URI y un sitio web')

  const { website_url: websiteUrl } = query

  const requestUri = `/content/v4/stories/?website_url=${websiteUrl}&website=rpalatam&published=true`
  return requestUri
}

export default {
  resolve,
  schemaName,
  params: {
    website_url: 'text'
  }
}


