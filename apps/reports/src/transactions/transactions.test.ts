import { describe, it, expect } from "vitest";
import { makeTransaction } from "./transactions";

describe("transactions", () => {
  it("should work", () => {
    const t = makeTransaction();

    expect(t).toHaveProperty("name");
  });

  // Added this for testing github actions
  it("should fail", () => {
    expect(true).toBe(false);
  });
});
