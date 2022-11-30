

const { createLogger,transports} = require('winston')

const logger= createLogger({
  level:"silly",
  transports: [
      new transports.Console()
  ]
})

module.exports= logger