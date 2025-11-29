import { Injectable } from '@nestjs/common';
import OpenAI from "openai";

@Injectable()
export class AppService {
  async requestReview(code: string): Promise<string> {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: "gpt-5-nano",
      input: code,
      instructions: `
      You are a senior code reviewer.
      Analyze the following DIFF and comment inline with suggestions:

      ### DIFF
      <DIFF>
      ${code}
      </DIFF>
      ` 
    });
    
    return response.output_text;
  }
}
