import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {bgImage, ILLogo} from '../../assets';
import {Button} from '../../component';
import {colors, fonts} from '../../utils';

const Started = () => {
  return (
    <ImageBackground source={bgImage} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Aplikasi Absensi Karyawan berbasis Online
        </Text>
      </View>
      <View>
        <Button title="Masuk" />
        <View style={{height: 16}} />
        <Button type="secondary" title="Daftar" />
      </View>
    </ImageBackground>
  );
};

export default Started;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: colors.secondary,
    marginTop: 91,
    fontFamily: fonts.primary[400],
  },
});
