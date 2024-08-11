import { RiInboxUnarchiveFill } from "react-icons/ri";
import { NotesIconBox } from "../styles/styles";
import { FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { Note } from "../types/note";
import { Dispatch } from "@reduxjs/toolkit";
import { toggleCreateNoteModal } from "../store/modal/modalSlice";
import {
  deleteNote,
  restoreNote,
  setArchiveNotes,
  setEditNote,
  setTrashNotes,
  unArchiveNote,
} from "../store/notesList/notesListSlice";

const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {
  const clickHander = () => {
    dispatch(toggleCreateNoteModal(true));
    dispatch(setEditNote(note));
  };

  if (type === "archive") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unArchiveNote(note))}
          data-info="Unarchive"
        >
          <RiInboxUnarchiveFill style={{ fontSize: "1rem" }} />
        </NotesIconBox>

        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Delete"
        >
          <FaTrash style={{ fontSize: "1rem" }} />
        </NotesIconBox>
      </>
    );
  } else if (type === "trash") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(restoreNote(note))}
          data-info="Unarchive"
        >
          <FaTrashRestore style={{ fontSize: "1rem" }} />
        </NotesIconBox>

        <NotesIconBox
          onClick={() => dispatch(deleteNote(note))}
          data-info="Delete"
        >
          <FaTrash style={{ fontSize: "1rem" }} />
        </NotesIconBox>
      </>
    );
  } else {
    return (
      <>
        <NotesIconBox onClick={clickHander} data-info="Edit">
          <FaEdit style={{ fontSize: "1rem" }} />
        </NotesIconBox>

        <NotesIconBox
          onClick={() => dispatch(setArchiveNotes(note))}
          data-info="Archive"
        >
          <FaTrash style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Delete"
        >
          <RiInboxUnarchiveFill style={{ fontSize: "1rem" }} />
        </NotesIconBox>
      </>
    );
  }
};

export default getRelevantBtns;
