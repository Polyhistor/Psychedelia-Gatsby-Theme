import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import { Link } from "gatsby";

// Components
import {
  StyledNavigation,
  StyledNavigationWrapper,
  StyledUlList,
  StyledLiList
} from "./Navigation.styled";
import { NavigationLabels } from "../../interfaces/navigation";
import { ToolTip } from "../Common/ToolTip";
import { Burger } from "../../components";

// Helpers
import { NavigationParser } from "../../helpers/navigationParser";
import { useOnClickOutside } from "../../hooks";
import HeaderContext from "../../contexts/headerContext";

// Assessts
import Logo from "../Logo";

// Configs
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";

const Navigation = () => {
  const websiteConfigData = useSiteConfigQuery();
  const [ID, setID] = useState();

  const [headerContext, setHeaderContext] = HeaderContext.useHeaderContext();

  const [open, setOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledNavigationWrapper>
      <StyledNavigation>
        <Logo />
        <Burger open={open} setOpen={setOpen}></Burger>
        <StyledUlList align="center" fontWeight="500" mobile>
          {NavigationParser(websiteConfigData).map(
            (e: NavigationLabels, idx: number) => (
              <StyledLiList
                padding="0 1.6rem"
                animation="fontScale"
                onMouseEnter={() => setID(idx)}
                key={idx}
              >
                <Link to={e.link}>{e.label}</Link>
                {e.subs ? (
                  <ToolTip
                    display={idx === ID ? "block" : "none"}
                    border="bordered"
                    position="absolute"
                    borderRadius="1rem"
                    padding="2rem"
                    margin="1.5rem 0 0 0"
                    animation="fadeIn"
                    toolTip={true}
                    onMouseLeave={() => setID(400)}
                  >
                    <StyledUlList direction="column" align="start">
                      {e.subs.map((sub, idx) => (
                        <StyledLiList
                          marginBottom="1.6rem"
                          animation="fontScale"
                          key={idx}
                        >
                          <Link to={sub.link}>{sub.label}</Link>
                        </StyledLiList>
                      ))}
                    </StyledUlList>
                  </ToolTip>
                ) : null}
              </StyledLiList>
            )
          )}
        </StyledUlList>
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
