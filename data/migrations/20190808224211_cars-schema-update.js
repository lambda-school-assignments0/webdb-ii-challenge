exports.up = function(knex) {
    return knex.schema.table("cars", tbl => {
        // create a text field for transmission type
        tbl.text("transmission");
        // create a text field for status of the title
        tbl.text("status");
    });
};

exports.down = function(knex) {
    // drops the entire table
    return knex.schema.dropTableIfExists("cars");
};
