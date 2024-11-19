import { validateRut } from '@fdograph/rut-utilities';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export const IsValidRun = (_validationOptions?: ValidationOptions) => {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'isValidRun ',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: 'El run dado no es válido',
      },
      validator: {
        validate: (value: string, args: ValidationArguments) => {
          return validateRut(value);
        },
      },
    });
  };
};
