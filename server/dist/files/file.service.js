"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_s3_1 = require("nestjs-s3");
let FileService = class FileService {
    constructor(s3) {
        this.s3 = s3;
    }
    async createFile(file, id) {
        try {
            const fileName = id + '.jpg';
            const s3Response = await this.s3.upload({
                Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
                Key: fileName,
                Body: file.buffer,
                ContentType: file.mimetype
            }).promise();
            return s3Response.Location;
        }
        catch (e) {
            throw new common_1.HttpException('произошла ошибка при записи файла', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_s3_1.InjectS3)()),
    __metadata("design:paramtypes", [Object])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map