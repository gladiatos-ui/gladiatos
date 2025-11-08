import HeroPage from '@/components/HeroPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OurTeam from '@/components/OurTeam';
// import { GraphQLClient, gql } from 'graphql-request';

// const endpoint = 'https://graphql.datocms.com/';
// const client = new GraphQLClient(endpoint, {
//   headers: {
//     Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
//   },
// });

// async function getTeamData() {
//   const response = await client.request(
//     gql`
//       {
//         team {
//           managerial {
//             name
//             image {
//               url
//             }
//           }
//           programming {
//             name
//             image {
//               url
//             }
//           }
//           electrical {
//             name
//             image {
//               url
//             }
//           }
//           mechanical {
//             name
//             image {
//               url
//             }
//           }
//         }
//       }
//     `
//   );
//   return response.team;
// }

function Team() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroPage
        title="The Minds Behind"
        buttonText="View Team"
        buttonHref="#our-team"
        description="Get to know the **talented engineers** and **passionate innovators** behind Gladiatos robotics team."
        bgColor="bg-background-muted"
      />
      <div id="our-team">
        <OurTeam />
      </div>
      <Footer slanted={true} />
    </div>
  )
}

export default Team