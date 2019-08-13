export default function photo(e) {
  return new Promise(function(resolve,reject) {
    let file=e.target.files[0];
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function() {
      resolve(fileReader.result)
      reject(fileReader.result)
    }
  })

}
