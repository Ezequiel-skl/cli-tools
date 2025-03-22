#!/usr/bin/env bun

import createMultiFiles from "./src/createMultiFiles.ts"
import createIncrementalFiles from "./src/createIncrementalFiles.ts"
import createFiles from "./src/createFiles.ts"

import { rMultiFiles, rIncrementalFiles, rOnlyFile } from "./src/regex.ts"

const args = process.argv.splice(2)
const argsStr = args.join(" ")

if (args.length === 0) {
  console.log("No arguments provided")
  process.exit(1)
}

if (rMultiFiles.test(argsStr)) {
  createMultiFiles(argsStr)
} else if (rIncrementalFiles.test(argsStr)) {
  createIncrementalFiles(argsStr)
} else if (rOnlyFile.test(argsStr)) {
  createFiles(args)
}