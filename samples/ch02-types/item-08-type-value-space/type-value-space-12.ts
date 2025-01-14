{
  interface Person {
    first: string;
    last: string;
  }
  const p: Person = { first: 'Jane', last: 'Jacobs' };
  //    -           --------------------------------- Values
  //       ------ Type
  function email(p: Person, subject: string, body: string): Response {
    //     ----- -          -------          ----  Values
    //              ------           ------        ------   -------- Types
    // COMPRESS
    return new Response();
    // END
  }
  
  class Cylinder {
    radius=1;
    height=1;
  }
  
  function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {
      shape  // OK, type is Cylinder
      shape.radius  // OK, type is number
    }
  }
  const T = typeof Cylinder;  // Value is "function"
  type T = typeof Cylinder;  // Type is typeof Cylinder
  let fn: T;
  const s = new fn();
  type C = InstanceType<typeof Cylinder>;
  type PersonEl = Person['first' | 'last'];  // Type is string
  type Tuple = [string, number, Date];
  type TupleEl = Tuple[number];  // Type is string | number | Date
  type TupleEl2 = Tuple[0]; // {0: string, 1: number, 2: Date, length: 3}
  
}