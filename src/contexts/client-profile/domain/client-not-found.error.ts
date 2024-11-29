export class ClientNotFoundError extends Error {
  constructor(run: number) {
    super(`Client with run ${run} not found`);
  }
}