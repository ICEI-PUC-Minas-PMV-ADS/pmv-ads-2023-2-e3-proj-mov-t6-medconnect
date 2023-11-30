export function imgFormat(uri) {
    let filename = uri.split("/").pop();
  
    let match = /\.(\w+)$/.exec(filename);
    console.log(match)
    let type = match ? `image/${match[1]}` : "image";
  
    return { uri, name: filename, type };
  }
  