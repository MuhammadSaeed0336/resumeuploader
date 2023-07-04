import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

function App() {
  //states
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState(null);
  const [st, setSt] = useState("");
  const [gender, setGender] = useState();
  const [pjl, setPjl] = useState([]);
  const [pimage, setPimage] = useState("");
  const [rdoc, setRdoc] = useState("");
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  //multi checkbox
  const getPjl = (e) => {
    let data = pjl;
    data.push(e.target.value);
    setPjl(data);
  };
  //handle form fun
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("dob", dob);
    data.append("pjl", pjl);
    data.append("gender", gender);
    data.append("pimage", pimage);
    data.append("rdoc", rdoc);
    if (name && email) {
      console.log(data.get("name"));
      console.log(data.get("email"));
      console.log(data.get("dob"));
      console.log(data.get("pjl"));
      console.log(data.get("gender"));
      console.log(data.get("pimage"));
      console.log(data.get("rdoc"));

      setError({ status: true, msg: "Uploaded Successfully", type: "success" });
      resetForm();
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  //clear Form after submission
  const resetForm = () => {
    setName("");
    setEmail("");
    setDob(null);
    setSt("");
    setGender("");
    setPjl([]);
    setPimage("");
    setRdoc("");
    document.getElementById("resume-form").reset();
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ backgroundColor: "info.dark", padding: 2 }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Smart Coders (SMC)
        </Typography>
      </Box>
      <Grid container justifyContent="center" mt={1} borderBottom={2}>
        <Grid item xs={12} md={5} sm={12}>
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            id="resume-form"
            sx={{ p: 3 }}
          >
            <TextField
              id="name"
              name="name"
              required
              fullWidth
              margin="normal"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="email"
              name="email"
              required
              fullWidth
              margin="normal"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box mt={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Birth"
                  value={dob}
                  onChange={(newValue) => {
                    setDob(newValue);
                  }}
                  TextField={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>

            <FormControl fullWidth margin="normal">
              <InputLabel id="state-select-label">State</InputLabel>
              <Select
                labelId="state-select-label"
                id="state-select"
                value={st}
                label="st"
                onChange={(e) => {
                  setSt(e.target.value);
                }}
              >
                <MenuItem value="pakistan">Pakistan</MenuItem>
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="bangladish">Bangladish</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  onChange={(e) => setGender(e.target.value)}
                />
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend">Preferred Job Location</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Kohat"
                  value="Kohat"
                  onChange={(e) => getPjl(e)}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Rawalpindi"
                  value="Rawalpindi"
                  onChange={(e) => getPjl(e)}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Karachi"
                  value="Karachi"
                  onChange={(e) => getPjl(e)}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Peshawar"
                  value="Peshawar"
                  onChange={(e) => getPjl(e)}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Lahore"
                  value="Peshawar"
                  onChange={(e) => getPjl(e)}
                />
              </FormGroup>
            </FormControl>

            <Stack
              direction="row"
              alignItems="center"
              spacing={4}
              sx={{ "@media screen and (min-width: 480px)": { direction:'column' } }}
            >
              <label htmlFor="profile-photo">
                <Input
                  sx={{ display: "none" }}
                  accept="image/*"
                  id="profile-photo"
                  type="file"
                  onChange={(e) => {
                    setPimage(e.target.files[0]);
                  }}
                />
                <Button variant="contained" component="span">
                  Upload Photo
                </Button>
              </label>
              <label htmlFor="resume-file">
                <Input
                  sx={{ display: "none" }}
                  accept="doc/*"
                  id="resume-file"
                  type="file"
                  onChange={(e) => {
                    setRdoc(e.target.files[0]);
                  }}
                />
                <Button variant="contained" component="span">
                  Upload Files
                </Button>
              </label>
            </Stack>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
              color="success"
            >
              SUBMIT
            </Button>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={7} sm={12} borderLeft={1} p={2}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{
              backgroundColor: "info.light",
              padding: 1.5,
              borderRadius: "3px",
            }}
            mt={3}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              List of Employees
            </Typography>
          </Box>
          <TableContainer>
            <Table
              sx={{ minWidth: 650, marginTop: "20px" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">DOB</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">Saeed</TableCell>
                  <TableCell align="center">abc@gmail.com</TableCell>
                  <TableCell align="center">15/03/1999</TableCell>
                  <TableCell align="center">Pakistan</TableCell>
                  <TableCell align="center">Male</TableCell>
                  <TableCell align="center">Kohat</TableCell>
                  <TableCell align="center">
                    <Avatar src="#" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
