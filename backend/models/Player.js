import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  role: {
    type: String,
    enum: ['batsman', 'bowler', 'all-rounder'],
    required: true
  },
  stats: {
    matches: {
      type: Number,
      default: 0
    },
    runs: {
      type: Number,
      default: 0
    },
    wickets: {
      type: Number,
      default: 0
    },
    average: {
      type: Number,
      default: 0
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Player', playerSchema);
