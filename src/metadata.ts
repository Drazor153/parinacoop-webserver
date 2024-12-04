/* eslint-disable */
export default async () => {
  const t = {
    ['./users/domain/user']: await import('./users/domain/user'),
  };
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./users/dto/create-client.dto'),
          {
            CreateClientDto: {
              run: { required: true, type: () => String },
              password: { required: true, type: () => String, minLength: 8 },
              documentNumber: {
                required: true,
                type: () => Number,
                minimum: 1,
              },
              email: { required: true, type: () => String, format: 'email' },
              cellphone: { required: true, type: () => String },
              names: { required: true, type: () => String },
              firstLastName: { required: true, type: () => String },
              secondLastName: { required: true, type: () => String },
              typeAddress: { required: true, type: () => String },
              street: { required: true, type: () => String },
              number: { required: true, type: () => Number, minimum: 1 },
              detail: { required: true, type: () => String },
              communeId: { required: true, type: () => Number, minimum: 1 },
            },
          },
        ],
        [
          import('./users/dto/create-admin.dto'),
          {
            CreateAdminDto: {
              run: { required: true, type: () => String },
              password: { required: true, type: () => String, minLength: 8 },
            },
          },
        ],
        [
          import('./contexts/auth/application/login-use-case/login.dto'),
          {
            LoginDto: {
              run: { required: true, type: () => Number },
              password: { required: true, type: () => String },
            },
          },
        ],
        [
          import('./contexts/auth/infrastructure/http/login/login.http-dto'),
          {
            LoginHttpDto: {
              run: { required: true, type: () => Number },
              password: { required: true, type: () => String },
            },
          },
        ],
        [
          import(
            './contexts/location/application/get-communes-by-region-id-use-case/get-communes-by-region-id.dto'
          ),
          {
            GetCommunesByRegionIdDto: {
              regionId: { required: true, type: () => Number },
            },
          },
        ],
        [
          import(
            './contexts/location/application/get-regions-use-case/get-regions.dto'
          ),
          { GetRegionsDto: {} },
        ],
        [
          import(
            './contexts/client-profile/infrastructure/http/update-profile/update-profile.http-dto'
          ),
          {
            UpdateProfileHttpDto: {
              documentNumber: { required: true, type: () => Number },
              names: { required: true, type: () => String },
              firstLastName: { required: true, type: () => String },
              secondLastName: { required: true, type: () => String },
              email: { required: true, type: () => String },
              cellphone: { required: true, type: () => String },
              street: { required: true, type: () => String },
              number: { required: true, type: () => Number },
              detail: { required: true, type: () => String },
              regionId: { required: true, type: () => Number },
              communeId: { required: true, type: () => Number },
            },
          },
        ],
        [
          import(
            './contexts/dap/infrastructure/http/create-dap/create-dap.http-dto'
          ),
          {
            CreateDapHttpDto: {
              userRun: { required: true, type: () => Number },
              type: { required: true, type: () => String },
              currencyType: { required: true, type: () => String },
              days: { required: true, type: () => Number, minimum: 30 },
              initialAmount: {
                required: true,
                type: () => Number,
                minimum: 50000,
              },
            },
          },
        ],
        [
          import(
            './contexts/dap/infrastructure/http/simulate-dap/simulate-dap.http-dto'
          ),
          {
            SimulateDapDto: {
              type: { required: true, type: () => String },
              initialAmount: {
                required: true,
                type: () => Number,
                minimum: 50000,
              },
            },
          },
        ],
      ],
      controllers: [
        [
          import('./users/users.controller'),
          {
            UsersController: {
              getClientProfile: { type: t['./users/domain/user'].User },
              createClient: { type: t['./users/domain/user'].User },
              firstAdmin: { type: t['./users/domain/user'].User },
            },
          },
        ],
        [
          import('./contexts/auth/infrastructure/http/login/login.controller'),
          { LoginController: { run: {} } },
        ],
        [
          import(
            './contexts/location/infrastructure/http/get-communes-by-region-id/get-communes-by-region-id.controller'
          ),
          { GetCommunesByRegionIdController: { run: {} } },
        ],
        [
          import(
            './contexts/location/infrastructure/http/get-regions/get-regions.controller'
          ),
          { GetRegionsController: { run: {} } },
        ],
        [
          import('./health/health.controller'),
          { HealthController: { check: { type: Object } } },
        ],
        [
          import(
            './contexts/client-profile/infrastructure/http/get-profile/get-profile.controller'
          ),
          { GetProfileController: { run: {} } },
        ],
        [
          import(
            './contexts/client-profile/infrastructure/http/update-profile/update-profile.controller'
          ),
          { UpdateProfileController: { run: {} } },
        ],
        [
          import(
            './contexts/dap/infrastructure/http/create-dap/create-dap.controller'
          ),
          { CreateDapController: { run: {} } },
        ],
        [
          import(
            './contexts/dap/infrastructure/http/simulate-dap/simulate-dap.controller'
          ),
          { SimulateDapController: { run: {} } },
        ],
        [
          import(
            './contexts/dap/infrastructure/http/get-daps/get-daps.controller'
          ),
          { GetDapsController: { run: {} } },
        ],
      ],
    },
  };
};
