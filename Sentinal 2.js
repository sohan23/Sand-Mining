// Load the image collection
var collection = ee.ImageCollection('COPERNICUS/S2')
    .filterDate('2016-02-01', '2016-05-31') // Filter by date
    .filterBounds(ee.Geometry.Point(77.6, 12.9)) // Filter by location
    .filterMetadata('CLOUDY_PIXEL_PERCENTAGE', 'less_than', 20); // Filter by cloud coverage

// Display the first image in the collection
Map.addLayer(collection.first(), {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}, 'Sentinel-2 image');

// Display the collection as a mosaic
Map.addLayer(collection.mosaic(), {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}, 'Sentinel-2 mosaic');
