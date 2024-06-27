import { Request, Response } from 'express';
import Job from '../models/Job';

export const createJob = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const client = req.user.id;

  try {
    const job = new Job({ title, description, client });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: 'Error creating job', error });
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find({ client: req.user.id });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching jobs', error });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.client.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    job.title = title || job.title;
    job.description = description || job.description;
    job.status = status || job.status;
    job.updatedAt = new Date();

    await job.save();
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: 'Error updating job', error });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.client.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Job.deleteOne({ _id: id });
    res.status(200).json({ message: 'Job removed' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting job', error });
  }
};
