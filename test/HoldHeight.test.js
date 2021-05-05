import React from "react";
import { render, screen } from "@testing-library/react";

import HoldHeight from "../src";

describe("<HoldHeight />", () => {
  const List3Items = () => (
    <ul data-testid="list">
      <li data-testid="list-item">This is a list</li>
      <li data-testid="list-item">with 3 itens</li>
      <li data-testid="list-item">it takes some space</li>
    </ul>
  );

  it("render child with no props", () => {
    render(
      <HoldHeight>
        <List3Items />
      </HoldHeight>
    );
    expect(screen.getAllByTestId("list-item")).toHaveLength(3);
  });

  it("render child with initialHeight prop", () => {
    render(
      <HoldHeight initialHeight={200}>
        <List3Items />
      </HoldHeight>
    );
    expect(screen.getAllByTestId("list-item")).toHaveLength(3);
    expect(screen.getByTestId("list").parentNode.style.minHeight).toBe("200px");
  });
});
