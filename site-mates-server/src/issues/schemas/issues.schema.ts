import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IssuesDocument = Issues & Document;

@Schema()
export class Issues {
  @Prop({ require: true })
  title: string;

  @Prop()
  description: string;
}

// Register to mongo db
export const IssuesSchema = SchemaFactory.createForClass(Issues);
