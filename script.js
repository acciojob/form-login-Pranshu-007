function getFormvalue() {
    //Write your code here
	const fname = document.getElementById("fname");
	const firstname = fname.value;
	const lname = document.getElementById("lname");
	const lastname = lname.value;
	alert(`${firstname}${lastname}`)
}
