import Navbar from '@/components/Navbar';
import HeroHome from '@/components/HeroHome';
import AboutUs from '@/components/AboutUs';
import Quote from '@/components/Quote';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getQuoteData() {
  const response = await client.request(
    gql`
      {
        quote {
          leaderName
          quote
          year
        }
      }
    `
  );
  return response.quote;
}

export default async function Home() {
  const quoteData = await getQuoteData();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroHome />
      <AboutUs />
      <Quote quoteData={quoteData} />
      <CTA />
      <Footer slanted={true} />
    </div>
  );
}
