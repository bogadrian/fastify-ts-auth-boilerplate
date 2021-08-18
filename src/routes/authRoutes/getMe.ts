import { FastifyPluginAsync } from 'fastify';

const me: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/me', async function (req, reply) {
    return { me: req.body };
  });
};

export default me;
