
export
const thinkClick = (value = 1) => (
  {
    type: 'THINK_CLICK',
    value,
  }
);

export
const intelligenceInc = (value = 1) => (
  {
    type: 'INTELLIGENCE_INC',
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
