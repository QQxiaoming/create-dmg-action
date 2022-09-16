import * as core from '@actions/core'
import { exec } from "@actions/exec";

async function run(): Promise<void> {
  try {
    const srcdir: string = core.getInput('srcdir')
    const name: string = core.getInput('name')
    core.debug(`srcdir = ${srcdir} `)
    core.debug(`name = ${name} `)

    core.debug(new Date().toTimeString())
    await exec(`brew install create-dmg`);
    core.debug(new Date().toTimeString())

    core.debug(new Date().toTimeString())
    await exec(`create-dmg ${name}.dmg ${srcdir}`);
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
