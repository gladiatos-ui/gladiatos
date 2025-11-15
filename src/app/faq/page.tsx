import HeroPage from '@/components/HeroPage';
import Navbar from '@/components/Navbar';
import FAQItems from '@/components/FAQItems';
import Footer from '@/components/Footer';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getFaqData() {
  const response = await client.request(
    gql`
      {
        faq {
          faq {
            answer
            question
          }
        }
      }
    `
  );
  return response.faq.faq;
}

async function FAQ() {
  const faqData = await getFaqData();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroPage
        title="Got Questions?"
        buttonText="Find Answers"
        buttonHref="#faq"
        description="Whether you're curious about **our technology**, **joining the team**, or **robotics competitions**, we've got you covered."
        bgColor="bg-background"
      />
      <div id="faq">
        <FAQItems faqData={faqData} />
      </div>
      <Footer slanted={true} />
    </div>
  )
}

export default FAQ