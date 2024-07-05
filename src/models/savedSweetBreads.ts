import mongoose from 'mongoose'
import { TSavedBreads } from '../types'

const savedSweetBreadsSchema = new mongoose.Schema<TSavedBreads>(
	{
		date: {
			type: String,
			required: true,
			// match: /^\d{4}-\d{2}-\d{2}$/,
		},
		breads: {
			type: [
				{
					name: { type: String, required: true },
					weight: { type: Number, required: true },
					left: { type: Number, required: true },
					make: { type: Number, required: true },
				},
			],
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const SavedSweetBreads = mongoose.model(
	'saved-sweet-breads',
	savedSweetBreadsSchema
)

export default SavedSweetBreads
