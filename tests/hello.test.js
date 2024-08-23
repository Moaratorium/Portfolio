import {expect, test} from "vitest";

const helloString = 'Hello World';
function addExclamation(string) {
    return string + '!';
}

test('returns "Hello World" with an exclamation', () => {
    expect(addExclamation(helloString)).toBe('Hello World!')
})
