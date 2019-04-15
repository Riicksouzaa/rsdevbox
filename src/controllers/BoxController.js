const Box = require("../models/Box");

class BoxController {
  async store(req, res) {

    // pode ser substituido por : const box await Box.Create({req.body})
    const box = await Box.create({
      title: req.body.title
    });

    return res.send(box);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: {
        sort: {
          createdAt: -1
        }
      }
    });

    return res.json(box);
  }
}

module.exports = new BoxController();