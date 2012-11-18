/**
 * Microtemplating plugin
 * - no precompilation step
 * - supports object properties
 * - very fast
 *
 * Usage: $.mt("<span>Name: {{user.first}} {{user.last}}</span>", { user: { first: "Adam", last: "Ant" } });
 */
function ($, undefined) {

  $.mt = function (t, data) {
    return t.replace(/{{([\w\.]+)}}/g, function (_, k) {
      var v, keys = k.split('.')
      for (var i = 0, n = keys.length; i < n; i++) {
        v = data[keys[i]]
        if (v === undefined || v === null) {
          return ''
        } else {
          data = v
        }
      }
      return data
    })
  }

  $.fn.mt = function (t, data) {
    return this.html($.mt(t.data))
  }

})(jQuery);
