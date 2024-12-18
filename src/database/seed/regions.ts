export interface Region {
  name: string;
  roman_number: string;
  number: number;
  abbreviation: string;
  communes: Commune[];
}

export interface Commune {
  name: string;
  postal_code: number;
}
export const regions_communes: Region[] = [
  {
    name: 'Arica y Parinacota',
    roman_number: 'XV',
    number: 15,
    abbreviation: 'AP',
    communes: [
      {
        name: 'Arica',
        postal_code: 1000000,
      },
      {
        name: 'Camarones',
        postal_code: 1040000,
      },
      {
        name: 'General Lagos',
        postal_code: 1080000,
      },
      {
        name: 'Putre',
        postal_code: 1070000,
      },
    ],
  },
  {
    name: 'Tarapacá',
    roman_number: 'I',
    number: 1,
    abbreviation: 'TA',
    communes: [
      {
        name: 'Alto Hospicio',
        postal_code: 1130000,
      },
      {
        name: 'Camiña',
        postal_code: 1150000,
      },
      {
        name: 'Colchane',
        postal_code: 1160000,
      },
      {
        name: 'Huara',
        postal_code: 1140000,
      },
      {
        name: 'Iquique',
        postal_code: 1100000,
      },
      {
        name: 'Pica',
        postal_code: 1170000,
      },
      {
        name: 'Pozo Almonte',
        postal_code: 1180000,
      },
    ],
  },
  {
    name: 'Antofagasta',
    roman_number: 'II',
    number: 2,
    abbreviation: 'AN',
    communes: [
      {
        name: 'Antofagasta',
        postal_code: 1240000,
      },
      {
        name: 'Calama',
        postal_code: 1390000,
      },
      {
        name: 'María Elena',
        postal_code: 1360000,
      },
      {
        name: 'Mejillones',
        postal_code: 1310000,
      },
      {
        name: 'Ollagüe',
        postal_code: 1420000,
      },
      {
        name: 'San Pedro de Atacama',
        postal_code: 1410000,
      },
      {
        name: 'Sierra Gorda',
        postal_code: 1320000,
      },
      {
        name: 'Taltal',
        postal_code: 1300000,
      },
      {
        name: 'Tocopilla',
        postal_code: 1340000,
      },
    ],
  },
  {
    name: 'Atacama',
    roman_number: 'III',
    number: 3,
    abbreviation: 'AT',
    communes: [
      {
        name: 'Alto del Carmen',
        postal_code: 1650000,
      },
      {
        name: 'Caldera',
        postal_code: 1570000,
      },
      {
        name: 'Chañaral',
        postal_code: 1490000,
      },
      {
        name: 'Copiapó',
        postal_code: 1530000,
      },
      {
        name: 'Diego de Almagro',
        postal_code: 1500000,
      },
      {
        name: 'Freirina',
        postal_code: 1630000,
      },
      {
        name: 'Huasco',
        postal_code: 1640000,
      },
      {
        name: 'Tierra Amarilla',
        postal_code: 1580000,
      },
      {
        name: 'Vallenar',
        postal_code: 1610000,
      },
    ],
  },
  {
    name: 'Coquimbo',
    roman_number: 'IV',
    number: 4,
    abbreviation: 'CO',
    communes: [
      {
        name: 'Andacollo',
        postal_code: 1750000,
      },
      {
        name: 'Canela',
        postal_code: 1960000,
      },
      {
        name: 'Combarbalá',
        postal_code: 1890000,
      },
      {
        name: 'Coquimbo',
        postal_code: 1780000,
      },
      {
        name: 'Illapel',
        postal_code: 1930000,
      },
      {
        name: 'La Higuera',
        postal_code: 1740000,
      },
      {
        name: 'La Serena',
        postal_code: 1700000,
      },
      {
        name: 'Los Vilos',
        postal_code: 1940000,
      },
      {
        name: 'Monte Patria',
        postal_code: 1880000,
      },
      {
        name: 'Ovalle',
        postal_code: 1840000,
      },
      {
        name: 'Paiguano',
        postal_code: 1770000,
      },
      {
        name: 'Punitaqui',
        postal_code: 1900000,
      },
      {
        name: 'Río Hurtado',
        postal_code: 1870000,
      },
      {
        name: 'Salamanca',
        postal_code: 1950000,
      },
      {
        name: 'Vicuña',
        postal_code: 1760000,
      },
    ],
  },
  {
    name: 'Valparaíso',
    roman_number: 'V',
    number: 5,
    abbreviation: 'VA',
    communes: [
      {
        name: 'Algarrobo',
        postal_code: 2710000,
      },
      {
        name: 'Cabildo',
        postal_code: 2050000,
      },
      {
        name: 'Calera',
        postal_code: 2290000,
      },
      {
        name: 'Calle Larga',
        postal_code: 2130000,
      },
      {
        name: 'Cartagena',
        postal_code: 2680000,
      },
      {
        name: 'Casablanca',
        postal_code: 2480000,
      },
      {
        name: 'Catemu',
        postal_code: 2230000,
      },
      {
        name: 'Concón',
        postal_code: 2510000,
      },
      {
        name: 'El Quisco',
        postal_code: 2700000,
      },
      {
        name: 'El Tabo',
        postal_code: 2690000,
      },
      {
        name: 'Hijuelas',
        postal_code: 2310000,
      },
      {
        name: 'Isla de Pascua',
        postal_code: 2770000,
      },
      {
        name: 'Juan Fernández',
        postal_code: 2600000,
      },
      {
        name: 'La Cruz',
        postal_code: 2280000,
      },
      {
        name: 'La Ligua',
        postal_code: 2040000,
      },
      {
        name: 'Limache',
        postal_code: 2240000,
      },
      {
        name: 'Llaillay',
        postal_code: 2220000,
      },
      {
        name: 'Los Andes',
        postal_code: 2100000,
      },
      {
        name: 'Nogales',
        postal_code: 2300000,
      },
      {
        name: 'Olmué',
        postal_code: 2330000,
      },
      {
        name: 'Panquehue',
        postal_code: 2210000,
      },
      {
        name: 'Papudo',
        postal_code: 2070000,
      },
      {
        name: 'Petorca',
        postal_code: 2030000,
      },
      {
        name: 'Puchuncaví',
        postal_code: 2500000,
      },
      {
        name: 'Putaendo',
        postal_code: 2190000,
      },
      {
        name: 'Quillota',
        postal_code: 2260000,
      },
      {
        name: 'Quilpué',
        postal_code: 2430000,
      },
      {
        name: 'Quintero',
        postal_code: 2490000,
      },
      {
        name: 'Rinconada',
        postal_code: 2140000,
      },
      {
        name: 'San Antonio',
        postal_code: 2660000,
      },
      {
        name: 'San Esteban',
        postal_code: 2120000,
      },
      {
        name: 'San Felipe',
        postal_code: 2170000,
      },
      {
        name: 'Santa María',
        postal_code: 2200000,
      },
      {
        name: 'Santo Domingo',
        postal_code: 2720000,
      },
      {
        name: 'Valparaíso',
        postal_code: 2340000,
      },
      {
        name: 'Villa Alemana',
        postal_code: 6500000,
      },
      {
        name: 'Viña del Mar',
        postal_code: 2520000,
      },
      {
        name: 'Zapallar',
        postal_code: 2060000,
      },
    ],
  },
  {
    name: 'Metropolitana de Santiago',
    roman_number: 'XIII',
    number: 13,
    abbreviation: 'RM',
    communes: [
      {
        name: 'Alhué',
        postal_code: 9650000,
      },
      {
        name: 'Buin',
        postal_code: 9500000,
      },
      {
        name: 'Calera de Tango',
        postal_code: 9560000,
      },
      {
        name: 'Cerrillos',
        postal_code: 9200000,
      },
      {
        name: 'Cerro Navia',
        postal_code: 9080000,
      },
      {
        name: 'Colina',
        postal_code: 9340000,
      },
      {
        name: 'Conchalí',
        postal_code: 8540000,
      },
      {
        name: 'Curacaví',
        postal_code: 9630000,
      },
      {
        name: 'El Bosque',
        postal_code: 8010000,
      },
      {
        name: 'El Monte',
        postal_code: 9810000,
      },
      {
        name: 'Estación Central',
        postal_code: 9160000,
      },
      {
        name: 'Huechuraba',
        postal_code: 8580000,
      },
      {
        name: 'Independencia',
        postal_code: 8380000,
      },
      {
        name: 'Isla de Maipo',
        postal_code: 9790000,
      },
      {
        name: 'La Cisterna',
        postal_code: 7970000,
      },
      {
        name: 'La Florida',
        postal_code: 8240000,
      },
      {
        name: 'La Granja',
        postal_code: 8780000,
      },
      {
        name: 'La Pintana',
        postal_code: 8820000,
      },
      {
        name: 'La Reina',
        postal_code: 7850000,
      },
      {
        name: 'Lampa',
        postal_code: 9380000,
      },
      {
        name: 'Las Condes',
        postal_code: 7550000,
      },
      {
        name: 'Lo Barnechea',
        postal_code: 7690000,
      },
      {
        name: 'Lo Espejo',
        postal_code: 9120000,
      },
      {
        name: 'Lo Prado',
        postal_code: 8980000,
      },
      {
        name: 'Macul',
        postal_code: 7810000,
      },
      {
        name: 'Maipú',
        postal_code: 9250000,
      },
      {
        name: 'María Pinto',
        postal_code: 9620000,
      },
      {
        name: 'Melipilla',
        postal_code: 9580000,
      },
      {
        name: 'Ñuñoa',
        postal_code: 7750000,
      },
      {
        name: 'Padre Hurtado',
        postal_code: 9710000,
      },
      {
        name: 'Paine',
        postal_code: 9540000,
      },
      {
        name: 'Pedro Aguirre Cerda',
        postal_code: 8460000,
      },
      {
        name: 'Peñaflor',
        postal_code: 9750000,
      },
      {
        name: 'Peñalolén',
        postal_code: 7910000,
      },
      {
        name: 'Pirque',
        postal_code: 9480000,
      },
      {
        name: 'Providencia',
        postal_code: 7500000,
      },
      {
        name: 'Pudahuel',
        postal_code: 9020000,
      },
      {
        name: 'Puente Alto',
        postal_code: 8150000,
      },
      {
        name: 'Quilicura',
        postal_code: 8700000,
      },
      {
        name: 'Quinta Normal',
        postal_code: 8500000,
      },
      {
        name: 'Recoleta',
        postal_code: 8420000,
      },
      {
        name: 'Renca',
        postal_code: 8640000,
      },
      {
        name: 'San Bernardo',
        postal_code: 8050000,
      },
      {
        name: 'San Joaquín',
        postal_code: 8940000,
      },
      {
        name: 'San José de Maipo',
        postal_code: 9460000,
      },
      {
        name: 'San Miguel',
        postal_code: 8900000,
      },
      {
        name: 'San Pedro',
        postal_code: 9660000,
      },
      {
        name: 'San Ramón',
        postal_code: 8860000,
      },
      {
        name: 'Santiago',
        postal_code: 8320000,
      },
      {
        name: 'Talagante',
        postal_code: 9670000,
      },
      {
        name: 'Tiltil',
        postal_code: 9420000,
      },
      {
        name: 'Vitacura',
        postal_code: 7630000,
      },
    ],
  },
  {
    name: 'Libertador Gral. Bernardo O’Higgins',
    roman_number: 'VI',
    number: 6,
    abbreviation: 'LI',
    communes: [
      {
        name: 'Chimbarongo',
        postal_code: 3090000,
      },
      {
        name: 'Chépica',
        postal_code: 3120000,
      },
      {
        name: 'Codegua',
        postal_code: 2900000,
      },
      {
        name: 'Coinco',
        postal_code: 3010000,
      },
      {
        name: 'Coltauco',
        postal_code: 3000000,
      },
      {
        name: 'Doñihue',
        postal_code: 3020000,
      },
      {
        name: 'Graneros',
        postal_code: 2880000,
      },
      {
        name: 'La Estrella',
        postal_code: 3250000,
      },
      {
        name: 'Las Cabras',
        postal_code: 3030000,
      },
      {
        name: 'Litueche',
        postal_code: 3240000,
      },
      {
        name: 'Lolol',
        postal_code: 3140000,
      },
      {
        name: 'Machalí',
        postal_code: 2910000,
      },
      {
        name: 'Malloa',
        postal_code: 2950000,
      },
      {
        name: 'Marchihue',
        postal_code: 3260000,
      },
      {
        name: 'Nancagua',
        postal_code: 3110000,
      },
      {
        name: 'Navidad',
        postal_code: 3230000,
      },
      {
        name: 'Olivar',
        postal_code: 2920000,
      },
      {
        name: 'Mostazal',
        postal_code: 2890000,
      },
      {
        name: 'Palmilla',
        postal_code: 3160000,
      },
      {
        name: 'Paredones',
        postal_code: 3270000,
      },
      {
        name: 'Peralillo',
        postal_code: 3170000,
      },
      {
        name: 'Peumo',
        postal_code: 2990000,
      },
      {
        name: 'Pichidegua',
        postal_code: 2980000,
      },
      {
        name: 'Pichilemu',
        postal_code: 3220000,
      },
      {
        name: 'Placilla',
        postal_code: 3100000,
      },
      {
        name: 'Pumanque',
        postal_code: 3150000,
      },
      {
        name: 'Quinta de Tilcoco',
        postal_code: 2960000,
      },
      {
        name: 'Rancagua',
        postal_code: 2820000,
      },
      {
        name: 'O’Higgins',
        postal_code: 2820000,
      },
      {
        name: 'Rengo',
        postal_code: 2940000,
      },
      {
        name: 'Requínoa',
        postal_code: 2930000,
      },
      {
        name: 'San Fernando',
        postal_code: 3070000,
      },
      {
        name: 'San Vicente',
        postal_code: 2970000,
      },
      {
        name: 'Santa Cruz',
        postal_code: 3130000,
      },
    ],
  },
  {
    name: 'Maule',
    roman_number: 'VII',
    number: 7,
    abbreviation: 'ML',
    communes: [
      {
        name: 'Cauquenes',
        postal_code: 3690000,
      },
      {
        name: 'Chanco',
        postal_code: 3720000,
      },
      {
        name: 'Colbún',
        postal_code: 3610000,
      },
      {
        name: 'Constitución',
        postal_code: 3560000,
      },
      {
        name: 'Curepto',
        postal_code: 3570000,
      },
      {
        name: 'Curicó',
        postal_code: 3340000,
      },
      {
        name: 'Empedrado',
        postal_code: 3540000,
      },
      {
        name: 'Hualañé',
        postal_code: 3400000,
      },
      {
        name: 'Licantén',
        postal_code: 3410000,
      },
      {
        name: 'Linares',
        postal_code: 3580000,
      },
      {
        name: 'Longaví',
        postal_code: 3620000,
      },
      {
        name: 'Maule',
        postal_code: 3530000,
      },
      {
        name: 'Molina',
        postal_code: 3380000,
      },
      {
        name: 'Parral',
        postal_code: 3630000,
      },
      {
        name: 'Pelarco',
        postal_code: 3500000,
      },
      {
        name: 'Pelluhue',
        postal_code: 3710000,
      },
      {
        name: 'Pencahue',
        postal_code: 3550000,
      },
      {
        name: 'Rauco',
        postal_code: 3430000,
      },
      {
        name: 'Retiro',
        postal_code: 3640000,
      },
      {
        name: 'Romeral',
        postal_code: 3370000,
      },
      {
        name: 'Río Claro',
        postal_code: 3510000,
      },
      {
        name: 'Sagrada Familia',
        postal_code: 3390000,
      },
      {
        name: 'San Clemente',
        postal_code: 3520000,
      },
      {
        name: 'San Javier de Loncomilla',
        postal_code: 3600000,
      },
      {
        name: 'San Rafael',
        postal_code: 3490000,
      },
      {
        name: 'Talca',
        postal_code: 3460000,
      },
      {
        name: 'Teno',
        postal_code: 3360000,
      },
      {
        name: 'Vichuquén',
        postal_code: 3420000,
      },
      {
        name: 'Villa Alegre',
        postal_code: 3650000,
      },
      {
        name: 'Yerbas Buenas',
        postal_code: 3600000,
      },
    ],
  },
  {
    name: 'Ñuble',
    roman_number: 'XVI',
    number: 16,
    abbreviation: 'NB',
    communes: [
      {
        name: 'Bulnes',
        postal_code: 3930000,
      },
      {
        name: 'Chillán Viejo',
        postal_code: 3820000,
      },
      {
        name: 'Chillán',
        postal_code: 3780000,
      },
      {
        name: 'Cobquecura',
        postal_code: 3990000,
      },
      {
        name: 'Coelemu',
        postal_code: 3970000,
      },
      {
        name: 'Coihueco',
        postal_code: 3870000,
      },
      {
        name: 'El Carmen',
        postal_code: 3900000,
      },
      {
        name: 'Ninhue',
        postal_code: 4010000,
      },
      {
        name: 'Ñiquén',
        postal_code: 3850000,
      },
      {
        name: 'Pemuco',
        postal_code: 3910000,
      },
      {
        name: 'Pinto',
        postal_code: 3880000,
      },
      {
        name: 'Portezuelo',
        postal_code: 3960000,
      },
      {
        name: 'Quillón',
        postal_code: 3940000,
      },
      {
        name: 'Quirihue',
        postal_code: 4000000,
      },
      {
        name: 'Ránquil',
        postal_code: 3950000,
      },
      {
        name: 'San Carlos',
        postal_code: 3840000,
      },
      {
        name: 'San Fabián',
        postal_code: 3860000,
      },
      {
        name: 'San Ignacio',
        postal_code: 3890000,
      },
      {
        name: 'San Nicolás',
        postal_code: 4020000,
      },
      {
        name: 'Treguaco',
        postal_code: 3980000,
      },
      {
        name: 'Yungay',
        postal_code: 3920000,
      },
    ],
  },
  {
    name: 'Biobío',
    roman_number: 'VIII',
    number: 8,
    abbreviation: 'BI',
    communes: [
      {
        name: 'Alto Biobío',
        postal_code: 4590000,
      },
      {
        name: 'Antuco',
        postal_code: 4490000,
      },
      {
        name: 'Arauco',
        postal_code: 4360000,
      },
      {
        name: 'Cabrero',
        postal_code: 4470000,
      },
      {
        name: 'Cañete',
        postal_code: 4390000,
      },
      {
        name: 'Chiguayante',
        postal_code: 4100000,
      },
      {
        name: 'Concepción',
        postal_code: 4030000,
      },
      {
        name: 'Contulmo',
        postal_code: 4400000,
      },
      {
        name: 'Coronel',
        postal_code: 4190000,
      },
      {
        name: 'Curanilahue',
        postal_code: 4370000,
      },
      {
        name: 'Florida',
        postal_code: 4170000,
      },
      {
        name: 'Hualpén',
        postal_code: 4600000,
      },
      {
        name: 'Hualqui',
        postal_code: 4180000,
      },
      {
        name: 'Laja',
        postal_code: 4560000,
      },
      {
        name: 'Lebu',
        postal_code: 4350000,
      },
      {
        name: 'Los Álamos',
        postal_code: 4380000,
      },
      {
        name: 'Los Ángeles',
        postal_code: 4440000,
      },
      {
        name: 'Lota',
        postal_code: 4210000,
      },
      {
        name: 'Mulchén',
        postal_code: 4530000,
      },
      {
        name: 'Nacimiento',
        postal_code: 4550000,
      },
      {
        name: 'Negrete',
        postal_code: 4540000,
      },
      {
        name: 'Penco',
        postal_code: 4150000,
      },
      {
        name: 'Quilaco',
        postal_code: 4520000,
      },
      {
        name: 'Quilleco',
        postal_code: 4500000,
      },
      {
        name: 'San Pedro de la Paz',
        postal_code: 4130000,
      },
      {
        name: 'San Rosendo',
        postal_code: 4570000,
      },
      {
        name: 'Santa Bárbara',
        postal_code: 4510000,
      },
      {
        name: 'Santa Juana',
        postal_code: 4230000,
      },
      {
        name: 'Talcahuano',
        postal_code: 4260000,
      },
      {
        name: 'Tirúa',
        postal_code: 4410000,
      },
      {
        name: 'Tomé',
        postal_code: 4160000,
      },
      {
        name: 'Tucapel',
        postal_code: 4480000,
      },
      {
        name: 'Yumbel',
        postal_code: 4580000,
      },
    ],
  },
  {
    name: 'Araucanía',
    roman_number: 'IX',
    number: 9,
    abbreviation: 'AR',
    communes: [
      {
        name: 'Angol',
        postal_code: 4650000,
      },
      {
        name: 'Carahue',
        postal_code: 5010000,
      },
      {
        name: 'Cholchol',
        postal_code: 5040000,
      },
      {
        name: 'Collipulli',
        postal_code: 4680000,
      },
      {
        name: 'Cunco',
        postal_code: 4890000,
      },
      {
        name: 'Curacautín',
        postal_code: 4700000,
      },
      {
        name: 'Curarrehue',
        postal_code: 4910000,
      },
      {
        name: 'Ercilla',
        postal_code: 4710000,
      },
      {
        name: 'Freire',
        postal_code: 4940000,
      },
      {
        name: 'Galvarino',
        postal_code: 5030000,
      },
      {
        name: 'Gorbea',
        postal_code: 4960000,
      },
      {
        name: 'Lautaro',
        postal_code: 4860000,
      },
      {
        name: 'Loncoche',
        postal_code: 4970000,
      },
      {
        name: 'Lonquimay',
        postal_code: 4690000,
      },
      {
        name: 'Los Sauces',
        postal_code: 4760000,
      },
      {
        name: 'Lumaco',
        postal_code: 4740000,
      },
      {
        name: 'Melipeuco',
        postal_code: 4900000,
      },
      {
        name: 'Nueva Imperial',
        postal_code: 5020000,
      },
      {
        name: 'Padre las Casas',
        postal_code: 4850000,
      },
      {
        name: 'Perquenco',
        postal_code: 4870000,
      },
      {
        name: 'Pitrufquén',
        postal_code: 4950000,
      },
      {
        name: 'Pucón',
        postal_code: 4920000,
      },
      {
        name: 'Purén',
        postal_code: 4750000,
      },
      {
        name: 'Renaico',
        postal_code: 4670000,
      },
      {
        name: 'Saavedra',
        postal_code: 5000000,
      },
      {
        name: 'Temuco',
        postal_code: 4780000,
      },
      {
        name: 'Teodoro Schmidt',
        postal_code: 4990000,
      },
      {
        name: 'Toltén',
        postal_code: 4980000,
      },
      {
        name: 'Traiguén',
        postal_code: 4730000,
      },
      {
        name: 'Victoria',
        postal_code: 4720000,
      },
      {
        name: 'Vilcún',
        postal_code: 4880000,
      },
      {
        name: 'Villarrica',
        postal_code: 4930000,
      },
    ],
  },
  {
    name: 'Los Ríos',
    roman_number: 'XIV',
    number: 14,
    abbreviation: 'LR',
    communes: [
      {
        name: 'Corral',
        postal_code: 5190000,
      },
      {
        name: 'Futrono',
        postal_code: 5180000,
      },
      {
        name: 'La Unión',
        postal_code: 5220000,
      },
      {
        name: 'Lago Ranco',
        postal_code: 5250000,
      },
      {
        name: 'Lanco',
        postal_code: 5160000,
      },
      {
        name: 'Los Lagos',
        postal_code: 5170000,
      },
      {
        name: 'Mariquina',
        postal_code: 5150000,
      },
      {
        name: 'Máfil',
        postal_code: 5200000,
      },
      {
        name: 'Paillaco',
        postal_code: 5230000,
      },
      {
        name: 'Panguipulli',
        postal_code: 5210000,
      },
      {
        name: 'Río Bueno',
        postal_code: 5240000,
      },
      {
        name: 'Valdivia',
        postal_code: 5090000,
      },
    ],
  },
  {
    name: 'Los Lagos',
    roman_number: 'X',
    number: 10,
    abbreviation: 'LL',
    communes: [
      {
        name: 'Ancud',
        postal_code: 5710000,
      },
      {
        name: 'Calbuco',
        postal_code: 5570000,
      },
      {
        name: 'Castro',
        postal_code: 5700000,
      },
      {
        name: 'Chaitén',
        postal_code: 5850000,
      },
      {
        name: 'Chonchi',
        postal_code: 5770000,
      },
      {
        name: 'Cochamó',
        postal_code: 5560000,
      },
      {
        name: 'Curaco de Vélez',
        postal_code: 5740000,
      },
      {
        name: 'Dalcahue',
        postal_code: 5730000,
      },
      {
        name: 'Fresia',
        postal_code: 5600000,
      },
      {
        name: 'Frutillar',
        postal_code: 5620000,
      },
      {
        name: 'Futaleufú',
        postal_code: 5870000,
      },
      {
        name: 'Hualaihué',
        postal_code: 5860000,
      },
      {
        name: 'Llanquihue',
        postal_code: 5610000,
      },
      {
        name: 'Los Muermos',
        postal_code: 5590000,
      },
      {
        name: 'Maullín',
        postal_code: 5580000,
      },
      {
        name: 'Osorno',
        postal_code: 5290000,
      },
      {
        name: 'Palena',
        postal_code: 5880000,
      },
      {
        name: 'Puerto Montt',
        postal_code: 5480000,
      },
      {
        name: 'Puerto Octay',
        postal_code: 5370000,
      },
      {
        name: 'Puerto Varas',
        postal_code: 5550000,
      },
      {
        name: 'Puqueldón',
        postal_code: 5760000,
      },
      {
        name: 'Purranque',
        postal_code: 5380000,
      },
      {
        name: 'Puyehue',
        postal_code: 5360000,
      },
      {
        name: 'Queilén',
        postal_code: 5780000,
      },
      {
        name: 'Quellón',
        postal_code: 5790000,
      },
      {
        name: 'Quemchi',
        postal_code: 5720000,
      },
      {
        name: 'Quinchao',
        postal_code: 5750000,
      },
      {
        name: 'Río Negro',
        postal_code: 5390000,
      },
      {
        name: 'San Juan de la Costa',
        postal_code: 5400000,
      },
      {
        name: 'San Pablo',
        postal_code: 5350000,
      },
    ],
  },
  {
    name: 'Aysén del Gral. Carlos Ibáñez del Campo',
    roman_number: 'XI',
    number: 11,
    abbreviation: 'AI',
    communes: [
      {
        name: 'Aysén',
        postal_code: 6000000,
      },
      {
        name: 'Chile Chico',
        postal_code: 6050000,
      },
      {
        name: 'Cisnes',
        postal_code: 6010000,
      },
      {
        name: 'Cochrane',
        postal_code: 6100000,
      },
      {
        name: 'Coyhaique',
        postal_code: 5950000,
      },
      {
        name: 'Guaitecas',
        postal_code: 6020000,
      },
      {
        name: 'Lago Verde',
        postal_code: 5960000,
      },
      {
        name: 'Río Ibáñez',
        postal_code: 6060000,
      },
      {
        name: 'Tortel',
        postal_code: 6120000,
      },
    ],
  },
  {
    name: 'Magallanes y de la Antártica Chilena',
    roman_number: 'XII',
    number: 12,
    abbreviation: 'MA',
    communes: [
      {
        name: 'Antártica',
        postal_code: 6360000,
      },
      {
        name: 'Cabo de Hornos',
        postal_code: 6350000,
      },
      {
        name: 'Laguna Blanca',
        postal_code: 6250000,
      },
      {
        name: 'Natales',
        postal_code: 6160000,
      },
      {
        name: 'Porvenir',
        postal_code: 6300000,
      },
      {
        name: 'Primavera',
        postal_code: 6310000,
      },
      {
        name: 'Punta Arenas',
        postal_code: 6200000,
      },
      {
        name: 'Río Verde',
        postal_code: 6240000,
      },
      {
        name: 'San Gregorio',
        postal_code: 6260000,
      },
      {
        name: 'Timaukel',
        postal_code: 6320000,
      },
      {
        name: 'Torres del Paine',
        postal_code: 6170000,
      },
    ],
  },
];
