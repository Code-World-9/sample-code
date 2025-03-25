<script setup>
import { inject, onMounted } from 'vue';
import SceneBar from './components/SceneBar/Container.vue';
// import Floorplan from './components/Floorplan/Container.vue';
// import Measure from './components/Measure/Measure.vue';
// import NavigatorView from './components/NavigatorView/NavigatorView.vue';
import FloorSwitch from './components/FloorSwitch/Container.vue';
import ViewModeSwitch from './components/ViewModeSwitch/Container.vue';
import TagPopup from './components/TagPopup/Container.vue';

const space = inject('space');

onMounted(() => {
	space.init();
});

</script>

<template>
	<div id="container">
		<SceneBar />
		<!-- <Floorplan /> -->
		<!-- <Measure /> -->
		<!-- <NavigatorView /> -->
		<FloorSwitch />
		<ViewModeSwitch />
		<TagPopup />
	</div>
</template>

<style scoped></style>
