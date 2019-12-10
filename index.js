const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const {scanInvoice} = require('@ccxcus/ocr');
const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(compression());

const log = console.log;
const port = 8100;
const paths = {
  invoices: './invoices/invoice1.jpg'
};

app.get('/invoices', async (req, res) => {
  try {
    const {names, dates, totals, results} = await scanInvoice(paths.invoices);
    res.json({ names, dates, totals, results });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

app.listen(port, () => log(`App listening on port ${port}`));