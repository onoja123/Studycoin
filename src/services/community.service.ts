import Community from "../models/community.model";

export default class CommunityService {

  static async getCommunities() {
      const communities = await Community.find();
      return communities
  }

  static async getOneCommunity(communityId: string) {
      const community = await Community.findById(communityId);
      return community;
  }

}
