import openData from './platform/open.js';
import offlineData from './platform/offline.js';
import modelData from './platform/model.js';

const envMap = {
	open: openData,
	offline: offlineData,
	model: modelData
};

const center = {
	...envMap[import.meta.env.MODE]
};

export default center;