var React = require('react-native');
var styles = require('./styles.js');

var Web = require('../../Web');

var Icon = require('FAKIconImage');
var Hypertext = require('react-native-hypertext');
var parseLinks = require('../../../Utils/parse.js')

var {
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} = React;

var CommentCell = React.createClass({
  getInitialState: function() {
    return {
      name: this.props.comment.user.name,
      comment: this.props.comment.body,
      image: this.props.comment.user.image_url['48px']
    }
  },

  componentDidMount: function() {
    if (this.props.comment.child_comments_count === 1) {
      this.setState({
        numReplies: '1 Reply'
      })
    } else {
      this.setState({
        numReplies: this.props.comment.child_comments_count + ' Replies'
      })
    }

    this.setState({
      isChildComment: this.props.isChildComment
    })
  },

  render: function() {
    if (!this.state.isChildComment) {
      return (
        this.renderParentComment()
        )
    }
    return (
      this.renderChildComment()
      )
  },

  renderParentComment: function() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.image}}
               style={styles.image} />
        <View style={styles.postDetailsContainer}>
          <Text style={styles.postTitle}>
            {this.state.name}
          </Text>
          <Text style={styles.postDetailsLine}>
            <Hypertext
              onLinkClick={this.renderWeb()}>{parseLinks(this.state.comment)}</Hypertext>
          </Text>
          <TouchableWithoutFeedback onPress={this.props.onSelect}>
            <View style={styles.container}>
              <Text style={styles.postChildrenDetails}>
                {this.state.numReplies}
              </Text>
              <Icon
                name='fontawesome|comments-o'
                size={12}
                color='#D6573D'
                style={styles.icon}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.separator} />
        </View>
      </View>
      )
  },

  renderChildComment: function() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.image}}
               style={styles.image} />
        <View style={styles.postDetailsContainer}>
          <Text style={styles.postTitle}>
            {this.state.name}
          </Text>
          <Text style={styles.childPostDetailsLine}>
            {this.state.comment}
          </Text>
          <View style={styles.separator} />
        </View>
      </View>
    )
  },

  renderWeb: function() {
    console.log(arguments);
  }
})

module.exports = CommentCell;
