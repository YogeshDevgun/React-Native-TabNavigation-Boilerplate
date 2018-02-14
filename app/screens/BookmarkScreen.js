import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';
import DiseaseShortDescScreen from "./DiseaseShortDescScreen";

let SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name : "tests.db", createFromLocation : "~IDB_DB.sqlite"},this.openCB, this.errorCB);

export default class BookmarkScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            code: []
        }
        this.fetchSubCategoryData()

    }

    componentWillMount(){
        this.fetchSubCategoryData()

    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'BOOKMARKS',
        }
    };

    fetchSubCategoryData(){
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Bookmark', [], (tx, results) => {
                var len = results.rows.item.length;
                let row = [];
                for (let i = 0; i < len; i++) {
                    row.push(results.rows.item(i))
                }
                this.setState({code: row});

            },(error)=>{
                alert("error:"+JSON.stringify(error))
            });
        });
    }

    render(){
        let BookmarkOptions
        if(this.state.code.length > 0){
            return <DiseaseShortDescScreen DiseaseID={this.state.code[0].code}/>
        } else {
            return (
                <Text>Nothing Bookmarked</Text>
            )
        }
        return(
            {BookmarkOptions}

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})