import { FastifyPluginAsync } from 'fastify';

const nonAuth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an example of a non auth protected route';
  });
};

export default nonAuth;
