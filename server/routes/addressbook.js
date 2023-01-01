const express = require("express");
const router = express.Router();
const addressBookController = require("../controller/addressBook");

// router.get("/get-all-orders", ordersController.getAllOrders);
router.post("/address-by-user", addressBookController.getAddressBookByUser);

router.post("/create-address", addressBookController.postCreateAddressBook);
// router.post("/update-address", addressBookController.postUpdateAddressBook);
router.post("/delete-address", addressBookController.postDeleteAddressBook);

module.exports = router;