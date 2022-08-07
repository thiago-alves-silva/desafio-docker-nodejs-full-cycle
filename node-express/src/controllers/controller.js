exports.defaultHandler = (_, res) => {
  res
    .status(200)
    .send(
      "Para inserir uma pessoa no banco de dados, acesse: <b>http://localhost:8080/db/insert/[:name]</b>"
    );
};
