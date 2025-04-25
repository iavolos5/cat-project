import CatsButton from '@/cats/catsGetButton/catsGetButton'
import CatsOptions from '@/cats/catsOptions/catsOptions'
import { useEffect, useState } from 'react'
import styles from '@/cats/cats.module.scss'
import { fetchCats } from '@/api/cats/apiCats'

const Cats = () => {
  const [isEnabled, setEnabled] = useState(false)
  const [autoRefresh, setAutoRefresh] = useState(false)
  const [src, setSrc] = useState('')

  const handleEnable = () => {
    setEnabled((isEnabled) => !isEnabled)
  }

  const handleAutoRefresh = () => {
    setAutoRefresh((autoRefresh) => !autoRefresh)
  }

  const fetchCatsData = async () => {
    const url = await fetchCats()
    setSrc(url ?? '')
  }

  useEffect(() => {
    if (!autoRefresh) return
    const interval = setInterval(() => {
      fetchCatsData()
    }, 5000)
    return () => clearInterval(interval)
  }, [autoRefresh])

  console.log(src)

  return (
    <div className={styles.cats}>
      <CatsOptions
        isEnabled={isEnabled}
        autoRefresh={autoRefresh}
        onSetEnabled={handleEnable}
        onSetAutoRefresh={handleAutoRefresh}
      ></CatsOptions>
      <CatsButton fetchCatsData={fetchCatsData} isEnabled={isEnabled} />
      <img src={src}></img>
    </div>
  )
}

export default Cats
