/******************************
 * PROJETO: Mapeamento de Suscetibilidade a Inundações - RS
 * AUTORA: Malu Bittencourt
 * PLATAFORMA: Google Earth Engine
 * OBJETIVO: Implementar fatores ambientais para geração de mapa de suscetibilidade
 ******************************/

// ==============================
// 1. Importações e Parâmetros
// ==============================
var studyArea = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:study_area');
var config = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:config');
var elevation_slope = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:elevation_slope');
var water_data = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:water_data');
var ndvi_data = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:ndvi_data');
var precipitation_data = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:precipitation_data');
var twi_drainage = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:twi_drainage');
var LULC = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:LULC');
var roads_data = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:roads_data');
var susceptibility_model = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:susceptibility_model');
var soil_data = require('users/maludesouza2111/mapeamento_e_suscetibilidade_inundacoes:soil_data');

// ==============================
// 2. Parâmetros Globais
// ==============================
var RS = studyArea.RS;
var RS2 = studyArea.RS2;
// ==============================
// 3. Camadas normalizadas
// ==============================
var decliveNorm = elevation_slope.decliveNorm;
var elevacaoNorm = elevation_slope.elevacaoNorm;
var distRiosNorm = water_data.distRiosNorm;
var NDVINorm = ndvi_data.NDVINorm;
var chuvaAcumuladaNorm = precipitation_data.chuvaAcumuladaNorm;
var TWINorm = twi_drainage.TWINorm;
var densidadeDrenagemNorm = twi_drainage.densidadeDrenagemNorm;
var lulcNorm = LULC.lulcNorm;
var distNorm = roads_data.distNorm;
var soilNorm = soil_data.soilNorm;

// ==============================
// 4. Calcular suscetibilidade global
// ==============================
var mapaGlobal = susceptibility_model.calculateSusceptibility(
  decliveNorm,
  elevacaoNorm,
  distRiosNorm,
  NDVINorm,
  chuvaAcumuladaNorm,
  TWINorm,
  densidadeDrenagemNorm,
  lulcNorm,
  distNorm,
  soilNorm,
  RS
);


Map.centerObject(RS, 6);
Map.addLayer(mapaGlobal.clip(RS2),imageVisParam , 'Mapa Global');

// ==============================
// 5. Exportação em partes (tiles)
// ==============================
susceptibility_model.exportTiles(
  mapaGlobal,
  RS,
  [4, 6], // grid: 4 colunas x 6 linhas = 24 tiles
  'suscetibilidade_RS2023'
);


Map.addLayer(decliveNorm, {},'decliveNorm', false); 
Map.addLayer(distRiosNorm, {},'distRiosNorm', false); 
Map.addLayer(NDVINorm, {},'NDVINorm', false); 
Map.addLayer(chuvaAcumuladaNorm, {},'chuvaAcumuladaNorm', false); 
Map.addLayer(TWINorm, {},'TWINorm', false); 
Map.addLayer(densidadeDrenagemNorm, {},'densidadeDrenagemNorm', false); 
Map.addLayer(lulcNorm, {},'lulc', false); 
Map.addLayer(elevacaoNorm, {},'elevacaoNorm', false); 
Map.addLayer(distNorm, {},'distNorm', false); 
Map.addLayer(soilNorm, {},'soilNorm', false);
//// exportacao para o drive
Export.image.toDrive({
  image: mapaGlobal,
  description: 'suscetibilidade_RS_drive',
  folder: 'mapa_final', // nome da pasta no seu Drive
  fileNamePrefix: 'suscetibilidade_RS_final',
  region: RS,
  scale: 60,
  maxPixels: 1e13
});
