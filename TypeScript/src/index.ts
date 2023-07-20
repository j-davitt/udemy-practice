let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;


let user: [number, string] = [1, 'John'];

const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Large;
console.log(mySize);

// specify type of arguments as well as type of output. Default values can also be used for inputs.
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = { 
  id: 1, 
  name: 'Joe',
  retire: (date: Date) => {
    console.log(date);
  },
};
// Union Type
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10');

//Intersection Types
type Draggable = {
  drag: () => void
};

type Resizeable = {
  resize: () => void
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
};

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

//Nullable Types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola!');
}

greet(null);

type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// optional property access operator. Executes only if customer is not null or undefined
console.log(customer?.birthday?.getFullYear());

//optional element access operator
// customers?.[0]

// optional call
let log: any = null;
log?.('a');
// only execute if log is referencing an actual function


