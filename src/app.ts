// // // const arr: any[] = ["Max", "Manu"];
// // const arr: Array<string> = ["Max", "Manu"]; // string[] // string \ number[]

// // const promise_num: Promise<number> = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve(10);
// //   }, 100);
// // });

// // promise_num.then((data) => {
// //   data.toString().length;
// // });

// // const promise_str: Promise<string> = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve("I love Yasya");
// //   }, 100);
// // });

// // promise_str
// //   .then((data) => {
// //     return data.split(" ");
// //   })
// //   .then((d) => console.log(d));

// function merge(obj1: Object, obj2: Object) {
//   return Object.assign(obj1, obj2);
// }
// console.log(`merge`, merge({ a: "a" }, { b: "b" })); // no problem if just console

// //but problem if coz ts do not know is a exist
// // const o = merge({ a: "a" }, { b: "b" }) as { a: string; b: string };
// const o = merge({ a: "a" }, { b: "b" });
// // o.a = "aa";

// console.log(`o`, o);

// //---------------------------------//
// function mereGeneric<T, U>(obj1: T, obj2: U) {
//   return Object.assign(obj1, obj2);
// }
// const generic = merge({ a: "a" }, { b: 1 });
// console.log(`generic.a`, generic.a)

//---------Decorators----------------------------//

// function Logger(logString: string) {
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (originalConstructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new originalConstructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// // @Logger('LOGGING - PERSON')
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

//----------------------------------------------------------------

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);
