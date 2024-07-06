import SweetBread from '../models/sweetBreads'
import { TBread } from '../types'

const getBreads = async () => {
	const newBreads = await SweetBread.find()
	if (newBreads.length === 0) return null
	const newBreadsModified = newBreads.map(
		({ id, name, weight, left, make }) => {
			return {
				id,
				name,
				weight,
				left,
				make,
			}
		}
	)
	return newBreadsModified
}

const resetBreads = async () => {
	const newBreads = await SweetBread.find()
	const newBreadsModified = newBreads.map(
		({ id, name, weight, left, make }) => {
			return {
				id,
				name,
				weight,
				left: 0,
				make: 0,
			}
		}
	)
	return newBreadsModified
}

const insertBread = async (bread: TBread) => {
	const { _id, name, weight, left, make } = await SweetBread.create(bread)
	return {
		id: _id,
		name,
		weight,
		left,
		make,
	}
}

const getBread = async (id: string) => await SweetBread.findById(id)

const updateBread = async (id: string, updates: Partial<TBread>) => {
	const updatedBread = await SweetBread.findByIdAndUpdate(id, updates, {
		new: true,
	})
	const { _id, name, weight, left, make } = updatedBread!
	return {
		id: _id,
		name,
		weight,
		left,
		make,
	}
}

const deleteBread = async (id: string) => {
	const deletedBread = await SweetBread.findByIdAndDelete(id)
	return { id: deletedBread?._id }
}

export default {
	insertBread,
	getBreads,
	resetBreads,
	getBread,
	updateBread,
	deleteBread,
}
