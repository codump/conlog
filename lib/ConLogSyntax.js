/**
 * Function to highlight objects.
 * @param {object} syntaxObject - object for syntax highlighter
 * @returns {object}
 */ 

function ConLogSyntax (syntaxObject) {
  syntaxObject = syntaxObject.replaceAll(`[`, `\x1b[33m[\x1b[36m`)
  syntaxObject = syntaxObject.replaceAll(`]`, `\x1b[33m]\x1b[36m`)
  syntaxObject = syntaxObject.replaceAll(`{`, `\x1b[35m{\x1b[36m`)
  syntaxObject = syntaxObject.replaceAll(`}`, `\x1b[35m}\x1b[36m`)
  syntaxObject = syntaxObject.replaceAll(`:`, `\x1b[37m:\x1b[36m`)
  syntaxObject = syntaxObject.replaceAll(`,`, `\x1b[37m,\x1b[36m`)
  syntaxObject = syntaxObject.replaceAll(`"`, `\x1b[34m"\x1b[36m`)
  return syntaxObject
}

exports.ConLogSyntax = ConLogSyntax