import { describe, test, expect } from "vitest";
import { formatPrice } from "./lab/formatPrice.js";

describe("formatPrice function", () => {
  test("should return formatted number with default currency and 2 decimals", () => {
    const result = formatPrice(1234.5);
    expect(result).toBe("$1,234.50");
  });

  test("should return formatted number with custom currency symbol and decimals", () => {
    const result = formatPrice(120.43, "le", 1);
    expect(result).toBe("le120.4");
  });

  test("should return empty string for invalid input", () => {
    expect(formatPrice("abc")).toBe("");
    expect(formatPrice(undefined)).toBe("");
    expect(formatPrice(NaN)).toBe("");
    expect(formatPrice(null)).toBe("");
  });

  test("should handle zero correctly", () => {
    const result = formatPrice(0);
    expect(result).toBe("$0.00");
  });

  test("should handle large numbers properly", () => {
    const result = formatPrice(1000000);
    expect(result).toBe("$1,000,000.00");
  });
});
