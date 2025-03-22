const removeBrackets = (str: string) => str.replace(/^\[|\]$/g, "")
const pwd = process.cwd()

export { removeBrackets, pwd }