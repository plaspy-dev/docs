export const brand = {
  "name": "GlobalSat",
  "website": "https://www.globalsat.com.tw/",
  "description": "To set the tracker send the following commands by SMS messages, Format used by Plaspy TSPRXAB27GHKLMnaicz*U! Type the IMEI number Setup the tracker GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}! Reboot the device GSC,{{imei}},3,0,LH*{{checksumreeboot}}! $(function () { function getCheckSum(cmd) { var checksum = 0; for (var i = 0; i input:text\u0022).val(getCheckSum($(\u0022#command\u003Estrong\u0022).text().split(\u0027*\u0027)[0])).change(); $(\u0022#reboot\u003Einput:text\u0022).val(getCheckSum($(\u0022#reboot\u003Estrong\u0022).text().split(\u0027*\u0027)[0])).change(); } var updateTimeOut; function updateCheckSum() { clearTimeout(updateTimeOut); updateTimeOut = setTimeout(_updateCheckSum, 100); } $(\u0022#imei,#apn_country,#apn_operator\u0022).change(updateCheckSum); $(\u0022#imei\u0022).keyup(updateCheckSum); });",
  "image": require("./logo.png").default,
  "trackers": [
    {
      "name": "BT-821C",
      "slug": "bt_821c",
      "image": require("./bt_821c/tracker.jpg").default
    },
    {
      "name": "DG-388",
      "slug": "dg_388",
      "image": require("./dg_388/tracker.jpg").default
    },
    {
      "name": "DG-388AT",
      "slug": "dg_388at",
      "image": require("./dg_388at/tracker.jpg").default
    },
    {
      "name": "GDO-10",
      "slug": "gdo_10",
      "image": require("./gdo_10/tracker.jpg").default
    },
    {
      "name": "GTR-388",
      "slug": "gtr_388",
      "image": require("./gtr_388/logo.jpg").default
    },
    {
      "name": "GTR-388",
      "slug": "gtr_388",
      "image": require("./gtr_388/logo..jpg").default
    },
    {
      "name": "GTR-388C1",
      "slug": "gtr_388c1",
      "image": require("./gtr_388c1/tracker.jpg").default
    },
    {
      "name": "GTR-388NB",
      "slug": "gtr_388nb",
      "image": require("./gtr_388nb/tracker.jpg").default
    },
    {
      "name": "KT-520",
      "slug": "kt_520",
      "image": require("./kt_520/tracker.jpg").default
    },
    {
      "name": "KT-520M",
      "slug": "kt_520m",
      "image": require("./kt_520m/tracker.jpg").default
    },
    {
      "name": "LT-10",
      "slug": "lt_10",
      "image": require("./lt_10/logo..jpg").default
    },
    {
      "name": "LT-20",
      "slug": "lt_20",
      "image": require("./lt_20/logo..jpg").default
    },
    {
      "name": "LT-501",
      "slug": "lt_501",
      "image": require("./lt_501/logo..jpg").default
    },
    {
      "name": "LT-501E",
      "slug": "lt_501e",
      "image": require("./lt_501e/tracker.jpg").default
    },
    {
      "name": "LT-501H",
      "slug": "lt_501h",
      "image": require("./lt_501h/tracker.jpg").default
    },
    {
      "name": "LT-501R",
      "slug": "lt_501r",
      "image": require("./lt_501r/tracker.jpg").default
    },
    {
      "name": "LT-520",
      "slug": "lt_520",
      "image": require("./lt_520/tracker.jpg").default
    },
    {
      "name": "LT-520AZ",
      "slug": "lt_520az",
      "image": require("./lt_520az/tracker.jpg").default
    },
    {
      "name": "LT-520P",
      "slug": "lt_520p",
      "image": require("./lt_520p/tracker.jpg").default
    },
    {
      "name": "LW-360HR",
      "slug": "lw_360hr",
      "image": require("./lw_360hr/tracker.jpg").default
    },
    {
      "name": "NW-360HR",
      "slug": "nw_360hr",
      "image": require("./nw_360hr/tracker.jpg").default
    },
    {
      "name": "TR-151",
      "slug": "tr_151",
      "image": require("./tr_151/logo.jpg").default
    },
    {
      "name": "TR-151SP",
      "slug": "tr_151sp",
      "image": require("./tr_151sp/logo.jpg").default
    },
    {
      "name": "TR-203",
      "slug": "tr_203",
      "image": require("./tr_203/logo.jpg").default
    },
    {
      "name": "TR-300",
      "slug": "tr_300",
      "image": require("./tr_300/logo.jpg").default
    },
    {
      "name": "TR-300V",
      "slug": "tr_300v",
      "image": require("./tr_300v/logo.jpg").default
    },
    {
      "name": "TR-313",
      "slug": "tr_313",
      "image": require("./tr_313/logo.jpg").default
    },
    {
      "name": "TR-350",
      "slug": "tr_350",
      "image": require("./tr_350/tracker.jpg").default
    },
    {
      "name": "TR-520",
      "slug": "tr_520",
      "image": require("./tr_520/tracker.jpg").default
    },
    {
      "name": "TR-606",
      "slug": "tr_606",
      "image": require("./tr_606/logo.jpg").default
    },
    {
      "name": "TR-616",
      "slug": "tr_616",
      "image": require("./tr_616/logo..jpg").default
    },
    {
      "name": "TR-616C1",
      "slug": "tr_616c1",
      "image": require("./tr_616c1/tracker.jpg").default
    },
    {
      "name": "TR-900",
      "slug": "tr_900",
      "image": require("./tr_900/logo.jpg").default
    }
  ]
};
