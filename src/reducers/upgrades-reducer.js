
const upgradesReducer = () => {
	return [
		{
			id: 1,
			name: "Counting",
			cost: 10,
			description: "You understand concepts of counting"
		},
		{
			id: 2,
			name: "Cost analisis",
			cost: 10,
			description: "You understand how much you need for things"
		},
		{
			id: 3,
			name: "Learning",
			cost: 10,
			description: "You understand how to keep thinking"
		},
		{
			id: 4,
			name: "Self inspection",
			cost: 10,
			description: "You understand your own parameters"
		},
		{
			id: 5,
			name: "Resource management",
			cost: 10,
			description: "You understand how much you are using for tasks"
		}
	];
}

export default upgradesReducer;



// const upgradesReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'UND_INC':
// 			// check for unlockable upgrades, add to visible, maybe use a filter idk
// 			return state;
// 			break;
//
// 		default:
// 			return state;
// 	}
// }
//
// export default upgradesReducer;
