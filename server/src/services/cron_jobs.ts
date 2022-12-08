import * as path from 'path'
import * as fs from 'fs'


const cron = require('node-cron')


export const cronJobFirst = (task, message) => {

  cron.schedule(task, () => {
    const filePath = path.resolve(__dirname, '..', 'static')
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true })
    }
    fs.appendFile(path.resolve(__dirname, '..', 'static', 'log.log'), message, (err) => {
      if (err) {
        throw err
      }
    })
  })
}

export const cronJobSecond = (task, message) => {
  cron.schedule(task, () => {
    const filePath = path.resolve(__dirname, '..', 'static')
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true })
    }
    fs.appendFile(path.resolve(__dirname, '..', 'static', 'log.log'), message, (err) => {
      if (err) {
        throw err
      }
    })
  })
}






