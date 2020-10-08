let cache = { 
  index: '_cache_metadata',
  defaults: {
    expiryInMinutes: 30
  }
}

cache.boot = function() {
  const metadata = localStorage.getItem(cache.index)
  cache.metadata = (typeof metadata !== 'object' ? JSON.parse(metadata) : new Object())
}

cache.load = function(groupIndex, childIndex, expiryInMinutes = cache.defaults.expiryInMinutes) {
  const group = cache.metadata[groupIndex]; if (!group) return false
  const child = group[childIndex]; if (!child) return false
  if ((new Date().getTime() - child.timestamp) / 1000 / 60 > expiryInMinutes) return false
  return JSON.parse(localStorage.getItem(child.index))
}

cache.save = function(groupIndex, childIndex, childData) {
  const group = cache.metadata[groupIndex] || new Object()
  const child = {
    timestamp: new Date().getTime(),
    index: `cache_${groupIndex}_${childIndex}`
  }
  group[childIndex] = child
  localStorage.setItem(child.index, JSON.stringify(childData))
  localStorage.setItem(cache.index, JSON.stringify(cache.metadata))
}

cache.unload = function(groupIndex, childIndex) {
  const group = cache.metadata[groupIndex] || { delete: true }
  if (Object.keys(group).length === 1) return delete cache.metadata[groupIndex]
  if (group[childIndex]) delete group[childIndex]
}

export default cache