import Layout from '../components/layout';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

export default function Home() {
  return(<Layout>
    <Hero />
    <Tagline />
    <Highlights />
  </Layout>)
}
