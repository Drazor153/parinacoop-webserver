import { SetMetadata } from '@nestjs/common';

export const NO_AUTH_KEY = 'authorization';

/**
 * Decorador que permite que ciertas rutas de un controlador pueda saltarse el AuthGuard
 * @returns
 */
export const NoAuth = () => SetMetadata(NO_AUTH_KEY, true);
