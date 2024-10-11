export interface IProfile {
    id: number
    name: string
    surnameName: string
    nickname: string
    phone: string
    subscriberCount: number
    likeCount: number
    workCount: number
    discription: string
    avatarPic: string
    backgroundPic: string
    donateCount: number
    benefits: number
    preferredCategory: number
    isVerificate: boolean
    products: Product[]
  }
  
  export interface Product {
    id: string
    name: string
    description: string
    photo: string
    countLikes: number
  }

  export interface WorkInProfile {
    id: string
    name: string
    description: string
    photo: string
    count: number
    countLikes: number
    type: number
    categoryId: number
    userId: number
  }
  
  export interface AllWorks {
    width: number
    height: number
    canvasType: number
    id: string
    name: string
    description: string
    photo: string
    count: number
    countLikes: number
    type: number
    categoryId: number
    userId: number
  }
  