class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const lenght = this.members.size;
    this.members.add(character);

    if (lenght === this.members.size) {
      throw new Error('Персонаж уже есть в команде');
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    const result = [];
    this.members.forEach((member) => result.push(member));
    return result;
  }
}

export default Team;
