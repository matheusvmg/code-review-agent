import { Injectable } from '@nestjs/common';
import OpenAI from "openai";
import { promptText } from './prompt';

@Injectable()
export class AppService {
  async requestReview(code: string): Promise<string> {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.responses.create({
      model: "gpt-4.1",
      input: promptText(code)
    });
    console.log(JSON.stringify(response, null, 2));
    return response.output_text;
  }
}
