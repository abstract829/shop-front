import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
const SearchComponent = () => {
  return (
    <Row>
      <Col xs={3} style={{ padding: 0, margin: 0 }}>
        <Form.Select
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        >
          <option>Compra</option>
          <option>Arriendo</option>
        </Form.Select>
      </Col>
      <Col xs={3} style={{ padding: 0, margin: 0 }}>
        <Form.Select style={{ borderRadius: 0 }}>
          <option>Departamento</option>
          <option>Casa</option>
          <option>Terreno</option>
          <option>Oficina</option>
          <option>Parcela</option>
          <option>Local</option>
        </Form.Select>
      </Col>
      <Col xs={6} style={{ padding: 0, margin: 0 }}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Barrio, Comuna o ciudad"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          ></Form.Control>
          <InputGroup.Text>
            <AiOutlineSearch />
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchComponent;
