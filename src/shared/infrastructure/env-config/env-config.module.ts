import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { join } from 'path';
import { env } from 'process';
import { EnvConfigService } from './env-config.service';

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return super.forRoot({
      ...options,
      envFilePath: [join(__dirname, `../../../../.env.${env.NODE_ENV}`)],
    });
  }
}
