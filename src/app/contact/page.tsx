import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getContactData() {
  const response = await client.request(
    gql`
      {
        contact {
          email
          phoneNumber
        }
      }
    `
  );
  return response.contact;
}

export default async function Contact() {
  const contactData = await getContactData();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <ContactHero contactData={contactData} />
      <Footer slanted={false} />
    </div>
  )
}