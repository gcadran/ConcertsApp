import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import concerts from './concert_v2.json';

type Concert = {
  group: string;
  date: string;
  nationality: string;
  location: string;
  price: number;
  ticketsLeft: number;
  image: string;
  favorite: boolean;
};

function Item({ item }: { item: Concert }) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.infos}>
        <Text style={styles.group}>{item.group}</Text>
        <Text>Date : {item.date}</Text>
        <Text>Nationalité : {item.nationality}</Text>
        <Text>Lieu : {item.location || 'Non renseigné'}</Text>
        <Text>Prix : {item.price} €</Text>
        <Text>
          Places restantes : {item.ticketsLeft}
        </Text>
        <Text>
          Favori : {item.favorite ? 'Oui' : 'Non'}
        </Text>
      </View>
    </View>
  );
}

export default function Screen3() {
  const { prenom, nom } = useLocalSearchParams<{
    prenom: string;
    nom: string;
  }>();

    // Stocke le texte saisi dans la recherche
      const [recherche, setRecherche] = useState('');

      // Filtre les concerts selon le nom du groupe
      const concertsFiltres = (concerts as Concert[]).filter((concert) =>
        concert.group.toLowerCase().includes(recherche.toLowerCase())
      );

  return (
    <View style={styles.container}>
      <Text style={styles.bonjour}>
        Bonjour {prenom} {nom}
      </Text>

       <TextInput
              style={styles.recherche}
              placeholder="Rechercher un groupe..."
              value={recherche}
              onChangeText={setRecherche}
              autoCapitalize="none"
       />

       <FlatList
           data={concertsFiltres}
           keyExtractor={(item, index) => `${item.group}-${index}`}
           renderItem={({ item }) => <Item item={item} />}
           ListEmptyComponent={
               <Text>Aucun groupe trouvé.</Text>
           }
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },
  bonjour: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    gap: 12,
  },
  image: {
    width: 100,
    height: 130,
    borderRadius: 6,
  },
  infos: {
    flex: 1,
    gap: 5,
  },
  group: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
recherche: {
  height: 45,
  borderWidth: 1,
  borderColor: '#cccccc',
  borderRadius: 8,
  paddingHorizontal: 12,
  marginBottom: 16,
  fontSize: 16,
},
});
