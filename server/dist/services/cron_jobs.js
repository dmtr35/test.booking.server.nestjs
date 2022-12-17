"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronJobSecond = exports.cronJobFirst = void 0;
const path = require("path");
const fs = require("fs");
const cron = require('node-cron');
const cronJobFirst = (task, message) => {
    cron.schedule(task, () => {
        const filePath = path.resolve(__dirname, '..', 'static');
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }
        fs.appendFile(path.resolve(__dirname, '..', 'static', 'log.log'), message, (err) => {
            if (err) {
                throw err;
            }
        });
    });
};
exports.cronJobFirst = cronJobFirst;
const cronJobSecond = (task, message) => {
    cron.schedule(task, () => {
        const filePath = path.resolve(__dirname, '..', 'static');
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }
        fs.appendFile(path.resolve(__dirname, '..', 'static', 'log.log'), message, (err) => {
            if (err) {
                throw err;
            }
        });
    });
};
exports.cronJobSecond = cronJobSecond;
//# sourceMappingURL=cron_jobs.js.map