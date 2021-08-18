import {
  FastifyPluginAsync,
  FastifyInstance,
  FastifyLoggerInstance
} from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';
import users from '../../users';

const usersRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.register(users);

  type self = FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse,
    FastifyLoggerInstance
  > & { allUsers: () => { users: { name: string; email: string }[] } };

  fastify.get('/users', async function (request, reply) {
    return { users: (this as self).allUsers() };
  });
};

export default usersRoute;
