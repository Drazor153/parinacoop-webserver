/* eslint-disable */
export default async () => {
  const t = {};
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./contexts/auth/infrastructure/http/login/login.http-dto'),
          {
            LoginHttpDto: {
              run: {
                required: true,
                type: () => Number,
                description: 'RUN del cliente',
                example: 12345678,
              },
              password: {
                required: true,
                type: () => String,
                description: 'Contrase\u00F1a del cliente',
                example: 'password',
              },
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
            SimulateDapHttpDto: {
              type: { required: true, type: () => String },
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
            './contexts/admin/infrastructure/http/create-client/create-client.http-dto'
          ),
          {
            CreateClientHttpDto: {
              run: { required: true, type: () => String },
              password: {
                required: true,
                type: () => String,
                minLength: 8,
                maxLength: 20,
              },
              documentNumber: {
                required: true,
                type: () => Number,
                minimum: 100000000,
              },
              email: {
                required: true,
                type: () => String,
                maxLength: 50,
                format: 'email',
              },
              cellphone: { required: true, type: () => String },
              names: { required: true, type: () => String, maxLength: 50 },
              firstLastName: {
                required: true,
                type: () => String,
                maxLength: 20,
              },
              secondLastName: {
                required: true,
                type: () => String,
                maxLength: 20,
              },
              typeAddress: {
                required: true,
                type: () => String,
                maxLength: 20,
              },
              street: { required: true, type: () => String, maxLength: 50 },
              number: { required: true, type: () => Number, minimum: 1 },
              detail: { required: true, type: () => String, maxLength: 50 },
              communeId: { required: true, type: () => Number, minimum: 1 },
            },
          },
        ],
        [
          import(
            './contexts/admin/infrastructure/http/create-first-admin/create-first-admin.http-dto'
          ),
          {
            CreateFirstAdminHttpDto: {
              run: { required: true, type: () => String },
              password: { required: true, type: () => String, minLength: 8 },
            },
          },
        ],
      ],
      controllers: [
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
        [
          import(
            './contexts/admin/infrastructure/http/create-client/create-client.controller'
          ),
          { CreateClientController: { run: {} } },
        ],
        [
          import(
            './contexts/admin/infrastructure/http/create-first-admin/create-first-admin.controller'
          ),
          { CreateFirstAdminController: { run: {} } },
        ],
      ],
    },
  };
};
