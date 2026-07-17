// IMPORTS //
import '../styles/Community.css'
import CommunityHero from '../components/Community/CommunityHero'
import CommunityJoin from '../components/Community/CommunityJoin'
import CommunityStat from '../components/Community/CommunityStat'
import CommunityCards from '../components/Community/CommunityCards'
import CommunityMembers from '../components/Community/CommunityMembers'
import CommunityNews from '../components/Community/CommunityNews'
import CommunityFAQ from '../components/Community/CommunityFAQ'
import CommunityKitchen from '../components/Community/CommunityKitchen'

function Community() {
  return (
    <div className="communityPage">
      <CommunityHero />
      <CommunityJoin />
      <CommunityStat />
      <CommunityCards />
      <CommunityMembers />
      <CommunityNews />
      <CommunityFAQ />
      <CommunityKitchen />
    </div>
  );
}

export default Community
