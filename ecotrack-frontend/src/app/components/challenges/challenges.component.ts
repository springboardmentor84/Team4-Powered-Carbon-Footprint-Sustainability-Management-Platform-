import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'eco-challenges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css',
})
export class ChallengesComponent implements OnInit {
  private data = inject(MockDataService);

  readonly challenges = this.data.getChallenges();
  readonly leaderboard = this.data.getLeaderboard();
  readonly badges = this.data.getBadges();
  readonly search = signal('');

  // Gamification: XP, level progression, and task completion state.
  readonly totalXp = this.data.totalXp;
  readonly currentLevel = this.data.currentLevel;
  readonly nextLevel = this.data.nextLevel;
  readonly levelProgressPct = this.data.levelProgressPct;
  readonly xpLevels = this.data.xpLevels;

  ngOnInit() {
    this.data.loadCommunityData();
  }

  readonly filtered = computed(() => {
    const q = this.search().toLowerCase().trim();
    if (!q) return this.challenges();
    return this.challenges().filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  });

  onSearch(value: string) {
    this.search.set(value);
  }

  toggle(id: string) {
    this.data.toggleChallenge(id);
  }

  isCompleted(id: string): boolean {
    return this.data.isChallengeCompleted(id);
  }

  badgeFor(badgeId: string | undefined) {
    if (!badgeId) return undefined;
    return this.badges().find((b) => b.id === badgeId);
  }

  complete(id: string) {
    this.data.completeChallenge(id);
  }
  updateProgress(id: string) {
  this.data.updateChallengeProgress(id);
}

  initials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  levelIcon(levelName: string): string {
    switch (levelName) {
      case 'Green Beginner': return '🌱';
      case 'Eco Warrior': return '🌍';
      case 'Climate Hero': return '🔥';
      case 'Planet Protector': return '🏆';
      default: return '⭐';
    }
  }
}
