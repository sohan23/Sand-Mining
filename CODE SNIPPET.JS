// NOW THIS IS THE CODE SNIPPET FOR THE JAVASCRIPT FILE WHICH WILL BE RUN ONT THE GOGGLE EARTH ENGINE

// THIS CODE SI FOR THE PRE MONSOON PERIOD WHICH MEANS IT TAKES THE fEBRUARY TO MAY PERIOD

// IF YOU INTEND TO USE THIS CODE FOR THE POST MONSOON PERIOD THEN YOU NEED TO CHANGE THE MONTHS TO OCTOBER TO JANUARY(OF THE NEXT YEAR)

// Also little bit acknowledgment will be appreciated 😁

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