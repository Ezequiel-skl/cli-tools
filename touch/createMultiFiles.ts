import { rMultiFiles, rFiles, rExtension } from "./regex.ts"
import { removeBrackets, pwd } from "./util.ts"
import path from "node:path"
import fsx from 'fs-extra/esm'

export default function createMultiFiles(args: string) {
  const multiFiles = args.match(rMultiFiles)
  
  if (multiFiles) {
    const files = multiFiles[0].match(rFiles)
    const extension = multiFiles[0].match(rExtension)

    if (files && extension) {
      const fileList = files[0]
        .replace("[", "")
        .replace("]", "")
        .split(",")
        .map(f => f.trim())

      const fileExtension = removeBrackets(extension[0])

      for (const file of fileList) {
        const filePath = path.join(pwd, `${file}${fileExtension}`)
        
        fsx.ensureFile(filePath)
          .catch(err => console.log(err))
      }
    }
  }
}