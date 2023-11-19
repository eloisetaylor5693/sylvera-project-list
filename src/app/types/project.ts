type FeedEntry = {
  deviceId: string;
  latitude: number;
  longitude: number;
  time: string;
};

type Project = {
  name: string;
  totalFeedEntries: number;
  topTenFeedEntries: FeedEntry[];
};

export default Project;
