/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/calc-block/view.js ***!
  \********************************/
document.addEventListener('DOMContentLoaded', function () {
  var grids = document.querySelectorAll('.wp-block-services-blocks-calc-block .calc-grid');
  if (grids.length === 0) {
    return;
  }
  function getJSON(el, attr, fallback) {
    try {
      var raw = el.getAttribute(attr);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }
  function formatRUB(num) {
    if (!isFinite(num)) return '';
    var n = Math.round(Number(num));
    return n.toLocaleString('ru-RU') + ' ₽';
  }
  function animateNumber(el, toValue, formatter) {
    if (!el) return;
    var fromVal = Number(el.getAttribute('data-cur') || 0);
    var toNum = Number(toValue);
    if (!isFinite(toNum)) toNum = 0;
    var duration = 350;
    var start = null;
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    function step(now) {
      if (start === null) start = now;
      var elapsed = now - start;
      var progress = Math.min(1, elapsed / duration);
      var eased = easeOutCubic(progress);
      var cur = fromVal + (toNum - fromVal) * eased;
      el.textContent = formatter ? formatter(cur) : String(Math.round(cur));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatter ? formatter(toNum) : String(toNum);
        el.setAttribute('data-cur', String(toNum));
      }
    }
    requestAnimationFrame(step);
  }
  grids.forEach(function (grid) {
    var workMatrix = getJSON(grid, 'data-work', {});
    var oilMatrix = getJSON(grid, 'data-oil', {});
    var timeMap = getJSON(grid, 'data-time', {
      part: '≈ 1 час',
      filter: '1,5–2 часа',
      app: '≈ 2 часа'
    });
    var emptyVal = grid.getAttribute('data-empty') || '—';
    var groups = {};
    grid.querySelectorAll('.pills[data-group]').forEach(function (grp) {
      groups[grp.getAttribute('data-group')] = grp;
    });
    function getActive(groupKey) {
      var grp = groups[groupKey];
      if (!grp) return null;
      var act = grp.querySelector('.pill.act');
      if (act) return act.getAttribute('data-val');
      var any = grp.querySelector('.pill');
      return any ? any.getAttribute('data-val') : null;
    }
    var wCell = grid.querySelector('#calcWork');
    var oCell = grid.querySelector('#calcOil');
    var tCell = grid.querySelector('#calcTime');
    var totCell = grid.querySelector('#calcTotal');
    function pick(obj, key) {
      if (!obj) return undefined;
      if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
      var keys = Object.keys(obj);
      if (keys.length === 0) return undefined;
      return obj[keys[0]];
    }
    function recalc() {
      var make = getActive('make');
      var gear = getActive('gear');
      var method = getActive('method');
      if (!make || !gear || !method) {
        if (wCell) wCell.textContent = emptyVal;
        if (oCell) oCell.textContent = emptyVal;
        if (tCell) tCell.textContent = emptyVal;
        if (totCell) totCell.textContent = emptyVal;
        return;
      }
      var workRow = pick(workMatrix, make);
      var oilRow = pick(oilMatrix, gear);
      var workVal = pick(workRow, method);
      var oilVal = pick(oilRow, method);
      var timeVal = pick(timeMap, method);
      workVal = isFinite(Number(workVal)) ? Math.round(Number(workVal)) : null;
      oilVal = isFinite(Number(oilVal)) ? Math.round(Number(oilVal)) : null;
      var totalVal = workVal !== null && oilVal !== null ? workVal + oilVal : null;
      if (wCell) {
        if (workVal === null) {
          wCell.textContent = emptyVal;
        } else {
          animateNumber(wCell, workVal, formatRUB);
        }
      }
      if (oCell) {
        if (oilVal === null) {
          oCell.textContent = emptyVal;
        } else {
          animateNumber(oCell, oilVal, formatRUB);
        }
      }
      if (tCell) {
        tCell.textContent = timeVal !== undefined && timeVal !== null && timeVal !== '' ? String(timeVal) : emptyVal;
      }
      if (totCell) {
        if (totalVal === null) {
          totCell.textContent = emptyVal;
        } else {
          animateNumber(totCell, totalVal, formatRUB);
        }
      }
    }
    Object.keys(groups).forEach(function (key) {
      var grp = groups[key];
      grp.addEventListener('click', function (e) {
        var pill = e.target.closest('.pill');
        if (!pill || !grp.contains(pill)) return;
        grp.querySelectorAll('.pill').forEach(function (p) {
          p.classList.remove('act');
        });
        pill.classList.add('act');
        recalc();
      });
    });
    recalc();
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map