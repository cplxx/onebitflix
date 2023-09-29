import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5433,
  database: "onebitflix_development",
  username: "cplx",
  password: "onebitflix",
  define: {
    underscored: true,
  },
});
