import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        minlength: 4,
        maxlength: 20,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    img: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
