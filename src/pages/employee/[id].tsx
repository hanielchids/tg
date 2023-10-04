import AppNav from "@/components/navigation/AppNav";
import { getEmployee } from "@/graphql/queries";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  telephonenumber: string;
  email: string;
  manager: string;
  status: string;
}

function EmployeePage({ params }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [employeeData, setEmployeeData] = useState<Employee>();

  const [user, setUser] = useState("");

  useEffect(() => {
    const getName = async () => {
      try {
        const user = await Auth.currentSession();

        // @ts-ignore
        setUser(user?.accessToken.payload.username);
      } catch (err) {
        console.log(err);
      }
    };

    getName();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeeData = await API.graphql(
          graphqlOperation(getEmployee, { id })
        );
        //  const employeeList = employeeData.data.listEmployees.items;
        // @ts-ignore
        console.log("employee returned is: ", employeeData.data.getEmployee);
        // @ts-ignore
        setEmployeeData(employeeData.data.getEmployee);
      } catch (e) {
        console.error("Error fetching employees: ", e);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="flex">
      <AppNav user={user} />

      <Box
        component="main"
        className="bg-white flex-grow h-screen overflow-auto"
      >
        <Toolbar />

        <Typography
          component="h2"
          variant="h6"
          color="primary"
          gutterBottom
          className=" text-2xl justify-start ml-16 mt-4"
        >
          Create / Edit Employee {id}
        </Typography>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <form>
            <Grid container className="flex flex-col space-y-2 p-4">
              <Box className="flex flex-col space-y-2 p-4 w-full">
                <FormControl>
                  {/* <Grid
                    item
                    xs={12}
                    sm={2}
                    className="hidden md:flex justify-center font-bold pr-4"
                  >
                    <InputLabel className=" font-bold">Title</InputLabel>
                  </Grid> */}
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:ml-10 md:pl-10 md:mt-2 ml-4"
                  >
                    <TextField
                      required
                      id="firstname"
                      name="First Name"
                      // label="First Name"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      value={employeeData?.firstname}
                    />
                  </Grid>
                </FormControl>

                <FormControl>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:ml-10 md:pl-10 md:mt-2"
                  >
                    <TextField
                      required
                      id="lastname"
                      name="Last Name"
                      // label="Last Name"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      value={employeeData?.lastname}
                    />
                  </Grid>
                </FormControl>

                <FormControl>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:ml-10 md:pl-10 md:mt-2"
                  >
                    <TextField
                      required
                      id="telephoneumber"
                      name="Telephone Number"
                      // label="Telephone Number"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      value={employeeData?.telephonenumber}
                    />
                  </Grid>
                </FormControl>

                <FormControl>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:ml-10 md:pl-10 md:mt-2"
                  >
                    <TextField
                      required
                      id="email"
                      name="Email Address"
                      // label="Email Address"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      value={employeeData?.email}
                    />
                  </Grid>
                </FormControl>

                <Grid item className="flex flex-row w-full">
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:-ml-1 md:pl-10 md:mt-0"
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Manager
                      </InputLabel>
                      <Select
                        className="w-full"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={""}
                        label="-Select-"
                        onChange={() => console.log("clicked")}
                      >
                        {/* {categories.map((item) => ( */}
                        <MenuItem value={"a"}>a</MenuItem>
                        <MenuItem value={"b"}>b</MenuItem>
                        <MenuItem value={"c"}>c</MenuItem>
                        {/* ))} */}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item className="flex flex-row w-full">
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:-ml-1 md:pl-10 md:mt-0"
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        className="w-full"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={""}
                        label="-Select-"
                        onChange={() => console.log("clicked")}
                      >
                        {/* {categories.map((item) => ( */}
                        <MenuItem value={"a"}>a</MenuItem>
                        <MenuItem value={"b"}>b</MenuItem>
                        <MenuItem value={"c"}>c</MenuItem>
                        {/* ))} */}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Button variant="contained" sx={{ color: "#ff781f" }}>
                    Save
                  </Button>
                </Grid>
                <Grid item xs={12} sm={5} />
              </Box>
            </Grid>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default EmployeePage;
