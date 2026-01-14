export type ProductType = {
    id: number,
    name: string, 
    price: number,
    discount?: number,
    starCount: number,
    reviewCount?: number,
    img?: string,
    baseBgColor?: string
}