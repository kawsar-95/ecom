const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const addressBookSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            required: true,
        },

        user: {
            type: ObjectId,
            ref: "users",
            required: true,
        },
        address: [
            {
                fullName: {
                    type: String,
                    required: true,
                },
                region: {
                    type: String,
                    required: true,
                },
                city: {
                    type: String,
                    required: true,
                },
                zone: {
                    type: String,
                    required: true,
                },
                addressLine: {
                    type: String,
                    required: true,
                },
                phone: {
                    type: Number,
                    required: true,
                },
                effectiveDelivery: {
                    type: String,
                    default: "Home",
                    enum: [
                        "Home",
                        "Office",
                    ],
                },
            },
        ],
        isDefault: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

const addressbookModel = mongoose.model("addressBook", addressBookSchema);
module.exports = addressbookModel;
