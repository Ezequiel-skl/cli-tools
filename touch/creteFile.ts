import path from "node:path"
import fsx from 'fs-extra/esm'
import { pwd } from "./util.ts"

export default async function creteFile(file: string[]) {
  try {
    await Promise.all(
      file.map(async (file) => {
        const filePath = path.join(pwd, file);
        await fsx.ensureFile(filePath);
        console.log(`Archivo creado: ${filePath}`);
      })
    )
  } catch (err) {
    console.log(`Error creating file ${file}`)
  }
}