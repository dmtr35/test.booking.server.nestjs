import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as uuid from 'uuid'
import { InjectS3, S3 } from 'nestjs-s3'


@Injectable()
export class FileService {
    constructor(@InjectS3() private readonly s3: S3) { }

    async createFile(file, id): Promise<any> {
        try {
            const fileName = id + '.jpg'
            const s3Response = await this.s3.upload({
                Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
                Key: fileName,
                Body: file.buffer,
                ContentType: file.mimetype
            }).promise()

            return s3Response.Location

        } catch (e) {
            throw new HttpException('произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

