/**
 * @param {object} object - object for syntax highlighter
 */ 

const ConLogSyntax = (object) => {
  object = object.replaceAll(`[`, `\x1b[33m[\x1b[36m`)
  object = object.replaceAll(`]`, `\x1b[33m]\x1b[36m`)
  object = object.replaceAll(`{`, `\x1b[35m{\x1b[36m`)
  object = object.replaceAll(`}`, `\x1b[35m}\x1b[36m`)
  object = object.replaceAll(`:`, `\x1b[37m:\x1b[36m`)
  object = object.replaceAll(`,`, `\x1b[37m,\x1b[36m`)
  object = object.replaceAll(`"`, `\x1b[34m"\x1b[36m`)
  return object
}

exports.ConLogSyntax = ConLogSyntax