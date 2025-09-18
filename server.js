const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './public'
});

const port = process.env.PORT || 3000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Amazon API is running!' });
});

// Use default router
server.use(router);

server.listen(port, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${port}`);
});