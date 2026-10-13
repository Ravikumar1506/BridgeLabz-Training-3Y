// Q1. Scope Conflict Resolver
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    const salary = 40000; // Local variable
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Permanent: ${isPermanent}, Total salary: ₹${totalSalary}`);

    // Changing the local parameter does not change global bonus.
    isPermanent = false;
    console.log(`Global bonus remains: ₹${bonus}`);
}

calculateSalary(true);
calculateSalary(false);
