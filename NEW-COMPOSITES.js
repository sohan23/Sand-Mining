// Area of Interest
var region = geometry;

// for the year of 1990
// Load the image collection.
var collection = ee.ImageCollection('LANDSAT/LT05/C01/T1_L2').filterDate('1990-02-01', '1990-05-31').filterBounds(region);
// Compute the median.
var median = collection.median();
print(median);
// Select the bands of interest.
var bands = median.select['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'];
print(bands);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands,
    description: 'landsat5_premonsoon_1990',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Load the image collection.
var collection_2 = ee.ImageCollection('LANDSAT/LT05/C01/T1_L2').filterDate('1990-10-01', '1991-01-31').filterBounds(region);
// Compute the median.
var median_2_1 = collection.median();
print(median);
// Select the bands of interest.
var bands_2_1 = median.select['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'];
print(bands_2_1);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_2_1,
    description: 'landsat5_postmonsoon_1990',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// for the year of 1995 
// Load the image collection.
var collection_2 = ee.ImageCollection('LANDSAT/LT05/C01/T1_L2').filterDate('1995-02-01', '1995-05-31').filterBounds(region);
// Compute the median.
var median_2_2 = collection.median();
print(median);
// Select the bands of interest.
var bands_2_2 = median.select['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'];
print(bands_2_2);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_2_2,
    description: 'landsat5_premonsoon_1995',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Load the image collection.
var collection_2 = ee.ImageCollection('LANDSAT/LT05/C01/T1_L2').filterDate('1995-10-01', '1996-01-31').filterBounds(region);
// Compute the median.
var median_2_3 = collection.median();
print(median);
// Select the bands of interest.
var bands_2_3 = median.select['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'];
print(bands_2_3);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_2_3,
    description: 'landsat5_postmonsoon_1995',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// for the year of 2000
// Load the image collection. 
var dataset_1 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2000-02-01', '2000-05-31').filterBounds(region);
// Compute the median.
var median_1 = dataset_1.median();
print(median_1);
// Select the bands of interest.
var bands_1 = median_1.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_1);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_1,
    description: 'landsat5_premonsoon_2000',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
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
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_2,
    description: 'landsat5_postmonsoon_2000',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});


// for the year of 2005
// Load the image collection.
var dataset_3 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2005-02-01', '2005-05-31').filterBounds(region);
// Compute the median.
var median_3 = dataset_3.median();
print(median_3);
// Select the bands of interest.
var bands_3 = median_3.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_3);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_3,
    description: 'landsat5_premonsoon_2005',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Load the image collection.
var dataset_4 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2005-10-01', '2006-1-31').filterBounds(region);
// Compute the median.
var median_4 = dataset_4.median();
print(median_4)
// Select the bands of interest.
var bands_4 = median_4.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_4);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_4,
    description: 'landsat5_postmonsoon_2005',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// for the year of 2010
// Load the image collection.
var dataset_5 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2010-02-01', '2010-05-31').filterBounds(region);
// Compute the median.
var median_5 = dataset_5.median();
print(median_5);
// Select the bands of interest.
var bands_5 = median_5.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_5);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_5,
    description: 'landsat5_premonsoon_2010',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Load the image collection.
var dataset_6 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2').filterDate('2010-10-01', '2011-1-31').filterBounds(region);
// Compute the median.
var median_6 = dataset_6.median();
print(median_6)
// Select the bands of interest.
var bands_6 = median_6.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_6);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_6,
    description: 'landsat5_postmonsoon_2010',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// for the year of 2015
// Load the image collection.
var dataset_7 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2015-02-01', '2015-05-31').filterBounds(region);
// Compute the median.
var median_7 = dataset_7.median();
print(median_7);
// Select the bands of interest.
var bands_7 = median_7.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_7);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_7,
    description: 'landsat7_premonsoon_2015',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Load the image collection.
var dataset_8 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2015-10-01', '2016-1-31').filterBounds(region);
// Compute the median.
var median_8 = dataset_8.median();
print(median_8)
// Select the bands of interest.
var bands_8 = median_8.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_8);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_8,
    description: 'landsat7_postmonsoon_2015',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// for the year of 2001
// Load the image collection.
var dataset_9 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2001-02-01', '2001-05-31').filterBounds(region);
// Compute the median.
var median_9 = dataset_9.median();
print(median_9);
// Select the bands of interest.
var bands_9 = median_9.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_9);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_9,
    description: 'landsat7_premonsoon_2001',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Load the image collection.
var dataset_10 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2001-10-01', '2002-1-31').filterBounds(region);
// Compute the median.
var median_10 = dataset_10.median();
print(median_10)
// Select the bands of interest.
var bands_10 = median_10.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_10);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_10,
    description: 'landsat7_postmonsoon_2001',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// for the year of 2011
// Load the image collection.
var dataset_11 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2011-02-01', '2011-05-31').filterBounds(region);
// Compute the median.
var median_11 = dataset_11.median();
print(median_11);
// Select the bands of interest.
var bands_11 = median_11.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_11);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_11,
    description: 'landsat7_premonsoon_2011',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});

// Load the image collection.
var dataset_12 = ee.ImageCollection('LANDSAT/LE07/C02/T1_L2').filterDate('2011-10-01', '2012-1-31').filterBounds(region);
// Compute the median.
var median_12 = dataset_12.median();
print(median_12)
// Select the bands of interest.
var bands_12 = median_12.select(['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']);
print(bands_12);
// Export the image, specifying scale and region.
Export.image.toDrive({
    image: bands_12,
    description: 'landsat7_postmonsoon_2011',
    folder: 'GEE_Composite',
    scale: 30,
    region: region
});
