'use strict'
import { EOL } from 'os'
import { sep, normalize } from 'path'

const treatPathSep = (data: string) => data.replace(/[/\\]+/g, sep)

const treatEOL = (data: string) => data.replace(/\r?\n/g, EOL)
const sanitizePath = (data: string) => normalize(treatPathSep(data))
const treatDataFromSpawn = (data: string) => treatEOL(treatPathSep(data))

export { treatDataFromSpawn, treatEOL, sanitizePath }
