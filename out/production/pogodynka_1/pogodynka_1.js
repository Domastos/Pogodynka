if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'pogodynka_1'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'pogodynka_1'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'pogodynka_1'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'pogodynka_1'.");
}var pogodynka_1 = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Unit = Kotlin.kotlin.Unit;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var AreaShape = $module$kotlinx_html_js.kotlinx.html.AreaShape;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var set_accessKey = $module$kotlinx_html_js.kotlinx.html.set_accessKey_ueiko3$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var area = $module$kotlinx_html_js.kotlinx.html.area_sgglka$;
  var map = $module$kotlinx_html_js.kotlinx.html.map_km2leq$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var h3 = $module$kotlinx_html_js.kotlinx.html.h3_agelx2$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  function CityData(name, coords, alt) {
    this.name = name;
    this.coords = coords;
    this.alt = alt;
  }
  CityData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CityData',
    interfaces: []
  };
  CityData.prototype.component1 = function () {
    return this.name;
  };
  CityData.prototype.component2 = function () {
    return this.coords;
  };
  CityData.prototype.component3 = function () {
    return this.alt;
  };
  CityData.prototype.copy_6hosri$ = function (name, coords, alt) {
    return new CityData(name === void 0 ? this.name : name, coords === void 0 ? this.coords : coords, alt === void 0 ? this.alt : alt);
  };
  CityData.prototype.toString = function () {
    return 'CityData(name=' + Kotlin.toString(this.name) + (', coords=' + Kotlin.toString(this.coords)) + (', alt=' + Kotlin.toString(this.alt)) + ')';
  };
  CityData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.coords) | 0;
    result = result * 31 + Kotlin.hashCode(this.alt) | 0;
    return result;
  };
  CityData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.coords, other.coords) && Kotlin.equals(this.alt, other.alt)))));
  };
  var gdansk;
  var szczecin;
  var bialystok;
  var olsztyn;
  var zielonaGora;
  var torun;
  var warszawa;
  var poznan;
  var wroclaw;
  var lodz;
  var kielce;
  var lublin;
  var opole;
  var rzeszow;
  var katowice;
  var krakow;
  var listOfCities;
  var BASE_URL;
  var BASE_URL_SUFFIX;
  var APP_ID;
  function WeatherData(city_name, country_code, lat, lon, state_code, timezone, data) {
    this.city_name = city_name;
    this.country_code = country_code;
    this.lat = lat;
    this.lon = lon;
    this.state_code = state_code;
    this.timezone = timezone;
    this.data = data;
  }
  WeatherData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeatherData',
    interfaces: []
  };
  WeatherData.prototype.component1 = function () {
    return this.city_name;
  };
  WeatherData.prototype.component2 = function () {
    return this.country_code;
  };
  WeatherData.prototype.component3 = function () {
    return this.lat;
  };
  WeatherData.prototype.component4 = function () {
    return this.lon;
  };
  WeatherData.prototype.component5 = function () {
    return this.state_code;
  };
  WeatherData.prototype.component6 = function () {
    return this.timezone;
  };
  WeatherData.prototype.component7 = function () {
    return this.data;
  };
  WeatherData.prototype.copy_rhnyaw$ = function (city_name, country_code, lat, lon, state_code, timezone, data) {
    return new WeatherData(city_name === void 0 ? this.city_name : city_name, country_code === void 0 ? this.country_code : country_code, lat === void 0 ? this.lat : lat, lon === void 0 ? this.lon : lon, state_code === void 0 ? this.state_code : state_code, timezone === void 0 ? this.timezone : timezone, data === void 0 ? this.data : data);
  };
  WeatherData.prototype.toString = function () {
    return 'WeatherData(city_name=' + Kotlin.toString(this.city_name) + (', country_code=' + Kotlin.toString(this.country_code)) + (', lat=' + Kotlin.toString(this.lat)) + (', lon=' + Kotlin.toString(this.lon)) + (', state_code=' + Kotlin.toString(this.state_code)) + (', timezone=' + Kotlin.toString(this.timezone)) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  WeatherData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.city_name) | 0;
    result = result * 31 + Kotlin.hashCode(this.country_code) | 0;
    result = result * 31 + Kotlin.hashCode(this.lat) | 0;
    result = result * 31 + Kotlin.hashCode(this.lon) | 0;
    result = result * 31 + Kotlin.hashCode(this.state_code) | 0;
    result = result * 31 + Kotlin.hashCode(this.timezone) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  WeatherData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.city_name, other.city_name) && Kotlin.equals(this.country_code, other.country_code) && Kotlin.equals(this.lat, other.lat) && Kotlin.equals(this.lon, other.lon) && Kotlin.equals(this.state_code, other.state_code) && Kotlin.equals(this.timezone, other.timezone) && Kotlin.equals(this.data, other.data)))));
  };
  function Data(app_max_temp, app_min_temp, clouds, clouds_hi, clouds_low, clouds_mid, datetime, dewpt, high_temp, low_temp, max_dhi, max_temp, min_temp, moon_phase, moonrise_ts, moonset_ts, ozone, pop, precip, pres, rh, slp, snow, snow_depth, sunrise_ts, sunset_ts, temp, ts, uv, valid_date, vis, weather, wind_cdir, wind_cdir_full, wind_dir, wind_gust_spd, wind_spd) {
    this.app_max_temp = app_max_temp;
    this.app_min_temp = app_min_temp;
    this.clouds = clouds;
    this.clouds_hi = clouds_hi;
    this.clouds_low = clouds_low;
    this.clouds_mid = clouds_mid;
    this.datetime = datetime;
    this.dewpt = dewpt;
    this.high_temp = high_temp;
    this.low_temp = low_temp;
    this.max_dhi = max_dhi;
    this.max_temp = max_temp;
    this.min_temp = min_temp;
    this.moon_phase = moon_phase;
    this.moonrise_ts = moonrise_ts;
    this.moonset_ts = moonset_ts;
    this.ozone = ozone;
    this.pop = pop;
    this.precip = precip;
    this.pres = pres;
    this.rh = rh;
    this.slp = slp;
    this.snow = snow;
    this.snow_depth = snow_depth;
    this.sunrise_ts = sunrise_ts;
    this.sunset_ts = sunset_ts;
    this.temp = temp;
    this.ts = ts;
    this.uv = uv;
    this.valid_date = valid_date;
    this.vis = vis;
    this.weather = weather;
    this.wind_cdir = wind_cdir;
    this.wind_cdir_full = wind_cdir_full;
    this.wind_dir = wind_dir;
    this.wind_gust_spd = wind_gust_spd;
    this.wind_spd = wind_spd;
  }
  Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  Data.prototype.component1 = function () {
    return this.app_max_temp;
  };
  Data.prototype.component2 = function () {
    return this.app_min_temp;
  };
  Data.prototype.component3 = function () {
    return this.clouds;
  };
  Data.prototype.component4 = function () {
    return this.clouds_hi;
  };
  Data.prototype.component5 = function () {
    return this.clouds_low;
  };
  Data.prototype.component6 = function () {
    return this.clouds_mid;
  };
  Data.prototype.component7 = function () {
    return this.datetime;
  };
  Data.prototype.component8 = function () {
    return this.dewpt;
  };
  Data.prototype.component9 = function () {
    return this.high_temp;
  };
  Data.prototype.component10 = function () {
    return this.low_temp;
  };
  Data.prototype.component11 = function () {
    return this.max_dhi;
  };
  Data.prototype.component12 = function () {
    return this.max_temp;
  };
  Data.prototype.component13 = function () {
    return this.min_temp;
  };
  Data.prototype.component14 = function () {
    return this.moon_phase;
  };
  Data.prototype.component15 = function () {
    return this.moonrise_ts;
  };
  Data.prototype.component16 = function () {
    return this.moonset_ts;
  };
  Data.prototype.component17 = function () {
    return this.ozone;
  };
  Data.prototype.component18 = function () {
    return this.pop;
  };
  Data.prototype.component19 = function () {
    return this.precip;
  };
  Data.prototype.component20 = function () {
    return this.pres;
  };
  Data.prototype.component21 = function () {
    return this.rh;
  };
  Data.prototype.component22 = function () {
    return this.slp;
  };
  Data.prototype.component23 = function () {
    return this.snow;
  };
  Data.prototype.component24 = function () {
    return this.snow_depth;
  };
  Data.prototype.component25 = function () {
    return this.sunrise_ts;
  };
  Data.prototype.component26 = function () {
    return this.sunset_ts;
  };
  Data.prototype.component27 = function () {
    return this.temp;
  };
  Data.prototype.component28 = function () {
    return this.ts;
  };
  Data.prototype.component29 = function () {
    return this.uv;
  };
  Data.prototype.component30 = function () {
    return this.valid_date;
  };
  Data.prototype.component31 = function () {
    return this.vis;
  };
  Data.prototype.component32 = function () {
    return this.weather;
  };
  Data.prototype.component33 = function () {
    return this.wind_cdir;
  };
  Data.prototype.component34 = function () {
    return this.wind_cdir_full;
  };
  Data.prototype.component35 = function () {
    return this.wind_dir;
  };
  Data.prototype.component36 = function () {
    return this.wind_gust_spd;
  };
  Data.prototype.component37 = function () {
    return this.wind_spd;
  };
  Data.prototype.copy_ytusr4$ = function (app_max_temp, app_min_temp, clouds, clouds_hi, clouds_low, clouds_mid, datetime, dewpt, high_temp, low_temp, max_dhi, max_temp, min_temp, moon_phase, moonrise_ts, moonset_ts, ozone, pop, precip, pres, rh, slp, snow, snow_depth, sunrise_ts, sunset_ts, temp, ts, uv, valid_date, vis, weather, wind_cdir, wind_cdir_full, wind_dir, wind_gust_spd, wind_spd) {
    return new Data(app_max_temp === void 0 ? this.app_max_temp : app_max_temp, app_min_temp === void 0 ? this.app_min_temp : app_min_temp, clouds === void 0 ? this.clouds : clouds, clouds_hi === void 0 ? this.clouds_hi : clouds_hi, clouds_low === void 0 ? this.clouds_low : clouds_low, clouds_mid === void 0 ? this.clouds_mid : clouds_mid, datetime === void 0 ? this.datetime : datetime, dewpt === void 0 ? this.dewpt : dewpt, high_temp === void 0 ? this.high_temp : high_temp, low_temp === void 0 ? this.low_temp : low_temp, max_dhi === void 0 ? this.max_dhi : max_dhi, max_temp === void 0 ? this.max_temp : max_temp, min_temp === void 0 ? this.min_temp : min_temp, moon_phase === void 0 ? this.moon_phase : moon_phase, moonrise_ts === void 0 ? this.moonrise_ts : moonrise_ts, moonset_ts === void 0 ? this.moonset_ts : moonset_ts, ozone === void 0 ? this.ozone : ozone, pop === void 0 ? this.pop : pop, precip === void 0 ? this.precip : precip, pres === void 0 ? this.pres : pres, rh === void 0 ? this.rh : rh, slp === void 0 ? this.slp : slp, snow === void 0 ? this.snow : snow, snow_depth === void 0 ? this.snow_depth : snow_depth, sunrise_ts === void 0 ? this.sunrise_ts : sunrise_ts, sunset_ts === void 0 ? this.sunset_ts : sunset_ts, temp === void 0 ? this.temp : temp, ts === void 0 ? this.ts : ts, uv === void 0 ? this.uv : uv, valid_date === void 0 ? this.valid_date : valid_date, vis === void 0 ? this.vis : vis, weather === void 0 ? this.weather : weather, wind_cdir === void 0 ? this.wind_cdir : wind_cdir, wind_cdir_full === void 0 ? this.wind_cdir_full : wind_cdir_full, wind_dir === void 0 ? this.wind_dir : wind_dir, wind_gust_spd === void 0 ? this.wind_gust_spd : wind_gust_spd, wind_spd === void 0 ? this.wind_spd : wind_spd);
  };
  Data.prototype.toString = function () {
    return 'Data(app_max_temp=' + Kotlin.toString(this.app_max_temp) + (', app_min_temp=' + Kotlin.toString(this.app_min_temp)) + (', clouds=' + Kotlin.toString(this.clouds)) + (', clouds_hi=' + Kotlin.toString(this.clouds_hi)) + (', clouds_low=' + Kotlin.toString(this.clouds_low)) + (', clouds_mid=' + Kotlin.toString(this.clouds_mid)) + (', datetime=' + Kotlin.toString(this.datetime)) + (', dewpt=' + Kotlin.toString(this.dewpt)) + (', high_temp=' + Kotlin.toString(this.high_temp)) + (', low_temp=' + Kotlin.toString(this.low_temp)) + (', max_dhi=' + Kotlin.toString(this.max_dhi)) + (', max_temp=' + Kotlin.toString(this.max_temp)) + (', min_temp=' + Kotlin.toString(this.min_temp)) + (', moon_phase=' + Kotlin.toString(this.moon_phase)) + (', moonrise_ts=' + Kotlin.toString(this.moonrise_ts)) + (', moonset_ts=' + Kotlin.toString(this.moonset_ts)) + (', ozone=' + Kotlin.toString(this.ozone)) + (', pop=' + Kotlin.toString(this.pop)) + (', precip=' + Kotlin.toString(this.precip)) + (', pres=' + Kotlin.toString(this.pres)) + (', rh=' + Kotlin.toString(this.rh)) + (', slp=' + Kotlin.toString(this.slp)) + (', snow=' + Kotlin.toString(this.snow)) + (', snow_depth=' + Kotlin.toString(this.snow_depth)) + (', sunrise_ts=' + Kotlin.toString(this.sunrise_ts)) + (', sunset_ts=' + Kotlin.toString(this.sunset_ts)) + (', temp=' + Kotlin.toString(this.temp)) + (', ts=' + Kotlin.toString(this.ts)) + (', uv=' + Kotlin.toString(this.uv)) + (', valid_date=' + Kotlin.toString(this.valid_date)) + (', vis=' + Kotlin.toString(this.vis)) + (', weather=' + Kotlin.toString(this.weather)) + (', wind_cdir=' + Kotlin.toString(this.wind_cdir)) + (', wind_cdir_full=' + Kotlin.toString(this.wind_cdir_full)) + (', wind_dir=' + Kotlin.toString(this.wind_dir)) + (', wind_gust_spd=' + Kotlin.toString(this.wind_gust_spd)) + (', wind_spd=' + Kotlin.toString(this.wind_spd)) + ')';
  };
  Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.app_max_temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.app_min_temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.clouds) | 0;
    result = result * 31 + Kotlin.hashCode(this.clouds_hi) | 0;
    result = result * 31 + Kotlin.hashCode(this.clouds_low) | 0;
    result = result * 31 + Kotlin.hashCode(this.clouds_mid) | 0;
    result = result * 31 + Kotlin.hashCode(this.datetime) | 0;
    result = result * 31 + Kotlin.hashCode(this.dewpt) | 0;
    result = result * 31 + Kotlin.hashCode(this.high_temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.low_temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.max_dhi) | 0;
    result = result * 31 + Kotlin.hashCode(this.max_temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.min_temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.moon_phase) | 0;
    result = result * 31 + Kotlin.hashCode(this.moonrise_ts) | 0;
    result = result * 31 + Kotlin.hashCode(this.moonset_ts) | 0;
    result = result * 31 + Kotlin.hashCode(this.ozone) | 0;
    result = result * 31 + Kotlin.hashCode(this.pop) | 0;
    result = result * 31 + Kotlin.hashCode(this.precip) | 0;
    result = result * 31 + Kotlin.hashCode(this.pres) | 0;
    result = result * 31 + Kotlin.hashCode(this.rh) | 0;
    result = result * 31 + Kotlin.hashCode(this.slp) | 0;
    result = result * 31 + Kotlin.hashCode(this.snow) | 0;
    result = result * 31 + Kotlin.hashCode(this.snow_depth) | 0;
    result = result * 31 + Kotlin.hashCode(this.sunrise_ts) | 0;
    result = result * 31 + Kotlin.hashCode(this.sunset_ts) | 0;
    result = result * 31 + Kotlin.hashCode(this.temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.ts) | 0;
    result = result * 31 + Kotlin.hashCode(this.uv) | 0;
    result = result * 31 + Kotlin.hashCode(this.valid_date) | 0;
    result = result * 31 + Kotlin.hashCode(this.vis) | 0;
    result = result * 31 + Kotlin.hashCode(this.weather) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind_cdir) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind_cdir_full) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind_dir) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind_gust_spd) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind_spd) | 0;
    return result;
  };
  Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.app_max_temp, other.app_max_temp) && Kotlin.equals(this.app_min_temp, other.app_min_temp) && Kotlin.equals(this.clouds, other.clouds) && Kotlin.equals(this.clouds_hi, other.clouds_hi) && Kotlin.equals(this.clouds_low, other.clouds_low) && Kotlin.equals(this.clouds_mid, other.clouds_mid) && Kotlin.equals(this.datetime, other.datetime) && Kotlin.equals(this.dewpt, other.dewpt) && Kotlin.equals(this.high_temp, other.high_temp) && Kotlin.equals(this.low_temp, other.low_temp) && Kotlin.equals(this.max_dhi, other.max_dhi) && Kotlin.equals(this.max_temp, other.max_temp) && Kotlin.equals(this.min_temp, other.min_temp) && Kotlin.equals(this.moon_phase, other.moon_phase) && Kotlin.equals(this.moonrise_ts, other.moonrise_ts) && Kotlin.equals(this.moonset_ts, other.moonset_ts) && Kotlin.equals(this.ozone, other.ozone) && Kotlin.equals(this.pop, other.pop) && Kotlin.equals(this.precip, other.precip) && Kotlin.equals(this.pres, other.pres) && Kotlin.equals(this.rh, other.rh) && Kotlin.equals(this.slp, other.slp) && Kotlin.equals(this.snow, other.snow) && Kotlin.equals(this.snow_depth, other.snow_depth) && Kotlin.equals(this.sunrise_ts, other.sunrise_ts) && Kotlin.equals(this.sunset_ts, other.sunset_ts) && Kotlin.equals(this.temp, other.temp) && Kotlin.equals(this.ts, other.ts) && Kotlin.equals(this.uv, other.uv) && Kotlin.equals(this.valid_date, other.valid_date) && Kotlin.equals(this.vis, other.vis) && Kotlin.equals(this.weather, other.weather) && Kotlin.equals(this.wind_cdir, other.wind_cdir) && Kotlin.equals(this.wind_cdir_full, other.wind_cdir_full) && Kotlin.equals(this.wind_dir, other.wind_dir) && Kotlin.equals(this.wind_gust_spd, other.wind_gust_spd) && Kotlin.equals(this.wind_spd, other.wind_spd)))));
  };
  function WeatherDesc(code, description, icon) {
    this.code = code;
    this.description = description;
    this.icon = icon;
  }
  WeatherDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeatherDesc',
    interfaces: []
  };
  WeatherDesc.prototype.component1 = function () {
    return this.code;
  };
  WeatherDesc.prototype.component2 = function () {
    return this.description;
  };
  WeatherDesc.prototype.component3 = function () {
    return this.icon;
  };
  WeatherDesc.prototype.copy_s4fhmi$ = function (code, description, icon) {
    return new WeatherDesc(code === void 0 ? this.code : code, description === void 0 ? this.description : description, icon === void 0 ? this.icon : icon);
  };
  WeatherDesc.prototype.toString = function () {
    return 'WeatherDesc(code=' + Kotlin.toString(this.code) + (', description=' + Kotlin.toString(this.description)) + (', icon=' + Kotlin.toString(this.icon)) + ')';
  };
  WeatherDesc.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    return result;
  };
  WeatherDesc.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.icon, other.icon)))));
  };
  function main(args) {
    createUserInput();
  }
  function createUserInput() {
    var root = document.getElementById('weatherContainer');
    root != null ? root.appendChild(createMapOfPolandDiv()) : null;
  }
  function createMapOfPolandDiv$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Mapa Polski');
    return Unit;
  }
  function createMapOfPolandDiv$lambda$lambda_0($receiver) {
    $receiver.src = 'images/POL_location_map.svg';
    $receiver.alt = 'Map of poland';
    $receiver.usemap = '#poland';
    $receiver.width = '500';
    $receiver.height = '450';
    return Unit;
  }
  function createMapOfPolandDiv$lambda$lambda$lambda$lambda(closure$city) {
    return function (it) {
      var xhttp = new XMLHttpRequest();
      xhttp.open('GET', BASE_URL + 'city=' + closure$city.name + BASE_URL_SUFFIX + '&key=' + APP_ID, false);
      xhttp.send();
      var forecastResult = JSON.parse(xhttp.responseText);
      printData(forecastResult);
      return Unit;
    };
  }
  function createMapOfPolandDiv$lambda$lambda$lambda(closure$city) {
    return function ($receiver) {
      $receiver.coords = closure$city.coords;
      $receiver.alt = closure$city.alt;
      set_title($receiver, closure$city.alt);
      $receiver.target = '_self';
      set_accessKey($receiver, 'h');
      set_onClickFunction($receiver, createMapOfPolandDiv$lambda$lambda$lambda$lambda(closure$city));
      return Unit;
    };
  }
  function createMapOfPolandDiv$lambda$lambda_1($receiver) {
    var tmp$;
    tmp$ = listOfCities.iterator();
    while (tmp$.hasNext()) {
      var city = tmp$.next();
      area($receiver, AreaShape.circle, void 0, 'wojewodstwo', createMapOfPolandDiv$lambda$lambda$lambda(city));
    }
    return Unit;
  }
  function createMapOfPolandDiv$lambda($receiver) {
    h1($receiver, 'map_header', createMapOfPolandDiv$lambda$lambda);
    img($receiver, void 0, void 0, 'svg_map', createMapOfPolandDiv$lambda$lambda_0);
    map($receiver, 'poland', void 0, createMapOfPolandDiv$lambda$lambda_1);
    return Unit;
  }
  function createMapOfPolandDiv() {
    return div(get_create(document), 'map', createMapOfPolandDiv$lambda);
  }
  function printData$lambda$lambda(closure$weatherData) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Prognoz pogody dla miasta ' + closure$weatherData.city_name + ' (Polska)');
      return Unit;
    };
  }
  function printData$lambda(closure$weatherData) {
    return function ($receiver) {
      h3($receiver, void 0, printData$lambda$lambda(closure$weatherData));
      return Unit;
    };
  }
  function printData(weatherData) {
    var root = document.getElementById('forecastContainer');
    root != null ? root.appendChild(div(get_create(document), 'currentTemp', printData$lambda(weatherData))) : null;
    printForecast(weatherData);
  }
  function printForecast$lambda$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Data: ' + this$.valid_date);
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Temperatura: ' + round(this$.temp * 0.1) + ' \xB0C');
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      p($receiver, 'headerLightText', printForecast$lambda$lambda$lambda$lambda$lambda(this$));
      p($receiver, 'primaryText', printForecast$lambda$lambda$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      $receiver.src = 'https://www.weatherbit.io/static/img/icons/' + this$.weather.icon + '.png';
      $receiver.height = '90';
      $receiver.width = '90';
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$.weather.description);
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('max ');
    return Unit;
  }
  function printForecast$lambda$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(round(this$.max_temp * 0.1).toString() + ' \xB0C');
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(' /' + round(this$.min_temp * 0.1) + ' \xB0C');
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$(' min');
    return Unit;
  }
  function printForecast$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      span($receiver, 'tipText', printForecast$lambda$lambda$lambda$lambda$lambda$lambda);
      span($receiver, 'secondaryText', printForecast$lambda$lambda$lambda$lambda$lambda$lambda_0(this$));
      span($receiver, 'secondaryText', printForecast$lambda$lambda$lambda$lambda$lambda$lambda_1(this$));
      span($receiver, 'tipText', printForecast$lambda$lambda$lambda$lambda$lambda$lambda_2);
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda_2(this$) {
    return function ($receiver) {
      p($receiver, 'currentTemp', printForecast$lambda$lambda$lambda$lambda$lambda_1(this$));
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda$lambda_3(closure$forecast) {
    return function (it) {
      printDetailedForecast(closure$forecast);
      return Unit;
    };
  }
  function printForecast$lambda$lambda$lambda(this$, closure$forecast) {
    return function ($receiver) {
      div_0($receiver, 'dateTempBlock', printForecast$lambda$lambda$lambda$lambda(this$));
      img($receiver, void 0, void 0, void 0, printForecast$lambda$lambda$lambda$lambda_0(this$));
      p($receiver, 'currentDescription', printForecast$lambda$lambda$lambda$lambda_1(this$));
      div_0($receiver, void 0, printForecast$lambda$lambda$lambda$lambda_2(this$));
      set_onClickFunction($receiver, printForecast$lambda$lambda$lambda$lambda_3(closure$forecast));
      return Unit;
    };
  }
  function printForecast(weatherData) {
    var tmp$;
    var forecastContainer = div(get_create(document));
    var $receiver = weatherData.data;
    var tmp$_0, tmp$_0_0;
    var index = 0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      index = index + 1 | 0;
      forecastContainer.appendChild(div(get_create(document), 'weatherBlock', printForecast$lambda$lambda$lambda(item, item)));
    }
    (tmp$ = document.getElementById('forecastContainer')) != null ? tmp$.appendChild(forecastContainer) : null;
  }
  function printDetailedForecast$lambda$lambda(closure$data) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Kierunel wiatru' + closure$data.wind_cdir_full);
      return Unit;
    };
  }
  function printDetailedForecast$lambda$lambda_0(closure$data) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Kierunek wiatru ' + closure$data.wind_dir + '\xB0');
      return Unit;
    };
  }
  function printDetailedForecast$lambda$lambda_1(closure$data) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Pr\u0119dko\u015B\u0107 wiatru ' + closure$data.wind_spd + ' km/h');
      return Unit;
    };
  }
  function printDetailedForecast$lambda(closure$data) {
    return function ($receiver) {
      p($receiver, 'secondaryText', printDetailedForecast$lambda$lambda(closure$data));
      p($receiver, 'secondaryText', printDetailedForecast$lambda$lambda_0(closure$data));
      p($receiver, 'secondaryText', printDetailedForecast$lambda$lambda_1(closure$data));
      return Unit;
    };
  }
  function printDetailedForecast$lambda$lambda$lambda(closure$data) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Ci\u015Bnienie: ' + closure$data.pres + ' mb');
      return Unit;
    };
  }
  function printDetailedForecast$lambda$lambda$lambda_0(closure$data) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Punkt rosy ' + round(closure$data.dewpt * 0.1) + '\xB0C');
      return Unit;
    };
  }
  function printDetailedForecast$lambda$lambda$lambda_1(closure$data) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Zachmurzenie ' + closure$data.clouds + '%');
      return Unit;
    };
  }
  function printDetailedForecast$lambda$lambda_2(closure$data) {
    return function ($receiver) {
      p($receiver, 'secondaryText', printDetailedForecast$lambda$lambda$lambda(closure$data));
      p($receiver, 'secondaryText', printDetailedForecast$lambda$lambda$lambda_0(closure$data));
      p($receiver, 'secondaryText', printDetailedForecast$lambda$lambda$lambda_1(closure$data));
      return Unit;
    };
  }
  function printDetailedForecast$lambda_0(closure$data) {
    return function ($receiver) {
      div_0($receiver, void 0, printDetailedForecast$lambda$lambda_2(closure$data));
      return Unit;
    };
  }
  function printDetailedForecast(data) {
    var root = document.getElementById('forecastContainer');
    var weatherDetailDiv = div(get_create(document), 'detailedForecast');
    var basicDetailDiv = div(get_create(document), void 0, printDetailedForecast$lambda(data));
    var otherDetailsDiv = div(get_create(document), void 0, printDetailedForecast$lambda_0(data));
    weatherDetailDiv.appendChild(basicDetailDiv);
    weatherDetailDiv.appendChild(otherDetailsDiv);
    root != null ? root.appendChild(weatherDetailDiv) : null;
  }
  _.CityData = CityData;
  Object.defineProperty(_, 'gdansk', {
    get: function () {
      return gdansk;
    }
  });
  Object.defineProperty(_, 'szczecin', {
    get: function () {
      return szczecin;
    }
  });
  Object.defineProperty(_, 'bialystok', {
    get: function () {
      return bialystok;
    }
  });
  Object.defineProperty(_, 'olsztyn', {
    get: function () {
      return olsztyn;
    }
  });
  Object.defineProperty(_, 'zielonaGora', {
    get: function () {
      return zielonaGora;
    }
  });
  Object.defineProperty(_, 'torun', {
    get: function () {
      return torun;
    }
  });
  Object.defineProperty(_, 'warszawa', {
    get: function () {
      return warszawa;
    }
  });
  Object.defineProperty(_, 'poznan', {
    get: function () {
      return poznan;
    }
  });
  Object.defineProperty(_, 'wroclaw', {
    get: function () {
      return wroclaw;
    }
  });
  Object.defineProperty(_, 'lodz', {
    get: function () {
      return lodz;
    }
  });
  Object.defineProperty(_, 'kielce', {
    get: function () {
      return kielce;
    }
  });
  Object.defineProperty(_, 'lublin', {
    get: function () {
      return lublin;
    }
  });
  Object.defineProperty(_, 'opole', {
    get: function () {
      return opole;
    }
  });
  Object.defineProperty(_, 'rzeszow', {
    get: function () {
      return rzeszow;
    }
  });
  Object.defineProperty(_, 'katowice', {
    get: function () {
      return katowice;
    }
  });
  Object.defineProperty(_, 'krakow', {
    get: function () {
      return krakow;
    }
  });
  Object.defineProperty(_, 'listOfCities', {
    get: function () {
      return listOfCities;
    }
  });
  Object.defineProperty(_, 'BASE_URL', {
    get: function () {
      return BASE_URL;
    }
  });
  Object.defineProperty(_, 'BASE_URL_SUFFIX', {
    get: function () {
      return BASE_URL_SUFFIX;
    }
  });
  Object.defineProperty(_, 'APP_ID', {
    get: function () {
      return APP_ID;
    }
  });
  _.WeatherData = WeatherData;
  _.Data = Data;
  _.WeatherDesc = WeatherDesc;
  _.main_kand9s$ = main;
  _.createUserInput = createUserInput;
  _.createMapOfPolandDiv = createMapOfPolandDiv;
  _.printData_to7pni$ = printData;
  _.printForecast_to7pni$ = printForecast;
  _.printDetailedForecast_19hvu$ = printDetailedForecast;
  gdansk = new CityData('Gdansk', '185,45,45', 'pomorskie');
  szczecin = new CityData('Szczecin', '68,95,51', 'zachodniopomorskie');
  bialystok = new CityData('Bialystok', '430,125,53', 'podlaskie');
  olsztyn = new CityData('Olsztyn', '315,72,48', 'warminskie');
  zielonaGora = new CityData('Zielona Gora', '68,95,51', 'lubuskie');
  torun = new CityData('Bydgoszcz', '212,143,46', 'kujawskie');
  warszawa = new CityData('Warszawa', '340,199,63', 'mazowieckie');
  poznan = new CityData('Poznan', '143,201,56', 'wielkopolskie');
  wroclaw = new CityData('Wroclaw', '107,296,45', 'dolnoslanskie');
  lodz = new CityData('Lodz', '262,257,48', 'lodzkie');
  kielce = new CityData('Kielce', '323,325,32', 'swietokrzyskie');
  lublin = new CityData('Lublin', '436,283,54', 'lubelskie');
  opole = new CityData('Opole', '178,333,31', 'opolskie');
  rzeszow = new CityData('Rzeszow', '395,390,43', 'podkarpatskie');
  katowice = new CityData('Katowice', '232,359,34', 'slanskie');
  krakow = new CityData('Krakow', '298,400,42', 'malopolskie');
  listOfCities = listOf([gdansk, szczecin, bialystok, olsztyn, zielonaGora, torun, warszawa, poznan, wroclaw, lodz, kielce, lublin, opole, rzeszow, katowice, krakow]);
  BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
  BASE_URL_SUFFIX = '&country=PL&days=7&lang=pl&units=S';
  APP_ID = '6ca5c7b1ca1b46b2b61a4633e8aebc02';
  main([]);
  Kotlin.defineModule('pogodynka_1', _);
  return _;
}(typeof pogodynka_1 === 'undefined' ? {} : pogodynka_1, kotlin, this['kotlinx-html-js']);
