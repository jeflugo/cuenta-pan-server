import SavedSweetBreads from '../models/savedSweetBreads'
import { TSavedBreads } from '../types'

const getBreads = async () => await SavedSweetBreads.find()

const insertBread = async (bread: TSavedBreads) =>
	await SavedSweetBreads.create(bread)

const getBread = async (id: string) => await SavedSweetBreads.findById(id)

const updateBread = async (id: string, updates: Partial<TSavedBreads>) =>
	await SavedSweetBreads.findByIdAndUpdate(id, updates, { new: true })

const deleteBread = async (id: string) =>
	await SavedSweetBreads.findByIdAndDelete(id)

export default { insertBread, getBreads, getBread, updateBread, deleteBread }
