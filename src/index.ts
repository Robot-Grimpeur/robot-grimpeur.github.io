#! /usr/bin/env node

import * as chalk from 'chalk';
import { ChildProcess, fork } from 'child_process';
import * as os from 'os';
import * as WebSocket from 'ws';

console.log(
  chalk`{bold.blue ${os.userInfo().username}}{yellow @}{bold.green ${
    os.hostname
  }}`
);

let child: ChildProcess;

const wss = new WebSocket.Server({
  port: 1001,
});

wss.on('connection', (ws) => {
  console.log(ws);
  ws.on('message', (rawData) => {
    const data = JSON.parse(rawData.toString());
    console.log(data);

    switch (data.event) {
      case 'reload': {
        child?.kill();

        child = fork('/rg-dev');
        child.on('message', console.log);
        child.on('error', console.error);

        ws.send('reloaded');
        break;
      }
    }
  });
});
