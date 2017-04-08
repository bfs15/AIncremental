
const updateIntelligence = (state, newIntelligence) => (
  {
    ...state,
    intelligence: newIntelligence,
    intelligenceRounded: Math.round(newIntelligence),
  }
);

const statsReducer = (state = { intelligence: 0, clicks: 0 }, action) => {
  let newIntelligence;

  switch (action.type) {
    case 'THINK_CLICK':
      state = {
        ...state,
        clicks: state.clicks + 1,
      };
      // falls through
    case 'INTELLIGENCE_INC':
      newIntelligence = state.intelligence + action.value;
      state = updateIntelligence(state, newIntelligence);

      break;


    case 'UPGRADE_BUY':
      newIntelligence = state.intelligence - action.upg.cost;
      state = updateIntelligence(state, newIntelligence);

      break;

    default:
  }

  return state;
};

export default statsReducer;
