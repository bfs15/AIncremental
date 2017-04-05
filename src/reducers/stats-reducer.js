
const statsReducer = (state = { und: 0, clicks: 0 }, action) => {
  let newStats = state;
  let newUnd;

  switch (action.type) {
    case 'UND_CLICK':
      newStats = {
        ...newStats,
        clicks: state.clicks + 1,
      };
      // falls through to UND_INC
    case 'UND_INC':
      newUnd = state.und + action.value;

      newStats = {
        ...newStats,
        und: newUnd,
        undInt: Math.round(newUnd),
      };

      break;

    case 'UPGRADE_BUY':
      newUnd = state.und - action.upg.cost;

      newStats = {
        ...newStats,
        und: newUnd,
        undInt: Math.round(newUnd),
      };

      break;

    default:
      break;

  }

  return newStats;
};

export default statsReducer;
