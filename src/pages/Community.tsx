// IMPORTS //
import '../styles/Community.css'
import CommunityHero from '../components/Community/CommunityHero'
import CommunityJoin from '../components/Community/CommunityJoin'
import CommunityStat from '../components/Community/CommunityStat'
import CommunityCards from '../components/Community/CommunityCards'

function Community() {
  return (
    <div>
      <CommunityHero />
      <CommunityJoin />
      <CommunityStat />
      <CommunityCards />
    </div>
  );
}

export default Community
