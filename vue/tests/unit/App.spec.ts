import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";
import router from "../../src/router";

const user = {
  name: "John Doe",
  email: "johndoe@me.com",
};

jest.mock("@auth0/auth0-vue", () => ({
  useAuth0: jest.fn(() => {
    return {
      handleRedirectCallback: async () => null,
      buildAuthorizeUrl: async () => null,
      buildLogoutUrl: () => "",
      logout: () => null,
      login: () => null,
      user,
      isLoading: false,
      isAuthenticated: false,
    };
  }),
}));

test("renders without crashing", () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper).toBeDefined();
});
