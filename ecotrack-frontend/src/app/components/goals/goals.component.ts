import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { SustainabilityGoal } from '../../models/data.model';
import { FormsModule } from '@angular/forms';
import { GoalService } from '../../services/goal.service';
import { Goal } from '../../models/goal.model';

@Component({
  selector: 'eco-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent implements OnInit {

  readonly Math = Math;

  private data = inject(MockDataService);
  private goalService = inject(GoalService);

  // Popup control
  showGoalForm = false;
  goal: Goal = {
    title: '',
    type: '',
    targetKg: 0,
    currentKg: 0,
    unit: '',
    startDate: '',
    endDate: '',
    status: 'Not Started',
    email: ''
  };
  goalList: any[] = [];

  get summary() {
    return {
      total: this.goalList.length,
      achieved: this.goalList.filter(g => g.status === 'Achieved').length,
      onTrack: this.goalList.filter(g => g.status === 'On Track').length,
      atRisk: this.goalList.filter(g => g.status === 'At Risk').length,
    };
  }

  openGoalForm() {
    this.showGoalForm = true;
  }

  closeGoalForm() {
    this.showGoalForm = false;
  }

  progressPct(goal: Goal): number {

  const current = Number(goal.currentKg) || 0;
  const target = Number(goal.targetKg) || 0;

  if (target <= 0) {
    return 0;
  }

  const percentage = (current / target) * 100;

  return Math.min(100, Math.max(0, Math.round(percentage)));
}

  bump(goal: any) {
    const value = prompt(
      "Enter Current Progress",
      goal.currentKg
    );

    if (value == null) return;

    const newValue = Number(value);

    // Validation
    if (isNaN(newValue)) {
      alert("Please enter a valid number.");
      return;
    }

    if (newValue < 0) {
      alert("Progress cannot be negative.");
      return;
    }

    if (newValue > goal.targetKg) {
      alert("Progress cannot exceed the target.");
      return;
    }

    this.goalService.updateProgress(
      goal.id,
      newValue
    ).subscribe({
      next: () => {
        this.ngOnInit();
        alert("Progress Updated Successfully");
      },
      error: (err) => {
        console.error(err);
        alert("Update Failed");
      }
    });
  }

  statusClass(status: SustainabilityGoal['status']): string {
    return {
      'On Track': 'status--ontrack',
      'At Risk': 'status--atrisk',
      Achieved: 'status--achieved',
      'Not Started': 'status--notstarted',
    }[status];
  }

  saveGoal() {
    this.goal.currentKg = 0;
    this.goal.startDate = new Date().toISOString().split('T')[0];
    this.goal.status = "Not Started";
    this.goal.email = localStorage.getItem("email") || "";

    this.goalService.saveGoal(this.goal).subscribe({
      next: () => {
        alert("Goal Saved Successfully");
        this.closeGoalForm();
        this.ngOnInit();
      },
    });
  }

  ngOnInit(): void {
    const email = localStorage.getItem("email");

    if (email) {
      this.goalService.getGoals(email).subscribe({
        next: (data) => {
          this.goalList = data;
          console.log("Goals from DB:", data);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  deleteGoal(id: number) {
    if (confirm("Are you sure you want to delete this goal?")) {
      this.goalService.deleteGoal(id).subscribe({
        next: () => {
          alert("Goal Deleted Successfully");
          this.ngOnInit();
        },
        error: (err) => {
          console.log("Status:", err.status);
          console.log("Error:", err.error);
          console.log("Full Error:", err);
          alert("Delete Failed");
        }
      });
    }
  }
}