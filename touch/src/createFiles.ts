import path from "node:path"
import fsx from 'fs-extra/esm'
import { pwd } from "./util.ts"
import pc from "picocolors"

export default async function createFiles(file: string[]) {
  try {
    await Promise.all(
      file.map(async (file) => {
        const filePath = path.join(pwd, file);
        await fsx.ensureFile(filePath);
        console.log(pc.green(`Archivo creado: ${filePath}`));
      })
    )
  } catch (err) {
    console.error(pc.red(`Error creating file ${file}`))
  }
}