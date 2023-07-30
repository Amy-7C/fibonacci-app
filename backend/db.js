const pg = require("pg").Pool;

const pool = new pg({
  user: 'postgres',
  host: 'localhost',
  database: 'fibonacci',
  password: 'password',
  port: 5432
});

const getFibNumbers = (req, res) => {
  const num = parseInt(req.params.num);
  const query = 'SELECT value FROM fibonacci WHERE index < $1'
  pool.query(query, [num], (error, results) => {
    if(error) {
      throw error
    }
    const fibList = results.rows;
    const fibValueList = fibList.map((index) => index.value);
    if(fibList.length !== num) {
      for(let i = fibList.length; i < num; i++) {
        const value = fibValueList[i-1] + fibValueList[i-2];
        fibValueList.push(value);
        insertFibNum(i, value);
      }
    }
    return res.status(200).send({'result': fibValueList.join(", ")});
  })

}

const insertFibNum = (index, value) => {
  const query = 'INSERT INTO fibonacci (index, value) VALUES ($1, $2)';
  pool.query(query, [index, value], (error, results) => {
    if(error) {
      throw error
    }
    console.log(results);
  })
}

module.exports = {
  getFibNumbers
}