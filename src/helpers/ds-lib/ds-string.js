
export function dsStrGetFilenameFromPath(path) {
  const filename = path.split("/").pop();
  return filename;
}