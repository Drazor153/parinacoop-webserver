export interface PrimitiveAddress {
  id?: number;
  typeAddress: string;
  street: string;
  number: number;
  detail: string;
  communeId: number;
}

export class Address {
  constructor(private attributes: PrimitiveAddress) {}

  toDomain() {
    return this.attributes;
  }

  toPersistence(): {
    id?: number;
    type_address: string;
    street: string;
    number: number;
    detail: string;
    commune_id: number;
  } {
    return {
      id: this.attributes.id,
      type_address: this.attributes.typeAddress,
      street: this.attributes.street,
      number: this.attributes.number,
      detail: this.attributes.detail,
      commune_id: this.attributes.communeId,
    };
  }
}
