const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    {
      // phil7j@gmail.com
      role: "admin",
      auth_id: "auth0|5d9525bdaed7ac0d51b1103a"
    },
    {
      // mhguitar1997@gmail.com
      role: "admin",
      auth_id: "google-oauth2|102505450093705496380"
    },
    {
      // yusufnafey@gmail.com
      role: "admin",
      auth_id: "google-oauth2|104797840746198870869"
    },
    {
      // reedtjames1234@gmail.com
      role: "admin",
      auth_id: "google-oauth2|101388585358836498209"
    },
    {
      // rory.christian.murray@gmail.com
      role: "admin",
      auth_id: "google-oauth2|101213116176046442161"
    },
    {
      // labs16grantly@gmail.com
      role: "user",
      auth_id: "google-oauth2|105085847106269862248"
    }
  ]);
};
