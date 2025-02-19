function solution(myString) {
    return myString.split("").map((a) => a < "l" ? "l" : a).join("");
}