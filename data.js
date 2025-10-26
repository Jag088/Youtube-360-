var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingresso",
      "name": "Ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0.00008799703410744542,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.00472372348636263,
          "pitch": -0.029820285957987025,
          "rotation": 0.7853981633974483,
          "target": "2-soggiorno-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom-",
      "name": "Bedroom ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.646061481172799,
          "pitch": -0.0586595439019959,
          "rotation": 0,
          "target": "2-soggiorno-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-soggiorno-",
      "name": "Soggiorno ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9893384171200452,
          "pitch": 0.002999809138700016,
          "rotation": 10.995574287564278,
          "target": "0-ingresso"
        },
        {
          "yaw": -2.3134602119222407,
          "pitch": 0.05609195783383214,
          "rotation": 10.995574287564278,
          "target": "1-bedroom-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
