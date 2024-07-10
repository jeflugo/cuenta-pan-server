export type TBread = {
	name: string
	weight: number
	left: number
	make: number
	position: number
}

export type TSavedBreads = {
	date: string
	breads: TBread[]
}

export type TReset = {
	value: string
}

export type TBreadOrder = {
	id: string
	position: number
}
