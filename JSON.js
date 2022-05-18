//creating the objects
const school = '{"name" : "SBOA", "year" : 1988, "rank" : 1, "students" : 1000}';

//value parsed in schoolData variable
var schoolData = JSON.parse(school);
//updating the values in respective heading of HTML page
document.getElementById("head1").innerHTML = "School Name : " + schoolData.name;
document.getElementById("head2").innerHTML = "Year of Establishment : " + schoolData.year;
document.getElementById("head3").innerHTML = "Rank of School in the City : " + schoolData.rank;
document.getElementById("head4").innerHTML = "School Name : " + schoolData.students;