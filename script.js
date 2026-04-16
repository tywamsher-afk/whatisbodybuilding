// script.js - Professional Gym-Focused JavaScript Code

// Function to open modals
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Function to calculate BMI
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

// Function to add a workout log
let workoutLogs = [];
function addWorkoutLog(date, exercise, sets, reps) {
    workoutLogs.push({ date, exercise, sets, reps });
    console.log('Workout logged:', { date, exercise, sets, reps });
}

// Example of using the calculator and logging
// Replace values below or connect to form inputs
let weight = 70; // in kg
let height = 1.75; // in meters
console.log('Your BMI is:', calculateBMI(weight, height));
console.log('Adding workout log...');
addWorkoutLog('2026-04-16', 'Bench Press', 3, 10);
