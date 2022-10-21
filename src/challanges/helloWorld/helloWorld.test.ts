import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import HelloWorld from "./HelloWorld.vue";

interface HelloWorldProps {
  msg: string;
}

describe("HelloWorld", () => {
  it("renders a 'Hello World'", () => {
    // Arrange
    const wrapper = mount(HelloWorld);
    const msg = (wrapper.vm as unknown as HelloWorldProps).msg;

    // Act
    const text = wrapper.text();

    // Assert
    expect(text).toBe(msg);
  });
});
