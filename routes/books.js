// Our router module
const router = require("express").Router();

// Our controller
const booksController = require("../controllers/booksController");

// Our routes
router.get(`/`, booksController.index);
router.get(`/new`, booksController.new);

router.get(`/:id`, booksController.show);
router.get(`/:id/edit`, booksController.edit);
router.post(`/`, booksController.create);
router.post(`/update`, booksController.update);
router.post(`/destroy`, booksController.destroy);

// We have to export our changes
module.exports = router;
