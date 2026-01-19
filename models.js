const mongoose=require("mongoose")
const{Schema}=mongoose

const enrollmentSchema=new Schema({
    fullName: {
    type: String,
    required: [true, 'Please add full name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add email'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/, 'Please add a valid email']
  },
  mobile: {
    type: String,
    required: [true, 'Please add mobile number'],
    match: [/^[0-9]{10,15}$/, 'Please add a valid mobile number']
  },
  qualification: {
    type: String,
    required: [true, 'Please select qualification'],
    enum: ['high-school', 'bachelors', 'masters', 'other']
  },
  mode: {
    type: String,
    required: true,
    enum: ['Online', 'Offline', 'Hybrid'],
    default: 'Online'
  },
  batch: {
    type: String,
    required: [true, 'Please select batch']
  },
  city: {
    type: String,
    required: [true, 'Please add city'],
    trim: true
  },
  queries: {
    type: String,
    trim: true
  },
 
}, {
  timestamps: true  
});

const user= mongoose.model('Enrollment', enrollmentSchema);
module.exports =user

