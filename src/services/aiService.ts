import { pipeline } from '@xenova/transformers';
import { log } from 'utils/logger';

export const genText = async (prompt: string): Promise<unknown> => {
  try {
    // Allocate a pipeline for sentiment-analysis
    const pipe = await pipeline('sentiment-analysis');

    const out = await pipe(prompt);

    log({ out });

    return out;
  } catch (error) {
    log.error('Error genText:', error);
    return error;
  }

};
