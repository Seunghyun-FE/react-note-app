import { v4 } from "uuid";

const notes = [
  {
    title: "Note 1 title",
    content: "note 1 contents",
    tags: [{ tag: "coding", id: v4() }],
    color: "#cce0ff",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/12/24 2.55 PM",
    createdTime: new Date("Sat Dec 10 2024 14:55:22").getTime(),
    editedTiem: null,
    id: v4(),
  },

  {
    title: "Note 2 title",
    content: "note 2 contents",
    tags: [{ tag: "exercise", id: v4() }],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/10/24 2.44 PM",
    createdTime: new Date("Sat Dec 10 2024 14:44:22").getTime(),
    editedTiem: null,
    id: v4(),
  },
];

export default notes;
