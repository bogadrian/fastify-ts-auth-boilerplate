import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { join } from 'path';
import AutoLoad from 'fastify-autoload';

const root: FastifyPluginAsync = fp(async (fastify, opts): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'authRoutes'),
    options: opts
  });
});

export default root;
