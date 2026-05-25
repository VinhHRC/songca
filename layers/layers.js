var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_LuvcsngC_2 = new ol.format.GeoJSON();
var features_LuvcsngC_2 = format_LuvcsngC_2.readFeatures(json_LuvcsngC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuvcsngC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuvcsngC_2.addFeatures(features_LuvcsngC_2);
var lyr_LuvcsngC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuvcsngC_2, 
                style: style_LuvcsngC_2,
                popuplayertitle: 'Lưu vực sông Cả',
                interactive: true,
                title: '<img src="styles/legend/LuvcsngC_2.png" /> Lưu vực sông Cả'
            });
var format_Tinh_3 = new ol.format.GeoJSON();
var features_Tinh_3 = format_Tinh_3.readFeatures(json_Tinh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tinh_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tinh_3.addFeatures(features_Tinh_3);
var lyr_Tinh_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tinh_3, 
                style: style_Tinh_3,
                popuplayertitle: 'Tinh',
                interactive: true,
                title: '<img src="styles/legend/Tinh_3.png" /> Tinh'
            });
var format_Ngplt102020_4 = new ol.format.GeoJSON();
var features_Ngplt102020_4 = format_Ngplt102020_4.readFeatures(json_Ngplt102020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngplt102020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngplt102020_4.addFeatures(features_Ngplt102020_4);
var lyr_Ngplt102020_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ngplt102020_4, 
                style: style_Ngplt102020_4,
                popuplayertitle: 'Ngập lụt 10/2020',
                interactive: true,
                title: '<img src="styles/legend/Ngplt102020_4.png" /> Ngập lụt 10/2020'
            });
var format_Ngplt72025_5 = new ol.format.GeoJSON();
var features_Ngplt72025_5 = format_Ngplt72025_5.readFeatures(json_Ngplt72025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngplt72025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngplt72025_5.addFeatures(features_Ngplt72025_5);
var lyr_Ngplt72025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ngplt72025_5, 
                style: style_Ngplt72025_5,
                popuplayertitle: 'Ngập lụt 7/2025',
                interactive: true,
                title: '<img src="styles/legend/Ngplt72025_5.png" /> Ngập lụt 7/2025'
            });
var format_NgpdoboBualoi102025_6 = new ol.format.GeoJSON();
var features_NgpdoboBualoi102025_6 = format_NgpdoboBualoi102025_6.readFeatures(json_NgpdoboBualoi102025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NgpdoboBualoi102025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NgpdoboBualoi102025_6.addFeatures(features_NgpdoboBualoi102025_6);
var lyr_NgpdoboBualoi102025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NgpdoboBualoi102025_6, 
                style: style_NgpdoboBualoi102025_6,
                popuplayertitle: 'Ngập do bão Bualoi 10/2025',
                interactive: true,
                title: '<img src="styles/legend/NgpdoboBualoi102025_6.png" /> Ngập do bão Bualoi 10/2025'
            });
var format_Sngchnh_7 = new ol.format.GeoJSON();
var features_Sngchnh_7 = format_Sngchnh_7.readFeatures(json_Sngchnh_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sngchnh_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sngchnh_7.addFeatures(features_Sngchnh_7);
var lyr_Sngchnh_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sngchnh_7, 
                style: style_Sngchnh_7,
                popuplayertitle: 'Sông chính',
                interactive: true,
                title: '<img src="styles/legend/Sngchnh_7.png" /> Sông chính'
            });
var format_Hcha_8 = new ol.format.GeoJSON();
var features_Hcha_8 = format_Hcha_8.readFeatures(json_Hcha_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hcha_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hcha_8.addFeatures(features_Hcha_8);
var lyr_Hcha_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hcha_8, 
                style: style_Hcha_8,
                popuplayertitle: 'Hồ chứa',
                interactive: true,
                title: '<img src="styles/legend/Hcha_8.png" /> Hồ chứa'
            });
var format_p_9 = new ol.format.GeoJSON();
var features_p_9 = format_p_9.readFeatures(json_p_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_9.addFeatures(features_p_9);
var lyr_p_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_p_9, 
                style: style_p_9,
                popuplayertitle: 'Đập',
                interactive: true,
                title: '<img src="styles/legend/p_9.png" /> Đập'
            });
var format_TrammuaHoHo_10 = new ol.format.GeoJSON();
var features_TrammuaHoHo_10 = format_TrammuaHoHo_10.readFeatures(json_TrammuaHoHo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrammuaHoHo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrammuaHoHo_10.addFeatures(features_TrammuaHoHo_10);
var lyr_TrammuaHoHo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrammuaHoHo_10, 
                style: style_TrammuaHoHo_10,
                popuplayertitle: 'Tram mua Ho Ho',
                interactive: true,
                title: '<img src="styles/legend/TrammuaHoHo_10.png" /> Tram mua Ho Ho'
            });
var format_TramKT_11 = new ol.format.GeoJSON();
var features_TramKT_11 = format_TramKT_11.readFeatures(json_TramKT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TramKT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TramKT_11.addFeatures(features_TramKT_11);
var lyr_TramKT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TramKT_11, 
                style: style_TramKT_11,
                popuplayertitle: 'Tram KT',
                interactive: true,
                title: '<img src="styles/legend/TramKT_11.png" /> Tram KT'
            });
var format_TramTV_12 = new ol.format.GeoJSON();
var features_TramTV_12 = format_TramTV_12.readFeatures(json_TramTV_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TramTV_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TramTV_12.addFeatures(features_TramTV_12);
var lyr_TramTV_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TramTV_12, 
                style: style_TramTV_12,
                popuplayertitle: 'Tram TV',
                interactive: true,
                title: '<img src="styles/legend/TramTV_12.png" /> Tram TV'
            });

lyr_Googlesatellite_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_LuvcsngC_2.setVisible(true);lyr_Tinh_3.setVisible(true);lyr_Ngplt102020_4.setVisible(true);lyr_Ngplt72025_5.setVisible(true);lyr_NgpdoboBualoi102025_6.setVisible(true);lyr_Sngchnh_7.setVisible(true);lyr_Hcha_8.setVisible(true);lyr_p_9.setVisible(true);lyr_TrammuaHoHo_10.setVisible(true);lyr_TramKT_11.setVisible(true);lyr_TramTV_12.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_GoogleTerrain_1,lyr_LuvcsngC_2,lyr_Tinh_3,lyr_Ngplt102020_4,lyr_Ngplt72025_5,lyr_NgpdoboBualoi102025_6,lyr_Sngchnh_7,lyr_Hcha_8,lyr_p_9,lyr_TrammuaHoHo_10,lyr_TramKT_11,lyr_TramTV_12];
lyr_LuvcsngC_2.set('fieldAliases', {'GRIDCODE': 'GRIDCODE', });
lyr_Tinh_3.set('fieldAliases', {'dienTich': 'dienTich', 'danSo': 'danSo', 'Tinh': 'Tinh', });
lyr_Ngplt102020_4.set('fieldAliases', {'label': 'label', });
lyr_Ngplt72025_5.set('fieldAliases', {'label': 'label', });
lyr_NgpdoboBualoi102025_6.set('fieldAliases', {'label': 'label', });
lyr_Sngchnh_7.set('fieldAliases', {'Name': 'Name', });
lyr_Hcha_8.set('fieldAliases', {'Ten_ho': 'Ten_ho', });
lyr_p_9.set('fieldAliases', {'Name': 'Name', 'Luuvuc_km2': 'Luuvuc_km2', 'Dieutiet': 'Dieutiet', 'MNDBT': 'MNDBT', 'MNLTK': 'MNLTK', 'Nguongtran': 'Nguongtran', 'Qtk': 'Qtk', 'Wtb': 'Wtb', 'Luuvuc': 'Luuvuc', });
lyr_TrammuaHoHo_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TramKT_11.set('fieldAliases', {'TEN_TRAM': 'TEN_TRAM', 'TEN_TRAM_E': 'TEN_TRAM_E', 'X': 'X', 'Y': 'Y', 'DOCAO': 'DOCAO', 'LOAITRAM': 'LOAITRAM', });
lyr_TramTV_12.set('fieldAliases', {'Name': 'Name', 'BDI': 'BDI', 'BDII': 'BDII', 'BDIII': 'BDIII', });
lyr_LuvcsngC_2.set('fieldImages', {'GRIDCODE': 'TextEdit', });
lyr_Tinh_3.set('fieldImages', {'dienTich': 'TextEdit', 'danSo': 'TextEdit', 'Tinh': 'TextEdit', });
lyr_Ngplt102020_4.set('fieldImages', {'label': 'TextEdit', });
lyr_Ngplt72025_5.set('fieldImages', {'label': 'TextEdit', });
lyr_NgpdoboBualoi102025_6.set('fieldImages', {'label': 'TextEdit', });
lyr_Sngchnh_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Hcha_8.set('fieldImages', {'Ten_ho': 'TextEdit', });
lyr_p_9.set('fieldImages', {'Name': 'TextEdit', 'Luuvuc_km2': 'TextEdit', 'Dieutiet': 'TextEdit', 'MNDBT': 'TextEdit', 'MNLTK': 'TextEdit', 'Nguongtran': 'TextEdit', 'Qtk': 'TextEdit', 'Wtb': 'TextEdit', 'Luuvuc': 'TextEdit', });
lyr_TrammuaHoHo_10.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TramKT_11.set('fieldImages', {'TEN_TRAM': 'TextEdit', 'TEN_TRAM_E': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DOCAO': 'TextEdit', 'LOAITRAM': 'TextEdit', });
lyr_TramTV_12.set('fieldImages', {'Name': 'TextEdit', 'BDI': '', 'BDII': '', 'BDIII': '', });
lyr_LuvcsngC_2.set('fieldLabels', {'GRIDCODE': 'no label', });
lyr_Tinh_3.set('fieldLabels', {'dienTich': 'no label', 'danSo': 'no label', 'Tinh': 'no label', });
lyr_Ngplt102020_4.set('fieldLabels', {'label': 'no label', });
lyr_Ngplt72025_5.set('fieldLabels', {'label': 'no label', });
lyr_NgpdoboBualoi102025_6.set('fieldLabels', {'label': 'no label', });
lyr_Sngchnh_7.set('fieldLabels', {'Name': 'no label', });
lyr_Hcha_8.set('fieldLabels', {'Ten_ho': 'no label', });
lyr_p_9.set('fieldLabels', {'Name': 'no label', 'Luuvuc_km2': 'no label', 'Dieutiet': 'no label', 'MNDBT': 'no label', 'MNLTK': 'no label', 'Nguongtran': 'no label', 'Qtk': 'no label', 'Wtb': 'no label', 'Luuvuc': 'no label', });
lyr_TrammuaHoHo_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TramKT_11.set('fieldLabels', {'TEN_TRAM': 'no label', 'TEN_TRAM_E': 'no label', 'X': 'no label', 'Y': 'no label', 'DOCAO': 'no label', 'LOAITRAM': 'no label', });
lyr_TramTV_12.set('fieldLabels', {'Name': 'no label', 'BDI': 'no label', 'BDII': 'no label', 'BDIII': 'no label', });
lyr_TramTV_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});