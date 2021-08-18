import { FastifyPluginAsync } from 'fastify';

import usersRoutes from './getUsers';
import meRoute from './getMe';

const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.addHook('preValidation', async (req, reply) => {
    try {
      const me = await new Promise((resolve, reject) =>
        setTimeout(
          () =>
            resolve({
              name: 'Adrian',
              email: 'adrian@gmail.com'
            }),
          2000
        )
      );
      req.body = me;
    } catch (error) {
      throw new Error('Promise rejected');
    }
  });

  fastify.register(usersRoutes);
  fastify.register(meRoute);
  fastify.get('/', async function (request, reply) {
    return { users: 'some items' };
  });
};

export default auth;
