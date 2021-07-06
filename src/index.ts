export function log(str: string) {
  console.log(str);
}

class A {
  greeting = "Hello World";
}

log(new A().greeting);
