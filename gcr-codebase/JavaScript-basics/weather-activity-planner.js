// Q5. Weather Activity Planner
const temperature = 22;
const isRaining = false;
const windSpeed = 12;
let activity;

if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    activity = "Too cold and windy — stay home.";
} else if ((temperature >= 15 && temperature <= 35) || (!isRaining && windSpeed <= 20)) {
    activity = "Perfect day for a walk.";
} else {
    activity = "Check the weather before going outside.";
}
console.log(activity);
