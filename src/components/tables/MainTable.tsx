import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { API, graphqlOperation } from "aws-amplify";
import { listEmployees } from "@/graphql/queries";

interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  telephonenumber: string;
  email: string;
  manager: string;
  status: string;
}

export default function MainTable() {
  const [employees, setEmployees] = React.useState<Employee[]>([]);

  React.useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeeData = await API.graphql(graphqlOperation(listEmployees));
        // @ts-ignore
        const employeeList = employeeData.data.listEmployees.items;

        setEmployees(employeeList);
      } catch (e) {
        console.log("error here is: ", e);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <React.Fragment>
      <Grid xs={12} spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 400,
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <form>
                <Grid
                  container
                  spacing={3}
                  className="flex flex-col space-y-2 p-4"
                >
                  <Grid item className="flex flex-row w-full">
                    <Typography className="w-1/12 flex justify-start items-center font-bold text-gray-500 -ml-3">
                      Status
                    </Typography>
                    <Grid
                      item
                      xs={12}
                      sm={10}
                      className="w-11/12 md:-ml-1 md:pl-10 md:mt-0"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Active Only / All / Deactivate Only
                        </InputLabel>
                        <Select
                          className="w-full"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={""}
                          label="Age"
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
                    <Typography className="w-1/12 flex justify-start items-center  font-bold text-gray-500 -ml-3">
                      Department
                    </Typography>
                    <Grid
                      item
                      xs={12}
                      sm={10}
                      className=" w-11/12 md:-ml-1 md:pl-10 md:mt-0"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          className="w-full"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={""}
                          label="Age"
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
                    <Typography className="w-1/12 flex justify-start items-center font-bold text-gray-500 -ml-3">
                      Manager
                    </Typography>
                    <Grid
                      item
                      xs={12}
                      sm={10}
                      className="w-11/12 md:-ml-1 md:pl-10 md:mt-0"
                    >
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          className="w-full"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={""}
                          label="Age"
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
                    <Button variant="contained" className="-ml-4 text-blue-400">
                      Filter
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={5} />
                </Grid>
              </form>
            </Container>
          </Paper>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12} className="pt-4">
          <Paper className="p-2 flex flex-col">
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold text-gray-500">
                    Actions
                  </TableCell>
                  <TableCell className="font-bold text-gray-500">
                    First Name
                  </TableCell>
                  <TableCell className="font-bold text-gray-500">
                    Last Name
                  </TableCell>
                  <TableCell className="font-bold text-gray-500">
                    Telephone Number
                  </TableCell>
                  <TableCell className="font-bold text-gray-500">
                    Email Address
                  </TableCell>
                  <TableCell className="font-bold text-gray-500">
                    Manager
                  </TableCell>
                  <TableCell className="font-bold text-gray-500">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Link
                        className="underline text-blue-700 mr-1"
                        href={`/employee/${employee?.id}`}
                      >
                        Edit
                      </Link>
                      <Link className="underline text-blue-700" href={` `}>
                        Deactivate
                      </Link>
                    </TableCell>
                    <TableCell>{employee.firstname}</TableCell>
                    <TableCell>{employee.lastname}</TableCell>
                    <TableCell>{employee.telephonenumber}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.manager}</TableCell>
                    <TableCell>{employee.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
