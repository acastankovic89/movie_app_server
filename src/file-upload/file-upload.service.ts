import { Injectable } from '@nestjs/common';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
import { diskStorage } from 'multer';
import * as multer from 'multer';
import * as fs from 'fs';

@Injectable()
export class FileUploadService {
  create(createFileUploadDto: CreateFileUploadDto) {
    return 'This action adds a new fileUpload';
  }

  async storeFile(file, body) {
    console.log('body aaaa', body);
    console.log('file aaaa', file);

    const imageBuffer = file.buffer;
    const directory = './uploads/movies/img/';
    fs.writeFile(directory + file.originalname, imageBuffer, (err) => {
      if (err) {
        console.error('Error saving image:', err);
        // Handle the error appropriately
      } else {
        console.log('Image saved successfully');
        // Handle the success case appropriately
      }
    });

    return 'This action upload file';
  }

  findAll() {
    return `This action returns all fileUpload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUpload`;
  }

  update(id: number, updateFileUploadDto: UpdateFileUploadDto) {
    return `This action updates a #${id} fileUpload`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUpload`;
  }
}
