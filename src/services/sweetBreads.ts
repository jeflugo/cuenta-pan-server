import SweetBread from '../models/sweetBreads'
import { TBread, TBreadOrder } from '../types'

const getBreads = async () => {
	const newBreads = await SweetBread.find()
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
	const newBreads = await SweetBread.find()
	if (newBreads.length === 0) return null

	const newBreadsModified = await Promise.all(
		newBreads.map(async bread => {
			const updates = { left: 0, make: 0 }
			const updatedBread = await SweetBread.findByIdAndUpdate(
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

const reorderBreads = async (newOrder: TBreadOrder[]) => {
	await Promise.all(
		newOrder.map(async ({ id, position }) => {
			await SweetBread.findByIdAndUpdate(id, { $set: { position } })
		})
	)
	return 'Order Updated'
}

const insertBread = async (bread: TBread) => {
	const newBread = await SweetBread.create(bread)
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

const getBread = async (id: string) => await SweetBread.findById(id)

const updateBread = async (id: string, updates: Partial<TBread>) => {
	const updatedBread = await SweetBread.findByIdAndUpdate(id, updates, {
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
	const deletedBread = await SweetBread.findByIdAndDelete(id)
	return { id: deletedBread?.id }
}

export default {
	insertBread,
	getBreads,
	resetBreads,
	reorderBreads,
	getBread,
	updateBread,
	deleteBread,
}
