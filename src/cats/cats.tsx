import CatsButton from '@/cats/catsGetButton/catsGetButton'
import CatsOptions from '@/cats/catsOptions/catsOptions'
import { useEffect, useState } from 'react'
import styles from '@/cats/cats.module.scss'
import { fetchCatsUrl } from '@/api/cats/apiCats'

const Cats = () => {
  const [isEnabled, setEnabled] = useState(false)
  const [isAutoRefreshed, setAutoRefreshed] = useState(false)
  const [src, setSrc] = useState('')

  const handleEnable = () => {
    setEnabled((isEnabled) => !isEnabled)
  }

  const handleAutoRefresh = () => {
    setAutoRefreshed((autoRefresh) => !autoRefresh)
  }

  const fetchCatsData = async () => {
    const url = await fetchCatsUrl()
    setSrc(url ?? '')
  }

  useEffect(() => {
    if (!isAutoRefreshed) {
      return
    }
    const interval = setInterval(() => {
      fetchCatsData()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoRefreshed])

  console.log(src)

  return (
    <div className={styles.cats}>
      <CatsOptions
        isEnabled={isEnabled}
        isAutoRefreshed={isAutoRefreshed}
        onSetEnabled={handleEnable}
        onSetAutoRefresh={handleAutoRefresh}
      ></CatsOptions>
      <CatsButton fetchCatsData={fetchCatsData} isEnabled={isEnabled} />
      <img src={src}></img>
    </div>
  )
}

export default Cats
