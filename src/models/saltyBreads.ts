import mongoose from 'mongoose'
import { TBread } from '../types'

const saltyBreadSchema = new mongoose.Schema<TBread>(
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

const SaltyBread = mongoose.model('salty-breads', saltyBreadSchema)

export default SaltyBread
