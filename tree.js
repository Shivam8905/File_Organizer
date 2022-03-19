const fs = require("fs"); //fs module
const path = require("path"); //path module
function tree(srcPath){
    if(srcPath == undefined){
        console.log("Please enter valid path");
        rutun;
    }else{
        let doesExist = fs.existsSync(srcPath);
        if(doesExist){
            treeHelper(srcPath, "");
        }else {
            console.log("Please enter valid path");
            return;
        }
    }
}
function treeHelper(srcPath, indent){
    let isFile = fs.lstatSync(srcPath).isFile();
    if(isFile == true){
        let fileName = path.basename(srcPath);
        console.log(indent + " ⊢ " + fileName);
    }else{
        let dirName = path.basename(srcPath);
        console.log(indent + " ⨽ " + srcPath);
        let children = fs.readdirSync(srcPath);
        for(let i=0; i<children.length; i++){
            let childPath = path.join(srcPath, children[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}
module.exports = {
    tree:tree
  }