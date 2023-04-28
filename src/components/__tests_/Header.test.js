import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Store";

test("Logo should load on rendering header", () => {
  //Load header
  const header = render(
    <Provider Store={store}>
      <Header />
    </Provider>
  );
  console.log(header)

  //check if logo is loader
//   const logo = header.getAllByTestId("Logo");
//   console.log(logo);
});
