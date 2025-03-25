import { Space } from './descriptor.js';

export default {
	install: (app, options) => {
		const space = new Space(app);
    window.space = space;
		app.provide('space', space);
	}
};