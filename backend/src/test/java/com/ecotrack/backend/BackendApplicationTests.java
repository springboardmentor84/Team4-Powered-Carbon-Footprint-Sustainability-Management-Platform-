package com.ecotrack.backend;

import com.ecotrack.backend.dto.GoalRequest;
import com.ecotrack.backend.entity.Role;
import com.ecotrack.backend.entity.User;
import com.ecotrack.backend.repository.GoalRepository;
import com.ecotrack.backend.repository.UserRepository;
import com.ecotrack.backend.service.GoalService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GoalService goalService;

    @Autowired
    private GoalRepository goalRepository;

    @Test
    void contextLoads() {
    }

    @Test
    void registerEndpoint_shouldPersistUserAndReturnOk() throws Exception {
        String email = "mockmvc-" + System.currentTimeMillis() + "@example.com";

        mockMvc.perform(post("/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"fullName\":\"Mock MVC User\",\"email\":\"" + email + "\",\"password\":\"secret123\"}"))
                .andExpect(status().isOk());

        assertThat(userRepository.existsByEmail(email)).isTrue();
    }

    @Test
    void saveUser_shouldPersistLowercaseRoleValue() {
        User user = User.builder()
                .fullName("Regression Test")
                .email("regression" + System.currentTimeMillis() + "@example.com")
                .passwordHash("encoded-password")
                .role(Role.USER)
                .active(true)
                .build();

        User saved = userRepository.saveAndFlush(user);

        assertThat(saved.getRole()).isEqualTo(Role.USER);
        assertThat(saved.getId()).isNotNull();
    }

    @Test
    void saveGoal_shouldPersistGoalWithDatabaseCompatibleStatus() {
        String email = "goal-regression-" + System.currentTimeMillis() + "@example.com";
        User user = User.builder()
                .fullName("Goal Regression")
                .email(email)
                .passwordHash("encoded-password")
                .role(Role.USER)
                .active(true)
                .build();
        userRepository.saveAndFlush(user);

        GoalRequest request = new GoalRequest();
        request.setTitle("Plant 50 trees");
        request.setType("Tree Planting");
        request.setTargetKg(50.0);
        request.setCurrentKg(0.0);
        request.setUnit("trees");
        request.setStartDate(java.time.LocalDate.now());
        request.setEndDate(java.time.LocalDate.now().plusDays(30));
        request.setStatus("Not Started");
        request.setEmail(email);

        var saved = goalService.saveGoal(request);
        var persistedGoals = goalRepository.findByUser(user);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getStatus()).isEqualTo("On Track");
        assertThat(persistedGoals).isNotEmpty();
        assertThat(persistedGoals.get(0).getStatus()).isEqualTo("active");
    }

}
