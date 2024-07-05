import mongoose from 'mongoose'
import { TBread } from '../types'

const sweetBreadSchema = new mongoose.Schema<TBread>(
	{
		name: {
			type: String,
			required: true,
		},
		weight: {
			type: Number,
			required: true,
		},
		left: {
			type: Number,
			required: true,
		},
		make: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const SweetBread = mongoose.model('sweet-breads', sweetBreadSchema)

export default SweetBread
