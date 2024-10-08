import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ConfigModuleOptions } from './config-module-options.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
