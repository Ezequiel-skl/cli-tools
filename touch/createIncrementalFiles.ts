import { rIncrementalFiles, rFileName, rExtension } from "./regex.ts"
import { removeBrackets, pwd } from "./util.ts"
import path from "node:path"
import fsx from 'fs-extra/esm'

export default function createIncrementalFiles(args: string) {
  const incrementalFiles = args.match(rIncrementalFiles)

  if (incrementalFiles) {
    const machFfiles = incrementalFiles[0].match(rFileName)
    const machExtension = incrementalFiles[0].match(rExtension)
    const machIncremental = incrementalFiles[0].match(/(\[[0-9a-bA-B]+\.\.[0-9a-bA-B]+\])/gm)

    if (machFfiles && machExtension && machIncremental) {
      const file = removeBrackets(machFfiles[1])
      const fileExtension = removeBrackets(machExtension[0])
      const [startStr, endStr] = machIncremental[0].slice(1, -1).split("..")
      
      const isNumber = /^\d+$/.test(startStr) && /^\d+$/.test(endStr)

      if (isNumber) {
        // incremental file with numbers

        const startNumber = Number.parseInt(startStr, 10)
        const endNumber = Number.parseInt(endStr, 10)
        const padding = endStr.length

        for (let i = startNumber; i <= endNumber; i++) {
          const paddedNumber = String(i).padStart(padding, "0")
          const filePath = path.join(pwd, `${file}${paddedNumber}${fileExtension}`)
          
          fsx.ensureFile(filePath)
            .catch(err => console.log(err))
        }
      } else {
        // incremental file with alphabet
        const start = startStr.charCodeAt(0);
        const end = endStr.charCodeAt(0);

        for (let i = start; i <= end; i++) {
          const letter = String.fromCharCode(i);
          const filePath = path.join(process.cwd(), `${file}${letter}${fileExtension}`);
          fsx.ensureFile(filePath)
            .then(() => console.log(`File ${filePath} created`))
            .catch(err => console.log(err))
        }
      }
    }
  }
}