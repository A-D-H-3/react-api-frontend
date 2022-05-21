import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function FormResponse(props) {
  const handleDelete = () => {
    props.deleteAnswer(props.answerIndex);
  };

  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.question}</Accordion.Header>
          <Accordion.Body>
            {props.answer}
            <br />
            <Button className="deleteAnswer" onClick={handleDelete}>
              Delete
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FormResponse;
