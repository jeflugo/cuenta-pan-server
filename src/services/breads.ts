import Bread from '../models/breads'
import { TBread } from '../types'

const getBreads = async () => await Bread.find()

const insertBread = async (bread: TBread) => await Bread.create(bread)

const getBread = async (id: string) => await Bread.findById(id)

const updateBread = async (id: string, updates: Partial<TBread>) =>
	await Bread.findByIdAndUpdate(id, updates, { new: true })

const deleteBread = async (id: string) => await Bread.findByIdAndDelete(id)

export default { insertBread, getBreads, getBread, updateBread, deleteBread }
