import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'eco-bot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eco-bot.component.html',
  styleUrl: './eco-bot.component.css'
})
export class EcoBotComponent {

  private chatService = inject(ChatService);

  message = '';
  isOpen = false;

  isLoading = false;
  toggleBot(): void {
  this.isOpen = !this.isOpen;
}

  messages: ChatMessage[] = [
    {
      sender: 'bot',
      text: "Hi! I'm EcoBot 🌱 How can I help you with your sustainability journey?"
    }
  ];

  sendMessage(): void {

    const userMessage = this.message.trim();

    if (!userMessage || this.isLoading) {
      return;
    }

    // Add user message
    this.messages.push({
      sender: 'user',
      text: userMessage
    });

    this.message = '';
    this.isLoading = true;

    // Send message to backend
    this.chatService.sendMessage(userMessage).subscribe({

      next: (response) => {

        this.messages.push({
          sender: 'bot',
          text: response.message
        });

        this.isLoading = false;
      },

      error: (error) => {

        console.error('EcoBot error:', error);

        this.messages.push({
          sender: 'bot',
          text: 'Sorry, I could not connect to EcoBot right now. Please try again.'
        });

        this.isLoading = false;
      }

    });
  }
}