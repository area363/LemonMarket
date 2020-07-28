import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  //Common Style
  appTitle: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center'
  },
  headerBackgroundColor: {
    backgroundColor: '#f7db35',
  },
  // Tabs
  tabBarUnderLine: {
    height: 5,
  },
  badge: {
    backgroundColor: '#ECE5DD',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    height: 24,
  },
  badgeText: {
    color: 'black',
    fontSize: 12,
  },
  tabsText: { color: 'black', fontSize: 14, fontWeight: 'bold' },
  //Chat Screen
  badgeChats: {
    backgroundColor: '#f7db35',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    height: 24,
    marginTop: 4,
  },
  badgeTextChats: {
    color: 'black',
    fontSize: 12,
  },
  fabColor: {
    backgroundColor: '#f7db35',
  },
  // Status Screen
  listItemDivider: { marginTop: 10, height: 10 },
  addStatusIcon: {
    color: 'black',
    alignSelf: 'flex-end',
    position: 'absolute',
    marginLeft: 40,
    bottom: -5,
    width: 20,
    fontSize: 20,
  },
  // Call Screen
  callIcon: {
    marginRight: 10,
    fontSize: 18,
  },
});