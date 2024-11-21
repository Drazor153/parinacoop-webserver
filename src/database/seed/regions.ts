export interface Region {
  name: string;
  romanNumber: string;
  number: number;
  abbreviation: string;
  communes: Commune[];
}

export interface Commune {
  name: string;
  postalCode: number;
}
export const regions_communes: Region[] = [
  {
    name: 'Arica y Parinacota',
    romanNumber: 'XV',
    number: 15,
    abbreviation: 'AP',
    communes: [
      {
        name: 'Arica',
        postalCode: 1000000,
      },
      {
        name: 'Camarones',
        postalCode: 1040000,
      },
      {
        name: 'General Lagos',
        postalCode: 1080000,
      },
      {
        name: 'Putre',
        postalCode: 1070000,
      },
    ],
  },
  {
    name: 'Tarapacá',
    romanNumber: 'I',
    number: 1,
    abbreviation: 'TA',
    communes: [
      {
        name: 'Alto Hospicio',
        postalCode: 1130000,
      },
      {
        name: 'Camiña',
        postalCode: 1150000,
      },
      {
        name: 'Colchane',
        postalCode: 1160000,
      },
      {
        name: 'Huara',
        postalCode: 1140000,
      },
      {
        name: 'Iquique',
        postalCode: 1100000,
      },
      {
        name: 'Pica',
        postalCode: 1170000,
      },
      {
        name: 'Pozo Almonte',
        postalCode: 1180000,
      },
    ],
  },
  {
    name: 'Antofagasta',
    romanNumber: 'II',
    number: 2,
    abbreviation: 'AN',
    communes: [
      {
        name: 'Antofagasta',
        postalCode: 1240000,
      },
      {
        name: 'Calama',
        postalCode: 1390000,
      },
      {
        name: 'María Elena',
        postalCode: 1360000,
      },
      {
        name: 'Mejillones',
        postalCode: 1310000,
      },
      {
        name: 'Ollagüe',
        postalCode: 1420000,
      },
      {
        name: 'San Pedro de Atacama',
        postalCode: 1410000,
      },
      {
        name: 'Sierra Gorda',
        postalCode: 1320000,
      },
      {
        name: 'Taltal',
        postalCode: 1300000,
      },
      {
        name: 'Tocopilla',
        postalCode: 1340000,
      },
    ],
  },
  {
    name: 'Atacama',
    romanNumber: 'III',
    number: 3,
    abbreviation: 'AT',
    communes: [
      {
        name: 'Alto del Carmen',
        postalCode: 1650000,
      },
      {
        name: 'Caldera',
        postalCode: 1570000,
      },
      {
        name: 'Chañaral',
        postalCode: 1490000,
      },
      {
        name: 'Copiapó',
        postalCode: 1530000,
      },
      {
        name: 'Diego de Almagro',
        postalCode: 1500000,
      },
      {
        name: 'Freirina',
        postalCode: 1630000,
      },
      {
        name: 'Huasco',
        postalCode: 1640000,
      },
      {
        name: 'Tierra Amarilla',
        postalCode: 1580000,
      },
      {
        name: 'Vallenar',
        postalCode: 1610000,
      },
    ],
  },
  {
    name: 'Coquimbo',
    romanNumber: 'IV',
    number: 4,
    abbreviation: 'CO',
    communes: [
      {
        name: 'Andacollo',
        postalCode: 1750000,
      },
      {
        name: 'Canela',
        postalCode: 1960000,
      },
      {
        name: 'Combarbalá',
        postalCode: 1890000,
      },
      {
        name: 'Coquimbo',
        postalCode: 1780000,
      },
      {
        name: 'Illapel',
        postalCode: 1930000,
      },
      {
        name: 'La Higuera',
        postalCode: 1740000,
      },
      {
        name: 'La Serena',
        postalCode: 1700000,
      },
      {
        name: 'Los Vilos',
        postalCode: 1940000,
      },
      {
        name: 'Monte Patria',
        postalCode: 1880000,
      },
      {
        name: 'Ovalle',
        postalCode: 1840000,
      },
      {
        name: 'Paiguano',
        postalCode: 1770000,
      },
      {
        name: 'Punitaqui',
        postalCode: 1900000,
      },
      {
        name: 'Río Hurtado',
        postalCode: 1870000,
      },
      {
        name: 'Salamanca',
        postalCode: 1950000,
      },
      {
        name: 'Vicuña',
        postalCode: 1760000,
      },
    ],
  },
  {
    name: 'Valparaíso',
    romanNumber: 'V',
    number: 5,
    abbreviation: 'VA',
    communes: [
      {
        name: 'Algarrobo',
        postalCode: 2710000,
      },
      {
        name: 'Cabildo',
        postalCode: 2050000,
      },
      {
        name: 'Calera',
        postalCode: 2290000,
      },
      {
        name: 'Calle Larga',
        postalCode: 2130000,
      },
      {
        name: 'Cartagena',
        postalCode: 2680000,
      },
      {
        name: 'Casablanca',
        postalCode: 2480000,
      },
      {
        name: 'Catemu',
        postalCode: 2230000,
      },
      {
        name: 'Concón',
        postalCode: 2510000,
      },
      {
        name: 'El Quisco',
        postalCode: 2700000,
      },
      {
        name: 'El Tabo',
        postalCode: 2690000,
      },
      {
        name: 'Hijuelas',
        postalCode: 2310000,
      },
      {
        name: 'Isla de Pascua',
        postalCode: 2770000,
      },
      {
        name: 'Juan Fernández',
        postalCode: 2600000,
      },
      {
        name: 'La Cruz',
        postalCode: 2280000,
      },
      {
        name: 'La Ligua',
        postalCode: 2040000,
      },
      {
        name: 'Limache',
        postalCode: 2240000,
      },
      {
        name: 'Llaillay',
        postalCode: 2220000,
      },
      {
        name: 'Los Andes',
        postalCode: 2100000,
      },
      {
        name: 'Nogales',
        postalCode: 2300000,
      },
      {
        name: 'Olmué',
        postalCode: 2330000,
      },
      {
        name: 'Panquehue',
        postalCode: 2210000,
      },
      {
        name: 'Papudo',
        postalCode: 2070000,
      },
      {
        name: 'Petorca',
        postalCode: 2030000,
      },
      {
        name: 'Puchuncaví',
        postalCode: 2500000,
      },
      {
        name: 'Putaendo',
        postalCode: 2190000,
      },
      {
        name: 'Quillota',
        postalCode: 2260000,
      },
      {
        name: 'Quilpué',
        postalCode: 2430000,
      },
      {
        name: 'Quintero',
        postalCode: 2490000,
      },
      {
        name: 'Rinconada',
        postalCode: 2140000,
      },
      {
        name: 'San Antonio',
        postalCode: 2660000,
      },
      {
        name: 'San Esteban',
        postalCode: 2120000,
      },
      {
        name: 'San Felipe',
        postalCode: 2170000,
      },
      {
        name: 'Santa María',
        postalCode: 2200000,
      },
      {
        name: 'Santo Domingo',
        postalCode: 2720000,
      },
      {
        name: 'Valparaíso',
        postalCode: 2340000,
      },
      {
        name: 'Villa Alemana',
        postalCode: 6500000,
      },
      {
        name: 'Viña del Mar',
        postalCode: 2520000,
      },
      {
        name: 'Zapallar',
        postalCode: 2060000,
      },
    ],
  },
  {
    name: 'Metropolitana de Santiago',
    romanNumber: 'XIII',
    number: 13,
    abbreviation: 'RM',
    communes: [
      {
        name: 'Alhué',
        postalCode: 9650000,
      },
      {
        name: 'Buin',
        postalCode: 9500000,
      },
      {
        name: 'Calera de Tango',
        postalCode: 9560000,
      },
      {
        name: 'Cerrillos',
        postalCode: 9200000,
      },
      {
        name: 'Cerro Navia',
        postalCode: 9080000,
      },
      {
        name: 'Colina',
        postalCode: 9340000,
      },
      {
        name: 'Conchalí',
        postalCode: 8540000,
      },
      {
        name: 'Curacaví',
        postalCode: 9630000,
      },
      {
        name: 'El Bosque',
        postalCode: 8010000,
      },
      {
        name: 'El Monte',
        postalCode: 9810000,
      },
      {
        name: 'Estación Central',
        postalCode: 9160000,
      },
      {
        name: 'Huechuraba',
        postalCode: 8580000,
      },
      {
        name: 'Independencia',
        postalCode: 8380000,
      },
      {
        name: 'Isla de Maipo',
        postalCode: 9790000,
      },
      {
        name: 'La Cisterna',
        postalCode: 7970000,
      },
      {
        name: 'La Florida',
        postalCode: 8240000,
      },
      {
        name: 'La Granja',
        postalCode: 8780000,
      },
      {
        name: 'La Pintana',
        postalCode: 8820000,
      },
      {
        name: 'La Reina',
        postalCode: 7850000,
      },
      {
        name: 'Lampa',
        postalCode: 9380000,
      },
      {
        name: 'Las Condes',
        postalCode: 7550000,
      },
      {
        name: 'Lo Barnechea',
        postalCode: 7690000,
      },
      {
        name: 'Lo Espejo',
        postalCode: 9120000,
      },
      {
        name: 'Lo Prado',
        postalCode: 8980000,
      },
      {
        name: 'Macul',
        postalCode: 7810000,
      },
      {
        name: 'Maipú',
        postalCode: 9250000,
      },
      {
        name: 'María Pinto',
        postalCode: 9620000,
      },
      {
        name: 'Melipilla',
        postalCode: 9580000,
      },
      {
        name: 'Ñuñoa',
        postalCode: 7750000,
      },
      {
        name: 'Padre Hurtado',
        postalCode: 9710000,
      },
      {
        name: 'Paine',
        postalCode: 9540000,
      },
      {
        name: 'Pedro Aguirre Cerda',
        postalCode: 8460000,
      },
      {
        name: 'Peñaflor',
        postalCode: 9750000,
      },
      {
        name: 'Peñalolén',
        postalCode: 7910000,
      },
      {
        name: 'Pirque',
        postalCode: 9480000,
      },
      {
        name: 'Providencia',
        postalCode: 7500000,
      },
      {
        name: 'Pudahuel',
        postalCode: 9020000,
      },
      {
        name: 'Puente Alto',
        postalCode: 8150000,
      },
      {
        name: 'Quilicura',
        postalCode: 8700000,
      },
      {
        name: 'Quinta Normal',
        postalCode: 8500000,
      },
      {
        name: 'Recoleta',
        postalCode: 8420000,
      },
      {
        name: 'Renca',
        postalCode: 8640000,
      },
      {
        name: 'San Bernardo',
        postalCode: 8050000,
      },
      {
        name: 'San Joaquín',
        postalCode: 8940000,
      },
      {
        name: 'San José de Maipo',
        postalCode: 9460000,
      },
      {
        name: 'San Miguel',
        postalCode: 8900000,
      },
      {
        name: 'San Pedro',
        postalCode: 9660000,
      },
      {
        name: 'San Ramón',
        postalCode: 8860000,
      },
      {
        name: 'Santiago',
        postalCode: 8320000,
      },
      {
        name: 'Talagante',
        postalCode: 9670000,
      },
      {
        name: 'Tiltil',
        postalCode: 9420000,
      },
      {
        name: 'Vitacura',
        postalCode: 7630000,
      },
    ],
  },
  {
    name: 'Libertador Gral. Bernardo O’Higgins',
    romanNumber: 'VI',
    number: 6,
    abbreviation: 'LI',
    communes: [
      {
        name: 'Chimbarongo',
        postalCode: 3090000,
      },
      {
        name: 'Chépica',
        postalCode: 3120000,
      },
      {
        name: 'Codegua',
        postalCode: 2900000,
      },
      {
        name: 'Coinco',
        postalCode: 3010000,
      },
      {
        name: 'Coltauco',
        postalCode: 3000000,
      },
      {
        name: 'Doñihue',
        postalCode: 3020000,
      },
      {
        name: 'Graneros',
        postalCode: 2880000,
      },
      {
        name: 'La Estrella',
        postalCode: 3250000,
      },
      {
        name: 'Las Cabras',
        postalCode: 3030000,
      },
      {
        name: 'Litueche',
        postalCode: 3240000,
      },
      {
        name: 'Lolol',
        postalCode: 3140000,
      },
      {
        name: 'Machalí',
        postalCode: 2910000,
      },
      {
        name: 'Malloa',
        postalCode: 2950000,
      },
      {
        name: 'Marchihue',
        postalCode: 3260000,
      },
      {
        name: 'Nancagua',
        postalCode: 3110000,
      },
      {
        name: 'Navidad',
        postalCode: 3230000,
      },
      {
        name: 'Olivar',
        postalCode: 2920000,
      },
      {
        name: 'Mostazal',
        postalCode: 2890000,
      },
      {
        name: 'Palmilla',
        postalCode: 3160000,
      },
      {
        name: 'Paredones',
        postalCode: 3270000,
      },
      {
        name: 'Peralillo',
        postalCode: 3170000,
      },
      {
        name: 'Peumo',
        postalCode: 2990000,
      },
      {
        name: 'Pichidegua',
        postalCode: 2980000,
      },
      {
        name: 'Pichilemu',
        postalCode: 3220000,
      },
      {
        name: 'Placilla',
        postalCode: 3100000,
      },
      {
        name: 'Pumanque',
        postalCode: 3150000,
      },
      {
        name: 'Quinta de Tilcoco',
        postalCode: 2960000,
      },
      {
        name: 'Rancagua',
        postalCode: 2820000,
      },
      {
        name: 'O’Higgins',
        postalCode: 2820000,
      },
      {
        name: 'Rengo',
        postalCode: 2940000,
      },
      {
        name: 'Requínoa',
        postalCode: 2930000,
      },
      {
        name: 'San Fernando',
        postalCode: 3070000,
      },
      {
        name: 'San Vicente',
        postalCode: 2970000,
      },
      {
        name: 'Santa Cruz',
        postalCode: 3130000,
      },
    ],
  },
  {
    name: 'Maule',
    romanNumber: 'VII',
    number: 7,
    abbreviation: 'ML',
    communes: [
      {
        name: 'Cauquenes',
        postalCode: 3690000,
      },
      {
        name: 'Chanco',
        postalCode: 3720000,
      },
      {
        name: 'Colbún',
        postalCode: 3610000,
      },
      {
        name: 'Constitución',
        postalCode: 3560000,
      },
      {
        name: 'Curepto',
        postalCode: 3570000,
      },
      {
        name: 'Curicó',
        postalCode: 3340000,
      },
      {
        name: 'Empedrado',
        postalCode: 3540000,
      },
      {
        name: 'Hualañé',
        postalCode: 3400000,
      },
      {
        name: 'Licantén',
        postalCode: 3410000,
      },
      {
        name: 'Linares',
        postalCode: 3580000,
      },
      {
        name: 'Longaví',
        postalCode: 3620000,
      },
      {
        name: 'Maule',
        postalCode: 3530000,
      },
      {
        name: 'Molina',
        postalCode: 3380000,
      },
      {
        name: 'Parral',
        postalCode: 3630000,
      },
      {
        name: 'Pelarco',
        postalCode: 3500000,
      },
      {
        name: 'Pelluhue',
        postalCode: 3710000,
      },
      {
        name: 'Pencahue',
        postalCode: 3550000,
      },
      {
        name: 'Rauco',
        postalCode: 3430000,
      },
      {
        name: 'Retiro',
        postalCode: 3640000,
      },
      {
        name: 'Romeral',
        postalCode: 3370000,
      },
      {
        name: 'Río Claro',
        postalCode: 3510000,
      },
      {
        name: 'Sagrada Familia',
        postalCode: 3390000,
      },
      {
        name: 'San Clemente',
        postalCode: 3520000,
      },
      {
        name: 'San Javier de Loncomilla',
        postalCode: 3600000,
      },
      {
        name: 'San Rafael',
        postalCode: 3490000,
      },
      {
        name: 'Talca',
        postalCode: 3460000,
      },
      {
        name: 'Teno',
        postalCode: 3360000,
      },
      {
        name: 'Vichuquén',
        postalCode: 3420000,
      },
      {
        name: 'Villa Alegre',
        postalCode: 3650000,
      },
      {
        name: 'Yerbas Buenas',
        postalCode: 3600000,
      },
    ],
  },
  {
    name: 'Ñuble',
    romanNumber: 'XVI',
    number: 16,
    abbreviation: 'NB',
    communes: [
      {
        name: 'Bulnes',
        postalCode: 3930000,
      },
      {
        name: 'Chillán Viejo',
        postalCode: 3820000,
      },
      {
        name: 'Chillán',
        postalCode: 3780000,
      },
      {
        name: 'Cobquecura',
        postalCode: 3990000,
      },
      {
        name: 'Coelemu',
        postalCode: 3970000,
      },
      {
        name: 'Coihueco',
        postalCode: 3870000,
      },
      {
        name: 'El Carmen',
        postalCode: 3900000,
      },
      {
        name: 'Ninhue',
        postalCode: 4010000,
      },
      {
        name: 'Ñiquén',
        postalCode: 3850000,
      },
      {
        name: 'Pemuco',
        postalCode: 3910000,
      },
      {
        name: 'Pinto',
        postalCode: 3880000,
      },
      {
        name: 'Portezuelo',
        postalCode: 3960000,
      },
      {
        name: 'Quillón',
        postalCode: 3940000,
      },
      {
        name: 'Quirihue',
        postalCode: 4000000,
      },
      {
        name: 'Ránquil',
        postalCode: 3950000,
      },
      {
        name: 'San Carlos',
        postalCode: 3840000,
      },
      {
        name: 'San Fabián',
        postalCode: 3860000,
      },
      {
        name: 'San Ignacio',
        postalCode: 3890000,
      },
      {
        name: 'San Nicolás',
        postalCode: 4020000,
      },
      {
        name: 'Treguaco',
        postalCode: 3980000,
      },
      {
        name: 'Yungay',
        postalCode: 3920000,
      },
    ],
  },
  {
    name: 'Biobío',
    romanNumber: 'VIII',
    number: 8,
    abbreviation: 'BI',
    communes: [
      {
        name: 'Alto Biobío',
        postalCode: 4590000,
      },
      {
        name: 'Antuco',
        postalCode: 4490000,
      },
      {
        name: 'Arauco',
        postalCode: 4360000,
      },
      {
        name: 'Cabrero',
        postalCode: 4470000,
      },
      {
        name: 'Cañete',
        postalCode: 4390000,
      },
      {
        name: 'Chiguayante',
        postalCode: 4100000,
      },
      {
        name: 'Concepción',
        postalCode: 4030000,
      },
      {
        name: 'Contulmo',
        postalCode: 4400000,
      },
      {
        name: 'Coronel',
        postalCode: 4190000,
      },
      {
        name: 'Curanilahue',
        postalCode: 4370000,
      },
      {
        name: 'Florida',
        postalCode: 4170000,
      },
      {
        name: 'Hualpén',
        postalCode: 4600000,
      },
      {
        name: 'Hualqui',
        postalCode: 4180000,
      },
      {
        name: 'Laja',
        postalCode: 4560000,
      },
      {
        name: 'Lebu',
        postalCode: 4350000,
      },
      {
        name: 'Los Álamos',
        postalCode: 4380000,
      },
      {
        name: 'Los Ángeles',
        postalCode: 4440000,
      },
      {
        name: 'Lota',
        postalCode: 4210000,
      },
      {
        name: 'Mulchén',
        postalCode: 4530000,
      },
      {
        name: 'Nacimiento',
        postalCode: 4550000,
      },
      {
        name: 'Negrete',
        postalCode: 4540000,
      },
      {
        name: 'Penco',
        postalCode: 4150000,
      },
      {
        name: 'Quilaco',
        postalCode: 4520000,
      },
      {
        name: 'Quilleco',
        postalCode: 4500000,
      },
      {
        name: 'San Pedro de la Paz',
        postalCode: 4130000,
      },
      {
        name: 'San Rosendo',
        postalCode: 4570000,
      },
      {
        name: 'Santa Bárbara',
        postalCode: 4510000,
      },
      {
        name: 'Santa Juana',
        postalCode: 4230000,
      },
      {
        name: 'Talcahuano',
        postalCode: 4260000,
      },
      {
        name: 'Tirúa',
        postalCode: 4410000,
      },
      {
        name: 'Tomé',
        postalCode: 4160000,
      },
      {
        name: 'Tucapel',
        postalCode: 4480000,
      },
      {
        name: 'Yumbel',
        postalCode: 4580000,
      },
    ],
  },
  {
    name: 'Araucanía',
    romanNumber: 'IX',
    number: 9,
    abbreviation: 'AR',
    communes: [
      {
        name: 'Angol',
        postalCode: 4650000,
      },
      {
        name: 'Carahue',
        postalCode: 5010000,
      },
      {
        name: 'Cholchol',
        postalCode: 5040000,
      },
      {
        name: 'Collipulli',
        postalCode: 4680000,
      },
      {
        name: 'Cunco',
        postalCode: 4890000,
      },
      {
        name: 'Curacautín',
        postalCode: 4700000,
      },
      {
        name: 'Curarrehue',
        postalCode: 4910000,
      },
      {
        name: 'Ercilla',
        postalCode: 4710000,
      },
      {
        name: 'Freire',
        postalCode: 4940000,
      },
      {
        name: 'Galvarino',
        postalCode: 5030000,
      },
      {
        name: 'Gorbea',
        postalCode: 4960000,
      },
      {
        name: 'Lautaro',
        postalCode: 4860000,
      },
      {
        name: 'Loncoche',
        postalCode: 4970000,
      },
      {
        name: 'Lonquimay',
        postalCode: 4690000,
      },
      {
        name: 'Los Sauces',
        postalCode: 4760000,
      },
      {
        name: 'Lumaco',
        postalCode: 4740000,
      },
      {
        name: 'Melipeuco',
        postalCode: 4900000,
      },
      {
        name: 'Nueva Imperial',
        postalCode: 5020000,
      },
      {
        name: 'Padre las Casas',
        postalCode: 4850000,
      },
      {
        name: 'Perquenco',
        postalCode: 4870000,
      },
      {
        name: 'Pitrufquén',
        postalCode: 4950000,
      },
      {
        name: 'Pucón',
        postalCode: 4920000,
      },
      {
        name: 'Purén',
        postalCode: 4750000,
      },
      {
        name: 'Renaico',
        postalCode: 4670000,
      },
      {
        name: 'Saavedra',
        postalCode: 5000000,
      },
      {
        name: 'Temuco',
        postalCode: 4780000,
      },
      {
        name: 'Teodoro Schmidt',
        postalCode: 4990000,
      },
      {
        name: 'Toltén',
        postalCode: 4980000,
      },
      {
        name: 'Traiguén',
        postalCode: 4730000,
      },
      {
        name: 'Victoria',
        postalCode: 4720000,
      },
      {
        name: 'Vilcún',
        postalCode: 4880000,
      },
      {
        name: 'Villarrica',
        postalCode: 4930000,
      },
    ],
  },
  {
    name: 'Los Ríos',
    romanNumber: 'XIV',
    number: 14,
    abbreviation: 'LR',
    communes: [
      {
        name: 'Corral',
        postalCode: 5190000,
      },
      {
        name: 'Futrono',
        postalCode: 5180000,
      },
      {
        name: 'La Unión',
        postalCode: 5220000,
      },
      {
        name: 'Lago Ranco',
        postalCode: 5250000,
      },
      {
        name: 'Lanco',
        postalCode: 5160000,
      },
      {
        name: 'Los Lagos',
        postalCode: 5170000,
      },
      {
        name: 'Mariquina',
        postalCode: 5150000,
      },
      {
        name: 'Máfil',
        postalCode: 5200000,
      },
      {
        name: 'Paillaco',
        postalCode: 5230000,
      },
      {
        name: 'Panguipulli',
        postalCode: 5210000,
      },
      {
        name: 'Río Bueno',
        postalCode: 5240000,
      },
      {
        name: 'Valdivia',
        postalCode: 5090000,
      },
    ],
  },
  {
    name: 'Los Lagos',
    romanNumber: 'X',
    number: 10,
    abbreviation: 'LL',
    communes: [
      {
        name: 'Ancud',
        postalCode: 5710000,
      },
      {
        name: 'Calbuco',
        postalCode: 5570000,
      },
      {
        name: 'Castro',
        postalCode: 5700000,
      },
      {
        name: 'Chaitén',
        postalCode: 5850000,
      },
      {
        name: 'Chonchi',
        postalCode: 5770000,
      },
      {
        name: 'Cochamó',
        postalCode: 5560000,
      },
      {
        name: 'Curaco de Vélez',
        postalCode: 5740000,
      },
      {
        name: 'Dalcahue',
        postalCode: 5730000,
      },
      {
        name: 'Fresia',
        postalCode: 5600000,
      },
      {
        name: 'Frutillar',
        postalCode: 5620000,
      },
      {
        name: 'Futaleufú',
        postalCode: 5870000,
      },
      {
        name: 'Hualaihué',
        postalCode: 5860000,
      },
      {
        name: 'Llanquihue',
        postalCode: 5610000,
      },
      {
        name: 'Los Muermos',
        postalCode: 5590000,
      },
      {
        name: 'Maullín',
        postalCode: 5580000,
      },
      {
        name: 'Osorno',
        postalCode: 5290000,
      },
      {
        name: 'Palena',
        postalCode: 5880000,
      },
      {
        name: 'Puerto Montt',
        postalCode: 5480000,
      },
      {
        name: 'Puerto Octay',
        postalCode: 5370000,
      },
      {
        name: 'Puerto Varas',
        postalCode: 5550000,
      },
      {
        name: 'Puqueldón',
        postalCode: 5760000,
      },
      {
        name: 'Purranque',
        postalCode: 5380000,
      },
      {
        name: 'Puyehue',
        postalCode: 5360000,
      },
      {
        name: 'Queilén',
        postalCode: 5780000,
      },
      {
        name: 'Quellón',
        postalCode: 5790000,
      },
      {
        name: 'Quemchi',
        postalCode: 5720000,
      },
      {
        name: 'Quinchao',
        postalCode: 5750000,
      },
      {
        name: 'Río Negro',
        postalCode: 5390000,
      },
      {
        name: 'San Juan de la Costa',
        postalCode: 5400000,
      },
      {
        name: 'San Pablo',
        postalCode: 5350000,
      },
    ],
  },
  {
    name: 'Aysén del Gral. Carlos Ibáñez del Campo',
    romanNumber: 'XI',
    number: 11,
    abbreviation: 'AI',
    communes: [
      {
        name: 'Aysén',
        postalCode: 6000000,
      },
      {
        name: 'Chile Chico',
        postalCode: 6050000,
      },
      {
        name: 'Cisnes',
        postalCode: 6010000,
      },
      {
        name: 'Cochrane',
        postalCode: 6100000,
      },
      {
        name: 'Coyhaique',
        postalCode: 5950000,
      },
      {
        name: 'Guaitecas',
        postalCode: 6020000,
      },
      {
        name: 'Lago Verde',
        postalCode: 5960000,
      },
      {
        name: 'Río Ibáñez',
        postalCode: 6060000,
      },
      {
        name: 'Tortel',
        postalCode: 6120000,
      },
    ],
  },
  {
    name: 'Magallanes y de la Antártica Chilena',
    romanNumber: 'XII',
    number: 12,
    abbreviation: 'MA',
    communes: [
      {
        name: 'Antártica',
        postalCode: 6360000,
      },
      {
        name: 'Cabo de Hornos',
        postalCode: 6350000,
      },
      {
        name: 'Laguna Blanca',
        postalCode: 6250000,
      },
      {
        name: 'Natales',
        postalCode: 6160000,
      },
      {
        name: 'Porvenir',
        postalCode: 6300000,
      },
      {
        name: 'Primavera',
        postalCode: 6310000,
      },
      {
        name: 'Punta Arenas',
        postalCode: 6200000,
      },
      {
        name: 'Río Verde',
        postalCode: 6240000,
      },
      {
        name: 'San Gregorio',
        postalCode: 6260000,
      },
      {
        name: 'Timaukel',
        postalCode: 6320000,
      },
      {
        name: 'Torres del Paine',
        postalCode: 6170000,
      },
    ],
  },
];
