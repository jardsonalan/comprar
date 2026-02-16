import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'
import { FilterStatus } from '@/types/FilterStatus'
import { styles } from './styles'
import { Item } from '@/components/Item'

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo}/>
      
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar?' />
        <Button title='Adicionar' />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map(status => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {
            Array.from({ length: 100 }).map((value, index) =>
              <Item
                key={index}
                data={{ status: FilterStatus.DONE, description: 'Leite' }}
                onStatus={() => console.log('Status alterado')}
                onRemove={() => console.log('Remover')}
              />
            )
          }
        </ScrollView>

        <Item
          data={{ status: FilterStatus.DONE, description: 'Leite' }}
          onRemove={() => console.log('Remover')}
          onStatus={() => console.log('Status alterado')} />
      </View>
    </View>
  )
}