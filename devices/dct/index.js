export const brand = {
  "name": "DCT",
  "website": "https://www.digitalcomtech.com/",
  "description": "You can copy and paste this script to a new empty text file and have it save with a .tmf extension and load it with Syrus Desk. #Syrus SB script #Getting Started example #Delete any previous configuration \u003ESRT;CONFIG\u003C \u003ESXADP**U\u003C #configuring the APN \u003ESRFA{{apn}}\u003C \u003ESRFI\u003C \u003ESRFL{{apnu}}\u003C \u003ESRFP{{apnp}}\u003C #The remote AVL server address and port \u003ESXADP0000d.plaspy.com;8888\u003C #A Destination Address holding the server destination \u003ESDA4;P00\u003C #Time-only Time And Distance signal definition \u003ESTD80300\u003C #Event triggered by T\u0026D signal \u003ESED37NV4;TD8\u002B\u003C #Input report event \u003ESED05NV4;IP3\u002B\u003C #end",
  "image": require("./logo.png").default,
  "trackers": [
    {
      "name": "Solar Asset Tracker",
      "slug": "solar_asset_tracker",
      "image": require("./solar_asset_tracker/tracker.png").default
    },
    {
      "name": "Syrus 3G\u002B",
      "slug": "syrus_3g",
      "image": require("./syrus_3g/tracker.png").default
    },
    {
      "name": "Syrus 3G\u002B BT",
      "slug": "syrus_3g_bt",
      "image": require("./syrus_3g_bt/tracker.png").default
    },
    {
      "name": "Syrus 4G",
      "slug": "syrus_4g",
      "image": require("./syrus_4g/tracker.png").default
    },
    {
      "name": "Syrus 4G Lite",
      "slug": "syrus_4g_lite",
      "image": require("./syrus_4g_lite/tracker.png").default
    },
    {
      "name": "Syrus Asset Tracker",
      "slug": "syrus_asset_tracker",
      "image": require("./syrus_asset_tracker/tracker.png").default
    },
    {
      "name": "Syrus GPS",
      "slug": "syrus_gps",
      "image": require("./syrus_gps/logo.jpg").default
    },
    {
      "name": "Syrus Lynx 4G",
      "slug": "syrus_lynx_4g",
      "image": require("./syrus_lynx_4g/tracker.png").default
    },
    {
      "name": "SYRUS OBDII-CAT1",
      "slug": "syrus_obdii_cat1",
      "image": require("./syrus_obdii_cat1/tracker.png").default
    },
    {
      "name": "Syrus Satcom Lite",
      "slug": "syrus_satcom_lite",
      "image": require("./syrus_satcom_lite/tracker.png").default
    },
    {
      "name": "Titan Tracker",
      "slug": "titan_tracker",
      "image": require("./titan_tracker/tracker.png").default
    }
  ]
};
