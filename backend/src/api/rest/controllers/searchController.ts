import { Request, Response } from 'express';
import { Search } from '../../models/Search';

export const getSearch = async (req: Request, res: Response) => {
  try {
    const search = await Search.findById(req.params.id);
    if (!search) {
      return res.status(404).json({ message: 'Search not found' });
    }
    res.json(search);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getSearches = async (req: Request, res: Response) => {
  try {
    const searches = await Search.find();
    res.json(searches);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createSearch = async (req: Request, res: Response) => {
  const { query, userId, results } = req.body;
  try {
    const search = new Search({ query, userId, results, createdAt: new Date() });
    await search.save();
    res.status(201).json(search);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSearch = async (req: Request, res: Response) => {
  try {
    const search = await Search.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!search) {
      return res.status(404).json({ message: 'Search not found' });
    }
    res.json(search);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteSearch = async (req: Request, res: Response) => {
  try {
    const search = await Search.findByIdAndDelete(req.params.id);
    if (!search) {
      return res.status(404).json({ message: 'Search not found' });
    }
    res.json({ message: 'Search deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
