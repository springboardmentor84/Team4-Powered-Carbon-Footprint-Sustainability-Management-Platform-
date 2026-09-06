package com.ecotrack.backend.controller;

import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.entity.Goal;
import com.ecotrack.backend.repository.CarbonActivityRepository;
import com.ecotrack.backend.repository.GoalRepository;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private final CarbonActivityRepository carbonActivityRepository;
    private final GoalRepository goalRepository;

    public ReportController(
            CarbonActivityRepository carbonActivityRepository,
            GoalRepository goalRepository) {
        this.carbonActivityRepository = carbonActivityRepository;
        this.goalRepository = goalRepository;
    }

    @GetMapping("/generate")
    public ResponseEntity<byte[]> generateReport(
            @RequestParam String type,
            @RequestParam String email) {

        try {
            List<CarbonActivity> activities =
                    carbonActivityRepository.findByUser_Email(email);

            List<Goal> goals =
                    goalRepository.findByUser_Email(email);

            ByteArrayOutputStream outputStream =
                    new ByteArrayOutputStream();

            Document document = new Document(PageSize.A4);
            PdfWriter.getInstance(document, outputStream);

            document.open();

            Font titleFont = FontFactory.getFont(
                    FontFactory.HELVETICA_BOLD, 20);

            Font headingFont = FontFactory.getFont(
                    FontFactory.HELVETICA_BOLD, 14);

            document.add(new Paragraph(
                    "EcoTrack - " + type + " Report",
                    titleFont));

            document.add(new Paragraph(
                    "Generated on: " + LocalDate.now()));

            document.add(new Paragraph(
                    "User: " + email));

            document.add(new Paragraph(" "));

            if ("Carbon Footprint".equalsIgnoreCase(type)) {

                document.add(new Paragraph(
                        "Carbon Footprint Summary",
                        headingFont));

                double total = activities.stream()
                        .mapToDouble(a ->
                                a.getCarbonEmission() != null
                                        ? a.getCarbonEmission()
                                        : 0)
                        .sum();

                document.add(new Paragraph(
                        "Total Carbon Emission: "
                                + String.format("%.2f", total)
                                + " kg CO2e"));

                document.add(new Paragraph(" "));

                for (CarbonActivity activity : activities) {
                    document.add(new Paragraph(
                            activity.getCategory()
                                    + " - "
                                    + activity.getDescription()
                                    + " : "
                                    + activity.getCarbonEmission()
                                    + " kg CO2e"));
                }

            } else if ("Goal Achievement".equalsIgnoreCase(type)) {

                document.add(new Paragraph(
                        "Goal Achievement Summary",
                        headingFont));

                for (Goal goal : goals) {
                    document.add(new Paragraph(
                            goal.getTitle()
                                    + " | Target: "
                                    + goal.getTargetKg()
                                    + " "
                                    + goal.getUnit()
                                    + " | Current: "
                                    + goal.getCurrentKg()
                                    + " "
                                    + goal.getUnit()
                                    + " | Status: "
                                    + goal.getStatus()));
                }

            } else if ("Sustainability".equalsIgnoreCase(type)) {

                document.add(new Paragraph(
                        "Sustainability Summary",
                        headingFont));

                double totalCarbon = activities.stream()
                        .mapToDouble(a ->
                                a.getCarbonEmission() != null
                                        ? a.getCarbonEmission()
                                        : 0)
                        .sum();

                long achievedGoals = goals.stream()
                        .filter(g ->
                                "Achieved".equalsIgnoreCase(g.getStatus()))
                        .count();

                document.add(new Paragraph(
                        "Total Activities: " + activities.size()));

                document.add(new Paragraph(
                        "Total Carbon Emission: "
                                + String.format("%.2f", totalCarbon)
                                + " kg CO2e"));

                document.add(new Paragraph(
                        "Goals Achieved: "
                                + achievedGoals
                                + " / "
                                + goals.size()));
            } else if ("Monthly Carbon Summary".equalsIgnoreCase(type)) {

                document.add(new Paragraph(
                        "Monthly Carbon Summary",
                        headingFont));

                double totalCarbon = activities.stream()
                        .mapToDouble(a ->
                                a.getCarbonEmission() != null
                                        ? a.getCarbonEmission()
                                        : 0)
                        .sum();

                document.add(new Paragraph(
                        "Total Activities: " + activities.size()));

                document.add(new Paragraph(
                        "Total Carbon Emission: "
                                + String.format("%.2f", totalCarbon)
                                + " kg CO2e"));

                document.add(new Paragraph(" "));

                document.add(new Paragraph(
                        "Activity Details",
                        headingFont));

                for (CarbonActivity activity : activities) {
                    document.add(new Paragraph(
                            activity.getActivityDate()
                                    + " | "
                                    + activity.getCategory()
                                    + " | "
                                    + String.format("%.2f",
                                    activity.getCarbonEmission() != null
                                            ? activity.getCarbonEmission()
                                            : 0)
                                    + " kg CO2e"));
                }

            } else if ("Emission Breakdown".equalsIgnoreCase(type)) {

                document.add(new Paragraph(
                        "Emission Breakdown",
                        headingFont));

                java.util.Map<String, Double> breakdown =
                        activities.stream()
                                .collect(java.util.stream.Collectors.groupingBy(
                                        CarbonActivity::getCategory,
                                        java.util.stream.Collectors.summingDouble(
                                                a -> a.getCarbonEmission() != null
                                                        ? a.getCarbonEmission()
                                                        : 0)));

                for (java.util.Map.Entry<String, Double> entry
                        : breakdown.entrySet()) {

                    document.add(new Paragraph(
                            entry.getKey()
                                    + " : "
                                    + String.format("%.2f", entry.getValue())
                                    + " kg CO2e"));
                }


            } else if ("Challenge Participation".equalsIgnoreCase(type)) {

                document.add(new Paragraph(
                        "Challenge Participation Report",
                        headingFont));

                document.add(new Paragraph(
                        "Challenge participation details are available "
                                + "in the EcoTrack Challenges section."));

            } else {

                document.add(new Paragraph(
                        "Unknown report type: " + type));
            }

            document.close();

            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\""
                                    + type.replace(" ", "_")
                                    + "_Report.pdf\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(outputStream.toByteArray());

        } catch (Exception e) {

            return ResponseEntity.internalServerError().build();
        }
    }
    @GetMapping("/generate-excel")
    public ResponseEntity<byte[]> generateExcelReport(
            @RequestParam String type,
            @RequestParam String email) {

        try {
            List<CarbonActivity> activities =
                    carbonActivityRepository.findByUser_Email(email);

            List<Goal> goals =
                    goalRepository.findByUser_Email(email);

            XSSFWorkbook workbook = new XSSFWorkbook();
            Sheet sheet = workbook.createSheet("EcoTrack Report");

            int rowNum = 0;

            Row titleRow = sheet.createRow(rowNum++);
            titleRow.createCell(0)
                    .setCellValue("EcoTrack - " + type + " Report");

            Row dateRow = sheet.createRow(rowNum++);
            dateRow.createCell(0)
                    .setCellValue("Generated On");
            dateRow.createCell(1)
                    .setCellValue(LocalDate.now().toString());

            Row userRow = sheet.createRow(rowNum++);
            userRow.createCell(0)
                    .setCellValue("User");
            userRow.createCell(1)
                    .setCellValue(email);

            rowNum++;

            if ("Carbon Footprint".equalsIgnoreCase(type)) {

                Row header = sheet.createRow(rowNum++);
                header.createCell(0).setCellValue("Category");
                header.createCell(1).setCellValue("Description");
                header.createCell(2).setCellValue("Quantity");
                header.createCell(3).setCellValue("Unit");
                header.createCell(4).setCellValue("Carbon Emission (kg CO2e)");
                header.createCell(5).setCellValue("Activity Date");

                for (CarbonActivity activity : activities) {

                    Row row = sheet.createRow(rowNum++);

                    row.createCell(0)
                            .setCellValue(activity.getCategory());

                    row.createCell(1)
                            .setCellValue(activity.getDescription());

                    row.createCell(2)
                            .setCellValue(
                                    activity.getQuantity() != null
                                            ? activity.getQuantity()
                                            : 0);

                    row.createCell(3)
                            .setCellValue(activity.getUnit());

                    row.createCell(4)
                            .setCellValue(
                                    activity.getCarbonEmission() != null
                                            ? activity.getCarbonEmission()
                                            : 0);

                    row.createCell(5)
                            .setCellValue(
                                    activity.getActivityDate() != null
                                            ? activity.getActivityDate().toString()
                                            : "");
                }

            } else if ("Goal Achievement".equalsIgnoreCase(type)) {

                Row header = sheet.createRow(rowNum++);
                header.createCell(0).setCellValue("Goal");
                header.createCell(1).setCellValue("Target");
                header.createCell(2).setCellValue("Current");
                header.createCell(3).setCellValue("Unit");
                header.createCell(4).setCellValue("Status");

                for (Goal goal : goals) {

                    Row row = sheet.createRow(rowNum++);

                    row.createCell(0)
                            .setCellValue(goal.getTitle());

                    row.createCell(1)
                            .setCellValue(
                                    goal.getTargetKg() != null
                                            ? goal.getTargetKg()
                                            : 0);

                    row.createCell(2)
                            .setCellValue(
                                    goal.getCurrentKg() != null
                                            ? goal.getCurrentKg()
                                            : 0);

                    row.createCell(3)
                            .setCellValue(goal.getUnit());

                    row.createCell(4)
                            .setCellValue(goal.getStatus());
                }

            } else if ("Monthly Carbon Summary".equalsIgnoreCase(type)) {

                Row header = sheet.createRow(rowNum++);
                header.createCell(0).setCellValue("Date");
                header.createCell(1).setCellValue("Category");
                header.createCell(2).setCellValue("Description");
                header.createCell(3).setCellValue("Carbon Emission (kg CO2e)");

                double totalCarbon = 0;

                for (CarbonActivity activity : activities) {

                    double emission =
                            activity.getCarbonEmission() != null
                                    ? activity.getCarbonEmission()
                                    : 0;

                    Row row = sheet.createRow(rowNum++);

                    row.createCell(0)
                            .setCellValue(
                                    activity.getActivityDate() != null
                                            ? activity.getActivityDate().toString()
                                            : "");

                    row.createCell(1)
                            .setCellValue(activity.getCategory());

                    row.createCell(2)
                            .setCellValue(activity.getDescription());

                    row.createCell(3)
                            .setCellValue(emission);

                    totalCarbon += emission;
                }

                Row totalRow = sheet.createRow(rowNum++);

                totalRow.createCell(2)
                        .setCellValue("Total Carbon Emission");

                totalRow.createCell(3)
                        .setCellValue(totalCarbon);

            } else if ("Emission Breakdown".equalsIgnoreCase(type)) {

                Row header = sheet.createRow(rowNum++);
                header.createCell(0).setCellValue("Category");
                header.createCell(1).setCellValue("Total Carbon Emission (kg CO2e)");

                java.util.Map<String, Double> breakdown =
                        activities.stream()
                                .collect(java.util.stream.Collectors.groupingBy(
                                        CarbonActivity::getCategory,
                                        java.util.stream.Collectors.summingDouble(
                                                a -> a.getCarbonEmission() != null
                                                        ? a.getCarbonEmission()
                                                        : 0)));

                for (java.util.Map.Entry<String, Double> entry
                        : breakdown.entrySet()) {

                    Row row = sheet.createRow(rowNum++);

                    row.createCell(0)
                            .setCellValue(entry.getKey());

                    row.createCell(1)
                            .setCellValue(entry.getValue());
                }

            } else if ("Sustainability".equalsIgnoreCase(type)) {

                Row header = sheet.createRow(rowNum++);
                header.createCell(0).setCellValue("Metric");
                header.createCell(1).setCellValue("Value");

                double totalCarbon = activities.stream()
                        .mapToDouble(a ->
                                a.getCarbonEmission() != null
                                        ? a.getCarbonEmission()
                                        : 0)
                        .sum();

                long achievedGoals = goals.stream()
                        .filter(g ->
                                "Achieved".equalsIgnoreCase(g.getStatus()))
                        .count();

                Row activityRow = sheet.createRow(rowNum++);
                activityRow.createCell(0)
                        .setCellValue("Total Activities");
                activityRow.createCell(1)
                        .setCellValue(activities.size());

                Row carbonRow = sheet.createRow(rowNum++);
                carbonRow.createCell(0)
                        .setCellValue("Total Carbon Emission (kg CO2e)");
                carbonRow.createCell(1)
                        .setCellValue(totalCarbon);

                Row goalRow = sheet.createRow(rowNum++);
                goalRow.createCell(0)
                        .setCellValue("Goals Achieved");
                goalRow.createCell(1)
                        .setCellValue(
                                achievedGoals + " / " + goals.size());

            } else {

                Row header = sheet.createRow(rowNum++);
                header.createCell(0)
                        .setCellValue("Report Type");
                header.createCell(1)
                        .setCellValue(type);

                Row infoRow = sheet.createRow(rowNum++);
                infoRow.createCell(0)
                        .setCellValue("Information");

                infoRow.createCell(1)
                        .setCellValue(
                                "Challenge participation details are available in EcoTrack Challenges.");
            }

            for (int i = 0; i < 6; i++) {
                sheet.autoSizeColumn(i);
            }

            ByteArrayOutputStream outputStream =
                    new ByteArrayOutputStream();

            workbook.write(outputStream);
            workbook.close();

            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\""
                                    + type.replace(" ", "_")
                                    + "_Report.xlsx\"")
                    .contentType(
                            MediaType.parseMediaType(
                                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body(outputStream.toByteArray());

        } catch (Exception e) {

            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }
}