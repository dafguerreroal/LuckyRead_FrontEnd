import React, { Component } from "react";
import {
  Row,
  Col,
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { TabContent, RowInfo, CollapseContainer } from "./Styled.js";

export default class InformationTab extends Component {
  constructor(props) {
    super(props);
    this.togglePassword = this.togglePassword.bind(this);
    this.state = {
      collapsePassword: false,
      collapseNickname: false,
      collapseCity: false
    };
  }
  togglePassword() {
    let newState = Object.assign({}, this.state);
    newState.collapsePassword = !newState.collapsePassword;
    this.setState(newState);
  }

  toggleNickname() {
    let newState = Object.assign({}, this.state);
    newState.collapseNickname = !newState.collapseNickname;
    this.setState(newState);
  }

  toggleCity() {
    let newState = Object.assign({}, this.state);
    newState.collapseCity = !newState.collapseCity;
    this.setState(newState);
  }

  render() {
    return (
      <TabContent>
        <Row>
          <h5 style={{ textAlign: "center", margin: "auto" }}>
            Aca va a ir el componente de datos del perfil
          </h5>
        </Row>
        <Row>
          <RowInfo>
            <Button
              color="primary"
              onClick={() => this.togglePassword()}
              className="FullButton"
            >
              Cambiar contraseña
            </Button>
            <Collapse isOpen={this.state.collapsePassword}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <Label for="Cambiar contraseña">Contraseña actual</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Contraseña actual"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Cambiar contraseña">Nueva contraseña</Label>
                    <Input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      placeholder="Nueva contraseña"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Cambiar contraseña">
                      Repetir nueva contraseña
                    </Label>
                    <Input
                      type="password"
                      name="repeatPassword"
                      id="repeatPassword"
                      placeholder="Nueva contraseña"
                    />
                  </FormGroup>
                  <Button>Cambiar</Button>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>

        <Row>
          <RowInfo>
            <Button
              color="primary"
              onClick={() => this.toggleNickname()}
              className="FullButton"
            >
              Cambiar nick
            </Button>
            <Collapse isOpen={this.state.collapseNickname}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                      <Input placeholder="username" />
                    </InputGroup>
                    <Button className="ChangeButton">Cambiar</Button>
                  </FormGroup>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>
        <Row>
          <RowInfo>
            <Button
              color="primary"
              onClick={() => this.toggleCity()}
              className="FullButton"
            >
              Cambiar ciudad
            </Button>
            <Collapse isOpen={this.state.collapseCity}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <Label for="selectCity">Selecciona tu ciudad</Label>
                    <Input type="select" name="select" id="selectCity">
                      <option>Ciudad 1</option>
                      <option>Ciudad 2</option>
                      <option>Ciudad 3</option>
                      <option>Ciudad 4</option>
                      <option>Ciudad 5</option>
                    </Input>
                    <Button className="ChangeButton">Cambiar</Button>
                  </FormGroup>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>
      </TabContent>
    );
  }
}
