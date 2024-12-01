export interface PrimitiveSDap {
  days: number;
  dueDate: Date;
  interestRateInMonth: number;
  interestRateInPeriod: number;
  profit: number;
  initialAmount: number;
  finalAmount: number;
  type: string;
  currencyType: string;
}

export class SDap {
  constructor(private attributes: PrimitiveSDap) {}

  /**
   * Crea una instancia de un depósito a plazo simulado
   * @param days Días del depósito a plazo
   * @param initialDate Fecha de inicio del depósito a plazo
   * @param initialAmount Monto inicial de inversión
   * @param interestRateBase Tasa de interés base anual
   * @returns Depósito a Plazo simulado
   */
  static create(data: {
    days: number;
    initialDate: number;
    initialAmount: number;
    interestRateBase: number;
    type: string;
    currencyType: string;
  }): SDap {
    const {
      currencyType,
      days,
      initialAmount,
      initialDate,
      interestRateBase,
      type,
    } = data;

    const periods = days / 360;
    const interestRateInPeriod = interestRateBase * periods;
    const profit = Math.round(initialAmount * interestRateInPeriod);

    return new SDap({
      days,
      dueDate: new Date(initialDate + days * 24 * 60 * 60 * 1000),
      interestRateInMonth: interestRateBase / 12,
      interestRateInPeriod,
      profit,
      initialAmount,
      finalAmount: initialAmount + profit,
      currencyType,
      type,
    });
  }

  toValue(): PrimitiveSDap {
    return this.attributes;
  }
}
