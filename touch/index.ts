#!/usr/bin/env bun

import createMultiFiles from "@/createMultiFiles.ts"
import createIncrementalFiles from "@/createIncrementalFiles.ts"
import createFiles from "@/createFiles.ts"

import { rMultiFiles, rIncrementalFiles, rOnlyFile } from "@/regex.ts"

import pc from "picocolors"

const args = process.argv.splice(2)
const argsStr = args.join(" ")

if (args.length === 0) {
  console.error(
    pc.red("No arguments provided")
  )
  process.exit(1)
}

if (rMultiFiles.test(argsStr)) {
  createMultiFiles(argsStr)
} else if (rIncrementalFiles.test(argsStr)) {
  createIncrementalFiles(argsStr)
} else if (rOnlyFile.test(argsStr)) {
  createFiles(args)
}