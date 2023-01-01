const addressBookModel = require("../models/addressBook");


class addressBook {
    // async getAllAddressBook(req, res) {
    //     try {
    //         let addressBook = await addressBookModel
    //             .find({})
    //             .populate("allProduct.id", "pName pImages pPrice")
    //             .populate("user", "name email")
    //             .sort({ _id: -1 });
    //         if (addressBook) {
    //             return res.json({ addressBook });
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    async getAddressBookByUser(req, res) {
        let { uId } = req.body;
        if (!uId) {
            return res.json({ message: "All filled must be required" });
        } else {
            try {
                let addressBook = await addressBookModel
                    .find({ user: uId })
                    // .populate("label", "user")
                    // .populate("address", "isDefault",)
                    .sort({ _id: -1 });
                if (addressBook) {
                    return res.json({ addressBook });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    async postCreateAddressBook(req, res) {
        let { label, user, address, isDefault } = req.body;
        if (
            !label ||
            !user ||
            !address
        ) {
            return res.json({ message: "All filled must be required" });
        } else {
            try {
                let newaddressBook = new addressBookModel({
                    label,
                    user,
                    address,
                    isDefault,
                });
                let save = await newaddressBook.save();

                if (save) {
                    return res.json({ success: "Address created successfully" });
                }
            } catch (err) {
                return res.json({ error: error });
            }
        }
    }

    // async postUpdateAddressBook(req, res) {
    //     let {
    //         user,
    //         address,
    //         isDefault
    //     } = req.body;
    //     let { aId, status } = req.body;
    //     if (!aId || !status) {
    //         return res.json({ message: "All filled must be required" });
    //     } else {
    //         let currentAddressBook = addressBookModel.findByIdAndUpdate(aId, {
    //             status: status,
    //             updatedAt: Date.now(),
    //         });
    //         currentAddressBook.exec((err, result) => {
    //             if (err) console.log(err);
    //             return res.json({ success: "Address updated successfully" });
    //         });
    //     }
    // }

    async postDeleteAddressBook(req, res) {
        let { aId } = req.body;
        if (!aId) {
            return res.json({ error: "All filled must be required" });
        } else {
            try {
                let deleteAddressBook = await addressBookModel.findByIdAndDelete(aId);
                if (deleteAddressBook) {
                    return res.json({ success: "Address deleted successfully" });
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}

const addressBookController = new addressBook();
module.exports = addressBookController;
