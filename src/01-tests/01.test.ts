import { mult, splitIntoWord, sum } from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});

test("Sum should be correct", () => {
  //action
  const result1 = sum(a, b);
  const result2 = sum(b, c);

  //expect result
  expect(result1).toBe(3);
  expect(result2).toBe(5);
});

test("Multiply should be correct", () => {
  //action
  const result1 = mult(a, b);
  const result2 = mult(b, c);

  //expect result
  expect(result1).toBe(2);
  expect(result2).toBe(6);
});

test("Splitting words fucn should be correct", () => {
  const sent1 = "Hello my friend!";
  const sent2 = "What are you  doing in my house?";

  const result1 = splitIntoWord(sent1);
  const result2 = splitIntoWord(sent2);

  expect(result1.length).toBe(3);
  expect(result1[0]).toBe("Hello");
  expect(result1[1]).toBe("my");
  expect(result1[2]).toBe("friend");

  expect(result2.length).toBe(7);
  expect(result2[0]).toBe("What");
  expect(result2[1]).toBe("are");
  expect(result2[2]).toBe("you");
  expect(result2[3]).toBe("doing");
  expect(result2[4]).toBe("in");
  expect(result2[5]).toBe("my");
  expect(result2[6]).toBe("house");
});