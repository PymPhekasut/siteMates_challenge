import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Issues, IssuesSchema } from './schemas/issues.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Issues.name, schema: IssuesSchema }]),
  ],
  controllers: [IssuesController],
  providers: [IssuesService],
})
export class IssuesModule {}
