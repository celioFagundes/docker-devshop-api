import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length, Matches, Validate } from 'class-validator'
import { ProductSlugIsUnique } from '../validations/ProductSlugIsUnique'
import { VariationInput } from './variation.input'

@InputType()
export class ProductUpdateInput {
  @Field()
  @IsUUID()
  id: string
  @Field()
  @Length(3)
  name: string
  @Field()
  @Length(3)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  @Validate(ProductSlugIsUnique)
  slug: string
  @Field()
  @Length(15)
  description: string
  @Field()
  @IsUUID()
  category: string
  @Field()
  @IsUUID()
  brand: string
  @Field()
  sizeType: string
  @Field(type => [String!])
  voltage: string[]
  @Field(type => [VariationInput]!)
  variations: VariationInput[]
}
