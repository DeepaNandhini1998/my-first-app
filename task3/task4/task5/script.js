var resume = {
    Name: "Deepa",
    Email: "deepa1998@gmail.com",
   Number: 12346789,
   Gender: "Female",
   Languages_known: ["Tamil and English"],
   Marks: {"B.E":"Cgpa 70.1", "Higher secondary":"69.2%", "Sslc": "82%"},
   Qualification: "Computer science",
   Hobbies: [" reading books", " art and craft"],
   Skills: [" Javascript", "Html", "Css", "MySQL"],
};
var resume_JSON_Format = Json.stringify(resume)
console.log(resume_JSON_Format);