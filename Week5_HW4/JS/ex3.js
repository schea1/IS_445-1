const r = Number(prompt("Enter the circle radius:"));

// We would create the circle object

const circle = {
    radius: r,

    // Below is the method to calculate the circumference
    circumference: function ()
    
    {
        return 2 * Math.PI * this.radius;
    },

    // Method to calculate the area
    area: function ()
    
    {
        return Math.PI * this.radius ** 2;
    }
};

// Output the results

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);