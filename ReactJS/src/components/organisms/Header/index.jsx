import React from "react";
import { HeaderContainer, HeaderIcon, HeaderTitle } from "./styles";
import { UserIcon as DefaultUserIcon } from "../../atoms";

export function Header({ title, icon }) {
  const IconEl = icon ?? <DefaultUserIcon width="1.6em" height="1.6em" />;
  return (
    <HeaderContainer>
      <HeaderIcon>{IconEl}</HeaderIcon>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}
