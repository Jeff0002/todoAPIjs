var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  Age: Number,
  LoyaltyPoints: Number,
  FavoriteBarber: String,
  Appointment: [
    {BarberName: String,
      Time: Date
    }]
});

module.exports = mongoose.model('User', UserSchema);
