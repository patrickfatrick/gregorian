(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.symbol'), require('core-js/modules/es.symbol.description'), require('core-js/modules/es.symbol.async-iterator'), require('core-js/modules/es.symbol.has-instance'), require('core-js/modules/es.symbol.is-concat-spreadable'), require('core-js/modules/es.symbol.iterator'), require('core-js/modules/es.symbol.match'), require('core-js/modules/es.symbol.match-all'), require('core-js/modules/es.symbol.replace'), require('core-js/modules/es.symbol.search'), require('core-js/modules/es.symbol.species'), require('core-js/modules/es.symbol.split'), require('core-js/modules/es.symbol.to-primitive'), require('core-js/modules/es.symbol.to-string-tag'), require('core-js/modules/es.symbol.unscopables'), require('core-js/modules/es.array.concat'), require('core-js/modules/es.array.copy-within'), require('core-js/modules/es.array.every'), require('core-js/modules/es.array.fill'), require('core-js/modules/es.array.filter'), require('core-js/modules/es.array.find'), require('core-js/modules/es.array.find-index'), require('core-js/modules/es.array.flat'), require('core-js/modules/es.array.flat-map'), require('core-js/modules/es.array.for-each'), require('core-js/modules/es.array.from'), require('core-js/modules/es.array.includes'), require('core-js/modules/es.array.index-of'), require('core-js/modules/es.array.iterator'), require('core-js/modules/es.array.join'), require('core-js/modules/es.array.last-index-of'), require('core-js/modules/es.array.map'), require('core-js/modules/es.array.of'), require('core-js/modules/es.array.reduce'), require('core-js/modules/es.array.reduce-right'), require('core-js/modules/es.array.reverse'), require('core-js/modules/es.array.slice'), require('core-js/modules/es.array.some'), require('core-js/modules/es.array.sort'), require('core-js/modules/es.array.species'), require('core-js/modules/es.array.splice'), require('core-js/modules/es.array.unscopables.flat'), require('core-js/modules/es.array.unscopables.flat-map'), require('core-js/modules/es.array-buffer.constructor'), require('core-js/modules/es.array-buffer.is-view'), require('core-js/modules/es.array-buffer.slice'), require('core-js/modules/es.data-view'), require('core-js/modules/es.date.to-iso-string'), require('core-js/modules/es.date.to-json'), require('core-js/modules/es.date.to-primitive'), require('core-js/modules/es.date.to-string'), require('core-js/modules/es.function.has-instance'), require('core-js/modules/es.function.name'), require('core-js/modules/es.global-this'), require('core-js/modules/es.json.to-string-tag'), require('core-js/modules/es.map'), require('core-js/modules/es.math.acosh'), require('core-js/modules/es.math.asinh'), require('core-js/modules/es.math.atanh'), require('core-js/modules/es.math.cbrt'), require('core-js/modules/es.math.clz32'), require('core-js/modules/es.math.cosh'), require('core-js/modules/es.math.expm1'), require('core-js/modules/es.math.fround'), require('core-js/modules/es.math.hypot'), require('core-js/modules/es.math.imul'), require('core-js/modules/es.math.log10'), require('core-js/modules/es.math.log1p'), require('core-js/modules/es.math.log2'), require('core-js/modules/es.math.sign'), require('core-js/modules/es.math.sinh'), require('core-js/modules/es.math.tanh'), require('core-js/modules/es.math.to-string-tag'), require('core-js/modules/es.math.trunc'), require('core-js/modules/es.number.constructor'), require('core-js/modules/es.number.epsilon'), require('core-js/modules/es.number.is-finite'), require('core-js/modules/es.number.is-integer'), require('core-js/modules/es.number.is-nan'), require('core-js/modules/es.number.is-safe-integer'), require('core-js/modules/es.number.max-safe-integer'), require('core-js/modules/es.number.min-safe-integer'), require('core-js/modules/es.number.parse-float'), require('core-js/modules/es.number.parse-int'), require('core-js/modules/es.number.to-fixed'), require('core-js/modules/es.number.to-precision'), require('core-js/modules/es.object.assign'), require('core-js/modules/es.object.define-getter'), require('core-js/modules/es.object.define-properties'), require('core-js/modules/es.object.define-property'), require('core-js/modules/es.object.define-setter'), require('core-js/modules/es.object.entries'), require('core-js/modules/es.object.freeze'), require('core-js/modules/es.object.from-entries'), require('core-js/modules/es.object.get-own-property-descriptor'), require('core-js/modules/es.object.get-own-property-descriptors'), require('core-js/modules/es.object.get-own-property-names'), require('core-js/modules/es.object.get-prototype-of'), require('core-js/modules/es.object.is'), require('core-js/modules/es.object.is-extensible'), require('core-js/modules/es.object.is-frozen'), require('core-js/modules/es.object.is-sealed'), require('core-js/modules/es.object.keys'), require('core-js/modules/es.object.lookup-getter'), require('core-js/modules/es.object.lookup-setter'), require('core-js/modules/es.object.prevent-extensions'), require('core-js/modules/es.object.seal'), require('core-js/modules/es.object.set-prototype-of'), require('core-js/modules/es.object.to-string'), require('core-js/modules/es.object.values'), require('core-js/modules/es.parse-float'), require('core-js/modules/es.parse-int'), require('core-js/modules/es.promise'), require('core-js/modules/es.promise.all-settled'), require('core-js/modules/es.promise.finally'), require('core-js/modules/es.reflect.apply'), require('core-js/modules/es.reflect.construct'), require('core-js/modules/es.reflect.define-property'), require('core-js/modules/es.reflect.delete-property'), require('core-js/modules/es.reflect.get'), require('core-js/modules/es.reflect.get-own-property-descriptor'), require('core-js/modules/es.reflect.get-prototype-of'), require('core-js/modules/es.reflect.has'), require('core-js/modules/es.reflect.is-extensible'), require('core-js/modules/es.reflect.own-keys'), require('core-js/modules/es.reflect.prevent-extensions'), require('core-js/modules/es.reflect.set'), require('core-js/modules/es.reflect.set-prototype-of'), require('core-js/modules/es.regexp.constructor'), require('core-js/modules/es.regexp.exec'), require('core-js/modules/es.regexp.flags'), require('core-js/modules/es.regexp.to-string'), require('core-js/modules/es.set'), require('core-js/modules/es.string.code-point-at'), require('core-js/modules/es.string.ends-with'), require('core-js/modules/es.string.from-code-point'), require('core-js/modules/es.string.includes'), require('core-js/modules/es.string.iterator'), require('core-js/modules/es.string.match'), require('core-js/modules/es.string.match-all'), require('core-js/modules/es.string.pad-end'), require('core-js/modules/es.string.pad-start'), require('core-js/modules/es.string.raw'), require('core-js/modules/es.string.repeat'), require('core-js/modules/es.string.replace'), require('core-js/modules/es.string.search'), require('core-js/modules/es.string.split'), require('core-js/modules/es.string.starts-with'), require('core-js/modules/es.string.trim'), require('core-js/modules/es.string.trim-end'), require('core-js/modules/es.string.trim-start'), require('core-js/modules/es.string.anchor'), require('core-js/modules/es.string.big'), require('core-js/modules/es.string.blink'), require('core-js/modules/es.string.bold'), require('core-js/modules/es.string.fixed'), require('core-js/modules/es.string.fontcolor'), require('core-js/modules/es.string.fontsize'), require('core-js/modules/es.string.italics'), require('core-js/modules/es.string.link'), require('core-js/modules/es.string.small'), require('core-js/modules/es.string.strike'), require('core-js/modules/es.string.sub'), require('core-js/modules/es.string.sup'), require('core-js/modules/es.typed-array.float32-array'), require('core-js/modules/es.typed-array.float64-array'), require('core-js/modules/es.typed-array.int8-array'), require('core-js/modules/es.typed-array.int16-array'), require('core-js/modules/es.typed-array.int32-array'), require('core-js/modules/es.typed-array.uint8-array'), require('core-js/modules/es.typed-array.uint8-clamped-array'), require('core-js/modules/es.typed-array.uint16-array'), require('core-js/modules/es.typed-array.uint32-array'), require('core-js/modules/es.typed-array.copy-within'), require('core-js/modules/es.typed-array.every'), require('core-js/modules/es.typed-array.fill'), require('core-js/modules/es.typed-array.filter'), require('core-js/modules/es.typed-array.find'), require('core-js/modules/es.typed-array.find-index'), require('core-js/modules/es.typed-array.for-each'), require('core-js/modules/es.typed-array.from'), require('core-js/modules/es.typed-array.includes'), require('core-js/modules/es.typed-array.index-of'), require('core-js/modules/es.typed-array.iterator'), require('core-js/modules/es.typed-array.join'), require('core-js/modules/es.typed-array.last-index-of'), require('core-js/modules/es.typed-array.map'), require('core-js/modules/es.typed-array.of'), require('core-js/modules/es.typed-array.reduce'), require('core-js/modules/es.typed-array.reduce-right'), require('core-js/modules/es.typed-array.reverse'), require('core-js/modules/es.typed-array.set'), require('core-js/modules/es.typed-array.slice'), require('core-js/modules/es.typed-array.some'), require('core-js/modules/es.typed-array.sort'), require('core-js/modules/es.typed-array.subarray'), require('core-js/modules/es.typed-array.to-locale-string'), require('core-js/modules/es.typed-array.to-string'), require('core-js/modules/es.weak-map'), require('core-js/modules/es.weak-set'), require('core-js/modules/esnext.aggregate-error'), require('core-js/modules/esnext.array.is-template-object'), require('core-js/modules/esnext.array.last-index'), require('core-js/modules/esnext.array.last-item'), require('core-js/modules/esnext.async-iterator.constructor'), require('core-js/modules/esnext.async-iterator.as-indexed-pairs'), require('core-js/modules/esnext.async-iterator.drop'), require('core-js/modules/esnext.async-iterator.every'), require('core-js/modules/esnext.async-iterator.filter'), require('core-js/modules/esnext.async-iterator.find'), require('core-js/modules/esnext.async-iterator.flat-map'), require('core-js/modules/esnext.async-iterator.for-each'), require('core-js/modules/esnext.async-iterator.from'), require('core-js/modules/esnext.async-iterator.map'), require('core-js/modules/esnext.async-iterator.reduce'), require('core-js/modules/esnext.async-iterator.some'), require('core-js/modules/esnext.async-iterator.take'), require('core-js/modules/esnext.async-iterator.to-array'), require('core-js/modules/esnext.composite-key'), require('core-js/modules/esnext.composite-symbol'), require('core-js/modules/esnext.global-this'), require('core-js/modules/esnext.iterator.constructor'), require('core-js/modules/esnext.iterator.as-indexed-pairs'), require('core-js/modules/esnext.iterator.drop'), require('core-js/modules/esnext.iterator.every'), require('core-js/modules/esnext.iterator.filter'), require('core-js/modules/esnext.iterator.find'), require('core-js/modules/esnext.iterator.flat-map'), require('core-js/modules/esnext.iterator.for-each'), require('core-js/modules/esnext.iterator.from'), require('core-js/modules/esnext.iterator.map'), require('core-js/modules/esnext.iterator.reduce'), require('core-js/modules/esnext.iterator.some'), require('core-js/modules/esnext.iterator.take'), require('core-js/modules/esnext.iterator.to-array'), require('core-js/modules/esnext.map.delete-all'), require('core-js/modules/esnext.map.every'), require('core-js/modules/esnext.map.filter'), require('core-js/modules/esnext.map.find'), require('core-js/modules/esnext.map.find-key'), require('core-js/modules/esnext.map.from'), require('core-js/modules/esnext.map.group-by'), require('core-js/modules/esnext.map.includes'), require('core-js/modules/esnext.map.key-by'), require('core-js/modules/esnext.map.key-of'), require('core-js/modules/esnext.map.map-keys'), require('core-js/modules/esnext.map.map-values'), require('core-js/modules/esnext.map.merge'), require('core-js/modules/esnext.map.of'), require('core-js/modules/esnext.map.reduce'), require('core-js/modules/esnext.map.some'), require('core-js/modules/esnext.map.update'), require('core-js/modules/esnext.map.update-or-insert'), require('core-js/modules/esnext.map.upsert'), require('core-js/modules/esnext.math.clamp'), require('core-js/modules/esnext.math.deg-per-rad'), require('core-js/modules/esnext.math.degrees'), require('core-js/modules/esnext.math.fscale'), require('core-js/modules/esnext.math.iaddh'), require('core-js/modules/esnext.math.imulh'), require('core-js/modules/esnext.math.isubh'), require('core-js/modules/esnext.math.rad-per-deg'), require('core-js/modules/esnext.math.radians'), require('core-js/modules/esnext.math.scale'), require('core-js/modules/esnext.math.seeded-prng'), require('core-js/modules/esnext.math.signbit'), require('core-js/modules/esnext.math.umulh'), require('core-js/modules/esnext.number.from-string'), require('core-js/modules/esnext.observable'), require('core-js/modules/esnext.promise.all-settled'), require('core-js/modules/esnext.promise.any'), require('core-js/modules/esnext.promise.try'), require('core-js/modules/esnext.reflect.define-metadata'), require('core-js/modules/esnext.reflect.delete-metadata'), require('core-js/modules/esnext.reflect.get-metadata'), require('core-js/modules/esnext.reflect.get-metadata-keys'), require('core-js/modules/esnext.reflect.get-own-metadata'), require('core-js/modules/esnext.reflect.get-own-metadata-keys'), require('core-js/modules/esnext.reflect.has-metadata'), require('core-js/modules/esnext.reflect.has-own-metadata'), require('core-js/modules/esnext.reflect.metadata'), require('core-js/modules/esnext.set.add-all'), require('core-js/modules/esnext.set.delete-all'), require('core-js/modules/esnext.set.difference'), require('core-js/modules/esnext.set.every'), require('core-js/modules/esnext.set.filter'), require('core-js/modules/esnext.set.find'), require('core-js/modules/esnext.set.from'), require('core-js/modules/esnext.set.intersection'), require('core-js/modules/esnext.set.is-disjoint-from'), require('core-js/modules/esnext.set.is-subset-of'), require('core-js/modules/esnext.set.is-superset-of'), require('core-js/modules/esnext.set.join'), require('core-js/modules/esnext.set.map'), require('core-js/modules/esnext.set.of'), require('core-js/modules/esnext.set.reduce'), require('core-js/modules/esnext.set.some'), require('core-js/modules/esnext.set.symmetric-difference'), require('core-js/modules/esnext.set.union'), require('core-js/modules/esnext.string.at'), require('core-js/modules/esnext.string.code-points'), require('core-js/modules/esnext.string.match-all'), require('core-js/modules/esnext.string.replace-all'), require('core-js/modules/esnext.symbol.async-dispose'), require('core-js/modules/esnext.symbol.dispose'), require('core-js/modules/esnext.symbol.observable'), require('core-js/modules/esnext.symbol.pattern-match'), require('core-js/modules/esnext.symbol.replace-all'), require('core-js/modules/esnext.weak-map.delete-all'), require('core-js/modules/esnext.weak-map.from'), require('core-js/modules/esnext.weak-map.of'), require('core-js/modules/esnext.weak-map.upsert'), require('core-js/modules/esnext.weak-set.add-all'), require('core-js/modules/esnext.weak-set.delete-all'), require('core-js/modules/esnext.weak-set.from'), require('core-js/modules/esnext.weak-set.of'), require('core-js/modules/web.dom-collections.for-each'), require('core-js/modules/web.dom-collections.iterator'), require('core-js/modules/web.immediate'), require('core-js/modules/web.queue-microtask'), require('core-js/modules/web.url'), require('core-js/modules/web.url.to-json'), require('core-js/modules/web.url-search-params'), require('regenerator-runtime/runtime')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.symbol', 'core-js/modules/es.symbol.description', 'core-js/modules/es.symbol.async-iterator', 'core-js/modules/es.symbol.has-instance', 'core-js/modules/es.symbol.is-concat-spreadable', 'core-js/modules/es.symbol.iterator', 'core-js/modules/es.symbol.match', 'core-js/modules/es.symbol.match-all', 'core-js/modules/es.symbol.replace', 'core-js/modules/es.symbol.search', 'core-js/modules/es.symbol.species', 'core-js/modules/es.symbol.split', 'core-js/modules/es.symbol.to-primitive', 'core-js/modules/es.symbol.to-string-tag', 'core-js/modules/es.symbol.unscopables', 'core-js/modules/es.array.concat', 'core-js/modules/es.array.copy-within', 'core-js/modules/es.array.every', 'core-js/modules/es.array.fill', 'core-js/modules/es.array.filter', 'core-js/modules/es.array.find', 'core-js/modules/es.array.find-index', 'core-js/modules/es.array.flat', 'core-js/modules/es.array.flat-map', 'core-js/modules/es.array.for-each', 'core-js/modules/es.array.from', 'core-js/modules/es.array.includes', 'core-js/modules/es.array.index-of', 'core-js/modules/es.array.iterator', 'core-js/modules/es.array.join', 'core-js/modules/es.array.last-index-of', 'core-js/modules/es.array.map', 'core-js/modules/es.array.of', 'core-js/modules/es.array.reduce', 'core-js/modules/es.array.reduce-right', 'core-js/modules/es.array.reverse', 'core-js/modules/es.array.slice', 'core-js/modules/es.array.some', 'core-js/modules/es.array.sort', 'core-js/modules/es.array.species', 'core-js/modules/es.array.splice', 'core-js/modules/es.array.unscopables.flat', 'core-js/modules/es.array.unscopables.flat-map', 'core-js/modules/es.array-buffer.constructor', 'core-js/modules/es.array-buffer.is-view', 'core-js/modules/es.array-buffer.slice', 'core-js/modules/es.data-view', 'core-js/modules/es.date.to-iso-string', 'core-js/modules/es.date.to-json', 'core-js/modules/es.date.to-primitive', 'core-js/modules/es.date.to-string', 'core-js/modules/es.function.has-instance', 'core-js/modules/es.function.name', 'core-js/modules/es.global-this', 'core-js/modules/es.json.to-string-tag', 'core-js/modules/es.map', 'core-js/modules/es.math.acosh', 'core-js/modules/es.math.asinh', 'core-js/modules/es.math.atanh', 'core-js/modules/es.math.cbrt', 'core-js/modules/es.math.clz32', 'core-js/modules/es.math.cosh', 'core-js/modules/es.math.expm1', 'core-js/modules/es.math.fround', 'core-js/modules/es.math.hypot', 'core-js/modules/es.math.imul', 'core-js/modules/es.math.log10', 'core-js/modules/es.math.log1p', 'core-js/modules/es.math.log2', 'core-js/modules/es.math.sign', 'core-js/modules/es.math.sinh', 'core-js/modules/es.math.tanh', 'core-js/modules/es.math.to-string-tag', 'core-js/modules/es.math.trunc', 'core-js/modules/es.number.constructor', 'core-js/modules/es.number.epsilon', 'core-js/modules/es.number.is-finite', 'core-js/modules/es.number.is-integer', 'core-js/modules/es.number.is-nan', 'core-js/modules/es.number.is-safe-integer', 'core-js/modules/es.number.max-safe-integer', 'core-js/modules/es.number.min-safe-integer', 'core-js/modules/es.number.parse-float', 'core-js/modules/es.number.parse-int', 'core-js/modules/es.number.to-fixed', 'core-js/modules/es.number.to-precision', 'core-js/modules/es.object.assign', 'core-js/modules/es.object.define-getter', 'core-js/modules/es.object.define-properties', 'core-js/modules/es.object.define-property', 'core-js/modules/es.object.define-setter', 'core-js/modules/es.object.entries', 'core-js/modules/es.object.freeze', 'core-js/modules/es.object.from-entries', 'core-js/modules/es.object.get-own-property-descriptor', 'core-js/modules/es.object.get-own-property-descriptors', 'core-js/modules/es.object.get-own-property-names', 'core-js/modules/es.object.get-prototype-of', 'core-js/modules/es.object.is', 'core-js/modules/es.object.is-extensible', 'core-js/modules/es.object.is-frozen', 'core-js/modules/es.object.is-sealed', 'core-js/modules/es.object.keys', 'core-js/modules/es.object.lookup-getter', 'core-js/modules/es.object.lookup-setter', 'core-js/modules/es.object.prevent-extensions', 'core-js/modules/es.object.seal', 'core-js/modules/es.object.set-prototype-of', 'core-js/modules/es.object.to-string', 'core-js/modules/es.object.values', 'core-js/modules/es.parse-float', 'core-js/modules/es.parse-int', 'core-js/modules/es.promise', 'core-js/modules/es.promise.all-settled', 'core-js/modules/es.promise.finally', 'core-js/modules/es.reflect.apply', 'core-js/modules/es.reflect.construct', 'core-js/modules/es.reflect.define-property', 'core-js/modules/es.reflect.delete-property', 'core-js/modules/es.reflect.get', 'core-js/modules/es.reflect.get-own-property-descriptor', 'core-js/modules/es.reflect.get-prototype-of', 'core-js/modules/es.reflect.has', 'core-js/modules/es.reflect.is-extensible', 'core-js/modules/es.reflect.own-keys', 'core-js/modules/es.reflect.prevent-extensions', 'core-js/modules/es.reflect.set', 'core-js/modules/es.reflect.set-prototype-of', 'core-js/modules/es.regexp.constructor', 'core-js/modules/es.regexp.exec', 'core-js/modules/es.regexp.flags', 'core-js/modules/es.regexp.to-string', 'core-js/modules/es.set', 'core-js/modules/es.string.code-point-at', 'core-js/modules/es.string.ends-with', 'core-js/modules/es.string.from-code-point', 'core-js/modules/es.string.includes', 'core-js/modules/es.string.iterator', 'core-js/modules/es.string.match', 'core-js/modules/es.string.match-all', 'core-js/modules/es.string.pad-end', 'core-js/modules/es.string.pad-start', 'core-js/modules/es.string.raw', 'core-js/modules/es.string.repeat', 'core-js/modules/es.string.replace', 'core-js/modules/es.string.search', 'core-js/modules/es.string.split', 'core-js/modules/es.string.starts-with', 'core-js/modules/es.string.trim', 'core-js/modules/es.string.trim-end', 'core-js/modules/es.string.trim-start', 'core-js/modules/es.string.anchor', 'core-js/modules/es.string.big', 'core-js/modules/es.string.blink', 'core-js/modules/es.string.bold', 'core-js/modules/es.string.fixed', 'core-js/modules/es.string.fontcolor', 'core-js/modules/es.string.fontsize', 'core-js/modules/es.string.italics', 'core-js/modules/es.string.link', 'core-js/modules/es.string.small', 'core-js/modules/es.string.strike', 'core-js/modules/es.string.sub', 'core-js/modules/es.string.sup', 'core-js/modules/es.typed-array.float32-array', 'core-js/modules/es.typed-array.float64-array', 'core-js/modules/es.typed-array.int8-array', 'core-js/modules/es.typed-array.int16-array', 'core-js/modules/es.typed-array.int32-array', 'core-js/modules/es.typed-array.uint8-array', 'core-js/modules/es.typed-array.uint8-clamped-array', 'core-js/modules/es.typed-array.uint16-array', 'core-js/modules/es.typed-array.uint32-array', 'core-js/modules/es.typed-array.copy-within', 'core-js/modules/es.typed-array.every', 'core-js/modules/es.typed-array.fill', 'core-js/modules/es.typed-array.filter', 'core-js/modules/es.typed-array.find', 'core-js/modules/es.typed-array.find-index', 'core-js/modules/es.typed-array.for-each', 'core-js/modules/es.typed-array.from', 'core-js/modules/es.typed-array.includes', 'core-js/modules/es.typed-array.index-of', 'core-js/modules/es.typed-array.iterator', 'core-js/modules/es.typed-array.join', 'core-js/modules/es.typed-array.last-index-of', 'core-js/modules/es.typed-array.map', 'core-js/modules/es.typed-array.of', 'core-js/modules/es.typed-array.reduce', 'core-js/modules/es.typed-array.reduce-right', 'core-js/modules/es.typed-array.reverse', 'core-js/modules/es.typed-array.set', 'core-js/modules/es.typed-array.slice', 'core-js/modules/es.typed-array.some', 'core-js/modules/es.typed-array.sort', 'core-js/modules/es.typed-array.subarray', 'core-js/modules/es.typed-array.to-locale-string', 'core-js/modules/es.typed-array.to-string', 'core-js/modules/es.weak-map', 'core-js/modules/es.weak-set', 'core-js/modules/esnext.aggregate-error', 'core-js/modules/esnext.array.is-template-object', 'core-js/modules/esnext.array.last-index', 'core-js/modules/esnext.array.last-item', 'core-js/modules/esnext.async-iterator.constructor', 'core-js/modules/esnext.async-iterator.as-indexed-pairs', 'core-js/modules/esnext.async-iterator.drop', 'core-js/modules/esnext.async-iterator.every', 'core-js/modules/esnext.async-iterator.filter', 'core-js/modules/esnext.async-iterator.find', 'core-js/modules/esnext.async-iterator.flat-map', 'core-js/modules/esnext.async-iterator.for-each', 'core-js/modules/esnext.async-iterator.from', 'core-js/modules/esnext.async-iterator.map', 'core-js/modules/esnext.async-iterator.reduce', 'core-js/modules/esnext.async-iterator.some', 'core-js/modules/esnext.async-iterator.take', 'core-js/modules/esnext.async-iterator.to-array', 'core-js/modules/esnext.composite-key', 'core-js/modules/esnext.composite-symbol', 'core-js/modules/esnext.global-this', 'core-js/modules/esnext.iterator.constructor', 'core-js/modules/esnext.iterator.as-indexed-pairs', 'core-js/modules/esnext.iterator.drop', 'core-js/modules/esnext.iterator.every', 'core-js/modules/esnext.iterator.filter', 'core-js/modules/esnext.iterator.find', 'core-js/modules/esnext.iterator.flat-map', 'core-js/modules/esnext.iterator.for-each', 'core-js/modules/esnext.iterator.from', 'core-js/modules/esnext.iterator.map', 'core-js/modules/esnext.iterator.reduce', 'core-js/modules/esnext.iterator.some', 'core-js/modules/esnext.iterator.take', 'core-js/modules/esnext.iterator.to-array', 'core-js/modules/esnext.map.delete-all', 'core-js/modules/esnext.map.every', 'core-js/modules/esnext.map.filter', 'core-js/modules/esnext.map.find', 'core-js/modules/esnext.map.find-key', 'core-js/modules/esnext.map.from', 'core-js/modules/esnext.map.group-by', 'core-js/modules/esnext.map.includes', 'core-js/modules/esnext.map.key-by', 'core-js/modules/esnext.map.key-of', 'core-js/modules/esnext.map.map-keys', 'core-js/modules/esnext.map.map-values', 'core-js/modules/esnext.map.merge', 'core-js/modules/esnext.map.of', 'core-js/modules/esnext.map.reduce', 'core-js/modules/esnext.map.some', 'core-js/modules/esnext.map.update', 'core-js/modules/esnext.map.update-or-insert', 'core-js/modules/esnext.map.upsert', 'core-js/modules/esnext.math.clamp', 'core-js/modules/esnext.math.deg-per-rad', 'core-js/modules/esnext.math.degrees', 'core-js/modules/esnext.math.fscale', 'core-js/modules/esnext.math.iaddh', 'core-js/modules/esnext.math.imulh', 'core-js/modules/esnext.math.isubh', 'core-js/modules/esnext.math.rad-per-deg', 'core-js/modules/esnext.math.radians', 'core-js/modules/esnext.math.scale', 'core-js/modules/esnext.math.seeded-prng', 'core-js/modules/esnext.math.signbit', 'core-js/modules/esnext.math.umulh', 'core-js/modules/esnext.number.from-string', 'core-js/modules/esnext.observable', 'core-js/modules/esnext.promise.all-settled', 'core-js/modules/esnext.promise.any', 'core-js/modules/esnext.promise.try', 'core-js/modules/esnext.reflect.define-metadata', 'core-js/modules/esnext.reflect.delete-metadata', 'core-js/modules/esnext.reflect.get-metadata', 'core-js/modules/esnext.reflect.get-metadata-keys', 'core-js/modules/esnext.reflect.get-own-metadata', 'core-js/modules/esnext.reflect.get-own-metadata-keys', 'core-js/modules/esnext.reflect.has-metadata', 'core-js/modules/esnext.reflect.has-own-metadata', 'core-js/modules/esnext.reflect.metadata', 'core-js/modules/esnext.set.add-all', 'core-js/modules/esnext.set.delete-all', 'core-js/modules/esnext.set.difference', 'core-js/modules/esnext.set.every', 'core-js/modules/esnext.set.filter', 'core-js/modules/esnext.set.find', 'core-js/modules/esnext.set.from', 'core-js/modules/esnext.set.intersection', 'core-js/modules/esnext.set.is-disjoint-from', 'core-js/modules/esnext.set.is-subset-of', 'core-js/modules/esnext.set.is-superset-of', 'core-js/modules/esnext.set.join', 'core-js/modules/esnext.set.map', 'core-js/modules/esnext.set.of', 'core-js/modules/esnext.set.reduce', 'core-js/modules/esnext.set.some', 'core-js/modules/esnext.set.symmetric-difference', 'core-js/modules/esnext.set.union', 'core-js/modules/esnext.string.at', 'core-js/modules/esnext.string.code-points', 'core-js/modules/esnext.string.match-all', 'core-js/modules/esnext.string.replace-all', 'core-js/modules/esnext.symbol.async-dispose', 'core-js/modules/esnext.symbol.dispose', 'core-js/modules/esnext.symbol.observable', 'core-js/modules/esnext.symbol.pattern-match', 'core-js/modules/esnext.symbol.replace-all', 'core-js/modules/esnext.weak-map.delete-all', 'core-js/modules/esnext.weak-map.from', 'core-js/modules/esnext.weak-map.of', 'core-js/modules/esnext.weak-map.upsert', 'core-js/modules/esnext.weak-set.add-all', 'core-js/modules/esnext.weak-set.delete-all', 'core-js/modules/esnext.weak-set.from', 'core-js/modules/esnext.weak-set.of', 'core-js/modules/web.dom-collections.for-each', 'core-js/modules/web.dom-collections.iterator', 'core-js/modules/web.immediate', 'core-js/modules/web.queue-microtask', 'core-js/modules/web.url', 'core-js/modules/web.url.to-json', 'core-js/modules/web.url-search-params', 'regenerator-runtime/runtime'], factory) :
  (global = global || self, factory(global.gregorian = {}));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * Strings used in various functions to indicate different aspects of the date
   *
   * Note: Month and Day getter/setter methods are 1-indexed rather than 0-indexed as they would be with native methods
   * This was a tough decision but ultimately I think consistency within the library is more important than
   * consistency with the native Date methods
   *
   * Given the date 1988-04-11T12:45:00.000Z, assuming a locale in Eastern Standard Time:
   */
  var UNIX = 'unix'; // 576747900000

  var UTC_SHORT = 'utc-short'; // Mon, 11 Apr 1988

  var UTC = 'utc'; // Mon, 11 Apr 1988 12:45:00 GMT

  var ISO_SHORT = 'iso-short'; // 1988-04-11

  var ISO = 'iso'; // 1988-04-11T12:45:00.000Z

  var YEAR_FULL = 'Y'; // 1988

  var YEAR = 'y'; // 88

  var DAY_FULL = 'E'; // Monday

  var DAY = 'e'; // Mon (or 2, when used in get/set)

  var DATE_ORDINAL = 'o'; // 11th

  var DATE_FULL = 'D'; // 11 (adds leading zeros)

  var DATE = 'd'; // 11

  var MONTH_NAME_FULL = 'N'; // April

  var MONTH_NAME = 'n'; // Apr

  var MONTH_FULL = 'M'; // 04 (adds leading zeros)

  var MONTH = 'm'; // 4

  var HOUR_PERIOD_FULL = 'G'; // 07 (12-hour clock; adds leading zeros)

  var HOUR_PERIOD = 'g'; // 7 (12-hour clock)

  var HOUR_FULL = 'H'; // 07 (24-hour clock; adds leading zeros)

  var HOUR = 'h'; // 7 (24-hour clock)

  var MINUTE_FULL = 'T'; // 45 (adds leading zeros)

  var MINUTE = 't'; // 45

  var PERIOD_UPPERCASE = 'P'; // AM

  var PERIOD_LOWERCASE = 'p'; // Am

  var SECOND_FULL = 'S'; // 00 (adds leading zeros)

  var SECOND = 's'; // 0

  var MILLISECOND_FULL = 'L'; // 000 (adds leading zeros)

  var MILLISECOND = 'l'; // 0

  var TIMEZONE_OFFSET = 'z'; // UTC-05:00

  var WEEK = 'w'; // 14

  var _PERIOD_UPPERCASE$PER;
  var reformHandlers = (_PERIOD_UPPERCASE$PER = {}, _defineProperty(_PERIOD_UPPERCASE$PER, PERIOD_UPPERCASE, function (date, _ref) {
    var periods = _ref.periods;
    var hour = date.getHours();
    var ampm = hour < 12 ? periods[0].toUpperCase() : periods[1].toUpperCase();
    return ampm;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, PERIOD_LOWERCASE, function (date, _ref2) {
    var periods = _ref2.periods;
    var hour = date.getHours();
    var ampm = hour < 12 ? periods[0].toLowerCase() : periods[1].toLowerCase();
    return ampm;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DAY, function (date, _ref3) {
    var daysShort = _ref3.daysShort;
    var dayOfWeek = date.getDay();
    return daysShort[dayOfWeek];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DAY_FULL, function (date, _ref4) {
    var daysLong = _ref4.daysLong;
    var dayOfWeek = date.getDay();
    return daysLong[dayOfWeek];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR, function (date) {
    var hour = date.getHours();
    return hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR_FULL, function (date) {
    var hour = date.getHours().toString();
    return hour.length < 2 ? '0' + hour : hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH_NAME, function (date, _ref5) {
    var monthsShort = _ref5.monthsShort;
    var month = date.getMonth();
    return monthsShort[month];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH_NAME_FULL, function (date, _ref6) {
    var monthsLong = _ref6.monthsLong;
    var month = date.getMonth();
    return monthsLong[month];
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DATE, function (date) {
    var day = date.getDate().toString();
    return day;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DATE_FULL, function (date) {
    var day = date.getDate().toString();
    return day.length < 2 ? '0' + day : day;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, DATE_ORDINAL, function (date, _ref7) {
    var ordinals = _ref7.ordinals;
    var day = date.getDate();
    return day + (ordinals[day] || ordinals.default);
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR_PERIOD, function (date) {
    var hour = date.getHours();

    if (hour === 0) {
      hour = 12;
    }

    hour = hour < 13 ? hour : hour - 12;
    return hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, HOUR_PERIOD_FULL, function (date) {
    var hour = date.getHours();

    if (hour === 0) {
      hour = 12;
    }

    hour = hour < 13 ? hour : hour - 12;
    hour = hour.toString();
    return hour.length < 2 ? '0' + hour : hour;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MILLISECOND, function (date) {
    var milliseconds = date.getMilliseconds().toString();
    return milliseconds;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MILLISECOND_FULL, function (date) {
    var milliseconds = date.getMilliseconds().toString();

    switch (milliseconds.length) {
      case 1:
        milliseconds = '00' + milliseconds;
        break;

      case 2:
        milliseconds = '0' + milliseconds;
        break;

      default:
        milliseconds = String(milliseconds);
        break;
    }

    return milliseconds;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH, function (date) {
    var month = (date.getMonth() + 1).toString();
    return month;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MONTH_FULL, function (date) {
    var month = (date.getMonth() + 1).toString();
    return month.length < 2 ? '0' + month : month;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, SECOND, function (date) {
    var second = date.getSeconds();
    return second;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, SECOND_FULL, function (date) {
    var second = date.getSeconds().toString();
    return second.length < 2 ? '0' + second : second;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MINUTE, function (date) {
    var minute = date.getMinutes().toString();
    return minute;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, MINUTE_FULL, function (date) {
    var minute = date.getMinutes().toString();
    return minute.length < 2 ? '0' + minute : minute;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, YEAR, function (date) {
    return date.getFullYear().toString().substr(2);
  }), _defineProperty(_PERIOD_UPPERCASE$PER, YEAR_FULL, function (date) {
    return date.getFullYear();
  }), _defineProperty(_PERIOD_UPPERCASE$PER, TIMEZONE_OFFSET, function (date, _ref8) {
    var utc = _ref8.utc;
    var offset = (date.getTimezoneOffset() / 60 * -1).toString();
    offset = /^[-]?\d$/g.test(offset) ? offset.replace(/\d/, function (match, off) {
      return '0' + offset.charAt(off);
    }) : offset;

    if (!/^[-]/g.test(offset)) {
      offset = '+' + offset;
    }

    return utc + offset + ':00';
  }), _defineProperty(_PERIOD_UPPERCASE$PER, ISO_SHORT, function (date) {
    return this[ISO](date, 'short');
  }), _defineProperty(_PERIOD_UPPERCASE$PER, ISO, function (date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (format === 'short') {
      return date.toISOString().split('T')[0];
    }

    return date.toISOString();
  }), _defineProperty(_PERIOD_UPPERCASE$PER, UTC_SHORT, function (date) {
    return this[UTC](date, 'short');
  }), _defineProperty(_PERIOD_UPPERCASE$PER, UTC, function (date) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var utc = date.toUTCString();

    if (format === 'short') {
      var arr = utc.split(' ');
      var newArr = [];

      for (var i = 0; i < 4; i++) {
        newArr.push(arr[i]);
      }

      return newArr.join(' ');
    }

    return utc;
  }), _defineProperty(_PERIOD_UPPERCASE$PER, UNIX, function (date) {
    return Date.parse(date);
  }), _PERIOD_UPPERCASE$PER);

  var en = {
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysLong: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    monthsLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ordinals: {
      1: 'st',
      2: 'nd',
      3: 'rd',
      21: 'st',
      22: 'nd',
      23: 'rd',
      31: 'st',
      default: 'th'
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '|'
  };

  /**
   * Determines if an input is a Date instance with a valid date
   * @param   {Object}  input   anything, but preferably a Date object
   * @returns {Boolean}         whether or not the input is a valid Date
   */
  function isDate(input) {
    return input instanceof Date && !Number.isNaN(Date.parse(input));
  }
  /**
   * Checks that the date object passed in is a valid Date instance, or throw a TypeError
   * @param   {Date}      date  a date object
   * @return  {Boolean}         true if validated
   */

  function validateDate(date) {
    if (isDate(date)) {
      return true;
    }

    throw new TypeError("Invalid date: ".concat(date));
  }
  /**
   * Returns the difference between two date objects
   * @param   {Date}    date1 a date object
   * @param   {Date}    date2 a date object
   * @return  {Number}        difference between the dates
   */

  function diff(date1, date2) {
    return Date.parse(date2) - Date.parse(date1);
  }
  /**
   * Takes a function with args and returns a curried version of it
   * @param   {Function}  fn  A function to curry
   * @returns {Function}      A curried version of the original function
   */

  function curry(fn) {
    return function resolver() {
      for (var _len = arguments.length, resolverArgs = new Array(_len), _key = 0; _key < _len; _key++) {
        resolverArgs[_key] = arguments[_key];
      }

      return function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var nextArgs = resolverArgs.concat(args.length ? args : null);
        var next = nextArgs.length >= fn.length ? fn : resolver;
        return next.apply(void 0, _toConsumableArray(nextArgs));
      };
    }();
  }
  /**
   * Returns the result of calling the second function with the result of the first function
   * @param {Function}  fn1  a function
   * @param {Function}  fn2  a function
   */

  function wrap(fn1, fn2) {
    return function (arg) {
      return fn2(fn1(arg));
    };
  }

  function formatDate(format, date, translation) {
    var longAssRegExp = /\b(unix|utc(-short)?|iso(-short)?|Y|y|M|m|N|n|E|e|D|d|o|H|h|G|g|T|t|P|p|S|s|L|l|z|w)\b/g;
    return format.replace(longAssRegExp, function (match) {
      return reformHandlers[match](date, translation);
    }).replace(translation.delimiter, '');
  }
  /**
   * Take a Date object and output the reformatted string
   * See ../lib/constants.js for details
   * @param     {String}  format    a string describing the format the date should take
   * @param     {Date}    date      a date object
   * @returns   {String}            the date formatted into the specified format
   */


  var reform = curry(function (format, date) {
    var _date;

    date = (_date = date) !== null && _date !== void 0 ? _date : new Date();
    validateDate(date);
    return formatDate(format, date, en);
  });
  /**
   * Take a Date object and output the reformatted string using user-provided names
   * @param     {Object}  overrides object consisting of whole or partial name overrides, see ../lib/default-names
   * @param     {String}  format    a string describing the format the date should take
   * @param     {Date}    date      a date object
   * @returns   {String}            the date formatted into the specified format
   */

  var reformWithOverrides = curry(function (overrides, format, date) {
    var _date2;

    date = (_date2 = date) !== null && _date2 !== void 0 ? _date2 : new Date();
    var names = Object.assign({}, en, overrides);
    validateDate(date);
    return formatDate(format, date, names);
  });
  /**
   * Take a Date object and output the reformatted string using included locales
   * @param     {Object}  locale    locale object exported from lib/translations
   * @param     {String}  format    a string describing the format the date should take
   * @param     {Date}    date      a date object
   * @returns   {String}            the date formatted into the specified format
   */

  var reformWithLocale = curry(function (locale, format, date) {
    var _date3;

    date = (_date3 = date) !== null && _date3 !== void 0 ? _date3 : new Date();
    validateDate(date);
    return formatDate(format, date, locale || en);
  });

  /**
   * Parses either an ambiguous ISO partial (2019-08-16 / 2019-08-16T22:55:00)
   * or a complete ISO string (2019-08-16T22:55:00Z) to a date
   * @param  {String} date date string formatted as an ISO partial date
   * @return {Date}               a new Date instance
   */

  function parse(input) {
    if (isDate(input)) return input;

    var _$Symbol$split = /T| /[Symbol.split](input),
        _$Symbol$split2 = _slicedToArray(_$Symbol$split, 2),
        date = _$Symbol$split2[0],
        _$Symbol$split2$ = _$Symbol$split2[1],
        rawTime = _$Symbol$split2$ === void 0 ? '00:00:00' : _$Symbol$split2$;

    var _$Symbol$split3 = /Z|\+|\-/[Symbol.split](rawTime),
        _$Symbol$split4 = _slicedToArray(_$Symbol$split3, 2),
        time = _$Symbol$split4[0],
        _$Symbol$split4$ = _$Symbol$split4[1],
        offset = _$Symbol$split4$ === void 0 ? (new Date().getTimezoneOffset() / 60).toString() : _$Symbol$split4$;

    var z = Number.parseInt((/\d{1,2}/[Symbol.match](offset) || ['0'])[0], 10);

    var _$Symbol$split$map = /-/[Symbol.split](date).map(function (str) {
      return Number.parseInt(str, 10);
    }),
        _$Symbol$split$map2 = _slicedToArray(_$Symbol$split$map, 3),
        y = _$Symbol$split$map2[0],
        m = _$Symbol$split$map2[1],
        d = _$Symbol$split$map2[2];

    var _$Symbol$split$map3 = /:|\./[Symbol.split](time).map(function (str) {
      return Number.parseInt(str, 10);
    }),
        _$Symbol$split$map4 = _slicedToArray(_$Symbol$split$map3, 4),
        h = _$Symbol$split$map4[0],
        t = _$Symbol$split$map4[1],
        s = _$Symbol$split$map4[2],
        _$Symbol$split$map4$ = _$Symbol$split$map4[3],
        l = _$Symbol$split$map4$ === void 0 ? 0 : _$Symbol$split$map4$;

    return new Date(Date.UTC(y, m - 1, d, rawTime.includes('-') || offset > 0 ? h + z : h + z * -1, t, s, l));
  }
  /**
   * Parses either an ambiguous ISO partial (2019-08-16 / 2019-08-16T22:55:00)
   * or a complete ISO string (2019-08-16T22:55:00Z) to a date
   * BUT this function assumes UTC if no timezone data is present
   * @param  {String} date date string formatted as an ISO partial date
   * @return {Date}               a new Date instance
   */

  function parseUTC(input) {
    if (isDate(input)) return input;

    var _$Symbol$split5 = /T| /[Symbol.split](input),
        _$Symbol$split6 = _slicedToArray(_$Symbol$split5, 2),
        date = _$Symbol$split6[0],
        _$Symbol$split6$ = _$Symbol$split6[1],
        rawTime = _$Symbol$split6$ === void 0 ? '00:00:00' : _$Symbol$split6$;

    var _$Symbol$split7 = /Z|\+|\-/[Symbol.split](rawTime),
        _$Symbol$split8 = _slicedToArray(_$Symbol$split7, 2),
        time = _$Symbol$split8[0],
        _$Symbol$split8$ = _$Symbol$split8[1],
        offset = _$Symbol$split8$ === void 0 ? '0' : _$Symbol$split8$;

    var z = Number.parseInt((/\d{1,2}/[Symbol.match](offset) || ['0'])[0], 10);

    var _$Symbol$split$map5 = /-/[Symbol.split](date).map(function (str) {
      return Number.parseInt(str, 10);
    }),
        _$Symbol$split$map6 = _slicedToArray(_$Symbol$split$map5, 3),
        y = _$Symbol$split$map6[0],
        m = _$Symbol$split$map6[1],
        d = _$Symbol$split$map6[2];

    var _$Symbol$split$map7 = /:|\./[Symbol.split](time).map(function (str) {
      return Number.parseInt(str, 10);
    }),
        _$Symbol$split$map8 = _slicedToArray(_$Symbol$split$map7, 4),
        h = _$Symbol$split$map8[0],
        t = _$Symbol$split$map8[1],
        s = _$Symbol$split$map8[2],
        _$Symbol$split$map8$ = _$Symbol$split$map8[3],
        l = _$Symbol$split$map8$ === void 0 ? 0 : _$Symbol$split$map8$;

    return new Date(Date.UTC(y, m - 1, d, rawTime.includes('-') || offset > 0 ? h + z : h + z * -1, t, s, l));
  }

  /**
   * Adds or subtracts specified increments to or from a date object
   * @param   {String}  increment   an increment to add
   * @param   {Number}  n           factor to add or subtract the increment by
   * @param   {Date}    date        date object
   * @returns {Date}                a new date
   */

  function addTimeOrSubtractTime(increment, n, date) {
    var _incrementHandlers;

    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, MILLISECOND, function (date) {
      return new Date(date.setUTCMilliseconds(date.getUTCMilliseconds() + n));
    }), _defineProperty(_incrementHandlers, SECOND, function (date) {
      return new Date(date.setUTCSeconds(date.getUTCSeconds() + n));
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return new Date(date.setUTCMinutes(date.getUTCMinutes() + n));
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return new Date(date.setUTCHours(date.getUTCHours() + n));
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      return new Date(date.setUTCDate(date.getUTCDate() + n));
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      return new Date(date.setUTCDate(date.getUTCDate() + n * 7));
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      var newMonth = date.getUTCMonth() + n;
      var newYear = date.getUTCFullYear();
      var newDate = date.getUTCDate();

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
      }

      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      var newYear = date.getUTCFullYear() + n;
      var newMonth = date.getUTCMonth();
      var newDate = date.getUTCDate();

      if (newDate > new Date(date.setUTCFullYear(newYear, newMonth + 1, 0)).getUTCDate()) {
        return new Date(date.setUTCFullYear(newYear, newMonth + 1, 0));
      }

      return new Date(date.setUTCFullYear(newYear, newMonth, newDate));
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var addTime = curry(function (increment, n, input) {
    var _input;

    if (input instanceof Function) {
      return wrap(addTime(increment, n), input);
    }

    input = (_input = input) !== null && _input !== void 0 ? _input : new Date();
    validateDate(input);
    return addTimeOrSubtractTime(increment, Number(n), input);
  });
  var subtractTime = curry(function (increment, n, input) {
    var _input2;

    if (input instanceof Function) {
      return wrap(subtractTime(increment, n), input);
    }

    input = (_input2 = input) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input);
    return addTimeOrSubtractTime(increment, n * -1, input);
  });
  var addTimeSequence = curry(function (sequence, input) {
    var _input3;

    if (input instanceof Function) {
      return wrap(addTimeSequence(sequence), input);
    }

    input = (_input3 = input) !== null && _input3 !== void 0 ? _input3 : new Date();
    validateDate(input);
    return sequence.reduce(function (acc, cur) {
      return addTimeOrSubtractTime(cur[0], Number(cur[1]), acc);
    }, input);
  });
  var subtractTimeSequence = curry(function (sequence, input) {
    var _input4;

    if (input instanceof Function) {
      return wrap(subtractTimeSequence(sequence), input);
    }

    input = (_input4 = input) !== null && _input4 !== void 0 ? _input4 : new Date();
    validateDate(input);
    return sequence.reduce(function (acc, cur) {
      return addTimeOrSubtractTime(cur[0], cur[1] * -1, acc);
    }, input);
  });

  /**
   * Sets the date or time to the start of the specified increment
   * @param   {String}    increment   an increment to set the date back to
   * @param   {Date}      date        a date object
   * @returns {Date}                  a new date
   */

  function resetLocalOrResetUTC(increment, date, utc) {
    var _incrementHandlers;

    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, SECOND, function (date) {
      return new Date(date["set".concat(utc, "Seconds")](date["get".concat(utc, "Seconds")](), 0));
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return new Date(date["set".concat(utc, "Minutes")](date["get".concat(utc, "Minutes")](), 0, 0));
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return new Date(date["set".concat(utc, "Hours")](date["get".concat(utc, "Hours")](), 0, 0, 0));
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]());
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]() - date["get".concat(utc, "Day")]());
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      date["set".concat(utc, "Month")](date["get".concat(utc, "Month")](), 1);
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      date["set".concat(utc, "FullYear")](date["get".concat(utc, "FullYear")](), 0, 1);
      date["set".concat(utc, "Hours")](0, 0, 0, 0);
      return new Date(date);
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var resetUTC = curry(function (increment, input) {
    var _input;

    if (input instanceof Function) {
      return wrap(resetUTC(increment), input);
    }

    input = (_input = input) !== null && _input !== void 0 ? _input : new Date();
    validateDate(input);
    return resetLocalOrResetUTC(increment, input, 'UTC');
  });
  var resetLocal = curry(function (increment, input) {
    var _input2;

    if (input instanceof Function) {
      return wrap(resetLocal(increment), input);
    }

    input = (_input2 = input) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input);
    return resetLocalOrResetUTC(increment, input, '');
  });

  /**
   * Sets the date or time to specified interval
   * @param     {String}  increment   an increment to set
   * @param     {String}  value       what to set the increment to
   * @param     {Date}    date        a date object
   * @returns   {Object}              a new gregorian object
   */

  function setLocalOrSetUTC(increment, value, date) {
    var _incrementHandlers;

    var utc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, MILLISECOND, function (date) {
      return new Date(date["set".concat(utc, "Milliseconds")](value));
    }), _defineProperty(_incrementHandlers, SECOND, function (date) {
      return new Date(date["set".concat(utc, "Seconds")](value));
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return new Date(date["set".concat(utc, "Minutes")](value));
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return new Date(date["set".concat(utc, "Hours")](value));
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      return new Date(date["set".concat(utc, "Date")](value));
    }), _defineProperty(_incrementHandlers, DAY, function (date) {
      return new Date(date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]() - date["get".concat(utc, "Day")]() + (value - 1)));
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      var currentDay = date["get".concat(utc, "Day")]();
      var currentMilliseconds = date["get".concat(utc, "Milliseconds")]();
      date["set".concat(utc, "FullYear")](date["get".concat(utc, "FullYear")](), 0, value * 7);
      var n = currentDay - date["get".concat(utc, "Day")]();
      date["set".concat(utc, "Date")](date["get".concat(utc, "Date")]() + n);
      return new Date(date["set".concat(utc, "Milliseconds")](currentMilliseconds));
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      var newMonth = value - 1;
      var newYear = date["get".concat(utc, "FullYear")]();
      var newDate = date["get".concat(utc, "Date")]();
      var shiftMonth = new Date(date["set".concat(utc, "FullYear")](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth["get".concat(utc, "Date")]()) {
        return shiftMonth;
      } else {
        return new Date(date["set".concat(utc, "FullYear")](newYear, newMonth, newDate));
      }
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      var newYear = value;
      var newMonth = date["get".concat(utc, "Month")]();
      var newDate = date["get".concat(utc, "Date")]();
      var shiftMonth = new Date(date["set".concat(utc, "FullYear")](newYear, newMonth + 1, 0));

      if (newDate > shiftMonth["get".concat(utc, "Date")]()) {
        return shiftMonth;
      } else {
        return new Date(date["set".concat(utc, "FullYear")](newYear, newMonth, newDate));
      }
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var setUTC = curry(function (increment, value, input) {
    var _input;

    if (input instanceof Function) return wrap(setUTC(increment, value), input);
    input = (_input = input) !== null && _input !== void 0 ? _input : new Date();
    validateDate(input);
    return setLocalOrSetUTC(increment, value, input, 'UTC');
  });
  var setLocal = curry(function (increment, value, input) {
    var _input2;

    if (input instanceof Function) return wrap(setLocal(increment, value), input);
    input = (_input2 = input) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input);
    return setLocalOrSetUTC(increment, value, input);
  });
  var setLocalGroup = curry(function (group, input) {
    var _input3;

    if (input instanceof Function) return wrap(setLocalGroup(group), input);
    input = (_input3 = input) !== null && _input3 !== void 0 ? _input3 : new Date();
    validateDate(input);
    return Object.keys(group).reduce(function (acc, cur) {
      return setLocalOrSetUTC(cur, group[cur], input);
    }, input);
  });
  var setUTCGroup = curry(function (group, input) {
    var _input4;

    if (input instanceof Function) return wrap(setUTCGroup(group), input);
    input = (_input4 = input) !== null && _input4 !== void 0 ? _input4 : new Date();
    validateDate(input);
    return Object.keys(group).reduce(function (acc, cur) {
      return setLocalOrSetUTC(cur, group[cur], input, 'UTC');
    }, input);
  });

  /**
   * Gets the specified increment in local time or UTC for a date object
   * @param   {String}  increment   date increment to get the value of
   * @param   {Date}    date        a date object
   * @param   {String}  utc         should equal 'UTC' if UTC function
   * @returns {Date}                the value for that increment, in UTC
   */

  function getLocalOrGetUTC(increment, date) {
    var _incrementHandlers;

    var utc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, TIMEZONE_OFFSET, function (date) {
      return utc ? 0 : date.getTimezoneOffset() / 60 * -1;
    }), _defineProperty(_incrementHandlers, MILLISECOND, function (date) {
      return date["get".concat(utc, "Milliseconds")]();
    }), _defineProperty(_incrementHandlers, SECOND, function (date) {
      return date["get".concat(utc, "Seconds")]();
    }), _defineProperty(_incrementHandlers, MINUTE, function (date) {
      return date["get".concat(utc, "Minutes")]();
    }), _defineProperty(_incrementHandlers, HOUR, function (date) {
      return date["get".concat(utc, "Hours")]();
    }), _defineProperty(_incrementHandlers, DATE, function (date) {
      return date["get".concat(utc, "Date")]();
    }), _defineProperty(_incrementHandlers, DAY, function (date) {
      return date["get".concat(utc, "Day")]() + 1;
    }), _defineProperty(_incrementHandlers, WEEK, function (date) {
      return Math.floor(((date - new Date(date["get".concat(utc, "FullYear")](), 0, 1)) / 1000 / 60 / 60 / 24 + 1) / 7);
    }), _defineProperty(_incrementHandlers, MONTH, function (date) {
      return date["get".concat(utc, "Month")]() + 1;
    }), _defineProperty(_incrementHandlers, YEAR, function (date) {
      return date["get".concat(utc, "FullYear")]();
    }), _incrementHandlers);
    return incrementHandlers[increment](date);
  }

  var getUTC = curry(function (increment, date) {
    var _date;

    date = (_date = date) !== null && _date !== void 0 ? _date : new Date();
    validateDate(date);
    return getLocalOrGetUTC(increment, date, 'UTC');
  });
  var getLocal = curry(function (increment, date) {
    var _date2;

    date = (_date2 = date) !== null && _date2 !== void 0 ? _date2 : new Date();
    validateDate(date);
    return getLocalOrGetUTC(increment, date);
  });
  var getUTCGroup = curry(function (increments, date) {
    var _date3;

    date = (_date3 = date) !== null && _date3 !== void 0 ? _date3 : new Date();
    validateDate(date);
    return increments.map(function (increment) {
      return getLocalOrGetUTC(increment, date, 'UTC');
    });
  });
  var getLocalGroup = curry(function (increments, date) {
    var _date4;

    date = (_date4 = date) !== null && _date4 !== void 0 ? _date4 : new Date();
    validateDate(date);
    return increments.map(function (increment) {
      return getLocalOrGetUTC(increment, date);
    });
  });

  /**
   * Adds or subtracts specified increments to or from a date object
   * @param   {String}  increment   an increment to add
   * @param   {Number}  date1       date object
   * @param   {Date}    date2       date object
   * @returns {Number}              numeric difference between the dates in the specific increment
   */

  function diffIt(increment, date1, date2) {
    var _incrementHandlers;

    var incrementHandlers = (_incrementHandlers = {}, _defineProperty(_incrementHandlers, MILLISECOND, function (date1, date2) {
      return diff(date1, date2);
    }), _defineProperty(_incrementHandlers, SECOND, function (date1, date2) {
      return diff(date1, date2) / 1000;
    }), _defineProperty(_incrementHandlers, MINUTE, function (date1, date2) {
      return this[SECOND](date1, date2) / 60;
    }), _defineProperty(_incrementHandlers, HOUR, function (date1, date2) {
      return this[MINUTE](date1, date2) / 60;
    }), _defineProperty(_incrementHandlers, DATE, function (date1, date2) {
      return this[HOUR](date1, date2) / 24;
    }), _defineProperty(_incrementHandlers, WEEK, function (date1, date2) {
      return this[DATE](date1, date2) / 7;
    }), _defineProperty(_incrementHandlers, MONTH, function (date1, date2) {
      return this[DATE](date1, date2) / 30.44; // 365.25 / 12
    }), _defineProperty(_incrementHandlers, YEAR, function (date1, date2) {
      return this[DATE](date1, date2) / 365.25; // Leap-year friendly
    }), _incrementHandlers);
    return incrementHandlers[increment](date1, date2);
  }

  var diffTime = curry(function (increment, input1, input2) {
    var _input, _input2;

    input1 = (_input = input1) !== null && _input !== void 0 ? _input : new Date();
    input2 = (_input2 = input2) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input1);
    validateDate(input2);
    return diffIt(increment, input1, input2);
  });

  /**
   * Adds or subtracts specified increments to or from a date object
   * @param   {Date}  input1   date object
   * @param   {Date}  input2   date object
   * @returns {Number}         1 if input2 is greater, -1 if input1 is greated, 0 if they are the same
   */

  var compareTime = curry(function (input1, input2) {
    var _input, _input2;

    input1 = (_input = input1) !== null && _input !== void 0 ? _input : new Date();
    input2 = (_input2 = input2) !== null && _input2 !== void 0 ? _input2 : new Date();
    validateDate(input1);
    validateDate(input2);
    var difference = diff(input1, input2);

    if (difference === 0) {
      return 0;
    } else if (difference < 0) {
      return -1;
    }

    return 1;
  });

  exports.addTime = addTime;
  exports.addTimeSequence = addTimeSequence;
  exports.compareTime = compareTime;
  exports.diffTime = diffTime;
  exports.getLocal = getLocal;
  exports.getLocalGroup = getLocalGroup;
  exports.getUTC = getUTC;
  exports.getUTCGroup = getUTCGroup;
  exports.isDate = isDate;
  exports.parse = parse;
  exports.parseUTC = parseUTC;
  exports.reform = reform;
  exports.reformWithLocale = reformWithLocale;
  exports.reformWithOverrides = reformWithOverrides;
  exports.resetLocal = resetLocal;
  exports.resetUTC = resetUTC;
  exports.setLocal = setLocal;
  exports.setLocalGroup = setLocalGroup;
  exports.setUTC = setUTC;
  exports.setUTCGroup = setUTCGroup;
  exports.subtractTime = subtractTime;
  exports.subtractTimeSequence = subtractTimeSequence;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
