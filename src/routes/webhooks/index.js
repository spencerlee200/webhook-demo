module.exports = (express) => {
  const router = express.Router();
  const fs = require('fs');
  const uuid = require('uuid4');

<<<<<<< HEAD
  router.get('/dump',(req,res)=> {
    console.log("Dump:", req.body)
    res.json({thanks:true});
=======
  router.post('/dump',(req,res)=> {
    console.log("Dump:", req.body);
    fs.writeFile('./logs/' + uuid() + '.log', JSON.stringify(req.body),(err)=>{
      if(err) throw err;
      console.log("Recorded hook info to logs");
    })
    res.json({
      hookInfo: req.body
    });
>>>>>>> simpleDumpHook
  });

  return router;
};
