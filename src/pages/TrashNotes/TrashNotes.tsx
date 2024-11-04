import { useAppSelector } from "../../hooks/redux";
import { Container, EmptyMsgBox } from "../../styles/styles";
import { MainWrapper } from "../../components";

const TrashNotes = () => {
  const { trashNotes } = useAppSelector((state) => state.notesList);

  return (
    <Container>
      {trashNotes.length === 0 ? (
        <EmptyMsgBox>no notes</EmptyMsgBox>
      ) : (
        <MainWrapper notes={trashNotes} type="trash" />
      )}
    </Container>
  );
};

export default TrashNotes;
