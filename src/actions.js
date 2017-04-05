
export
const undClick = (value = 1) => (
  {
    type: 'UND_CLICK',
    value,
  }
);

export
const undInc = (value = 1) => (
  {
    type: 'UND_INC',
    value,
  }
);

export
const upgBuy = (upg) => (
  {
    type: 'UPGRADE_BUY',
    upg,
  }
);

export
const upgActivate = (upg) => (
  {
    type: 'UPGRADE_ACTIVATE',
    upg,
  }
);
