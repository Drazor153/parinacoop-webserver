interface ProfileModelData {
  id: number;
  documentNumber: number;
  email: string;
  cellphone: string;
}

export class Profile {
  id: number;
  documentNumber: number;
  email: string;
  cellphone: string;
  constructor({ id, documentNumber, email, cellphone }: ProfileModelData) {
    this.id = id;
    this.documentNumber = documentNumber;
    this.email = email;
    this.cellphone = cellphone;
  }
}
