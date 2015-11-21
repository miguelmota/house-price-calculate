(function(root) {
  'use strict';

  function housePriceCalculate(data) {
    if (!(typeof data === 'object' && data.constructor === Object)) {
      return null;
    }

    var monthlyPayment = data.monthlyPayment;
    var downPayment = data.downPayment;
    var APR = data.APR;
    var termYears = data.termYears;
    var closingCostsPercent = data.closingCostsPercent;
    var closingCostsDecimal = closingCostsPercent / 100;
    var annualEscrowPercent = data.annualEscrowPercent;
    var escrowDecimal = (annualEscrowPercent / 100) / 12;
    var housePrice = null;
    var interestRate = APR / (12 * 100);
    var termMonths = termYears * 12;
    var paymentFactor = (interestRate / (1 - Math.pow(1 + interestRate, -termMonths)));
    var loan = monthlyPayment / paymentFactor;
    var oldLoan = 0;
    var escrow = 0;
    var closingCosts = 0;
    var firstPass = true;

    /* Iterates until the correct loan amount is determined. */
    while (Math.abs(loan - oldLoan) > 1) {
      if (!firstPass) {
        oldLoan = loan;
      }
      firstPass = false;

      loan = (monthlyPayment - escrow) / paymentFactor;
      housePrice = loan + downPayment - closingCosts;
      closingCosts = housePrice * closingCostsDecimal;
      escrow = housePrice * escrowDecimal;
    }

    return housePrice;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = housePriceCalculate;
    }
    exports.housePriceCalculate = housePriceCalculate;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return housePriceCalculate;
    });
  } else {
    root.housePriceCalculate = housePriceCalculate;
  }

})(this);
