var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFD',
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: 'center',
    marginRight: 15,
    marginLeft: 15
  },
  postDetailsContainer:{
    flex: 1,
  },
  postTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
    color: '#D6573D'
  },
  postDetailsLine: {
    fontSize: 12,
    marginRight: 10,
    color: 'gray',
  },
  postChildrenDetails: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
    color: 'gray',
    textAlign: 'right'
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  }
})

module.exports = styles;
