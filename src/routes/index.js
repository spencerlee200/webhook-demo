module.exports = (express) => {
  const router = express.Router();

  router.get('/status',(req,res)=> {
    res.status(201).json({
      healthy: true,
    });
  });

  router.use('/webhook/', require('./webhooks')(express))
  return router;
};
