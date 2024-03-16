const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// https://chat.openai.com/share/389149c1-a1a8-445e-b0b8-8e1554a266dd

// Route to get a sorted list of collections with a document containing platform: "Whatsapp"
router.get("/collections", async (_, res) => {
  try {
    // Get a list of all collections
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    // Array to store collection names meeting the criteria
    const filteredCollections = [];

    // Iterate through collections
    for (const collection of collections) {
      // Get the collection name
      const collectionName = collection.name;

      // Check if any document in the collection contains platform: "Whatsapp"
      const found = await mongoose.connection.db
        .collection(collectionName)
        .findOne({ platform: "Whatsapp" });

      // If found, add the collection name to the filtered list
      if (found) {
        filteredCollections.push(collectionName);
      }
    }

    // Sort the filtered collection names alphabetically
    filteredCollections.sort();

    return res.status(200).json({ collections: filteredCollections });
  } catch (error) {
    console.error("Error filtering collections:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to find and update documents in collections meeting the criteria
router.get("/update-highlighted", async (_, res) => {
  try {
    // Get a list of all collections
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    // Array to store collection names meeting the criteria
    const filteredCollections = [];

    // Iterate through collections
    for (const collection of collections) {
      // Get the collection name
      const collectionName = collection.name;

      // Check if any document in the collection contains platform: "Whatsapp"
      const found = await mongoose.connection.db
        .collection(collectionName)
        .findOne({ platform: "Whatsapp" });

      // If found, add the collection name to the filtered list
      if (found) {
        filteredCollections.push(collectionName);

        // Update documents in the collection where platform is "Whatsapp" and highlighted is either false or true
        await mongoose.connection.db
          .collection(collectionName)
          .updateMany(
            { platform: "Whatsapp", highlighted: { $in: [false, true] } },
            { $set: { highlighted: "91" } }
          );
      }
    }

    // Sort the filtered collection names alphabetically
    filteredCollections.sort();

    return res
      .status(200)
      .json({
        collections: filteredCollections,
        message: "Highlighted updated successfully",
      });
  } catch (error) {
    console.error("Error updating highlighted:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Debug API
router.get("/test", (_, res) => {
  let data = "ok";
  return res.send({ data: data });
});

module.exports = router;
