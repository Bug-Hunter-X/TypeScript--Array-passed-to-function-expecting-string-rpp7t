function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string[] {
  return persons.map(person => greeter(person));
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // This will now work correctly