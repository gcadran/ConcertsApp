
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';

export default function FormulaireScreen() {
  const router = useRouter();
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');
  const [lieuNaissance, setLieuNaissance] = useState('');



  const handleValider = () => {
    if (!nom.trim() || !prenom.trim() || !age.trim() || !lieuNaissance.trim()) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    const ageNombre = Number(age);

    if (!Number.isInteger(ageNombre) || ageNombre < 0 || ageNombre > 150) {
      Alert.alert('Erreur', 'Veuillez saisir un âge valide.');
      return;
    }


    router.push({
      pathname: '/concert',
      params: {
        prenom: prenom,
        nom: nom,
      },
    });

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titre}>Formulaire utilisateur</Text>

      <Text style={styles.label}>Nom</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom"
        value={nom.toLowerCase()}
        onChangeText={setNom}
      />

      <Text style={styles.label}>Prénom</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre prénom"
        value={prenom}
        onChangeText={setPrenom}
      />

      <Text style={styles.label}>Âge</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre âge"
        value={age}
        onChangeText={setAge}
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Lieu de naissance</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre lieu de naissance"
        value={lieuNaissance}
        onChangeText={setLieuNaissance}
      />

      <View style={styles.bouton}>
        <Button title="Valider" onPress={handleValider} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titre: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 18,
    backgroundColor: '#ffffff',
  },
  bouton: {
    marginTop: 8,
  },
});
