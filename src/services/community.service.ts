import Community from "../models/community.model";
import { ICommunity } from "../types/interfaces/community.inter";
export default class CommunityService {

  static async getCommunities() {
      const communities = await Community.find();
      return communities
  }

  static async getOneCommunity(communityId: string) {
      const community = await Community.findById(communityId);
      return community;
  }


  static async createCommunity(userId: string, payload: ICommunity) {
      const community = await Community.create({
          ...payload,
          createdBy: userId
      });
      return community;
  }
}
