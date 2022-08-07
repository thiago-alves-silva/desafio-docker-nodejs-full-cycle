const mysql = require("mysql");

const config = {
  host: "db",
  user: "root",
  password: "example",
  database: "nodedb",
};

exports.insert = (req, res) => {
  const { name } = req.params;
  const connection = mysql.createConnection(config);

  try {
    connection.connect();
    connection.query(
      `insert into people(name) values('${name}')`,
      async (error, results) => {
        if (error) throw new Error(error);

        const names = await getNames();
        res.status(200).send(`
          <h1>Full Cycle Rocks!</h1>
          <ul>
            <li>${names.join("<li>")}
          </ul>
        `);
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  } finally {
    connection.end();
  }
};

const getNames = () =>
  new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);
    const names = [];

    try {
      connection.connect();
      connection.query("select * from people", (error, results) => {
        if (error) throw error;

        results.forEach((row) => names.push(row.name));
        resolve(names);
      });
    } catch (error) {
      console.error(error.message);
      reject(error);
    } finally {
      connection.end();
    }
  });
