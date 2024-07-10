import mongoose from 'mongoose'
import { TReset } from '../types'

const saltyResetSchema = new mongoose.Schema<TReset>(
	{
		value: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

const SaltyReset = mongoose.model('salty-resets', saltyResetSchema)

export default SaltyReset
