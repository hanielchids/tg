import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, Auth } from "aws-amplify";
import Head from "next/head";
import awsExports from "@/aws-exports";
import AppNav from "@/components/navigation/AppNav";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MainTable from "@/components/tables/MainTable";

Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
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

  return (
    <div className="bg-white h-screen">
      <Head>
        <title>TG</title>
      </Head>

      <Authenticator hideSignUp={true}>
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
              Employees
            </Typography>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <MainTable />
            </Container>
          </Box>
        </div>
      </Authenticator>
    </div>
  );
}

// export async function getServerSideProps(context) {
//    let user = null;

//   try {
//     // Retrieve user information using your authentication library
//     const session = await Auth.currentSession();
//     user = session.getAccessToken

//   } catch (err) {
//     co
// }

// GET >>> https://fakestoreapi.com/products

// employee1@test.com
// employee2@test.com
// employee3@test.com
// employee4@test.com
// employee5@test.com
