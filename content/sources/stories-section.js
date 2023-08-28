const schemaName = 'story'

const resolve = (query) => {
  if (!query.hasOwnProperty('section_url'))
    throw new Error('Esta fuente de contenido requiere una URI de sección')

  const { section_url: sectionUrl } = query

  const requestUri = `/content/v4/search/published?published=true&website=rpalatam&body={"query":{"bool":{"must":[{"term":{"revision.published":1}},{"nested":{"path":"taxonomy.sections","query":{"bool":{"must":[{"term":{"taxonomy.sections._id":"${sectionUrl}"}},{"term":{"taxonomy.sections._website":"rpalatam"}}]}}}}]}}}&sort=display_date:desc`
  return requestUri
}

export default {
  resolve,
  schemaName,
  params: {
    section_url: 'text'
  }
}


