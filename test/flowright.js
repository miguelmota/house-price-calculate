const test = require('tape');
const housePriceCalculate = require('../house-price-calculate');

test('housePriceCalculate', function (t) {
  'use strict';

  t.plan(6);

  t.equal(housePriceCalculate(), null);
  t.equal(housePriceCalculate(42), null);
  t.equal(housePriceCalculate('foo'), null);
  t.equal(housePriceCalculate([]), null);

  const result_A = housePriceCalculate({
    monthlyPayment: 50,
    downPayment: 10,
    APR: 5,
    termYears: 30,
    closingCostsPercent: 3,
    annualEscrowPercent: 1.10
  });

  t.equal(result_A, 7765.263481074419);

  const result_B = housePriceCalculate({
    monthlyPayment: 2400,
    downPayment: 20000,
    APR: 4.7,
    termYears: 30,
    closingCostsPercent: 3,
    annualEscrowPercent: 1.10
  });

  t.equal(result_B, 400043.5818770381);
});
