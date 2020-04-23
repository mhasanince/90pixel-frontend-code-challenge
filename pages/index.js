import Layout from '../components/layout';
import Form from '../components/form';
import Favorites from '../components/favorites';
import Styles from '../styles/index.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={Styles.container}>
        <Form />
        <Favorites />
      </div>
    </Layout>
  );
}
