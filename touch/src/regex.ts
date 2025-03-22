const rMultiFiles = /\[(\s*[A-Za-z0-9_]+(?:\s*,\s*[A-Za-z0-9_]+)*\s*)\]\.[a-z]{1,}/gm
const rFiles = /([A-Za-z0-9]+)(\[(\d+)\.\.(\d+)\])\.[a-z]{1,}/gm
const rFileName = /^([A-Za-z0-9_-]+)\[[0-9]+\.\.[0-9]+\]/;
const rExtension = /\.[a-z]{1,}/gm
const rIncrementalFiles = /([A-Za-z0-9]+)(\[([0-9a-zA-Z]+)\.\.([0-9a-zA-Z]+)\])\.[a-z]{1,}/gm
const rOnlyFile = /([A-Za-z0-9]+)\.[a-z]{1,}/gm

export { rMultiFiles, rFiles, rFileName, rExtension, rIncrementalFiles, rOnlyFile }