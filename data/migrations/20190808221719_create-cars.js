exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        // create a primary key called id
        tbl.increments();
        // create a text field called vin
        tbl.text("vin", 128).unique().notNullable();
        // create a text field called make
        tbl.text("make", 128).notNullable();
        // create a text field called model
        tbl.text("model", 128).notNullable();
        // create a numeric field called mileage
        tbl.decimal("mileage").notNullable();
    });
};

exports.down = function(knex) {
    // drops the entire table
    return knex.schema.dropTableIfExists("cars");
};
