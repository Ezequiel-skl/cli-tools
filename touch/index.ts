#!/usr/bin/env bun

import createMultiFiles from "./createMultiFiles.ts"
import createIncrementalFiles from "./createIncrementalFiles.ts"
import creteFile from "./creteFile.ts"

import { rMultiFiles, rIncrementalFiles, rOnlyFile } from "./regex.ts"

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
  creteFile(args)
}