import SaltyBread from '../models/saltyBreads'
import { TBread } from '../types'

const getBreads = async () => await SaltyBread.find()

const insertBread = async (bread: TBread) => await SaltyBread.create(bread)

const getBread = async (id: string) => await SaltyBread.findById(id)

const updateBread = async (id: string, updates: Partial<TBread>) =>
	await SaltyBread.findByIdAndUpdate(id, updates, { new: true })

const deleteBread = async (id: string) => await SaltyBread.findByIdAndDelete(id)

export default { insertBread, getBreads, getBread, updateBread, deleteBread }
