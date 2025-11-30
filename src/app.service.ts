import { Injectable } from '@nestjs/common';
import OpenAI from "openai";

@Injectable()
export class AppService {
  async requestReview(code: string): Promise<string> {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: `
        You are a senior software engineer performing code review.
        Analyze this diff and suggest improvements clearly, using bullet points and examples when relevant.
        Diff:
        ${code}`
    });
    
    return response.output_text;
  }
}
