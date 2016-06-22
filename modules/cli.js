import { logTask, logError } from './LogUtils'
import build from './build'
import start from './start'
import version from './version'

const action = process.argv[2]

const actions = {
  start,
  build
}

const helperActions = {
  '--version': version
}

if (helperActions[action]) {
  helperActions[action]()
} else if (actions[action]) {
  logTask(`[${action}]`, 'task')
  actions[action](() => {
    logTask(`[${action}]`, 'task complete')
  })
} else {
  logError(action, 'is not a valid command')
}

