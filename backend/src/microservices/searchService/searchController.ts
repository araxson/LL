import { Request, Response } from 'express';
import SearchService from './searchService';
import { Container } from 'typedi';

const searchServiceInstance = Container.get(SearchService);

export const createSearch = async (req: Request, res: Response) => {
  const { query, userId, results } = req.body;
  try {
    const search = await searchServiceInstance.createSearch({ query, userId, results });
    return res.status(201).json(search);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getSearches = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const searches = await searchServiceInstance.getSearches(userId);
    return res.status(200).json(searches);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
