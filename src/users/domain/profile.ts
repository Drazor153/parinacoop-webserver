export interface PrimitiveProfile {
  id?: number;
  documentNumber: number;
  email: string;
  cellphone: string;
  names: string;
  firstLastName: string;
  secondLastName: string;
}

export class Profile {
  constructor(private attributes: PrimitiveProfile) {}

  toDomain() {
    return this.attributes;
  }

  toPersistence(): {
    id?: number;
    document_number: number;
    email: string;
    cellphone: string;
    names: string;
    first_last_name: string;
    second_last_name: string;
  } {
    return {
      id: this.attributes.id,
      document_number: this.attributes.documentNumber,
      email: this.attributes.email,
      cellphone: this.attributes.cellphone,
      names: this.attributes.names,
      first_last_name: this.attributes.firstLastName,
      second_last_name: this.attributes.secondLastName,
    };
  }
}
