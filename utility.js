//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU4ODI4ODQ3LCJleHAiOjE2NTg4MzI0NDcsIm5iZiI6MTY1ODgyODg0NywianRpIjoiMjY4RlJuTnBLRjFjbG0yZyIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.pr9ztzTnbEq94Z-_Z7Erkay-8SjzAiY2A0RZZIG8KPs"; // put access token
const student = {
    student_id:63367681,
  name: 'Aruethai Chantathai', // replace with your full name.
  age: 20, // put your age.
  gender: 'ชาย', // replace with your gender
  department: 'CPE'
};



exports.findStudentbyId = function (student_id, cb) {
    //-- call external api 
            request({
              method: "GET",
              uri: EXTERNAL_API+student_id,
              headers: {
                  Authorization: `Bearer ${accessToken}`
              }
          }).then((response) => {
              console.log('Sent');
              console.log({
                  "request": student_id,
                  "response": response
              });
  
             cb(response);
  
          }).catch((err) => {
              console.log('Error:', err.message);
              console.log({
                  "Error": err.message
              });
          });
  }

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}