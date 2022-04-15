import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  return { props: { initialPropsCounter: 1 } };
}

const Home: NextPage = () => {
  const style: CSSProperties = {
    borderStyle: "solid",
    borderWidth: "1px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    cursor: "default",
  };
  const cilck = async () => {
    window.location.href = "test1/test2";
  };

  return (
    <div style={{ width: "100%" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/About" passHref>
        <div style={style}>asd</div>
      </Link>
      <Link href="/test1/Test2?id=asd" passHref>
        <div style={{ ...style, marginTop: "10px" }}>goToTest</div>
      </Link>
      <Link href="/dynamics/ssss" passHref>
        <div style={{ ...style, marginTop: "10px" }}>goToDynamics</div>
      </Link>
      <Link href="/shallowRouting/shallowRouting" passHref>
        <div style={{ ...style, marginTop: "10px" }}>ShallowRoting</div>
      </Link>
    </div>
  );
};

export default Home;
