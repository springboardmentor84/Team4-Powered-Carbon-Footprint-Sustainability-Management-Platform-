package com.ecotrack.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class OllamaService {

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public OllamaService() {
        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }

    public String chat(String userMessage) {

        String prompt = """
                You are EcoBot, the AI sustainability assistant for EcoTrack.

                Your job is to help users understand and reduce their carbon footprint.

                Answer the user's question clearly, simply, and practically.

                Give useful sustainability advice related to:
                carbon footprint, transportation, electricity, food, waste,
                water, recycling, and sustainable lifestyle.

                Do not make up the user's personal carbon data.
                If the user asks about their personal EcoTrack data,
                explain that personalized data is available when EcoTrack
                provides it to you.

                Keep the answer friendly and easy to understand.
                Avoid unnecessary long explanations.

                User message:
                %s
                """.formatted(userMessage);

        try {

            String jsonBody = objectMapper.writeValueAsString(
                    new OllamaRequest(
                            "llama3.2",
                            prompt,
                            false
                    )
            );

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("http://localhost:11434/api/generate"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                    .build();

            HttpResponse<String> response =
                    httpClient.send(
                            request,
                            HttpResponse.BodyHandlers.ofString()
                    );

            if (response.statusCode() != 200) {

                throw new RuntimeException(
                        "Ollama returned status: "
                                + response.statusCode()
                );
            }

            JsonNode jsonResponse =
                    objectMapper.readTree(response.body());

            return jsonResponse
                    .get("response")
                    .asText();

        } catch (Exception e) {

            e.printStackTrace();

            return "Sorry, I couldn't connect to EcoBot right now. "
                    + "Please try again.";
        }
    }
    public String generateRecommendation(
            String category,
            double emission
    ) {

        String prompt = """
            You are EcoBot, the AI sustainability assistant for EcoTrack.

            Analyze the user's carbon footprint information.

            Category: %s
            Carbon emission: %.2f kg CO2e

            Give one personalized and practical sustainability recommendation.
            Keep it simple and actionable.
            Do not use bullet points.
            Maximum 2 sentences.
            """.formatted(category, emission);

        try {

            String jsonBody = objectMapper.writeValueAsString(
                    new OllamaRequest(
                            "llama3.2",
                            prompt,
                            false
                    )
            );

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("http://localhost:11434/api/generate"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                    .build();

            HttpResponse<String> response =
                    httpClient.send(
                            request,
                            HttpResponse.BodyHandlers.ofString()
                    );

            if (response.statusCode() != 200) {

                throw new RuntimeException(
                        "Ollama returned status: "
                                + response.statusCode()
                );
            }

            JsonNode jsonResponse =
                    objectMapper.readTree(response.body());

            return jsonResponse
                    .get("response")
                    .asText();

        } catch (Exception e) {

            e.printStackTrace();

            return "Keep following sustainable practices to reduce your carbon footprint.";
        }
    }
    public String personalizedChat(
            String userMessage,
            String email,
            java.util.List<com.ecotrack.backend.entity.CarbonActivity> activities
    ) {

        StringBuilder data = new StringBuilder();

        double totalEmission = 0.0;

        for (com.ecotrack.backend.entity.CarbonActivity activity : activities) {

            if (activity.getCategory() == null ||
                    activity.getCarbonEmission() == null) {
                continue;
            }

            totalEmission += activity.getCarbonEmission();

            data.append("- Category: ")
                    .append(activity.getCategory())
                    .append(", Emission: ")
                    .append(String.format("%.2f", activity.getCarbonEmission()))
                    .append(" kg CO2");

            if (activity.getDescription() != null) {
                data.append(", Description: ")
                        .append(activity.getDescription());
            }

            data.append("\n");
        }

        String prompt = """
            You are EcoBot, the AI sustainability assistant for EcoTrack.

            You have access to the user's actual EcoTrack carbon activity data.

            User email:
            %s

            Total recorded carbon emission:
            %.2f kg CO2

            User's carbon activities:
            %s

            User's question:
            %s

            Instructions:
            - Use ONLY the carbon data provided above when discussing the user's personal footprint.
            - Do not invent any personal data.
            - Identify important patterns from the user's activities.
            - If one category has a high emission, mention it.
            - Give practical and simple sustainability advice.
            - If the question is not related to personal carbon data, answer normally as EcoBot.
            - Keep the response friendly and easy to understand.
            - Do not mention technical details such as databases, APIs, Java, or Ollama.

            Answer the user's question:
            """.formatted(
                email,
                totalEmission,
                data,
                userMessage
        );

        try {

            String jsonBody = objectMapper.writeValueAsString(
                    new OllamaRequest(
                            "llama3.2",
                            prompt,
                            false
                    )
            );

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("http://localhost:11434/api/generate"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                    .build();

            HttpResponse<String> response =
                    httpClient.send(
                            request,
                            HttpResponse.BodyHandlers.ofString()
                    );

            if (response.statusCode() != 200) {

                throw new RuntimeException(
                        "Ollama returned status: "
                                + response.statusCode()
                );
            }

            JsonNode jsonResponse =
                    objectMapper.readTree(response.body());

            return jsonResponse
                    .get("response")
                    .asText();

        } catch (Exception e) {

            e.printStackTrace();

            return "Sorry, I couldn't connect to EcoBot right now. Please try again.";
        }
    }

    private record OllamaRequest(
            String model,
            String prompt,
            boolean stream
    ) {
    }
}