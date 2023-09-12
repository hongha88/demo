import { Controller, SetMetadata } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

export const AllowAnonymous = () => SetMetadata('AllowAnonymous', true);
export const OnlyDefaultAdmin = () => SetMetadata('OnlyDefaultAdmin', true);
export const OnlyWhitelistIps = (ips: string[]) => SetMetadata('OnlyWhitelistIps', ips);

export const DemoController =
  (controllerName = '', apiTags?: string): ClassDecorator =>
  <T extends Function>(target: T) => {
    const controller = controllerName ? `/${controllerName}` : '';

    ApiBearerAuth()(target);
    ApiTags(apiTags || controllerName)(target);
    Controller(`api/game${controller}`)(target);
  };
