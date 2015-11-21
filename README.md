# house-price-calculate

> Estimate the total price of a house.

# Install

```bash
npm install house-price-calculate
```

```bash
bower install house-price-calculate
```

# Usage

```javascript
const housePriceCalculate = require('house-price-calculate');

const price = housePriceCalculate({
  /* Monthly payment amount. */
  monthlyPayment: 2400,

  /* Down payment and closing costs. */
  downPayment: 20000,

  /* Annual mortgage percentage rate. */
  APR: 4.7,

  /* Term of mortgage loan. */
  termYears: 30,

  /* Closing costs as % of home purchase price. */
  closingCostsPercent: 3,

  /* Estimated annual mortgage and
   * property taxes as % of home sale's price.
   */
  annualEscrowPercent: 1.10
});

console.log(price); // 400043.5818770381
```

# Test

```bash
npm test
```

# License

MIT
