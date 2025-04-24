export interface CatsButton {
  fetchCatsData: () => Promise<void>
  isEnabled: boolean
}
