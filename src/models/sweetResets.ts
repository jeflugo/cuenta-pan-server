import mongoose from 'mongoose'
import { TReset } from '../types'

const sweetResetSchema = new mongoose.Schema<TReset>(
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

const SweetReset = mongoose.model('sweet-resets', sweetResetSchema)

export default SweetReset
