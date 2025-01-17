const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    species:{type:String,required:true},
    breed: { type: String, required: true },
    size:{type:String,enum:["small","medium","large"]
    },
    spayed:{type:String,required:true},
    vaccinated:{type:String,required:true},
    description: { type: String },
    image: { type: String }, 
    status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },

    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Pet', petSchema);