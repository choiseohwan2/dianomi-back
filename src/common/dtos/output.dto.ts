import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CoreOutput {
  @Field(() => String, { nullable: true })
  msg?: string;

  @Field(() => String, { nullable: true })
  field?: string;

  @Field(() => Boolean)
  ok: boolean;
}
