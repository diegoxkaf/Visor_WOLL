const riesgosConfig = {
  capas: [
    "volcanes_activos",
    "grandes_terremotos",
    "incendios_forestales",
    "puntos_criticos_invierno_2024",
    "riesgo_puntos_criticos",
    "riesgo_remocion_masa",
    "riesgo_punto_encuentro",
    "riesgo_cota30mt",
    "riesgo_linea_segura",
    "riesgo_via_evacuacion",
    "riesgo_area_evacuar",
    "limite_comunal_linea",
    "toponimia",
  ],
  estilo: {
    volcanes_activos: {
      url: "volcanes_activos.geojson",
      type: "point", // Tipo de capa: point, line, polygon
      atributo: "Categoría", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Volcanes Activos", // Nombre personalizado de la Capa
      iconos: {
        5: "volcan_activo.png",
      },
      estiloAlternativo: {
        color: "#FF6B6B", // Color del borde del punto
        fillColor: "#FF6B6B", // Color de relleno del punto
        radius: 5, // Radio del punto
        weight: 1, // Grosor del borde del punto
        fillOpacity: 0.8, // Transparencia del relleno del punto
      },
      popupCampos: [
        "Sistema volcánico",
        "Descripcion",
        "Posicion 2023",
        "Categoría",
        "Nota",
        "Total Factores de Peligro",
        "Nota 3",
        "Total Factores de Exposicion",
        "Nota 2:",
        "Total Riesgo Especifico",
        "Origen del Dato",
      ],
      alias: {
        "Sistema volcánico": "Sistema volcánico",
        Descripcion: "Descripcion",
        "Posicion 2023": "Posicion en el Ranking",
        Categoría: "Categoria en la escala de Riesgo",
        Nota: "Escala de Riesgo",
        "Total Factores de Peligro": "Puntaje Factor de Peligro",
        "Nota 3": "Factores Considerados en el Calculo de Peligro",
        "Total Factores de Exposicion": "Puntaje Factor de Exposicion",
        "Nota 2:": "Factores Considerados en el Calculo de Exposicion",
        "Total Riesgo Especifico": "Puntaje Total Riesgo Especifico",
        "Origen del Dato": "Origen de la Informacion",
      },
    },
    grandes_terremotos: {
      url: "grandes_terremotos.geojson",
      type: "point", // Tipo de capa: point, line, polygon
      atributo: "Categoría", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Grandes Sismos", // Nombre personalizado de la Capa
      iconos: {
        "": "volcan_activo.png",
      },
      estiloAlternativo: {
        color: "#FF6B6B", // Color del borde del punto
        fillColor: "#FF6B6B", // Color de relleno del punto
        radius: 5, // Radio del punto
        weight: 1, // Grosor del borde del punto
        fillOpacity: 0.8, // Transparencia del relleno del punto
      },
      popupCampos: [
        "Fecha loca",
        "Hora local",
        "Magnitu_Ms",
        "Magnitu_Mw",
        "Profundid_",
        "Descripcio",
        "Origen",
        "Link_Data",
      ],
      alias: {
        "Fecha loca": "Fecha del Evento",
        "Hora local": "Hora Local",
        Magnitu_Ms: "Magnitud Ms",
        Magnitu_Mw: "Magnitud Mw",
        Profundid_: "Profundidad en Km",
        Descripcio: "Descripcion",
        Origen: "Origen de la Informacion",
        "Link_Data:": "Acceso al Recurso",
      },
    },
    incendios_forestales: {
      url: "incendios_forestales.geojson",
      type: "point", // Tipo de capa: point, line, polygon
      atributo: "codreg", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Incendios Forestales 2015 - 2024", // Nombre personalizado de la Capa
      iconos: {
        3: "incendio_forestal.png",
      },
      estiloAlternativo: {
        color: "#FF6B6B", // Color del borde del punto
        fillColor: "#FF6B6B", // Color de relleno del punto
        radius: 5, // Radio del punto
        weight: 1, // Grosor del borde del punto
        fillOpacity: 0.8, // Transparencia del relleno del punto
      },
      popupCampos: [
        "nom_incen",
        "temporada",
        "superficie",
        "total_plan",
        "arbolado",
        "matorral",
        "pastizal",
        "agricola",
        "desechos",
        "total_otra",
        "comuna",
        "causa_gene",
        "causa_espe",
        "fh_inicio",
        "fh_extinci",
        "Descipcion",
        "Origen del Dato",
      ],
      alias: {
        nom_incen: "Nombre del Incendio",
        temporada: "Temporada del Incendio",
        superficie: "Superficie Total Quemada en Hectareas",
        total_plan: "Plantaciones (Pino, Eucaliptus, Otros)quemadas en Ha",
        arbolado: "Arbolado quemado en Ha",
        matorral: "Matorral quemado en Ha",
        pastizal: "Pastizal quemado en Ha",
        agricola: "Suelo Agricola quemado en Ha",
        desechos: "Desechos quemados en Ha",
        total_otra: "Otras Superficies quemadas en Ha",
        comuna: "Comuna",
        causa_gene: "Causa General",
        causa_espe: "Causa Especifica",
        fh_inicio: "Fecha de Inicio del Incendio",
        fh_extinci: "Fecha de Termino del Incendio",
        Descripcion: "Descripcion",
        "Origen del Dato": "Origen de la Informacion",
      },
    },
    puntos_criticos_invierno_2024: {
      url: "puntos_criticos_invierno_2024.geojson",
      type: "point", // Tipo de capa: point, line, polygon
      atributo: "region", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Puntos Criticos Invierno 2024", // Nombre personalizado de la Capa
      iconos: {
        ATACAMA: "puntos_criticos.png",
      },
      estiloAlternativo: {
        color: "#FF6B6B", // Color del borde del punto
        fillColor: "#FF6B6B", // Color de relleno del punto
        radius: 5, // Radio del punto
        weight: 1, // Grosor del borde del punto
        fillOpacity: 0.8, // Transparencia del relleno del punto
      },
      popupCampos: [
        "sector",
        "causa_punt",
        "f1_accione",
        "f2_accione",
        "riesgo_2024",
        "Descripcion",
        "Ultima Actualizacion",
        "Origen Data",
      ],
      alias: {
        sector: "Sector",
        causa_punt: "Causa del Evento",
        f1_accione: "Acciones",
        f2_accione: "Acciones Complementarias",
        si_la_resp: "Responsable",
        riesgo_2024: "Nivel de Riesgo",
        Descripcion: "Descripcion",
        "Ultima Actualizacion": " Ultima Actualizacion del Dato",
        "Origen Dato": "Origen de la Informacion",
      },
    },
    riesgo_remocion_masa: {
      url: "riesgo_remocion_masa.geojson",
      type: "point", // Tipo de capa: point, line, polygon
      atributo: "Tipo de remoción", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Remocion en Masa", // Nombre personalizado de la Capa
      iconos: {
        Flujo: "derrumbes.png",
      },
      estiloAlternativo: {
        color: "#FF6B6B", // Color del borde del punto
        fillColor: "#FF6B6B", // Color de relleno del punto
        radius: 5, // Radio del punto
        weight: 1, // Grosor del borde del punto
        fillOpacity: 0.8, // Transparencia del relleno del punto
      },
      popupCampos: [
        "Codigo",
        "Tipo de remoción",
        "Tipo de material",
        "Clasificación",
        "Detonante",
        "Día del evento",
        "Mes de inicio",
        "Año del evento",
        "Estación",
        "Enlace del informe",
        "Autor del informe",
        "Fuente de información",
        "Descripcion",
        "Origen Dato",
      ],
      alias: {
        Codigo: "Codigo",
        "Tipo de remoción": "Tipo de remoción",
        "Tipo de material": "Tipo de material",
        Clasificación: "Clasificación",
        Detonante: "Detonante",
        "Día del evento": "Día del evento",
        "Mes de inicio": "Mes de inicio",
        "Año del evento": "Año del evento",
        Estación: "Estación",
        "Enlace del informe": "Enlace del informe",
        "Autor del informe": "Autor del informe",
        "Fuente de información": "Fuente de información",
        Descripcion: "Descripcion",
        "Origen Dato": "Origen del Dato",
      },
    },
    riesgo_punto_encuentro: {
      url: "riesgo_punto_encuentro.geojson",
      type: "point", // Tipo de capa: point, line, polygon
      atributo: "nom_com", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Puntos de Encuentro", // Nombre personalizado de la Capa
      iconos: {
        "La Higuera": "punto_encuentro.png",
      },
      estiloAlternativo: {
        color: "#FF6B6B", // Color del borde del punto
        fillColor: "#FF6B6B", // Color de relleno del punto
        radius: 5, // Radio del punto
        weight: 1, // Grosor del borde del punto
        fillOpacity: 0.8, // Transparencia del relleno del punto
      },
      popupCampos: [
        "name",
        "sector",
        "Descripcion",
        "Recomendaciones SENAPRED",
        "Origen Data",
      ],
      alias: {
        name: "Nombre del Punto",
        sector: "Sector",
        Descripcion: "Descripcion",
        "Recomendaciones SENAPRED": "Recomendaciones SENAPRED",
        "Origen Data": "Origen de la Informacion",
      },
    },
    riesgo_cota30mt: {
      url: "riesgo_cota30mt.geojson",
      type: "line",
      nombrePersonalizado: "Cota 30 Mts.",
      atributo: "Descripcion", // Asegúrate de que este atributo exista en tu GeoJSON
      colores: {
        "Cota 30 mts. Amenaza por Tsunami": "#ff1e00",
      }, // Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
      estiloBase: {
        weight: 4,
        opacity: 0.8,
        dashArray: "1",
      },
      popupCampos: ["Descripcion", "Recomendaciones SENAPRED", "Origen Data"],
      alias: {
        Descripcion: "Descripcion",
        "Recomendaciones SENAPRED": "Recomendaciones SENAPRED",
        "Origen Data": "Origen de la Data",
      },
    },
    riesgo_linea_segura: {
      url: "riesgo_linea_segura.geojson",
      type: "line",
      nombrePersonalizado: "Linea Segura",
      atributo: "tipo", // Asegúrate de que este atributo exista en tu GeoJSON
      colores: {
        "Límite de área de evacuación": "#ff1e00",
      }, // Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
      estiloBase: {
        weight: 4,
        opacity: 0.8,
        dashArray: "1",
      },
      popupCampos: ["Descripcion", "Recomendaciones SENAPRED", "Origen Data"],
      alias: {
        Descripcion: "Descripcion",
        "Recomendaciones SENAPRED": "Recomendaciones SENAPRED",
        "Origen Data": "Origen de la Data",
      },
    },
    riesgo_via_evacuacion: {
      url: "riesgo_via_evacuacion.geojson",
      type: "line",
      nombrePersonalizado: "Via de Evacuacion",
      atributo: "nom_com", // Asegúrate de que este atributo exista en tu GeoJSON
      colores: {
        "La Higuera": "#3953ff",
      }, // Configuracion del Estilo Base de la Linea (Ancho, transparencia, Segmentacion de la Linea)
      estiloBase: {
        weight: 4,
        opacity: 0.8,
        dashArray: "1",
      },
      popupCampos: [
        "name",
        "sector",
        "Descripcion",
        "Recomendaciones SENAPRED",
        "Origen Data",
      ],
      alias: {
        name: "Codigo de la Via de Evacuacion",
        sector: "Sector",
        Descripcion: "Descripcion",
        "Recomendaciones SENAPRED": "Recomendaciones SENAPRED",
        "Origen Data": "Origen de la Data",
      },
    },
    riesgo_area_evacuar: {
      url: "riesgo_area_evacuar.geojson",
      type: "polygon", // Tipo de capa: point, line, polygon
      atributo: "Descripcion", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Area a Evacuar", // Nombre personalizado de la Capa
      atributo: "Descripcion",
      colores: {
        "Area de Evacuacion por Amenaza de Tsunami": "#ff557f",
      },
      popupCampos: [
        "sector",
        "Descripcion",
        "Recomendaciones SENAPRED",
        "Origen Data",
      ],
      alias: {
        sector: "Sector",
        Descripcion: "Region",
        "Recomendaciones SENAPRED": "Recomendaciones de SENAPRED",
        "Origen Data": "Origen de la Informacion",
      },
      // Personalizar el color del borde y la transparencia
      estiloBase: {
        color: "#ff557f", // Color del borde
        weight: 1, // Grosor del borde
        // Opacity: sirve para darle transparencia a las lineas
        fillOpacity: 0.5, // Transparencia del relleno
      },
    },
    limite_comunal_linea: {
      url: "limite_comunal_linea.geojson",
      type: "line",
      nombrePersonalizado: "Limite Comunal",
      atributo: "REGION",
      colores: {
        3: "#333644",
      },
      popupCampos: ["NOM_COMUNA", "NOM_PROVIN", "NOM_REGION"],
      alias: {
        NOM_COMUNA: "Comuna",
        NOM_PROVIN: "Provincia",
        NOM_REGION: "Region",
      },
      // Personalizar el color del borde y la transparencia
      estiloBase: {
        color: "#2d3436", // Color del borde
        weight: 2, // Grosor del borde
        // Opacity: sirve para darle transparencia a las lineas
        fillOpacity: 0, // Transparencia del relleno
      },
    },
    toponimia: {
      url: "toponimia.geojson",
      type: "point", // Tipo de capa: point, line, polygon
      atributo: "Tipo", // Asegúrate de que este atributo exista en tu GeoJSON
      nombrePersonalizado: "Toponimia", // Nombre personalizado de la Capa
      iconos: {
        // Edicion de Iconos
        Asentamiento: "localidad.png",
      },
      estiloAlternativo: {
        // Icono alternativo en caso que no encuentre el icono
        color: "#FF6B6B", // Color del borde del punto
        fillColor: "#FF6B6B", // Color de relleno del punto
        radius: 4, // Radio del punto
        weight: 1, // Grosor del borde del punto
        fillOpacity: 0.8, // Transparencia del relleno del punto
      },
      popupCampos: ["Nombre"],
      alias: {
        Nombre: "Nombre",
      },
      etiquetas: {
        campo: "Nombre",
        estilo: {
          color: "#000000", // Color del texto
          fontSize: "9px", // Tamaño de la fuente
          fontFamily: "Arial, sans-serif", // Familia de la fuente
          bufferColor: "#88304E", // Color del contorno
          bufferWidth: 0.3, // Ancho del contorno
          offsetY: -20, // Añadida propiedad para el offset vertical
        },
      },
    },
  },
  leyenda: {},
};

export default riesgosConfig;
