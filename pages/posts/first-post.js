import Link from "next/link";
import Image from "next/image";
import pp from '/public/profile.jpg'
import Head from "next/head";
import Layout from "./Layout";
import { useEffect } from "react";

export default function FirstPost() {
    
    return( 
        <Layout>
            <Head>
                <title>nothing</title>
            </Head>
            <Link href='/'>Back to home</Link>
            <Image 
            src={pp}
            width={300}
            height={300}
            alt="Your Name" />
        </Layout>
    );
  }

