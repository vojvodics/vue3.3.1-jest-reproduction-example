import { mount } from "@vue/test-utils";

import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
