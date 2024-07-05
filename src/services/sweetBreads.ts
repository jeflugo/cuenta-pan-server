import SweetBread from '../models/sweetBreads'
import { TBread } from '../types'

const getBreads = async () => await SweetBread.find()

const insertBread = async (bread: TBread) => await SweetBread.create(bread)

const getBread = async (id: string) => await SweetBread.findById(id)

const updateBread = async (id: string, updates: Partial<TBread>) =>
	await SweetBread.findByIdAndUpdate(id, updates, { new: true })

const deleteBread = async (id: string) => await SweetBread.findByIdAndDelete(id)

export default { insertBread, getBreads, getBread, updateBread, deleteBread }
