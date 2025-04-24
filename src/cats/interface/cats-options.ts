export interface CatOptions {
  onSetAutoRefresh: React.Dispatch<React.SetStateAction<boolean>>
  onSetEnabled: React.Dispatch<React.SetStateAction<boolean>>
  enable: boolean
  autoRefresh: boolean
}
