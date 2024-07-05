import SaltyBreads from '../models/saltyBreads'
import { TBread } from '../types'

const getBreads = async () => await SaltyBreads.find()

const insertBread = async (bread: TBread) => await SaltyBreads.create(bread)

const getBread = async (id: string) => await SaltyBreads.findById(id)

const updateBread = async (id: string, updates: Partial<TBread>) =>
	await SaltyBreads.findByIdAndUpdate(id, updates, { new: true })

const deleteBread = async (id: string) =>
	await SaltyBreads.findByIdAndDelete(id)

export default { insertBread, getBreads, getBread, updateBread, deleteBread }
