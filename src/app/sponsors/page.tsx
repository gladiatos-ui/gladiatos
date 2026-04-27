import HeroPage from '@/components/HeroPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SponsorsList from '@/components/SponsorsList';
import { GraphQLClient, gql } from 'graphql-request';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sponsors | Gladiatos",
  description: "Our amazing sponsors who make Gladiatos humanoid robotics team possible.",
  alternates: {
    canonical: "/sponsors"
  }
};

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getSponsors() {
  const response = await client.request(
    gql`
      {
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
  return response.allSponsors;
}

export default async function Sponsors() {
  const sponsors = await getSponsors();

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroPage
        title="Our Sponsors"
        description="We are immensely grateful to the **visionary partners** who support the Gladiatos team."
        buttonText="Become a Sponsor"
        buttonHref="/contact"
        bgColor="bg-background-muted"
      />
      <div id="sponsors">
        <SponsorsList sponsors={sponsors} />
      </div>
      <Footer slanted={false} />
    </div>
  );
}