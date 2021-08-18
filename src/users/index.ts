import fp from 'fastify-plugin';

export interface SupportPluginOptions {}

const users = [
  {
    name: 'Adrian',
    email: 'adrian@gmail.com'
  },
  {
    name: 'Bogdan',
    email: 'bogdan@gmail.com'
  },
  {
    name: 'Walsh',
    email: 'walsh@gmail.com'
  }
];

export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('allUsers', function () {
    return { users };
  });
});

declare module 'fastify' {
  export interface FastifyInstance {
    allUsers: { name: string; email: string };
  }
}
