import {
  Component,
  OnInit,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CarbonService } from '../../services/carbon.service';
import { GoalService } from '../../services/goal.service';
import { CarbonChartComponent } from '../carbon-chart/carbon-chart.component';
import { EmissionPieChartComponent } from '../emission-pie-chart/emission-pie-chart.component';
import { MockDataService } from '../../services/mock-data.service';
import { RecommendationService } from '../../services/recommendation.service';
import { EcoBotComponent } from '../eco-bot/eco-bot.component';

@Component({
  selector: 'eco-dashboard',
  standalone: true,
  imports: [
  DecimalPipe,
  RouterLink,
  CarbonChartComponent,
  EmissionPieChartComponent,
  EcoBotComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {

  private carbonService = inject(CarbonService);
  private goalService = inject(GoalService);
  private data = inject(MockDataService);
  private recommendationService = inject(RecommendationService);

  readonly Math = Math;

  username = "";

  // Recommendation
  recommendation = "";

  readonly activityList = signal<any[]>([]);
  readonly goalList = signal<any[]>([]);

  // Total carbon emission
  readonly totalCarbon = computed(() =>
    this.activityList().reduce(
      (sum: number, a: any) => sum + Number(a.carbonEmission),
      0
    )
  );

  // Active goals
  readonly activeGoals = computed(() =>
    this.goalList().filter(
      (g: any) => g.status !== "Achieved"
    ).length
  );

  // Achieved goals
  readonly achievedGoals = computed(() =>
    this.goalList().filter(
      (g: any) => g.status === "Achieved"
    ).length
  );

  // Eco Score
  readonly ecoScore = computed(() => {

    const goals = this.goalList();
    const activities = this.activityList();

    if (goals.length === 0 && activities.length === 0) {
      return 0;
    }

    // Goal completion contribution: maximum 600 points
    const goalScore =
      goals.length > 0
        ? (this.achievedGoals() / goals.length) * 600
        : 0;

    // Activity contribution: maximum 200 points
    const activityScore = Math.min(
      activities.length * 20,
      200
    );

    // Carbon activity contribution: maximum 200 points
    const carbonScore =
      activities.length > 0
        ? Math.max(
            0,
            200 - this.totalCarbon() * 2
          )
        : 0;

    return Math.min(
      Math.round(
        goalScore +
        activityScore +
        carbonScore
      ),
      1000
    );
  });

  // Sync Eco Score
  private syncEcoScore = effect(() => {
    this.data.currentEcoScore.set(
      this.ecoScore()
    );
  });

  // Sustainability Insight
  readonly sustainabilityInsight = computed(() => {

    const carbon = this.totalCarbon();
    const activities = this.activityList().length;

    if (activities === 0) {
      return {
        icon: '🌱',
        title: 'Start your green journey',
        message:
          'Log your first activity to start tracking your carbon footprint.'
      };
    }

    if (carbon <= 20) {
      return {
        icon: '🌿',
        title: 'Great work!',
        message:
          'Your carbon footprint is looking good. Keep making sustainable choices.'
      };
    }

    if (carbon <= 50) {
      return {
        icon: '🌱',
        title: 'You are on the right track',
        message:
          'Your footprint is moderate. Try reducing high-carbon activities.'
      };
    }

    return {
      icon: '💚',
      title: "Let's reduce your footprint",
      message:
        'Consider choosing greener transportation, saving electricity, and reducing waste.'
    };
  });
  readonly personalizedRecommendation = computed(() => {
  const activities = this.activityList();

  if (activities.length === 0) {
    return {
      icon: '🌱',
      category: 'GET STARTED',
      title: 'Start Your Green Journey',
      message: 'Log your first activity to receive personalized sustainability recommendations.',
      action: 'Log your first activity'
    };
  }

  // Calculate carbon emission category-wise
  const categoryTotals: { [key: string]: number } = {};

  activities.forEach((activity: any) => {
    const category = activity.category || 'Other';
    const emission = Number(activity.carbonEmission) || 0;

    categoryTotals[category] =
      (categoryTotals[category] || 0) + emission;
  });

  // Find highest contributing category
  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) =>
      categoryTotals[a] > categoryTotals[b] ? a : b
  );

  const category = highestCategory.toLowerCase();

  // Food recommendation
  if (category.includes('food')) {
    return {
      icon: '🥗',
      category: 'FOOD CONSUMPTION',
      title: 'Make Your Meals More Sustainable',
      message:
        'Your food consumption contributes significantly to your carbon footprint. Try choosing more plant-based and locally sourced foods.',
      action: 'Choose sustainable food'
    };
  }

  // Transport recommendation
  if (
    category.includes('transport') ||
    category.includes('travel')
  ) {
    return {
      icon: '🚲',
      category: 'TRANSPORTATION',
      title: 'Choose Greener Transportation',
      message:
        'Transportation is a major contributor to your footprint. Consider walking, cycling, public transport or carpooling.',
      action: 'Choose greener travel'
    };
  }

  // Energy recommendation
  if (
    category.includes('energy') ||
    category.includes('electricity')
  ) {
    return {
      icon: '⚡',
      category: 'ENERGY',
      title: 'Reduce Your Energy Usage',
      message:
        'Try switching off unused appliances, using energy-efficient devices and reducing unnecessary electricity consumption.',
      action: 'Save energy'
    };
  }

  // Waste recommendation
  if (category.includes('waste')) {
    return {
      icon: '♻️',
      category: 'WASTE MANAGEMENT',
      title: 'Reduce and Reuse More',
      message:
        'Reduce single-use products, reuse materials and separate recyclable waste to lower your environmental impact.',
      action: 'Reduce waste'
    };
  }

  // Default
  return {
    icon: '🌿',
    category: highestCategory.toUpperCase(),
    title: 'Make a More Sustainable Choice',
    message:
      'This activity is contributing to your carbon footprint. Try choosing a lower-carbon alternative whenever possible.',
    action: 'Make a greener choice'
  };
});
readonly recommendationPercentage = computed(() => {
  const activities = this.activityList();

  if (activities.length === 0) {
    return 0;
  }

  const total = activities.reduce(
    (sum: number, activity: any) =>
      sum + Number(activity.carbonEmission || 0),
    0
  );

  if (total === 0) {
    return 0;
  }

  const category =
    this.personalizedRecommendation().category?.toLowerCase();

  const categoryCarbon = activities
    .filter((activity: any) =>
      activity.category?.toLowerCase() === category
    )
    .reduce(
      (sum: number, activity: any) =>
        sum + Number(activity.carbonEmission || 0),
      0
    );

  return Math.round((categoryCarbon / total) * 100);
});

  ngOnInit(): void {

    const email = localStorage.getItem("email");

    if (!email) {
      return;
    }

    this.username = email.split("@")[0];

    // ==============================
// GET AI PERSONALIZED RECOMMENDATION
// ==============================

this.recommendationService.generateRecommendation(email).subscribe({

  next: (data: any) => {

    this.recommendation =
      data.recommendationText || 
      'Keep making sustainable choices to reduce your carbon footprint.';

    console.log(
      'AI Recommendation:',
      data
    );

  },

  error: (err) => {

    console.error(
      'AI Recommendation error:',
      err
    );

    this.recommendation =
      'Keep making sustainable choices to reduce your carbon footprint.';
  }

});

    // ==============================
    // GET USER ACTIVITIES
    // ==============================

    this.carbonService.getActivities(email).subscribe({

      next: (data: any[]) => {

        this.activityList.set(data);

      },

      error: (err) => {

        console.error(
          'Activity loading error:',
          err
        );

      }

    });

    // ==============================
    // GET USER GOALS
    // ==============================

    this.goalService.getGoals(email).subscribe({

      next: (data: any[]) => {

        this.goalList.set(data);

      },

      error: (err) => {

        console.error(
          'Goal loading error:',
          err
        );

      }

    });

  }

}