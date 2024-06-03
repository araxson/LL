import { Schema, model } from 'mongoose';

const SearchSchema = new Schema({
  query: { type: String, required: true },
  userId: { type: String, required: true },
  results: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Search = model('Search', SearchSchema);

export default Search;
