import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockDataService } from '../../services/mock-data.service';
import { CarbonEntry } from '../../models/data.model';

const CATEGORIES: CarbonEntry['category'][] = [
  'Transportation',
  'Electricity Usage',
  'Fuel Consumption',
  'Food Consumption',
  'Waste Generation',
  'Water Usage',
  'Online Shopping',
  'Travel Activities',
];

// Rough kg CO2e per unit, standing in for the backend's carbon calculation engine.
const EMISSION_FACTORS: Record<string, number> = {
  Transportation: 0.21,
  'Electricity Usage': 0.45,
  'Fuel Consumption': 2.3,
  'Food Consumption': 1.4,
  'Waste Generation': 0.5,
  'Water Usage': 0.0017,
  'Online Shopping': 0.7,
  'Travel Activities': 5.1,
};

@Component({
  selector: 'eco-carbon-tracker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './carbon-tracker.component.html',
  styleUrl: './carbon-tracker.component.css',
})
export class CarbonTrackerComponent {
  private fb = inject(FormBuilder);
  private data = inject(MockDataService);

  readonly categories = CATEGORIES;
  readonly entries = this.data.getCarbonEntries();
  readonly filter = signal<string>('All');

  readonly filteredEntries = computed(() => {
    const f = this.filter();
    const list = this.entries();
    return f === 'All' ? list : list.filter((e) => e.category === f);
  });

  readonly totalKg = computed(() =>
    this.entries().reduce((sum, e) => sum + e.kgCo2e, 0)
  );

  readonly estimatedKg = computed(() => {
    const category = this.form.value.category as string;
    const qty = Number(this.form.value.quantity) || 0;
    const factor = EMISSION_FACTORS[category] ?? 0.5;
    return Math.round(qty * factor * 100) / 100;
  });

  readonly form = this.fb.group({
    category: ['Transportation', Validators.required],
    activity: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(0.1)]],
    unit: ['km'],
    date: [new Date().toISOString().slice(0, 10), Validators.required],
  });

  setFilter(cat: string) {
    this.filter.set(cat);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    const entry: CarbonEntry = {
      id: 'c' + Math.random().toString(36).slice(2, 8),
      date: v.date!,
      category: v.category as CarbonEntry['category'],
      activity: `${v.activity} — ${v.quantity} ${v.unit}`,
      kgCo2e: this.estimatedKg(),
    };
    this.data.addCarbonEntry(entry);
    this.form.patchValue({ activity: '', quantity: 1 });
  }
}
