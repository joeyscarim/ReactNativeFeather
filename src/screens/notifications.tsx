import * as React from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';
import tw from 'twrnc';
import {addDays, formatRelative} from 'date-fns';
import Modal from 'react-native-modal';

// icons
import Circle from '../assets/icons/circle.svg';
import ChevronRight from '../assets/icons/chevron-right.svg';

export function NotificationsPage() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <ScrollView style={tw`p-5 bg-gray-100`}>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver
        hideModalContentWhileAnimating>
        <View style={tw`justify-center items-center bg-white rounded-lg p-3`}>
          <Text>New Notification</Text>
          <Text>New Notification</Text>

          <Text>New Notification</Text>
        </View>
      </Modal>

      <Pressable
        style={tw`flex flex-row items-center bg-white shadow-md p-3 rounded-md mb-3`}
        onPress={() => setModalVisible(true)}>
        <Circle width={20} height={20} fill={'red'} />
        <View style={tw`ml-3 flex-1`}>
          <Text style={tw`font-semibold text-lg`}>New Notification</Text>
          <Text style={tw`text-gray-500`}>
            {formatRelative(addDays(new Date(), -1), new Date())}
          </Text>
        </View>
        <ChevronRight width={10} height={10} fill={'gray'} />
      </Pressable>

      <View
        style={tw`flex flex-row items-center bg-white shadow-md p-3 rounded-md mb-3`}>
        <Circle width={20} height={20} fill={'red'} />
        <View style={tw`ml-3 flex-1`}>
          <Text style={tw`font-semibold text-lg`}>New Notification</Text>
          <Text style={tw`text-gray-500`}>Today's Date</Text>
        </View>
        <ChevronRight width={10} height={10} fill={'gray'} />
      </View>
    </ScrollView>
  );
}
