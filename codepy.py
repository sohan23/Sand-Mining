import ee
ee.Initialize()
image = ee.Image('srtm90_v4')
path = image.getDownloadUrl({
    'scale': 30,
    'crs': 'EPSG:4326',
    'region': [[-122.092, 37.42], [-122.092, 37.45], [-122.08, 37.45], [-122.08, 37.42]]
})
print (path)