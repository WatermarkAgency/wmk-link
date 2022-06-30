/**
 * @jest-environment jsdom
 */

import { WmkLink } from "./WmkLink";
import { render, screen } from "@testing-library/react";
import React from "react";
import { converted, phoneNumbers } from "./logic.test";

describe(`<Anchor />`, () => {
  it("render phone number links", () => {
    phoneNumbers.forEach((tel, i) => {
      render(<WmkLink tel>{tel}</WmkLink>);
      const href = screen.getByText(phoneNumbers[i]).getAttribute("href");
      expect(href).toBe(`tel:${converted[i]}`);
    });
  });
});
