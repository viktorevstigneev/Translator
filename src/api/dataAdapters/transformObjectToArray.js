export const transformObjectToArray = (obj) => {
	return Object.entries(obj.translation).map((el) => ({
		label: el[1].name,
		value: el[0],
	}));
};
