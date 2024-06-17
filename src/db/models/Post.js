import mongoose from 'mongoose';
import slugify from 'slugify';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    img: {
        type: String,
        validate: {
            validator: function (v) {
                return !v || /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

postSchema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
    next();
});

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
