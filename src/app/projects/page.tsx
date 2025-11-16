import HeroPage from '@/components/HeroPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsList from '@/components/ProjectsList';
import { GraphQLClient, gql } from 'graphql-request';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects"
};

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getProjectData() {
  const response = await client.request(
    gql`
      {
        project {
          project {
            id
            title
            image {
              url
            }
            description
          }
        }
      }
    `
  );
  return response.project.project;
}

async function Projects() {
  const projectData = await getProjectData();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroPage
        title="Our Robot Projects"
        buttonText="View Projects"
        buttonHref="#projects"
        description="From **early prototypes** to **championship-winning robots**, explore the innovative humanoid soccer robots our team has built."
        bgColor='bg-background'
      />
      <div id="projects">
        <ProjectsList projectData={projectData} />
      </div>
      <Footer slanted={true} />
    </div>
  )
}

export default Projects