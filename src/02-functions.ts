import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'
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