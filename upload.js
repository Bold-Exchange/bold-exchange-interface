const { exec } = require("child_process");
const { promisify } = require("util");
const { readdir, stat } = require("fs").promises;
const path = require("path");
const execAsync = promisify(exec);

// 远程服务器信息
const username = "root";
const remotehost = "170.64.156.136";
const remoteDir = "/var/www/bold.exchange";

async function uploadFile(file) {
  const cmd = `scp ${file} ${username}@${remotehost}:${remoteDir}`;
  await execAsync(cmd);
}

async function getFiles(dir) {
  let files = [];
  const items = await readdir(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(await getFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  const files = await getFiles("dist");
  const uploadPromises = files.map((file) => uploadFile(file));
  await Promise.all(uploadPromises);
}

main().catch(console.error);
