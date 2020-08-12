import React from 'react'
import { View } from 'react-native'

import Primeiro from './components/Primeiro'
import {Comp1, Comp2, Comp3} from './components/Mult'

export default () => (
    <View>
        <Comp1/>
        <Comp2/>
        <Comp3/>
        <Primeiro />
    </View>
)