import { OfflineService } from './platform/offline.js';
import { OpenService } from './platform/open.js';
import { ModelService } from './platform/model.js';

const offlineServer = new OfflineService();
const openServer = new OpenService();
const modelServer = new ModelService();

export default {
	install: (app, options) => {
		app.provide('offlineServer', offlineServer);
		app.provide('openServer', openServer);
		app.provide('modelServer', modelServer);
	}
};

export {
	offlineServer,
	openServer,
	modelServer
};