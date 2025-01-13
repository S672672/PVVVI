const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }, { timestamps: true });
  
  adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  
  adminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  module.exports = mongoose.model('Admin', adminSchema);
  