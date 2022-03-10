// https://api.tgos.tw//TGOS_MAP_API/Web/Sample_Codes/TGOSMapAPI/QuickExample/OpenLayers/TGAgent_OL.js

/*
export default {
  getTileAgentPath: function () {
    return "api.tgos.tw/"
  },
  getWebProtocal: function () {
    return 'https:' == document.location.protocol ? 'https://' : 'http://'
  },
  TGOS: {
    TILE_AGENT_PATH: this.getWebProtocal() + this.getTileAgentPath() + "TileAgent",
    CoordSys: {
      EPSG3857: 'EPSG3857',
      EPSG4326: 'EPSG4326',
      EPSG3826: 'EPSG3826',
      EPSG3825: 'EPSG3825'
    },
    TGMapTileId: {
      TGOSMAP: 'TGOSMAP',
      F2IMAGE: 'F2IMAGE',
      ROADMAP: 'ROADMAP',
      HILLSHADE: 'HILLSHADE',
      HILLSHADEMIX: 'HILLSHADEMIX',
      MOTCMAP: 'MOTCMAP',
      NLSCMAP: 'NLSCMAP',
      CITYZONING: 'CITYZONING',
      RURALZONING: 'RURALZONING',
      LANDUSE: 'LANDUSE',
      TOPO1000: 'TOPO1000'
    },
    getTileAgentPath: function (mapTileId, crs) {
      let path = this.TGOS.TILE_AGENT_PATH + '/' + mapTileId
      if (crs == 'EPSG3857') {
        path += '_W'
      }
      if (crs == 'EPSG3825') {
        path += '_119'
      }
      path += '.aspx'
      return path
    },
    TGKey: function (appID, apiKey) {
      let appID_ = appID
      let apiKey_ = apiKey
      this.setAppID = function (id) {
        appID_ = id
      }
      this.getAppID = function () {
        return appID_
      }
      this.setApiKey = function (key) {
        apiKey_ = key
      }
      this.getApiKey = function () {
        return apiKey_
      }
    }
  }
}
*/

// TODO : 圖磚代理程式的網址
var getTileAgentPath = function () {
  //return ("203.66.168.227/");  // keep last '/'
  return 'api.tgos.tw/' // keep last '/'
}

//=== 修改上面的 Agent 位址 ===========================================================

var getWebProtocal = function () {
  return 'https:' == document.location.protocol ? 'https://' : 'http://'
}
var TGOS = TGOS || {
  TILE_AGENT_PATH: getWebProtocal() + getTileAgentPath() + 'TileAgent',
}

TGOS.CoordSys = TGOS.CoordSys || {}

TGOS.CoordSys = {
  EPSG3857: 'EPSG3857',
  EPSG4326: 'EPSG4326',
  EPSG3826: 'EPSG3826',
  EPSG3825: 'EPSG3825',
}

TGOS.TGMapTileId = TGOS.TGMapTileId || {}

TGOS.TGMapTileId = {
  TGOSMAP: 'TGOSMAP',
  F2IMAGE: 'F2IMAGE',
  ROADMAP: 'ROADMAP',
  HILLSHADE: 'HILLSHADE',
  HILLSHADEMIX: 'HILLSHADEMIX',
  MOTCMAP: 'MOTCMAP',
  NLSCMAP: 'NLSCMAP',
  CITYZONING: 'CITYZONING',
  RURALZONING: 'RURALZONING',
  LANDUSE: 'LANDUSE',
  TOPO1000: 'TOPO1000',
}

TGOS.getTileAgentPath = function (mapTileId, crs) {
  var path = TGOS.TILE_AGENT_PATH + '/' + mapTileId
  if (crs == 'EPSG3857') {
    path += '_W'
  }
  if (crs == 'EPSG3825') {
    path += '_119'
  }
  path += '.aspx'

  return path
}

TGOS.TGKey = function (appID, apiKey) {
  var appID_ = appID
  var apiKey_ = apiKey

  this.setAppID = function (id) {
    appID_ = id
  }

  this.getAppID = function () {
    return appID_
  }

  this.setApiKey = function (key) {
    apiKey_ = key
  }

  this.getApiKey = function () {
    return apiKey_
  }
}

export default TGOS
