import {
  Style,
  Stroke,
  Fill,
  Circle,
  Icon,
  Text,
  Circle as CircleStyle,
} from 'ol/style'
export default {
  disasterLineFunc: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let sign = feature.get('sign')

    let style
    if (feature.getGeometry().getType() == 'Point') {
      let src
      if (sign != true) {
        switch (featureRemark.notice_category) {
          case '預警性管制':
            src = require('@/assets/show_point/point_7_2.png')
            break
          case '災阻':
            src = require('@/assets/show_point/point_7_1.png')
            break
          case '災情':
            src = require('@/assets/show_point/point_7_4.png')
            break
        }
      } else {
        src = require('@/assets/show_point/point_7_1.png')
        // switch (featureRemark.notice_category) {
        //   case "預警性管制":
        //     src = require("@/assets/show_point/point_7_1.png")
        //   break
        //   case "災阻":
        //     src = require("@/assets/show_point/point_7_3.png")
        //   break
        //   case "災情":
        //     src = require("@/assets/show_point/point_7_4.png")
        //   break
        // }
      }
      style = new Style({
        image: new Icon({
          src: src,
          size: [30, 30],
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
        }),
      })
    } else {
      style = new Style({
        stroke: new Stroke({
          color: 'rgba(181, 27, 27)',
          width: 10,
        }),
      })
    }
    return style
  },
  disasterLineClusterFunc: function (feature) {
    let featureRemark = ''
    let size = ''
    if (feature.get('features') != undefined) {
      featureRemark = feature.get('features')[0].get('featureRemark')
      size = feature.get('features').length
    }
    let style
    if (feature.getGeometry().getType() == 'Point') {
      let src = ''
      switch (featureRemark.notice_category) {
        case '預警性管制':
          src = require('@/assets/show_point/point_7_1.png')
          break
        case '災阻':
          src = require('@/assets/show_point/point_7_3.png')
          break
        case '災情':
          src = require('@/assets/show_point/point_7_4.png')
          break
      }
      style = new Style({
        image: new Icon({
          src: src,
          size: [30, 30],
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
        }),
        text: new Text({
          text: size.toString(),
          fill: new Fill({
            color: '#fff',
          }),
          scale: [1.7, 1.7],
          backgroundFill: new Fill({
            color: 'rgb(120, 120, 120, 0.7)',
          }),
          offsetY: 15,
          padding: [1, 7, 0, 10],
          textAlign: 'center',
        }),
      })
    }
    return style
  },
  closeRoadLineFunc: function (feature) {
    let style
    if (feature.getGeometry().getType() == 'Point') {
      let src = require('@/assets/show_point/point_7_1.png')
      style = new Style({
        image: new Icon({
          src: src,
          size: [30, 30],
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
        }),
      })
    } else {
      style = new Style({
        stroke: new Stroke({
          color: 'rgba(181, 27, 27)',
          width: 10,
        }),
      })
    }
    return style
  },
  roadLine: new Style({
    stroke: new Stroke({
      color: 'rgba(245,0,87,1)',
      width: 5,
    }),
  }),
  roadStakePoint: function (feature) {
    return new Style({
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({
          color: 'rgba(170,0,255,1)',
        }),
      }),
      text: new Text({
        text: feature.get('featureRemark').text,
        scale: [1.7, 1.7],
        offsetY: -25,
        padding: [1, 7, 0, 10],
        textAlign: 'center',
        fill: new Fill({
          color: 'rgba(255,255,255,1)',
        }),
        backgroundFill: new Fill({
          color: 'rgba(74,20,140,0.7)',
        }),
        backgroundStroke: new Stroke({
          color: 'rgba(123,31,162,1)',
          width: 2,
        }),
      }),
    })
  },
  exportExtentPolygon: new Style({
    fill: new Fill({
      color: 'rgba(255,255,255,0)',
    }),
    stroke: new Stroke({
      color: 'rgba(255,204,51,1)',
      width: 2,
    }),
  }),
  currentPositionPoint: new Style({
    image: new Circle({
      radius: 10,
      fill: new Fill({
        color: 'rgba(213,0,0,1)',
      }),
    }),
  }),
  remoteControlPoint: new Style({
    image: new Circle({
      radius: 10,
      fill: new Fill({
        color: 'rgba(98,0,234,1)',
      }),
    }),
  }),
  nearendControlPoint: new Style({
    image: new Circle({
      radius: 10,
      fill: new Fill({
        color: 'rgba(255,109,0,1)',
      }),
    }),
  }),
  controlRoadLineString: new Style({
    stroke: new Stroke({
      color: 'rgba(3,169,244,1)',
      width: 8,
    }),
  }),
  alternativeRoadLineString: new Style({
    stroke: new Stroke({
      color: 'rgba(98,0,234,1)',
      width: 4,
      lineDash: [10, 8],
    }),
  }),
  controlRoadPolygon: new Style({
    stroke: new Stroke({
      color: 'rgba(3,169,244,1)',
      width: 8,
    }),
  }),
  alternativeRoadPolygon: new Style({
    stroke: new Stroke({
      color: 'rgba(98,0,234,1)',
      width: 4,
      lineDash: [10, 8],
    }),
  }),
  line01: new Style({
    stroke: new Stroke({
      color: 'rgba(203,67,53,1)',
      width: 5,
    }),
  }),
  customPointFunc: function (feature) {
    let img = feature.get('imgName')

    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/' + img + '.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  floodPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point-04-3.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  rainPointFunc: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let statusIcon = require('@/assets/show_point/point-04-1.png')
    if (featureRemark.hour_24 >= 500) {
      statusIcon = require('@/assets/show_point/point-04-1_4.png')
    } else if (featureRemark.hour_24 >= 350 || featureRemark.hour_3 >= 200) {
      statusIcon = require('@/assets/show_point/point-04-1_3.png')
    } else if (featureRemark.hour_24 >= 200 || featureRemark.hour_3 >= 100) {
      statusIcon = require('@/assets/show_point/point-04-1_2.png')
    } else if (featureRemark.hour_24 >= 80 || featureRemark.hour_1 >= 40) {
      statusIcon = require('@/assets/show_point/point-04-1_1.png')
    }
    return new Style({
      image: new Icon({
        src: statusIcon,
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  rainStationPointFunc: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let statusIcon = require('@/assets/show_point/point-04-1.png')
    return new Style({
      image: new Icon({
        src: statusIcon,
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
      text: new Text({
        text: featureRemark.Name,
        font: '12px sans-serif',
        offsetY: 10,
        fill: new Fill({
          color: '#000',
        }),
      }),
    })
  },
  rawPointFunc: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let statusIcon = require('@/assets/show_point/point-04-2.png')
    if (
      featureRemark.Value >= featureRemark.Alertlv1 &&
      featureRemark.Alertlv1 != ''
    ) {
      statusIcon = require('@/assets/show_point/point-04-2_1.png')
    } else if (
      featureRemark.Value >= featureRemark.Alertlv2 &&
      featureRemark.Alertlv1 > featureRemark.Value &&
      featureRemark.Alertlv2 != ''
    ) {
      statusIcon = require('@/assets/show_point/point-04-2_2.png')
    } else if (
      featureRemark.Value >= featureRemark.Alertlv3 &&
      featureRemark.Alertlv2 > featureRemark.Value &&
      featureRemark.Alertlv3 != ''
    ) {
      statusIcon = require('@/assets/show_point/point-04-2_3.png')
    }
    return new Style({
      image: new Icon({
        src: statusIcon,
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  observatoryPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_6.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  dsPointFunc: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let color
    let org = '局'
    if (featureRemark.org_2 != '') {
      org = '處'
      if (featureRemark.org_3 != '') {
        org = '段'
      }
    }
    return new Style({
      image: new Circle({
        radius: 15,
        fill: new Fill({
          color: color,
        }),
      }),
      text: new Text({
        text: org,
        font: '20px bold',
        textAlign: 'center',
        fill: new Fill({
          color: 'rgba(255,255,255,1)',
        }),
      }),
    })
  },
  dsTotalPointFunc: function (feature) {
    let color
    let org = '處'
    return new Style({
      image: new Circle({
        radius: 15,
        fill: new Fill({
          color: color,
        }),
      }),
      text: new Text({
        text: org,
        font: '20px bold',
        textAlign: 'center',
        fill: new Fill({
          color: 'rgba(255,255,255,1)',
        }),
      }),
    })
  },
  dpEventPointFunc: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let color
    let org = '局'
    if (featureRemark.org_2 != '') {
      org = '處'
      if (featureRemark.org_3 != '') {
        org = '段'
      }
    }
    if (featureRemark.level == '二級') {
      color = 'rgba(33,150,243,1)'
    } else if (featureRemark.level == '一級') {
      color = 'rgba(255,235,59,1)'
    }
    return new Style({
      image: new Circle({
        radius: 15,
        fill: new Fill({
          color: color,
        }),
      }),
      text: new Text({
        text: org,
        font: '20px bold',
        textAlign: 'center',
        fill: new Fill({
          color: 'rgba(255,255,255,1)',
        }),
      }),
    })
  },
  reservoirPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_7.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  currentPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/pin_01.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
      text: new Text({
        text: '現在位置',
        font: '12px bold',
        offsetY: 10,
        fill: new Fill({
          color: 'gray',
        }),
      }),
    })
  },
  earthquakePointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point-05-1.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  hospitalPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_1.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  policePointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_2.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  firedepartmentPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_5.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  oilPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_4.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  schoolPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_3.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  freewayPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_8_2.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  highwayPointFunc: function (feature) {
    return new Style({
      image: new Icon({
        src: require(`@/assets/show_point/highway/${feature.get(
          'layerName'
        )}.png`),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  countyRoadPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point5_8_3.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  typhoonPointFunc: function (feature) {
    let url = feature.get('styleUrl')
    let statusIcon
    let scale
    if (url.indexOf('fcst') >= 0) {
      statusIcon = require('@/assets/show_point/typhoon-position.png')
      scale = 0.4
    } else if (url.indexOf('current') >= 0) {
      statusIcon = require('@/assets/show_point/typhoon.png')
      scale = 0.6
    }
    return new Style({
      image: new Icon({
        src: statusIcon,
        scale: scale,
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  debrisPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point-04-4.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  tunnelPointFunc: function () {
    return new Style({
      image: new Icon({
        src: require('@/assets/show_point/point-03-5.png'),
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  roadInfoManagementAlert: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let statusIcon = require('@/assets/show_point/point6_alert1.png')
    if (featureRemark.type == '⼆級監控路段') {
      statusIcon = require('@/assets/show_point/point6_alert2.png')
    }
    return new Style({
      image: new Icon({
        src: statusIcon,
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  slopePointFunc: function (feature) {
    let featureRemark = feature.get('featureRemark')
    let slope_lv
    if (featureRemark.slope_lv == 'A級') {
      slope_lv = require('@/assets/show_point/point_8_1.png')
    } else if (featureRemark.slope_lv == 'B級') {
      slope_lv = require('@/assets/show_point/point_8_2.png')
    } else if (featureRemark.slope_lv == 'C級') {
      slope_lv = require('@/assets/show_point/point_8_3.png')
    } else if (featureRemark.slope_lv == 'D級') {
      slope_lv = require('@/assets/show_point/point_8_4.png')
    } else if (featureRemark.slope_lv == '其他') {
      slope_lv = require('@/assets/show_point/point_8_5.png')
    }
    return new Style({
      image: new Icon({
        src: slope_lv,
        size: [30, 30],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
      }),
    })
  },
  monitorRoadPointFunc: function (feature) {
    let style
    if (feature.getGeometry().getType() == 'Point') {
      let featureRemark = feature.get('featureRemark')
      let org
      if (featureRemark.monitor_type == '一級監控路段') {
        org = '一'
      } else if (featureRemark.slope_lv == '二級監控路段') {
        org = '二'
      } else if (featureRemark.slope_lv == '一級監控橋梁') {
        org = '橋'
      } else if (featureRemark.slope_lv == '橋梁全流域') {
        org = '流'
      } else if (featureRemark.slope_lv == '淹水泥流水瀑路段') {
        org = '淹'
      } else if (featureRemark.slope_lv == '易受浪襲路段') {
        org = '浪'
      }
      style = new Style({
        image: new Circle({
          radius: 15,
          fill: new Fill({
            color: 'rgba(33,150,243,1)',
          }),
        }),
        text: new Text({
          text: org,
          font: '20px bold',
          textAlign: 'center',
          fill: new Fill({
            color: 'rgba(255,255,255,1)',
          }),
        }),
      })
    } else {
      style = new Style({
        stroke: new Stroke({
          color: 'rgba(181, 27, 27)',
          width: 10,
        }),
      })
    }
    return style
  },
  islandPointFunc: new Style({
    fill: new Fill({
      color: 'rgba(235, 156, 73, 0.8)',
    }),
    stroke: new Stroke({
      color: 'rgba(235, 156, 73, 0.8)',
      width: 2,
    }),
  }),
  line02: new Style({
    stroke: new Stroke({
      color: 'rgba(203,67,53,1)',
      width: 5,
    }),
  }),
  polygon02: new Style({
    fill: new Fill({
      color: 'rgba(255,204,51,0.2)',
    }),
    stroke: new Stroke({
      color: 'rgba(255,204,51,1)',
      width: 2,
    }),
  }),
  line03: new Style({
    stroke: new Stroke({
      color: 'rgba(203,67,53,1)',
      width: 5,
    }),
  }),
  polygon03: new Style({
    fill: new Fill({
      color: 'rgba(255,204,51,0.2)',
    }),
    stroke: new Stroke({
      color: 'rgba(255,204,51,1)',
      width: 2,
    }),
  }),
  line04a: new Style({
    stroke: new Stroke({
      color: 'rgba(255,235,59,1)',
      width: 5,
    }),
  }),
  line04b: new Style({
    stroke: new Stroke({
      color: 'rgba(76,175,80,1)',
      width: 5,
    }),
  }),
  line04c: new Style({
    stroke: new Stroke({
      color: 'rgba(33,150,243,1)',
      width: 5,
    }),
  }),
  line04d: new Style({
    stroke: new Stroke({
      color: 'rgba(203,67,53,1)',
      width: 5,
    }),
  }),
  line05: new Style({
    stroke: new Stroke({
      color: 'rgba(203,67,53,1)',
      width: 5,
    }),
  }),
  line06: new Style({
    stroke: new Stroke({
      color: 'rgba(242, 160, 49)',
      width: 5,
    }),
  }),
  point06a: new Style({
    image: new Circle({
      radius: 15,
      fill: new Fill({
        color: 'rgba(255,235,59,1)',
      }),
    }),
    text: new Text({
      text: '處',
      font: '20px bold',
      textAlign: 'center',
    }),
  }),
  point06b: new Style({
    image: new Circle({
      radius: 15,
      fill: new Fill({
        color: 'rgba(33,150,243,1)',
      }),
    }),
    text: new Text({
      text: '處',
      font: '20px bold',
      fill: new Fill({
        color: 'rgba(255,255,255,1)',
      }),
      textAlign: 'center',
    }),
  }),
  point06c: new Style({
    image: new Circle({
      radius: 15,
      fill: new Fill({
        color: 'rgba(255,235,59,1)',
      }),
    }),
    text: new Text({
      text: '段',
      font: '20px bold',
      textAlign: 'center',
    }),
  }),
  point06d: new Style({
    image: new Circle({
      radius: 15,
      fill: new Fill({
        color: 'rgba(33,150,243,1)',
      }),
    }),
    text: new Text({
      text: '段',
      font: '20px bold',
      fill: new Fill({
        color: 'rgba(255,255,255,1)',
      }),
      textAlign: 'center',
    }),
  }),
  kmlStyle: new Style({
    fill: new Fill({
      color: 'rgba(51,153,204,0.2)',
    }),
    stroke: new Stroke({
      color: 'rgba(254,85,0,1)',
      width: 10,
    }),
    image: new Circle({
      radius: 10,
      fill: new Fill({
        color: 'rgba(51,153,204,1)',
      }),
    }),
  }),
  default: new Style({
    fill: new Fill({
      color: 'rgba(51,153,204,0.2)',
    }),
    stroke: new Stroke({
      color: 'rgba(51,153,204,1)',
      width: 2,
    }),
    image: new Circle({
      radius: 7,
      fill: new Fill({
        color: 'rgba(51,153,204,1)',
      }),
    }),
  }),
}
