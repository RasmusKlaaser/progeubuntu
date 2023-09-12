const person = {
	firstname: "Kadi",
	lastname: "Tamm",
	age: 16,
	email: "kadi.tamm@email.com",
	hobbies: ["tennis", "korvpall"],
	address: {
		city: "Tallinn",
		county: "Harjumaa"
	},
	getBirthYear: function(){
		return 2023 - this.age
	},
	showHobbies: function(){
		this.hobbies.forEach(function(hobbies){
			console.log(hobbies)
		})
	},
	showAddressData: function(){
		for(addressKey in this.address){
			console.log(this.address[addressKey])
		}
	}
	
}
let val = person.firstname 
val = person.lastname
val = person["lastname"]
val = person.hobbies[1]
val = person.address.city
val = person.getBirthYear()
person.showHobbies()
person.showAddressData()
console.log(val)