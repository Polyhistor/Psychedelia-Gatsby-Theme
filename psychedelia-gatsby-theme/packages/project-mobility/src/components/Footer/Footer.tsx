import React from "react"
import { Link } from "gatsby";

// Components
import {
    StyledSectionWrapper,
    StyledDivWrapper,
    StyledButtonPrimary,
    H1,
    H2
  } from "../Common";
  import {  StyledUlList,
    StyledLiList} from "../Navigation/Navigation.styled"


  // Queries
import useSiteConfigQuery from "../../queries/useSiteConfigQuery"


const Footer =() => {
    const footerData = useSiteConfigQuery()[0].node.footerLabels
    console.log(footerData)

    return (
        <StyledSectionWrapper>
        {footerData.map((e, i)=> 
          
                <StyledDivWrapper key={i}><H2 as="h5"><Link to={e.link}>{e.label}</Link></H2>

                        {e.subs ? (
                            e.subs.map((s, i) => (
                                <StyledUlList>
                                <StyledLiList key={i}><Link to={s.link}>{s.label}</Link></StyledLiList>
                            </StyledUlList>
                            ))
                 
                        ) : null}
               
                
                
                </StyledDivWrapper>
      
    
        )}
        </StyledSectionWrapper>
    )

}

export default Footer