export interface ILeetCodeUser {
    username: string;
    githubUrl: string | null;
    twitterUrl: string | null;
    linkedUrl: string | null;
    contestAttended: number;
    contestRating: number;
    contestRanking: number;
    contestBadge: null | {
      name: string;
      expired: boolean;
      hoverText: string;
      icon: string;
    };
    activeBadge: null | {
      displayName:string;
      icon:string;
    };
    profile: {
      ranking: number;
      userAvatar: string;
      realName: string;
      aboutMe: string;
      school: string | null;
      websites: string[];
      countryName: string | null;
      company: string | null;
      jobTitle: string | null;
      skillTags: string[];
      postViewCount: number;
      postViewCountDiff: number;
      reputation: number;
      reputationDiff: number;
      solutionCount: number;
      solutionCountDiff: number;
      categoryDiscussCount: number;
      categoryDiscussCountDiff: number;
    };
    languageProblemCount: { languageName: string; problemsSolved: number }[];
    tagProblemCounts: {
      advanced: {
        tagName: string;
        tagSlug: string;
        problemsSolved: number;
      }[];
      intermediate: {
        tagName: string;
        tagSlug: string;
        problemsSolved: number;
      }[];
      fundamental: {
        tagName: string;
        tagSlug: string;
        problemsSolved: number;
      }[];
    };
    userCalendar: {
      activeYears: number[];
      streak: number;
      totalActiveDays: number;
      submissionCalendar? : string
    };
    submitStatsGlobal: {
      acSubmissionNum: {
        difficulty: string;
        count: number;
      }[];
    };
    badges: {
      id: string;
      name: string;
      shortName: string;
      displayName: string;
      icon: string;
      hoverText: string;
      creationDate:string;
      category:string
    }[];
    upcomingBadges:{
      name:string;
      icon:string;
      progress:number;
    }[];
    problemsSolvedBeatsStats:{
      difficulty:string;
      percentage: number;
    }[]
  
  }
