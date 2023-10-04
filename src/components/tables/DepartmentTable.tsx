import * as React from "react";
// import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";
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
import { listDepartments } from "@/graphql/queries";

interface Department {
  id: string;
  name: string;
  manager: string;
  status: string;
}

export default function DepartmentTable() {
  const [departments, setDepartments] = React.useState<Department[]>([]);

  React.useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const departmentData = await API.graphql(
          graphqlOperation(listDepartments)
        );
        // @ts-ignore
        const departmentList = departmentData.data.listDepartments.items;

        setDepartments(departmentList);
      } catch (e) {
        console.log("error here is: ", e);
      }
    };

    fetchDepartments();
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
              height: 200,
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
        <Grid item xs={12} className="mt-10 h-screen">
          <Paper className="mt-10 p-2 flex flex-col">
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold text-gray-500">
                    Actions
                  </TableCell>
                  <TableCell className="font-bold text-gray-500">
                    Name
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
                {departments.map((department) => (
                  <TableRow key={department.id}>
                    <TableCell>
                      <Link
                        className="underline text-blue-700 mr-1"
                        href={`/department/${department.id}`}
                      >
                        Edit
                      </Link>
                      <Link className="underline text-blue-700" href={` `}>
                        Deactivate
                      </Link>
                    </TableCell>
                    <TableCell>{department.name}</TableCell>
                    <TableCell>{department.manager}</TableCell>
                    <TableCell>{department.status}</TableCell>
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
