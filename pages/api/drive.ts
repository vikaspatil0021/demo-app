import { driveToYt } from '@/features/actions';
import type { NextApiRequest, NextApiResponse } from 'next';

// Example queue implementation (you might want to use a dedicated library like Bull, Agenda, etc.)
const jobQueue: any[] = [];

async function processQueue() {
  while (jobQueue.length > 0) {
    const job = jobQueue.shift();
    try {
      await driveToYt(job.data.access_token);
      console.log('Video uploaded to YouTube for job:', job.id);
    } catch (error) {
      console.error('Error uploading video to YouTube for job:', job.id, error);
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  try {
    // Respond to the client immediately
    res.status(200).json({ result: "Video upload request received. Uploading to YouTube in the background." });

    // Add the task to the queue
    const job = { id: Date.now(), data };
    jobQueue.push(job);

    // Process the queue asynchronously
    processQueue();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
