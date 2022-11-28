import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
// import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import NoteCard from "./NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8002/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  };

  return (
    <Container>
      {/* exemple of grid */}
      {/* <Grid container>
  <Grid item xs={12} sm={6} md={3}>
    <Paper>1</Paper>
  </Grid>
  <Grid item xs={12}sm={6} md={3}>
    <Paper>2</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Paper>3</Paper>
  </Grid>
  <Grid item xs={12} sm={6}  md={3} >
    <Paper>4</Paper>
  </Grid>

</Grid> */}

      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={3}>
            {/* <Paper> {note.title}</Paper> */}
            <NoteCard note={note} handleDelete = {handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Notes;
