import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer
} from "./Styled";
import pdficon from "../../resources/paper_plane.png";
import RandomFragment from "../RandomFragmentPage/RandomFragment";
import axios from "axios";
import Loading from "../../common/Loading/Loading";



class RandomFragmentPage extends React.Component {
  state = {
    randomfragment: []
  };

  componentDidMount() {
    this.request()
  }

  request = e => {
    console.log(localStorage.jwtToken);
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/fragments/something",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log(response);
        this.setState({
          randomfragment: response["data"]
        });
        console.log(this.state.randomfragment);
      },
      err => {
        console.log("el error es pidiendo fragmento random");
      }
    );
    return
  }

  render() {
    console.log(rf)
    const rf = this.state.randomfragment ?
      (<PageContainer>
        <MessageFragment>
          <Row>
            <Col>Tenemos un fragmento para ti</Col>
          </Row>
        </MessageFragment>
        <RandomFragment randomfragment={this.state.randomfragment} />
        <Button color="warning" onClick={this.request}>Ver otro fragmento</Button>{" "}
      </PageContainer>) : <div className="center">
        <Loading />
      </div>
    return (
      <Container>
        {rf}
      </Container>
    );
  }
}

export default RandomFragmentPage;
