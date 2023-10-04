import AppNav from "@/components/navigation/AppNav";
import { getDepartment } from "@/graphql/queries";
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

interface Department {
  id: string;
  name: string;
  manager: string;
  status: string;
}

function DepartmentPage({ params }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [departmentData, setDepartmentData] = useState<Department>();

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
    const fetchDepartments = async () => {
      try {
        const departmentData = await API.graphql(
          graphqlOperation(getDepartment, { id })
        );
        //  const departmentList = departmentData.data.listDepartments.items;
        // @ts-ignore
        setDepartmentData(departmentData.data.getDepartment);
      } catch (e) {
        console.error("Error fetching departments: ", e);
      }
    };

    fetchDepartments();
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
          Create / Edit Department {id}
        </Typography>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <form>
            <Grid container spacing={3} className="flex flex-col space-y-2 p-4">
              <Box className="flex flex-col space-y-2 p-4 w-full">
                <FormControl>
                  {/* <Grid
                    item
                    xs={12}
                    sm={2}
                    className="hidden md:flex w-1/12 justify-center font-bold"
                  >
                    <InputLabel className=" font-bold">Name</InputLabel>
                  </Grid> */}
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="w-11/12 md:ml-10 md:pl-10 md:mt-2"
                  >
                    <TextField
                      required
                      id="title"
                      name="title"
                      // label="Title"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      value={departmentData?.name}
                    />
                  </Grid>
                </FormControl>

                <Grid item className="flex flex-row w-full">
                  {/* <Typography className="hidden md:flex font-bold text-gray-500 -ml-3">
                    Manager
                  </Typography> */}
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:-ml-1 md:pl-10 md:mt-0"
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        -Select Manager-
                      </InputLabel>
                      <Select
                        className="w-full"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={""}
                        label="Manager"
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
                  {/* <Typography className="hidden md:flex font-bold text-gray-500 -ml-3">
                    Status
                  </Typography> */}
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    className="md:-ml-1 md:pl-10 md:mt-0"
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        -Select Status-
                      </InputLabel>
                      <Select
                        className="w-full"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={""}
                        label="Manager"
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

                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={5} />
                <Grid item xs={12} sm={4} className="pl-10">
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

export default DepartmentPage;
