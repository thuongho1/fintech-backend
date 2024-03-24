import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop({ required: true, unique: true, trim: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: [] })
  permissions: Array<string>;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
