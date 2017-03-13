module.exports = (express) => {
  const router = express.Router();

  router.get('/dump',(req,res)=> {
    console.log("Dump:", req.body)
    res.json({thanks:true});
  });

  return router;
};
