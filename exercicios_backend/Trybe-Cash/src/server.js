require('dotenv').config();
const app = require('./app');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API trybecash está sendo executado na porta ${ PORT }`);
});