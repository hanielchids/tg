import Dashboard from "@/components/Dashboard";
import LoginForm from "@/components/forms/LoginForm";
import TopNav from "@/components/navigation/AppNav";
import Head from "next/head";
import AppNav from "@/components/navigation/AppNav";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MainTable from "@/components/tables/MainTable";
import DepartmentTable from "@/components/tables/DepartmentTable";
import { Auth } from "aws-amplify";

export default function Department() {
  const router = useRouter();
  const [id, setId] = useState("1");

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

  const handleRoute = () => {
    setId("17");
    console.log("id: ", id);
    router.push(`/department/${id}`);
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex">
        <AppNav user={user} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Typography
            component="h2"
            variant="h6"
            color="primary"
            gutterBottom
            className=" text-2xl justify-start ml-16 mt-4"
          >
            Departments
          </Typography>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Button onClick={handleRoute}>ghuyjk</Button>

            <DepartmentTable />
          </Container>
        </Box>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }

// GET >>> https://fakestoreapi.com/products
