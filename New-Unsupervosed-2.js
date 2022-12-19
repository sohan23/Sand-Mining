// for the year of 2000
// Load the image collection. 
var dataset_1 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2000-02-01', '2000-05-31').filterBounds(region);
// Compute the median.
var median_1 = dataset_1.median();
print(median_1);
// Select the bands of interest.
var bands_1 = median_1.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_1);

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
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});


// Load the image collection.
var dataset_2 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2000-10-01', '2001-1-31').filterBounds(region);
print(dataset_2);
// Compute the median.
var median_2 = dataset_2.median();
print(median_2)
// Select the bands of interest.
var bands_2 = median_2.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_2);

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
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_3 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2001-02-01', '2001-05-31').filterBounds(region);
print(dataset_3);

// Compute the median.
var median_3 = dataset_3.median();
print(median_3)
// Select the bands of interest.
var bands_3 = median_3.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_3);

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
Map.addLayer(result3.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2001');
print(result3);

// Exporting UC composite
Export.image.toDrive({
    image: result3,
    description: 'UC_premonsoon_2001',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_4 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2001-10-01', '2002-1-31').filterBounds(region);
print(dataset_4);

// Compute the median.
var median_4 = dataset_4.median();
print(median_4)
// Select the bands of interest.
var bands_4 = median_4.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_4);

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
Map.addLayer(result4.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2001');
print(result4);

// Exporting UC composite
Export.image.toDrive({
    image: result4,
    description: 'UC_postmonsoon_2001',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_5 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2002-02-01', '2002-05-31').filterBounds(region);
print(dataset_5);

// Compute the median.
var median_5 = dataset_5.median();
print(median_5)
// Select the bands of interest.
var bands_5 = median_5.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_5);

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
Map.addLayer(result5.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2002');
print(result5);

// Exporting UC composite
Export.image.toDrive({
    image: result5,
    description: 'UC_premonsoon_2002',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_6 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2002-10-01', '2003-1-31').filterBounds(region);
print(dataset_6);

// Compute the median.
var median_6 = dataset_6.median();
print(median_6)
// Select the bands of interest.
var bands_6 = median_6.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_6);

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
Map.addLayer(result6.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2002');
print(result6);

// Exporting UC composite
Export.image.toDrive({
    image: result6,
    description: 'UC_postmonsoon_2002',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_7 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2003-02-01', '2003-05-31').filterBounds(region);
print(dataset_7);

// Compute the median.
var median_7 = dataset_7.median();
print(median_7)
// Select the bands of interest.
var bands_7 = median_7.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_7);

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
Map.addLayer(result7.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2003');
print(result7);

// Exporting UC composite
Export.image.toDrive({
    image: result7,
    description: 'UC_premonsoon_2003',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_8 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2003-10-01', '2004-1-31').filterBounds(region);

// Compute the median.
var median_8 = dataset_8.median();
print(median_8)
// Select the bands of interest.
var bands_8 = median_8.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_8);

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
Map.addLayer(result8.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2003');
print(result8);

// Exporting UC composite
Export.image.toDrive({
    image: result8,
    description: 'UC_postmonsoon_2003',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_9 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2004-02-01', '2004-05-31').filterBounds(region);
print(dataset_9);

// Compute the median.
var median_9 = dataset_9.median();
print(median_9)
// Select the bands of interest.
var bands_9 = median_9.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_9);

// Make the training dataset.
var training9 = bands_9.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer9 = ee.Clusterer.wekaKMeans(13).train(training9);

// Cluster the input using the trained clusterer.
var result9 = bands_9.cluster(clusterer9).clip(region);

// Display the clusters with random colors.
Map.addLayer(result9.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_premonsoon_2004');
print(result9);

// Exporting UC composite
Export.image.toDrive({
    image: result9,
    description: 'UC_premonsoon_2004',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});

// Load the image collection.
var dataset_10 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2004-10-01', '2005-1-31').filterBounds(region);
print(dataset_10);

// Compute the median.
var median_10 = dataset_10.median();
print(median_10)
// Select the bands of interest.
var bands_10 = median_10.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_10);

// Make the training dataset.
var training10 = bands_10.sample({
    region: region,
    scale: 30,
    numPixels: 9000
});

// Instantiate the clusterer and train it.
var clusterer10 = ee.Clusterer.wekaKMeans(13).train(training10);

// Cluster the input using the trained clusterer.
var result10 = bands_10.cluster(clusterer10).clip(region);

// Display the clusters with random colors.
Map.addLayer(result10.randomVisualizer(), { min: 1, max: 252, gamma: 1.8 }, 'clusters_postmonsoon_2004');
print(result10);

// Exporting UC composite
Export.image.toDrive({
    image: result10,
    description: 'UC_postmonsoon_2004',
    folder: 'GEE_Unsupervised',
    scale: 30,
    region: region,
});
