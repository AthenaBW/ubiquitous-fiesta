const { Thought, User } = require('../models');
const {Types} = require('mongoose');

// Define Thought Controller object
const ThoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Handler for "get thought by ID" endpoint
  async getThoughtsById(req, res) {
    try {
      const thought = await Thought.findOne({_id:req.params.thoughtId});
      if (!thought) {
        res.status(404).json({ message: 'Thought Unkown' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Handler for "create thought" endpoint
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  
  // Handler for "update thought by ID" endpoint
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      });
      if (!thought) {
        res.status(404).json({ message: 'Thought unknown' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Handler for "delete thought" endpoint
  async deleteThought(req,res) {
    try {
        const thought = await Thought.findByIdAndDelete({_id:req.params.thoughtId});
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
  },


  // Handler for "create reaction" endpoint
  async createReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        );
        thought ? res.json(thought) : res.status(404).json({message: notFound});
    } catch (e) {
        res.status(500).json(e);
    }
  },

// Handler for "delete reaction" endpoint
  async deleteReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        );

        thought ? res.json(thought) : res.status(404).json({message: notFound});
    } catch (e) {
        res.status(500).json(e);
    }
  },

};

// Export ThoughtController
module.exports = ThoughtController;