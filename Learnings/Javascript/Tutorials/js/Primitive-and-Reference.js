//primitive datatype nte use manasilavunnath copy timeil anu example

        let name1 = "Edison"
        let name2 = name1 //name2 is a copy of name1

        console.log(name1); //Edison is the answer
        console.log(name2); //Edison is the answer

        name1 = "Biju"

        console.log(name1);
        console.log(name2); //name2 is still Edison because it is a copy of name1



        let person = {
            name: "Edison",
            age: 22,
            city: "Idukki"
        }

        let personCopy =person //personCopy is a reference to person / Means its a perfect copy of person

        console.log(person);
        console.log(personCopy);


        person.name = "Biju" // changing the name of the person from Edison to Biju

        console.log(person);
        console.log(personCopy); //personCopy is also changed to Biju because it is a reference to person


        //Objectinte copy yedukumbam just reference anu actual copy alla yedukkunne so intial copy proper aytt store akunella so value change akum 

        