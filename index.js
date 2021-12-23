function submit() {
	const imgInput = document.getElementById("imgInput");
	const nameInput = document.getElementById("nameInput");
	const sloganInput = document.getElementById("sloganInput");
	const emailInput = document.getElementById("emailInput");
	const contactInput = document.getElementById("contactInput");
	const websiteInput = document.getElementById("websiteInput");

	if (imgInput.value) document.getElementById("img").innerHTML = `<img src="${imgInput.value}" />`;
	update(nameInput.value, "#name h2")
	update(sloganInput.value, "#name p")
	update(contactInput.value, "#contact span")
	update(emailInput.value, "#email span")
	update(websiteInput.value, "#website span")
}

const update = (value, query) => {
	if (value) document.querySelector(query).innerHTML = value
}