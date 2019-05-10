const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
    const thing = new Thing({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    });
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'thing saved'
        })
      }).catch( (error) => {
        res.status(400).json({
          error: error
        });
      });
};

exports.changeThing = (req,res, next) => {
  const thing = new Thing({
    _id: req.params.id,  
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  }); 
  Thing.updateOne({ _id: req.params.id }, thing).then(
    () => {
      res.status(201).json({
        message: "changed correctely"
      });
    }  
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      })
    }
  );
};

exports.getThings = (req, res, next) => {
  Thing.find().then(
    (thing) => {
      res.status(200).json(thing); 
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.delThing = (req, res, next) => {
  Thing.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Object deleted'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  );
};