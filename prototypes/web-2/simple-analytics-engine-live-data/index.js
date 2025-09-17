import { SimpleAnalyticsEngine } from "./simple-analytics-engine.js";

const callAllMethods = (object) => {
    console.log('Sum: ',object.getSum());
    console.log('Max: ',object.getMax());
    console.log('Min: ',object.getMin());
    console.log('Avg: ',object.getAvg());
    console.log('Size: ',object.getSize());
    console.log('WindowSize: ',object.getWindowSize());
}

const object = new SimpleAnalyticsEngine(5);
const data =  [2, 3, 4, 5, 6];
data.forEach(n => {
    object.add(n);
    callAllMethods(object);
});

