import SavedSaltyBreads from '../models/savedSaltyBreads'
import { TSavedBreads } from '../types'

const getBreads = async () => await SavedSaltyBreads.find()

const insertBread = async (bread: TSavedBreads) =>
	await SavedSaltyBreads.create(bread)

const getBread = async (id: string) => await SavedSaltyBreads.findById(id)

const updateBread = async (id: string, updates: Partial<TSavedBreads>) =>
	await SavedSaltyBreads.findByIdAndUpdate(id, updates, { new: true })

const deleteBread = async (id: string) =>
	await SavedSaltyBreads.findByIdAndDelete(id)

export default { insertBread, getBreads, getBread, updateBread, deleteBread }
