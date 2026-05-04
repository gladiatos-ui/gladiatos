import Navbar from '@/components/Navbar';
import HeroHome from '@/components/HeroHome';
import AboutUs from '@/components/AboutUs';
import Quote from '@/components/Quote';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SponsorsMarquee from '@/components/SponsorsMarquee'; 
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = "https://graphql.datocms.com/";
const client = new GraphQLClient(endpoint, {
	headers: {
		Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
	},
});

async function getHomepageData() {
  const response = await client.request(
    gql`
      {
        quote {
          leaderName
          quote
          year
        }
        allSponsors {
          name
          url
          logo {
            url
          }
        }
      }
    `
  );
  return response;
}

export default async function Home() {
  const data = await getHomepageData();
  

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroHome />
      <AboutUs />
      <Quote quoteData={data.quote} />
      <SponsorsMarquee sponsors={data.allSponsors} />
      <CTA /> 
      <Footer slanted={true} sponsors={data.allSponsors} />
    </div>
  );
}