//Available pets in pet shop
var petAvailability = /** @class */ (function () {
    function petAvailability(petsAvail) {
        this.petsList = [];
        this.map_count = 0;
        this.availablePets = petsAvail;
    }
    //adding pets to availabilty
    petAvailability.prototype.addPetsAvailable = function () {
        var availPetCount = this.availablePets.length;
        console.log("LIST OF AVAILABLE PETS :");
        this.availablePets.forEach(function (elem) {
            console.log(elem.pet_type + " available with age " + elem.age + " color " + elem.color + " and breed " + elem.breed);
        });
    };
    //Finding requests matching availabilty
    petAvailability.prototype.findMatch = function (petsReqList) {
        // console.log("Looking for matching pets :"+petsReqList.length+" "+this.availablePets.length)
        console.log("MATCHING REQUESTS AND AVAILABILTY");
        for (var i in petsReqList) {
            var found = false;
            for (var j in this.availablePets) {
                if ((petsReqList[i].pet_type == this.availablePets[j].pet_type) && ((petsReqList[i].age == "any") || (petsReqList[i].age == this.availablePets[j].age))) {
                    console.log("Matching pet found for " + petsReqList[i].pet_type + " with age " + this.availablePets[j].age);
                    found = true;
                    this.map_count++;
                }
            }
            if (found == false)
                console.log("No matching pet found for " + petsReqList[i].pet_type + " with age " + petsReqList[i].age);
        }
    };
    //Finding total animal count
    petAvailability.prototype.countPets = function () {
        var dog_count = 0;
        var cat_count = 0;
        var fish_count = 0;
        var bird_count = 0;
        for (var i in this.availablePets) {
            if (this.availablePets[i].pet_type == "Dog")
                dog_count++;
            else if (this.availablePets[i].pet_type == "Cat")
                cat_count++;
            else if (this.availablePets[i].pet_type == "Bird")
                bird_count++;
            else if (this.availablePets[i].pet_type == "Fish")
                fish_count++;
        }
        console.log("PETS AVAILABLE COUNT : DOGS " + dog_count + "  CATS " + cat_count + " BIRDS " + bird_count + " FISH " + fish_count);
    };
    //Mapping available and requested pets
    petAvailability.prototype.requestMap = function () {
        console.log(this.map_count + " are available for adoption out of " + this.availablePets.length);
    };
    return petAvailability;
}());
//Request for pets
var petRequest = /** @class */ (function () {
    function petRequest() {
    }
    petRequest.prototype.addPetReqInfo = function (pets) {
        this.petsReqList = pets;
        console.log("PET REQUEST LIST :");
        this.petsReqList.forEach(function (element) {
            if (element.age == undefined)
                element.age = "any";
            console.log("Need " + element.pet_type + " of age " + element.age);
        });
    };
    return petRequest;
}());
//Adding pets to availability list
var petsAvail = new petAvailability([
    { pet_type: "Dog", color: "white", breed: "Labrador", age: "2" },
    { pet_type: "Fish", color: "orange", breed: "gold fish", age: "1" },
    { pet_type: "Cat", color: "black", breed: "RagDoll", age: "4" },
    { pet_type: "Bird", color: "peach", age: "1", breed: "Finches" },
    { pet_type: "Dog", color: "peach", breed: "Bull Dog", age: "3" },
    { pet_type: "Cat", color: "brown", breed: "Persian", age: "2" }
]);
petsAvail.addPetsAvailable();
var petReq = new petRequest();
//Adding request for pets
petReq.addPetReqInfo([
    { pet_type: "Dog", age: "3" },
    { pet_type: "Fish" },
    { pet_type: "Cat", age: "4" },
    { pet_type: "Dog", age: "6" },
    { pet_type: "Bird" },
]);
//Finding status of requests
petsAvail.findMatch(petReq.petsReqList);
//Total animals available for adoption
petsAvail.countPets();
//Mapping available and requested pets
petsAvail.requestMap();
