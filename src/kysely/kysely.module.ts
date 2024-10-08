import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class KyselyModule {
    static forRoot(): DynamicModule{
        return {
            module: KyselyModule
        }
    }
}
