import React, { useState } from 'react'
import { ScrollView,View, Text, ImageBackground, Image, TouchableOpacity, } from 'react-native'
import styles from './styles'
import { StyleSheet } from 'react-native'
import { faCog, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'
import Menu from "../../Menu/index.js"
const CartItems = () => {
  const [locked, setlocked] = useState(false)
  const clickLock = () => {
    if (locked) {
      setlocked(false)
    } else
      setlocked(true)
  }
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={require("../../assets/background.png")} style={styles.backgroundImage} />
      {/*Headee*/}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCog} size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NisargMobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {/*Mileage*/}
      <View style={styles.batterySection}>
        <Image source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 Miles</Text>
      </View>
      {/* Status*/}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
      {/* Control Icons*/}
      <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <FontAwesomeIcon icon={faFan} size={24} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.controlsButton}>
            <FontAwesomeIcon icon={faKey} size={24} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          OnPress={() => clickLock()}>
          <View style={styles.controlsButton} >
            <FontAwesomeIcon icon={locked ? faLock : faUnlockAlt} size={24} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
      {/*Menu*/}
      <Menu />
      </ScrollView>
    </View>
  )
}
export default CartItems;