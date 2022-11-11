// for the year of 2000
// Load the image collection. 
var dataset_1 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2000-02-01', '2000-05-31').filterBounds(region);
// Compute the median.
var median_1 = dataset_1.median().clip(region);
print(median_1);
// Select the bands of interest.
var bands_1 = median_1.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_1);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_1,
    description: 'landsat5_premonsoon_2000',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training1 = bands_1.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer1 = ee.Clusterer.wekaKMeans(13).train(training1);

// Cluster the input using the trained clusterer.
var result1 = bands_1.cluster(clusterer1).clip(region);

// Display the clusters with random colors.
Map.addLayer(result1.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2000');
print(result1);

// Exporting UC composite
Export.image.toDrive({
    image: result1,
    description: 'UC_premonsoon_2000',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_2 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2000-10-01', '2001-1-31').filterBounds(region);
print(dataset_2);
// Compute the median.
var median_2 = dataset_2.median().clip(region);
print(median_2)
// Select the bands of interest.
var bands_2 = median_2.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_2);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_2,
    description: 'landsat5_postmonsoon_2000',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training2 = bands_2.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer2 = ee.Clusterer.wekaKMeans(13).train(training2);

// Cluster the input using the trained clusterer.
var result2 = bands_2.cluster(clusterer2).clip(region);

// Display the clusters with random colors.
Map.addLayer(result2.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2000');
print(result2);

// Exporting UC composite
Export.image.toDrive({
    image: result2,
    description: 'UC_postmonsoon_2000',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_3 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2005-02-01', '2005-05-31').filterBounds(region);
print(dataset_3);
// Compute the median.
var median_3 = dataset_3.median().clip(region);
print(median_3)
// Select the bands of interest.
var bands_3 = median_3.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_3);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_3,
    description: 'landsat5_premonsoon_2005',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training3 = bands_3.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer3 = ee.Clusterer.wekaKMeans(13).train(training3);

// Cluster the input using the trained clusterer.
var result3 = bands_3.cluster(clusterer3).clip(region);

// Display the clusters with random colors.
Map.addLayer(result3.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2005');
print(result3);

// Exporting UC composite
Export.image.toDrive({
    image: result3,
    description: 'UC_premonsoon_2005',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_4 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2005-10-01', '2006-1-31').filterBounds(region);
print(dataset_4);
// Compute the median.
var median_4 = dataset_4.median().clip(region);
print(median_4)
// Select the bands of interest.
var bands_4 = median_4.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_4,
    description: 'landsat5_postmonsoon_2005',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training4 = bands_4.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer4 = ee.Clusterer.wekaKMeans(13).train(training4);

// Cluster the input using the trained clusterer.
var result4 = bands_4.cluster(clusterer4).clip(region);

// Display the clusters with random colors.
Map.addLayer(result4.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2005');
print(result4);

// Exporting UC composite
Export.image.toDrive({
    image: result4,
    description: 'UC_postmonsoon_2005',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_5 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2010-02-01', '2010-05-31').filterBounds(region);
print(dataset_5);
// Compute the median.
var median_5 = dataset_5.median().clip(region);
print(median_5)
// Select the bands of interest.
var bands_5 = median_5.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_5,
    description: 'landsat5_premonsoon_2010',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training5 = bands_5.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer5 = ee.Clusterer.wekaKMeans(13).train(training5);

// Cluster the input using the trained clusterer.
var result5 = bands_5.cluster(clusterer5).clip(region);

// Display the clusters with random colors.
Map.addLayer(result5.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2010');
print(result5);

// Exporting UC composite
Export.image.toDrive({
    image: result5,
    description: 'UC_premonsoon_2010',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_6 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2010-10-01', '2011-1-31').filterBounds(region);
print(dataset_6);
// Compute the median.
var median_6 = dataset_6.median().clip(region);
print(median_6)
// Select the bands of interest.
var bands_6 = median_6.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_6,
    description: 'landsat5_postmonsoon_2010',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training6 = bands_6.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer6 = ee.Clusterer.wekaKMeans(13).train(training6);

// Cluster the input using the trained clusterer.
var result6 = bands_6.cluster(clusterer6).clip(region);

// Display the clusters with random colors.
Map.addLayer(result6.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2010');
print(result6);

// Exporting UC composite
Export.image.toDrive({
    image: result6,
    description: 'UC_postmonsoon_2010',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_7 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2015-02-01', '2015-05-31').filterBounds(region);
print(dataset_7);

// Compute the median.
var median_7 = dataset_7.median().clip(region);
print(median_7)

// Select the bands of interest.
var bands_7 = median_7.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_7,
    description: 'landsat8_premonsoon_2015',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training7 = bands_7.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer7 = ee.Clusterer.wekaKMeans(13).train(training7);

// Cluster the input using the trained clusterer.
var result7 = bands_7.cluster(clusterer7).clip(region);

// Display the clusters with random colors.
Map.addLayer(result7.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2015');
print(result7);

// Exporting UC composite
Export.image.toDrive({
    image: result7,
    description: 'UC_premonsoon_2015',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2').filterDate('2015-10-01', '2016-1-31').filterBounds(region);
print(dataset_8);

// Compute the median.
var median_8 = dataset_8.median().clip(region);
print(median_8)

// Select the bands of interest.
var bands_8 = median_8.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_8,
    description: 'landsat8_postmonsoon_2015',
    folder: 'GEE_Image_Composite',
    scale: 30,
    region: region
});

// Make the training dataset.
var training8 = bands_8.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer8 = ee.Clusterer.wekaKMeans(13).train(training8);

// Cluster the input using the trained clusterer.
var result8 = bands_8.cluster(clusterer8).clip(region);

// Display the clusters with random colors.
Map.addLayer(result8.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2015');
print(result8);

// Exporting UC composite
Export.image.toDrive({
    image: result8,
    description: 'UC_postmonsoon_2015',
    folder: 'GEE_Image_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_9 = ee.ImageCollection('COPERNICUS/S2').filterDate('2020-02-01', '2020-05-31').filterBounds(region);

// Compute the median.
// Constructing 0-9% cloud cover
var cmp1 = dataset_9.median().select('B8', 'B4', 'B3').clip(region);

// Display the results.
Map.addLayer(cmp1, { min: 0, max: 3000 }, 'median composite');

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: cmp1,
    description: 'sentinel2_premonsoon_2020',
    folder: 'GEE_Image_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training9 = cmp1.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer9 = ee.Clusterer.wekaKMeans(13).train(training9);

// Cluster the input using the trained clusterer.
var result9 = cmp1.cluster(clusterer9).clip(region);

// Display the clusters with random colors.
Map.addLayer(result9.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2020');
print(result9);

// Exporting UC composite
Export.image.toDrive({
    image: result9,
    description: 'UC_premonsoon_2020',
    folder: 'GEE_Image_Unsupervised',
    scale: 10,
    region: region,
});

// Load the image collection.
var dataset_10 = ee.ImageCollection('COPERNICUS/S2').filterDate('2020-10-01', '2021-1-31').filterBounds(region);

// Compute the median.
// Constructing 0-9% cloud cover
var cmp2 = dataset_10.median().select('B8', 'B4', 'B3').clip(region);

// Display the results.
Map.addLayer(cmp2, { min: 0, max: 3000 }, 'median composite');

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: cmp2,
    description: 'sentinel2_postmonsoon_2020',
    folder: 'GEE_Image_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training10 = cmp2.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer10 = ee.Clusterer.wekaKMeans(13).train(training10);

// Cluster the input using the trained clusterer.
var result10 = cmp2.cluster(clusterer10).clip(region);

// Display the clusters with random colors.
Map.addLayer(result10.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2020');
print(result10);

// Exporting UC composite
Export.image.toDrive({
    image: result10,
    description: 'UC_postmonsoon_2020',
    folder: 'GEE_Image_Unsupervised',
    scale: 10,
    region: region,
});

// Load the image collection.
var dataset_11 = ee.ImageCollection('COPERNICUS/S2').filterDate('2021-02-01', '2021-05-31').filterBounds(region);

// Compute the median.
// Constructing 0-9% cloud cover
var cmp3 = dataset_11.median().select('B8', 'B4', 'B3').clip(region);

// Display the results.
Map.addLayer(cmp3, { min: 0, max: 3000 }, 'median composite');

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: cmp3,
    description: 'sentinel2_premonsoon_2021',
    folder: 'GEE_Image_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training11 = cmp3.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer11 = ee.Clusterer.wekaKMeans(13).train(training11);

// Cluster the input using the trained clusterer.
var result11 = cmp3.cluster(clusterer11).clip(region);

// Display the clusters with random colors.
Map.addLayer(result11.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2021');
print(result11);

// Exporting UC composite
Export.image.toDrive({
    image: result11,
    description: 'UC_premonsoon_2021',
    folder: 'GEE_Image_Unsupervised',
    scale: 10,
    region: region,
});

// Load the image collection.
var dataset_12 = ee.ImageCollection('COPERNICUS/S2').filterDate('2021-10-01', '2022-1-31').filterBounds(region);

// Compute the median.
// Constructing 0-9% cloud cover
var cmp4 = dataset_12.median().select('B8', 'B4', 'B3').clip(region);

// Display the results.
Map.addLayer(cmp4, { min: 0, max: 3000 }, 'median composite');

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: cmp4,
    description: 'sentinel2_postmonsoon_2021',
    folder: 'GEE_Image_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training12 = cmp4.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer12 = ee.Clusterer.wekaKMeans(13).train(training12);

// Cluster the input using the trained clusterer.
var result12 = cmp4.cluster(clusterer12).clip(region);

// Display the clusters with random colors.
Map.addLayer(result12.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2021');
print(result12);

// Exporting UC composite
Export.image.toDrive({
    image: result12,
    description: 'UC_postmonsoon_2021',
    folder: 'GEE_Image_Unsupervised',
    scale: 10,
    region: region,
});

// Load the image collection.
var dataset_13 = ee.ImageCollection('COPERNICUS/S2').filterDate('2022-02-01', '2022-05-31').filterBounds(region);

// Compute the median.
// Constructing 0-9% cloud cover
var cmp5 = dataset_13.median().select('B8', 'B4', 'B3').clip(region);

// Display the results.
Map.addLayer(cmp5, { min: 0, max: 3000 }, 'median composite');

// Export the image, specifying scale and region.
Export.image.toDrive({
    image: cmp5,
    description: 'sentinel2_premonsoon_2022',
    folder: 'GEE_Image_Composite',
    scale: 10,
    region: region
});

// Make the training dataset.
var training13 = cmp5.sample({
    region: region,
    scale: 10,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer13 = ee.Clusterer.wekaKMeans(13).train(training13);

// Cluster the input using the trained clusterer.
var result13 = cmp5.cluster(clusterer13).clip(region);

// Display the clusters with random colors.
Map.addLayer(result13.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2022');
print(result13);

// Exporting UC composite
Export.image.toDrive({
    image: result13,
    description: 'UC_premonsoon_2022',
    folder: 'GEE_Image_Unsupervised',
    scale: 10,
    region: region,
});
