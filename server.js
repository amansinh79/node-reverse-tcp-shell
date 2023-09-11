import { log } from "console";
import { writeFileSync } from "fs";
import DHT from "hyperdht";

const node = new DHT();

const server = node.createServer();

server.on("connection", function (socket) {
  process.stdin.pipe(socket).pipe(process.stdout);
});

const keyPair = DHT.keyPair();
writeFileSync("key.txt", keyPair.publicKey.toString("hex"));

server.listen(keyPair);

log("waiting for req");
