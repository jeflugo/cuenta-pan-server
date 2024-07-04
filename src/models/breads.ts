import mongoose from 'mongoose'
import { TBread } from '../types'

const breadSchema = new mongoose.Schema<TBread>(
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

const Bread = mongoose.model('Bread', breadSchema)

export default Bread
