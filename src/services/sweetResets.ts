import SweetReset from '../models/sweetResets'
import { TReset } from '../types'

const getResets = async () => {
	const newResets = await SweetReset.find()
	if (newResets.length === 0) return null
	const newResetsModified = newResets.map(({ id, value }) => {
		return {
			id,
			value,
		}
	})
	return newResetsModified
}

const insertReset = async (reset: TReset) => await SweetReset.create(reset)

const getReset = async (id: string) => await SweetReset.findById(id)

const updateReset = async (id: string, updates: Partial<TReset>) =>
	await SweetReset.findByIdAndUpdate(id, updates, { new: true })

const deleteReset = async (id: string) => await SweetReset.findByIdAndDelete(id)

export default { getResets, insertReset, getReset, updateReset, deleteReset }
