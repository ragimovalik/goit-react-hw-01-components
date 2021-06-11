import StatisticsComponent from '../components/Statistics/Statistics';
import statisticalData from '../data/statistical-data.json';

const Statistics = () => (
  <>
    <StatisticsComponent title="Upload stats" stats={statisticalData} />

    <StatisticsComponent stats={statisticalData} />
  </>
);

export default Statistics;
