import { inputShapeKey, InputTypeParam, SchemaTypes } from '../types';
import BaseTypeRef from './base';

<<<<<<< HEAD
export default class InputListRef<Types extends SchemaTypes, T>
  extends BaseTypeRef
=======
export default class InputObjectRef<Types extends SchemaTypes, T>
  extends BaseTypeRef<Types>
>>>>>>> abe1b6f4 (Add builder and SchemaTypes to field and type refs)
  implements PothosSchemaTypes.InputListRef<Types, T>
{
  override kind = 'InputList' as const;

  [inputShapeKey]!: T;

  $inferInput!: T;

  listType: InputTypeParam<Types>;

  required: boolean;

  constructor(listType: InputTypeParam<Types>, required: boolean) {
    super('InputList', `InputList<${String(listType)}>`);
    this.listType = listType;
    this.required = required;
  }
}
