import React from "react";
import { Header } from "react-native-elements";

import Menu from "./Menu";

const HeaderMenu = props => {
  return (
    <Header
      leftComponent={<Menu navigation={props.navigation} />}
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontWeight: "bold" }
      }}
      statusBarProps={{ barStyle: "light-content" }}
    />
  );
};

export default HeaderMenu;