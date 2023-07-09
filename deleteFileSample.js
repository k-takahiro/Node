
// ファイル削除
// const { unlink } = require('node:fs');
const fs = require('fs');

const getCommand = () => (  {
    programName : process.argv.length > 0 ? process.argv[0] : null,
    scriptName : process.argv.length > 1 ? process.argv[1] : null,
    args : process.argv.filter( (e,i)=>i>1)
});

const command = getCommand();

console.log(`programName: ${command.programName}`);
console.log(`scriptName: ${command.scriptName}`);
console.log(`args: ${command.args}`);

// 引数で指定されたファイルを削除
if (Array.isArray(command.args)) {
    for (let file of command.args) {
        // 以前はfs.exists()メソッドを使用できましたが、現在は非推奨
        if (fs.existsSync(file)) {
            console.log(`ファイルあり: ${file}`);
            // ファイル削除
            fs.unlink(file, (err) => {
                if (err) throw err;
                console.log(`削除成功: ${file}`);
            });    
        } else {
            console.log(`ファイルなし: ${file}`);
        }
    }
}

