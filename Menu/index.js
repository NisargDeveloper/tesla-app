import React from 'react'
import { View } from 'react-native'
import { Text, ImageBackground, Image, TouchableOpacity, } from 'react-native'
import styles from './styles'
import { faMusic, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import items from "./items"
function Menu() {
  return (
    <View style={styles.menuItems}>
      {items.map(item => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon icon={item.icon} size={24} style={styles.icon} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style= {styles.subTitle}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={24} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>
      ))}



    </View>
  )
}

export default Menu
