import { S3 } from 'nestjs-s3';
export declare class FileService {
    private readonly s3;
    constructor(s3: S3);
    createFile(file: any, id: any): Promise<any>;
}
