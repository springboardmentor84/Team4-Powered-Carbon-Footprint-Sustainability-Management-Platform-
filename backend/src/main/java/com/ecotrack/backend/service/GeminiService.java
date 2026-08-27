package com.ecotrack.backend.service;

import com.ecotrack.backend.entity.CarbonActivity;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.CarbonActivityRepository;
import com.ecotrack.backend.repository.UserRepository;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeminiService {

    private final Client client;
    private final UserRepository userRepository;
    private final CarbonActivityRepository carbonActivityRepository;

    public GeminiService(
            @Value("${gemini.api.key}") String apiKey,
            UserRepository userRepository,
            CarbonActivityRepository carbonActivityRepository
    ) {

        this.client = Client.builder()
                .apiKey(apiKey)
                .build();

        this.userRepository = userRepository;
        this.carbonActivityRepository = carbonActivityRepository;
    }

    public String generateRecommendation(
            String category,
            double emission
    ) {

        String prompt = """
                You are an AI sustainability assistant for EcoTrack.

                Analyze the user's carbon footprint information.

                Category: %s
                Carbon emission: %.2f kg CO2

                Give one personalized and practical sustainability recommendation.
                Keep it simple and actionable.
                Do not use bullet points.
                Maximum 2 sentences.
                """.formatted(category, emission);

        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3.6-flash",
                        prompt,
                        null
                );

        return response.text();
    }


    public String chat(String email, String userMessage) {

        User user = userRepository.findByEmail(email)
                .orElse(null);

        StringBuilder carbonData = new StringBuilder();

        if (user != null) {

            List<CarbonActivity> activities =
                    carbonActivityRepository.findByUser(user);

            if (!activities.isEmpty()) {

                carbonData.append("User's EcoTrack carbon activities:\n");

                for (CarbonActivity activity : activities) {

                    carbonData.append(
                            "- Category: "
                                    + activity.getCategory()
                                    + ", Carbon emission: "
                                    + activity.getCarbonEmission()
                                    + " kg CO2\n"
                    );
                }

            } else {

                carbonData.append(
                        "The user has no carbon activities logged yet.\n"
                );
            }
        }

        String prompt = """
                You are EcoBot, the AI sustainability assistant for EcoTrack.

                Your job is to help users understand and reduce their carbon footprint.

                Answer the user's question clearly, simply, and practically.

                You can give advice related to:
                transportation, electricity, food, waste,
                water, recycling and sustainable lifestyle.

                IMPORTANT:
                Use the user's EcoTrack data below when answering
                personal carbon footprint questions.

                Do not invent any carbon data.

                USER'S ECOTRACK DATA:
                %s

                USER QUESTION:
                %s

                If the user asks about their carbon footprint,
                explain the answer using their actual EcoTrack data.

                Keep the answer easy to understand.
                """.formatted(
                carbonData,
                userMessage
        );

        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-3.6-flash",
                        prompt,
                        null
                );

        return response.text();
    }
}