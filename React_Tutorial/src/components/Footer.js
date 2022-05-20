import {
  Facebook,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { ListItemText } from "@material-ui/core";


const Container = styled.div`
  display: flex;
  margin: 2em;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Movie DB</Logo>
        <Desc>
        The Movie Database (TMDB) is a community built movie and TV database. 
        Every piece of data has been added by our amazing community dating back to 2008. 
        TMDb's strong international focus and breadth of data is largely unmatched and 
        something we're incredibly proud of. Put simply, we live and breathe community and 
        that's precisely what makes us different.
        </Desc>
        <SocialContainer>
        <a href="https://www.facebook.com/themoviedb">
          <SocialIcon button color="3B5999">
            <Facebook />
          </SocialIcon>
          </a>
          <a href="https://twitter.com/themoviedb">
          <SocialIcon button color="55ACEE">
            <Twitter />
          </SocialIcon>
          </a>
        </SocialContainer>
        
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
      
        
          <ListItem button>
    <a href="https://react-movieapp-thiraphong.netlify.app/">
       <ListItemText primary="Home" />
       </a>
     </ListItem>


        </List>

      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> phitsanulok
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 09-3140-6069
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> jackteerapong2017@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;