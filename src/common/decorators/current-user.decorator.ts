import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurUserId = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const cxt = GqlExecutionContext.create(context);
    const userId = cxt.getContext().req.user.id;
    return userId;
  },
);
