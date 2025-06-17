import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Student } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllStudents(): Promise<Student[]> {
    return this.prisma.student.findMany();
    
  }
}
