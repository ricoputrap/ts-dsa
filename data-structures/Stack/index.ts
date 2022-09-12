/**
 * Concepts: https://www.geeksforgeeks.org/stack-data-structure-introduction-program/
 */
class Stack {
  private stack: any[];

  constructor() {
    this.stack = [];
  }

  public size(): number {
    return this.stack.length;
  }

  public top(): any {
    const size: number = this.size();
    return this.stack[size - 1];
  }

  public push(item: any): void {
    this.stack.push(item);
  }

  public pop(): any {
    return this.stack.pop();
  }

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

export default Stack;