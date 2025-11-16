import HeroPage from '@/components/HeroPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompetitionsGrid from '@/components/CompetitionsGrid';
import { GraphQLClient, gql } from 'graphql-request';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Competitions",
  description: "Learn about the robotics competitions we participate in, including KRSBI Humanoid, robotics challenges, and international AI-driven robotics events."
};

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getCompetitionData() {
  const response = await client.request(
    gql`
      {
        competition {
          competition {
            id
            title
            year
            image {
              url
            }
            description
          }
        }
      }
    `
  );
  return response.competition.competition;
}

async function Competitions() {
  const competitionData = await getCompetitionData();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroPage
        title="Where We Compete"
        buttonText="View Competitions"
        buttonHref="#competitions"
        description="From **local tournaments** to **international championships**, explore our journey through the world of humanoid soccer robotics and the battles that shaped our team."
        bgColor='bg-background'
      />
      <div id="competitions">
        <CompetitionsGrid competitionData={competitionData} />
      </div>
      <Footer slanted={true} />
    </div>
  )
}

export default Competitions