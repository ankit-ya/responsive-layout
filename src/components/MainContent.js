import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MainContent = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <h2>Main Content</h2>
          <p>This is the main content area. It adjusts based on the screen size.</p>
        </Col>
        <Col md={4}>
          <h2>Sidebar</h2>
          <p>This is the sidebar content. It also adjusts based on the screen size.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;