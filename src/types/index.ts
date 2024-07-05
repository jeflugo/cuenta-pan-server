export type TBread = {
	name: string
	weight: number
	left: number
	make: number
}

export type TSavedBreads = {
	date: string
	breads: TBread[]
}
