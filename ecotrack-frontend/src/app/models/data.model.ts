export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'User' | 'Administrator';
  location: string;
  ecoScore: number;
  level: string;
  joinedOn: string;
  interests: string[];
  avatarInitials: string;
}

export interface CarbonEntry {
  id: string;
  date: string;
  category: 'Transportation' | 'Electricity Usage' | 'Fuel Consumption' | 'Food Consumption' | 'Waste Generation' | 'Water Usage' | 'Online Shopping' | 'Travel Activities';
  activity: string;
  kgCo2e: number;
}

export interface SustainabilityGoal {
  id: string;
  title: string;
  type: string;
  target: number;
  current: number;
  unit: string;
  deadline: string;
  status: 'On Track' | 'At Risk' | 'Achieved' | 'Not Started';
}

export interface Challenge {
  id: string;
  name: string;
  category: string;
  description: string;
  participants: number;
  daysLeft: number;
  progress: number;
  joined: boolean;
  reward: string;
  /** Gamification: XP awarded when this task is completed. */
  xp: number;
  /** Gamification: difficulty tier shown on the task card. */
  difficulty: 'Easy' | 'Medium' | 'Hard';
  /** Gamification: badge id (see Badge) unlocked when this task is completed. */
  badgeId?: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  /** Total gamification XP earned from tasks (challenges + goals). */
  xp: number;
  /** Current XP level name, e.g. "Eco Warrior". */
  level: string;
  /** True for the row representing the logged-in user. */
  isYou?: boolean;
}

export interface Report {
  id: string;
  title: string;
  type: 'Carbon Footprint' | 'Goal Achievement' | 'Sustainability' | 'Challenge Participation';
  period: string;
  generatedOn: string;
  format: 'PDF' | 'Excel';
}

export interface Recommendation {
  id: string;
  title: string;
  detail: string;
  impactKg: number;
  factor: string;
}

export interface Badge {
  id: string;
  name: string;
  earned: boolean;
  description: string;
}
