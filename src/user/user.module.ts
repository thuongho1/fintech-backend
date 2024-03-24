import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
//    TypeOrmModule.forFeature([User])]
//    MongooseModule.forFeatureAsync([
//      {
//        name: 'User',
//        useFactory: () => {
//          const schema = UserSchema;
//          schema.pre('save', function () {
//            console.log('Before user is saved');
//          });
//          return schema;
//        },
//      },
//    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
