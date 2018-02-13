import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button,
    FlatList} from 'react-native';
import { List, ListItem } from "react-native-elements";

//Import Row in this for suubcate, sub sub cate, sub sub sub categ and left will be dis descp
let SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name : "test.db", createFromLocation : "~IDB_DB_New.sqlite"},this.openCB, this.errorCB);

export default class DiseaseDescScreen extends Component {
    static navigationOptions = {
        title: 'Disease Long Description  '
    };
    constructor(props){
        super(props)

        this.state = {
            subCatRecord: ''
        }
        console.log("Disease details DiseaseID", this.props.navigation.state.params.code)

        this.fetchSubCategoryData(this.props.navigation.state.params.code)
    }

    fetchSubCategoryData(code){
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tableDescription WHERE code=?', [code], (tx, results) => {
    console.log(results.rows,"results.rows.item[0]", results.rows.item)
                               this.setState({subCatRecord: results.rows.item[0].longDesc});

            },(error)=>{
                alert("error:"+JSON.stringify(error))
            });
        });
    }


    render(){
        return(
            <View style={styles.container}>
                {this.state.longDesc}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})