import { rMultiFiles, rFiles, rExtension } from "./regex.ts"
import { removeBrackets, pwd } from "./util.ts"
import path from "node:path"
import fsx from 'fs-extra/esm'
import pc from "picocolors"

export default async function createMultiFiles(args: string) {
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

      try {
        await Promise.all(
          fileList.map(async (file) => {
            const filePath = path.join(pwd, `${file}${fileExtension}`);
            await fsx.ensureFile(filePath);
          })
        )
        console.log(pc.green("All files were created successfully 🎉"))
      } catch (err) {
        console.error(pc.red(`Error creating files ${fileList}`))
      }
    }
  }
}