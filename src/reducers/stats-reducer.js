
import statsInit from '../data/stats';

const statsReducer = (stats = statsInit, action) => {
  let newIntelligence;

  switch (action.type) {
    case 'THINK_CLICK':
      stats = {
        ...stats,
        clicksTotal: stats.clicksTotal + 1,
      };
      // falls through
    case 'INTELLIGENCE_INC':
      newIntelligence = stats.intelligence + action.value;

      stats = {
        ...stats,
        intelligenceTotal: stats.intelligenceTotal + action.value,
        intelligence: newIntelligence,
        intelligenceRounded: Math.round(newIntelligence),
      };

      break;


    case 'UPGRADE_BUY':
      newIntelligence = stats.intelligence - action.upg.cost;
      stats = {
        ...stats,
        intelligence: newIntelligence,
        intelligenceRounded: Math.round(newIntelligence),
      };

      break;


    case 'INTELLIGENCE_COMMIT':
      newIntelligence = stats.intelligence - action.amount;

      stats = {
        ...stats,
        intelligenceCommited: stats.intelligenceCommited + action.amount,
        intelligence: newIntelligence,
        intelligenceRounded: Math.round(newIntelligence),
      };

      break;
  }

  return stats;
};

export default statsReducer;
