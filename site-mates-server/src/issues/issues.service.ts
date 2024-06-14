import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issues, IssuesDocument } from './schemas/issues.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IssuesService {
  //Call mongoose
  constructor(
    @InjectModel(Issues.name) private issuesModel: Model<IssuesDocument>,
  ) {}

  create(createIssueDto: CreateIssueDto) {
    const result = new this.issuesModel(createIssueDto);
    return result.save();
  }

  findAll(): Promise<Issues[]> {
    return this.issuesModel.find().exec();
  }

  findOne(id: string): Promise<Issues> {
    return this.issuesModel.findById(id).exec();
  }

  update(id: string, updateIssueDto: UpdateIssueDto): Promise<Issues> {
    const result = this.issuesModel
      .findByIdAndUpdate(id, updateIssueDto, { new: true })
      .exec();
    return result;
  }

  async remove(id: string) {
    const result = await this.issuesModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('id not found');
    }
    return { message: 'delete successfully' };
  }
}
