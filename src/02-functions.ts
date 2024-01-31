import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'
function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))
function allOlder(f:Friend) : string {
    f.age +=1
    return `${f.name} is now ${f.age}`
}
console.log(allOlder(friends[0])+","+ allOlder(friends[1]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  function addColleague(colleaguesArray: Colleague[], name: string, department: string, email: string) {
    // Use highestExtension function to find the current highest extension
    const highestExtColleague = highestExtension(colleaguesArray);
    const newExtension = highestExtColleague.contact.extension + 1;
  
    // Create the new colleague object
    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: { email: email, extension: newExtension }
    };
  
    // Add the new colleague to the array
    colleaguesArray.push(newColleague);
  }

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): Friend[] {
    // Use the filter method to find friends that meet the criterion specified by the callback
    return friends.filter(criterion);
  }
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));  
  console.log(findFriends(friends, (friend) => friend.age < 35));

  // Assuming the Friend type has an 'interests' property that is an array of strings

function addInterest(friend: Friend, interest: string): string[] {
    // Check if the interests array exists; if not, initialize it
    if (!friend.interests) {
      friend.interests = [];
    }
  
    // Add the new interest to the friend's interests array
    friend.interests.push(interest);
  
    // Return the updated interests array
    return friend.interests;
  }
  
  // Example usage
  console.log(addInterest(friends[1], 'Politics')); // Adds 'Politics' to the interests of the first friend and logs the updated interests array
  