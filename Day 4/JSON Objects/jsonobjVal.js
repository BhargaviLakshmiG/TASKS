//Playing with JSON object’s Values:

var cat = { name: 'Fluffy',
            activities: ['play', 'eat cat food'],
            catFriends: [{ name: 'bar', activities: ['be grumpy', 'eat bread omlet'],
            weight: 8,furcolor: ['white']}, 
            { name: 'foo',activities: ['sleep','pre-sleep naps'], weight:3}]
              }
             
              
//Adding height and weight to Fluffy
cat.weight=7;
cat.height=22;

//update name to Flufffy
cat.name='Fluffyy'

//List all the activities of Fluffyy’s catFriends
console.log("Activities of cat friends")
for(var i in cat.catFriends)
console.log(cat.catFriends[i].activities);

//print the name of cat catFriends
console.log("Names of cat friends :"+cat.catFriends[0].name,cat.catFriends[1].name)

//total weight of cat catFriends
var w=0;
for(i in cat.catFriends)
    w=w+cat.catFriends[i].weight;
console.log("Weight of cat friends :"+w);

//Print the total activities of all cats
var act=cat.activities.length;
for(i in cat.catFriends)
act+=cat.catFriends[i].activities.length;
console.log("Total no.of activities :"+act);

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities+=",drink milk,play with ball";
cat.catFriends[1].activities+=",drink milk,play with ball";


//update furcolor of bar
cat.catFriends[0].furcolor='grey';