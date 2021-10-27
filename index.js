const express = require('express');
const app = express();

const { getCompany } = require('./data/company/info');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:company', (req, res) => {
  const company = getCompany(req.params.company);
  res.render('company-overview', {
    company,
    stringCompany: JSON.stringify(company),
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
