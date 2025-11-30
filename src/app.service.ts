import { Injectable } from '@nestjs/common';
import OpenAI from "openai";

@Injectable()
export class AppService {
  async requestReview(code: string): Promise<string> {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
      { role: "system", content: "You are a senior software engineer performing code review." },
      { role: "user", content: `Analyze this diff and suggest improvements:\n\n${code}` }
    ],
    max_output_tokens: 1000
    });
    
    return response.output_text;
  }
}
