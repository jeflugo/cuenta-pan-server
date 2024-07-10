import SaltyBread from '../models/saltyBreads'
import { TBread } from '../types'

const getBreads = async () => {
	const newBreads = await SaltyBread.find()
	if (newBreads.length === 0) return null
	const newBreadsModified = newBreads.map(
		({ id, name, weight, left, make, position }) => {
			return {
				id,
				name,
				weight,
				left,
				make,
				position,
			}
		}
	)
	return newBreadsModified
}

const resetBreads = async () => {
	const newBreads = await SaltyBread.find()
	if (newBreads.length === 0) return null

	const newBreadsModified = await Promise.all(
		newBreads.map(async bread => {
			const updates = { left: 0, make: 0 }
			const updatedBread = await SaltyBread.findByIdAndUpdate(
				bread.id,
				updates,
				{
					new: true,
				}
			)
			const { id, name, weight, left, make, position } = updatedBread!
			return {
				id,
				name,
				weight,
				left,
				make,
				position,
			}
		})
	)
	return newBreadsModified
}

const insertBread = async (bread: TBread) => {
	const newBread = await SaltyBread.create(bread)
	const { id, name, weight, left, make, position } = newBread
	return {
		id,
		name,
		weight,
		left,
		make,
		position,
	}
}

const getBread = async (id: string) => await SaltyBread.findById(id)

const updateBread = async (id: string, updates: Partial<TBread>) => {
	const updatedBread = await SaltyBread.findByIdAndUpdate(id, updates, {
		new: true,
	})
	const { _id, name, weight, left, make, position } = updatedBread!
	return {
		id: _id,
		name,
		weight,
		left,
		make,
		position,
	}
}

const deleteBread = async (id: string) => {
	const deletedBread = await SaltyBread.findByIdAndDelete(id)
	return { id: deletedBread?.id }
}

export default {
	insertBread,
	getBreads,
	resetBreads,
	getBread,
	updateBread,
	deleteBread,
}
