import Head from "next/head";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
      <>
        <Head>
          <title>Real Estate Landing Page | Algeria</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <main className="mt-20">
          <Hero />

          <CTA />
        </main>
        <Footer></Footer>
      </>
    );
  }