export const config = {
  HOST: "localhost",
  USER: "test",
  PASSWORD: "ubuntu",
  DB: "books",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export const dialect = "postgres";
