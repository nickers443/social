import React, { ReactNode, useEffect, useState } from 'react'
import styles from './dropdown.css'

interface IdropdownProps {
  button: ReactNode
  children: ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({
  button,
  children,
  isOpen,
  onClose = NOOP,
  onOpen = NOOP,
}: IdropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])

  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
