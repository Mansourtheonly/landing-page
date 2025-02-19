import Head from "next/head";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import PropertySearch from "@/app/components/PropertySearch";
import FeaturedProperties from "@/app/components/FeaturedProperties";
import Testimonials from "@/app/components/Testimonials";
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
          <PropertySearch />
          <FeaturedProperties />
          <Testimonials />
          <CTA />
        </main>
        <Footer></Footer>
      </>
    );
  }