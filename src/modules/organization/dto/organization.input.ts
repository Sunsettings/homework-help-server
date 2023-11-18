import { OrgImageInput } from '@/modules/orgImage/dto/orgImage.input';
import { Field, InputType } from '@nestjs/graphql';

/**
 * 学员
 */
@InputType()
export class OrganizationInput {
  @Field({
    description: '营业执照',
  })
  businessLicense: string;

  @Field({
    description: '法人身份证正面',
  })
  identityCardFrontImg: string;

  @Field({
    description: '法人身份证反面',
  })
  identityCardBackImg: string;

  @Field({
    description: '标签 以，隔开',
    nullable: true,
  })
  tags: string;

  @Field({
    description: '简介',
    nullable: true,
  })
  description: string;

  @Field({
    description: '名称',
    nullable: true,
  })
  name: string;

  @Field({
    description: 'logo',
    nullable: true,
  })
  logo: string;

  @Field({
    description: '地址',
    nullable: true,
  })
  address: string;

  @Field({
    description: '经度',
    nullable: true,
  })
  longitude: string;

  @Field({
    description: '纬度',
    nullable: true,
  })
  latitude: string;

  @Field({
    description: '电话',
    nullable: true,
  })
  tel: string;

  @Field(() => [OrgImageInput], {
    nullable: true,
    description: '机构门面图',
  })
  orgFrontImg?: OrgImageInput[];

  @Field(() => [OrgImageInput], {
    nullable: true,
    description: '机构室内图',
  })
  orgRoomImg?: OrgImageInput[];

  @Field(() => [OrgImageInput], {
    nullable: true,
    description: '机构其他图',
  })
  orgOtherImg?: OrgImageInput[];
}
