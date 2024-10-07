import styled from 'styled-components';
import CommitmentCard from '../components/CommitmentCard';
import ServiceCard from '../components/ServiceCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const CommitmentSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
`;

const ServiceSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url('/path/to/your/image.jpg'); /* 이미지 경로를 수정하세요 */
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  border-radius: 8px;
`;

export default function Home() {
  return (
    <Container>
      <Title>Precision Every Moment</Title>
      <CommitmentSection>
        <CommitmentCard value="245%" label="Suspension Rate" />
        <CommitmentCard value="130K+" label="Suspended Users" />
        <CommitmentCard value="50K+" label="Active Users" />
      </CommitmentSection>
      <h2 style={{ textAlign: 'center' }}>Our Services</h2>
      <ServiceSection>
        <ServiceCard title="Analytics and tracking" description="Detailed analytics and tracking services." />
        <ServiceCard title="Pay-per-click advertising" description="Effective PPC advertising strategies." />
        <ServiceCard title="Search engine optimization" description="Optimize your site for better search rankings." />
        <ServiceCard title="Social media marketing" description="Engage your audience through social media." />
      </ServiceSection>
    </Container>
  );
}
