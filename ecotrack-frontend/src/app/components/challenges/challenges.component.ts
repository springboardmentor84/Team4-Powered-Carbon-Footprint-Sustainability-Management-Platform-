import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'eco-challenges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css',
})
export class ChallengesComponent {
  private data = inject(MockDataService);

  readonly challenges = this.data.getChallenges();
  readonly leaderboard = this.data.getLeaderboard();
  readonly search = signal('');

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
}
