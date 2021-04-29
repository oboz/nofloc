'use strict';

const name = "permissions-policy";
const rule = "interest-cohort=()";

function noflocExpress() {
  return function(req, res, next) {
    let header = rule;
    if (res.hasHeader(name)) {
      header = res.getHeader(name);
      if (header.indexOf(rule) === -1) {
        header += ', ' + rule;
      }
    }
    res.setHeader(name, header);
    next();
  }
}

function noflocKoa() {
  return async function(ctx, next) {
    let header = ctx.response.header[name] || rule;
    if (header.indexOf(rule) === -1) {
      header += ', ' + rule;
    }
    ctx.set(name, header);
    await next();
  }
}

module.exports = {
  noflocExpress,
  noflocKoa
}
