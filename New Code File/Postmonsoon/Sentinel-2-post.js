//for the year 2016
// Load the image collection.
var dataset_17 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED').filterDate('2016-10-01', '2016-12-31').filterBounds(region);
// Compute the median.
var median_17 = dataset_17.median();

// Select the bands of interest.
var bands_17 = median_17.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_17,
    description: 'Sentinel-premonsoon_2016',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training17 = bands_17.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer17 = ee.Clusterer.wekaKMeans(13).train(training17);

// Cluster the input using the trained clusterer.
var result17 = bands_17.cluster(clusterer17).clip(region);

// Display the clusters with random colors.
Map.addLayer(result17.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2016');
print(result17);

// Exporting UC composite
Export.image.toDrive({
    image: result17,
    description: 'Sentinel_UC_premonsoon_2016',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2017
// Load the image collection.
var dataset_18 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED').filterDate('2017-10-01', '2017-12-31').filterBounds(region);
// Compute the median.
var median_18 = dataset_18.median();

// Select the bands of interest.
var bands_18 = median_18.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_18,
    description: 'Sentinel-premonsoon_2017',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training18 = bands_18.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer18 = ee.Clusterer.wekaKMeans(13).train(training18);

// Cluster the input using the trained clusterer.
var result18 = bands_18.cluster(clusterer18).clip(region);

// Display the clusters with random colors.
Map.addLayer(result18.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2017');
print(result18);

// Exporting UC composite
Export.image.toDrive({
    image: result18,
    description: 'Sentinel_UC_premonsoon_2017',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2018
// Load the image collection.
var dataset_19 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED').filterDate('2018-10-01', '2018-12-31').filterBounds(region);
// Compute the median.
var median_19 = dataset_19.median();

// Select the bands of interest.
var bands_19 = median_19.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_19,
    description: 'Sentinel-premonsoon_2018',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training19 = bands_19.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer19 = ee.Clusterer.wekaKMeans(13).train(training19);

// Cluster the input using the trained clusterer.
var result19 = bands_19.cluster(clusterer19).clip(region);

// Display the clusters with random colors.
Map.addLayer(result19.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2018');
print(result19);

// Exporting UC composite
Export.image.toDrive({
    image: result19,
    description: 'Sentinel_UC_premonsoon_2018',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2019
// Load the image collection.
var dataset_20 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED').filterDate('2019-10-01', '2019-12-31').filterBounds(region);
// Compute the median.
var median_20 = dataset_20.median();

// Select the bands of interest.
var bands_20 = median_20.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_20,
    description: 'Sentinel-premonsoon_2019',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training20 = bands_20.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer20 = ee.Clusterer.wekaKMeans(13).train(training20);

// Cluster the input using the trained clusterer.
var result20 = bands_20.cluster(clusterer20).clip(region);

// Display the clusters with random colors.
Map.addLayer(result20.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2019');
print(result20);

// Exporting UC composite
Export.image.toDrive({
    image: result20,
    description: 'Sentinel_UC_premonsoon_2019',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2020
// Load the image collection.
var dataset_21 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED').filterDate('2020-10-01', '2020-12-31').filterBounds(region);
// Compute the median.
var median_21 = dataset_21.median();

// Select the bands of interest.
var bands_21 = median_21.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_21,
    description: 'Sentinel-premonsoon_2020',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training21 = bands_21.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer21 = ee.Clusterer.wekaKMeans(13).train(training21);

// Cluster the input using the trained clusterer.
var result21 = bands_21.cluster(clusterer21).clip(region);

// Display the clusters with random colors.
Map.addLayer(result21.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2020');
print(result21);

// Exporting UC composite
Export.image.toDrive({
    image: result21,
    description: 'Sentinel_UC_premonsoon_2020',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2021
// Load the image collection.
var dataset_22 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED').filterDate('2021-10-01', '2021-12-31').filterBounds(region);
// Compute the median.
var median_22 = dataset_22.median();

// Select the bands of interest.
var bands_22 = median_22.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_22,
    description: 'Sentinel-premonsoon_2021',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training22 = bands_22.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer22 = ee.Clusterer.wekaKMeans(13).train(training22);

// Cluster the input using the trained clusterer.
var result22 = bands_22.cluster(clusterer22).clip(region);

// Display the clusters with random colors.
Map.addLayer(result22.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2021');
print(result22);

// Exporting UC composite
Export.image.toDrive({
    image: result22,
    description: 'Sentinel_UC_premonsoon_2021',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});

//for the year 2022
// Load the image collection.
var dataset_23 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED').filterDate('2022-10-01', '2022-12-31').filterBounds(region);
// Compute the median.
var median_23 = dataset_23.median();

// Select the bands of interest.
var bands_23 = median_23.select(['B2', 'B3', 'B4', 'B8']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_23,
    description: 'Sentinel-premonsoon_2022',
    folder: 'GEE_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training23 = bands_23.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer23 = ee.Clusterer.wekaKMeans(13).train(training23);

// Cluster the input using the trained clusterer.
var result23 = bands_23.cluster(clusterer23).clip(region);

// Display the clusters with random colors.
Map.addLayer(result23.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2022');
print(result23);

// Exporting UC composite
Export.image.toDrive({
    image: result23,
    description: 'Sentinel_UC_premonsoon_2022',
    folder: 'GEE_Unsupervised',
    scale: 10,
    region: region,
});