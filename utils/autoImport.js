import { promises, lstatSync, readdirSync } from 'fs'
import { basename } from 'path'

export async function getFilesAsync(path = './') {
  const entries = await promises.readdir(path, { withFileTypes: true })
  const files = entries
    .filter((file) => !file.isDirectory())
    .map((file) => ({ name: file.name, path: path + file.name }))
  const folders = entries.filter((folder) => folder.isDirectory())
  for (const folder of folders) {
    files.push(...(await getFilesAsync(`${path}${folder.name}/`)))
  }
  return files
}

export function getDirectoryTree(folderPath) {
  const stats = lstatSync(folderPath)
  const info = {
    path: folderPath,
    name: basename(folderPath),
  }
  if (stats.isDirectory()) {
    info.type = 'folder'
    info.children = readdirSync(folderPath).map(function (child) {
      return getDirectoryTree(folderPath + '/' + child)
    })
  } else {
    info.type = 'file'
  }
  return info
}

export function requireAuto(folderPath) {
  let info = {}
  if (lstatSync(folderPath).isDirectory()) {
    Object.values(readdirSync(folderPath)).forEach((child) => {
      const key = child.includes('.') ? child.split('.')[0] : child
      info[key] = requireAuto(folderPath + '/' + child)
    })
  } else {
    info = require(folderPath)
  }
  return info
}

// Example:
// Just console.log around, it's simple as it looks
// Promise.resolve(getFilesAsync('./folder1/')).then(result => console.log(result))
// console.log(getDirectoryTree('./folder1/'))
// console.log(requireAuto('./folder1/'))
