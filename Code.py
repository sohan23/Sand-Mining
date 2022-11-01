with arcpy.EnvManager(outputCoordinateSystem='GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'):
    arcpy.Tmp.BatchCopyRaster(r"'G:\My Drive\Project Data Folder\GEE_Image_Composite\sentinel2_premonsoon_2022.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat5_postmonsoon_2000.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat5_premonsoon_2000.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat7_postmonsoon_2005.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat7_premonsoon_2005.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat8_postmonsoon_2010.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat8_postmonsoon_2015.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat8_premonsoon_2010.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\landsat8_premonsoon_2015.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\sentinel2_postmonsoon_2020.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\sentinel2_postmonsoon_2021.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\sentinel2_premonsoon_2020.tif';'G:\My Drive\Project Data Folder\GEE_Image_Composite\sentinel2_premonsoon_2021.tif'",
                              r"C:\Users\DELL\AppData\Local\Temp\ArcGISProTemp7200\77692c43-5c9c-4c66-bd5f-890c15bb3d6b\Default.gdb\CopyRaster_OutRasterdataset_%Name%", '', 0, "0", "NONE", "NONE", "64_BIT", "NONE", "NONE", "TIFF", "NONE", "CURRENT_SLICE", "NO_TRANSPOSE")
