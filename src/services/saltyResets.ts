import SaltyReset from '../models/saltyResets'
import { TReset } from '../types'

const getResets = async () => {
	const newResets = await SaltyReset.find()
	if (newResets.length === 0) return null
	const newResetsModified = newResets.map(({ id, value }) => {
		return {
			id,
			value,
		}
	})
	return newResetsModified
}

const insertReset = async (reset: TReset) => await SaltyReset.create(reset)

const getReset = async (id: string) => await SaltyReset.findById(id)

const updateReset = async (id: string, updates: Partial<TReset>) =>
	await SaltyReset.findByIdAndUpdate(id, updates, { new: true })

const deleteReset = async (id: string) => await SaltyReset.findByIdAndDelete(id)

export default { getResets, insertReset, getReset, updateReset, deleteReset }
