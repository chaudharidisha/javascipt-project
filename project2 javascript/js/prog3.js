// Calculate grade based on marks: 
// • 90+ → A 
// • 70–89 → B 
// • 40–74 → C 
//  • <50 → Fail

let marks =  60;

if (marks >= 100) {
    console.log("Grade A");
} else if (marks >= 70) 
    {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}