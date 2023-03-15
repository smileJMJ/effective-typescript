{
  interface Person { name: string };
  const people: Person[] = ['alice', 'bob', 'jan'].map(
    (name): Person => ({name})
  );

  const people2: Person[] = ['alice', 'bob', 'jan'].map(
    (name: Person) => ({name})
  );

}