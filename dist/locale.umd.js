(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.gregorianLocales = {}));
}(this, (function (exports) { 'use strict';

  var fr = {
    daysShort: ['di', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
    daysLong: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    monthsShort: ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'],
    monthsLong: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    ordinals: {
      1: 'er',
      "default": 'e'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };
  var it = {
    daysShort: ['do', 'lun', 'martedì', 'mer', 'gio', 'ven', 'sab'],
    daysLong: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
    monthsShort: ['genn', 'febbr', 'mar', 'apr', 'magg', 'giugno', 'luglio', 'ag', 'sett', 'ott', 'nov', 'dic'],
    monthsLong: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
    ordinals: {
      "default": 'o'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };
  var de = {
    daysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    daysLong: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    monthsShort: ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
    monthsLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    ordinals: {
      1: 'st',
      2: 'nd',
      3: 'rd',
      21: 'st',
      22: 'nd',
      23: 'rd',
      31: 'st',
      "default": 'th'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };
  var es = {
    daysShort: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa'],
    daysLong: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    monthsShort: ['enero', 'Feb', 'marzo', 'abr', 'mayo', 'jun', 'jul', 'agosto', 'sept', 'oct', 'nov', 'dic'],
    monthsLong: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    ordinals: {
      "default": 'o'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };
  var nl = {
    daysShort: ['zo', 'mo', 'di', 'wo', 'do', 'vr', 'za'],
    daysLong: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    monthsShort: ['jan', 'feb', 'maart', 'apr', 'mei', 'juni', 'juli', 'aug', 'sept', 'okt', 'nov', 'dez'],
    monthsLong: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    ordinals: {
      "default": 'e'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };
  var pt = {
    daysShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
    daysLong: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
    monthsShort: ['jan', 'fev', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'set', 'out', 'nov', 'dez'],
    monthsLong: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    ordinals: {
      "default": 'a'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };

  exports.de = de;
  exports.es = es;
  exports.fr = fr;
  exports.it = it;
  exports.nl = nl;
  exports.pt = pt;

  Object.defineProperty(exports, '__esModule', { value: true });

})));