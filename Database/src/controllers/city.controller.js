const db = require('../models');
const City = db.studentReview.models.studentReview;

exports.getCity = async (req, res) => {
  const { id } = req.params;

  const city = await City.findOne({
    where: {
      id,
    },
  });

  if (!city) {
    return res.status(400).send({
      message: `No city found with the id ${id}`,
    });
  }

  return res.send(city);
};

exports.createCity = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({
      message: 'Please provide a name to create a city!',
    });
  }

  let cityExists = await City.findOne({
    where: {
      name,
    },
  });

  if (cityExists) {
    return res.status(400).send({
      message: 'That city already exists!',
    });
  }

  try {
    let newCity = await City.create({
      name,
    });
    return res.send(newCity);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.deleteCity = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide a id for the city you are trying to delete!',
    });
  }

  const city = await City.findOne({
    where: {
      id,
    },
  });

  if (!city) {
    return res.status(400).send({
      message: `No city found with the id ${id}`,
    });
  }

  try {
    await city.destroy();
    return res.send({
      message: `City ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.updateCity = async (req, res) => {
  const {name} = req.body;
  const { id } = req.params;

  const city = await City.findOne({
    where: {
      id,
    },
  });

  if (!city) {
    return res.status(400).send({
      message: `No city found with the id ${id}`,
    });
  }

  try {
    if (name) {
      city.name = name;
    }

    city.save();
    return res.send({
      message: `City ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};