export interface Project {
  name: string
  description: string[]
  image: string
  small: string
  link: string
  screenshots: ScreenShot[]
}

export interface ScreenShot {
  link: string
  proportion: '1' | '2' | '3'
}