import { describe, it, expect } from "vitest";
import { makeTransaction } from "./transactions";

describe("transactions", () => {
  it("should work", () => {
    const t = makeTransaction();

    expect(t).toHaveProperty("name");
  });
});
