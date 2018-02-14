import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button,
    FlatList} from 'react-native';
import { List, ListItem } from "react-native-elements";

//Import Row in this for suubcate, sub sub cate, sub sub sub categ and left will be dis descp
let SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name : "test.db", createFromLocation : "~IDB_DB.sqlite"},this.openCB, this.errorCB);

export default class DiseaseShortDescScreen extends Component {
    static navigationOptions = {
        title: 'Disease Short Description  '
    };
    constructor(props){
        super(props)

        this.state = {
            DiseaseID: this.props.DiseaseID || this.props.navigation.state.params.DiseaseID ,
            subCatRecord: []
        }

        this.fetchSubCategoryData(this.props.DiseaseID || this.props.navigation.state.params.DiseaseID)
        this.diseaseDescHandler = this.diseaseDescHandler.bind(this);
    }

    fetchSubCategoryData(DiseaseID){
       if(this.props.DiseaseID){
           db.transaction((tx) => {
               tx.executeSql('SELECT * FROM tableDescription WHERE code=?', [DiseaseID], (tx, results) => {
                   var len = results.rows.length;
                   let row = [];
                   for (let i = 0; i < len; i++) {
                       row.push(results.rows.item(i))
                   }
                   this.setState({subCatRecord: row});

               },(error)=>{
                   alert("error:"+JSON.stringify(error))
               });
           });
       } else{
           db.transaction((tx) => {
               tx.executeSql('SELECT * FROM tableDescription WHERE DescID=?', [DiseaseID], (tx, results) => {
                   var len = results.rows.length;
                   let row = [];
                   for (let i = 0; i < len; i++) {
                       row.push(results.rows.item(i))
                   }
                   this.setState({subCatRecord: row});

               },(error)=>{
                   alert("error:"+JSON.stringify(error))
               });
           });
       }
    }

    diseaseDescHandler(code){
        this.props.navigation.navigate('DiseaseDesc', {code})

    }
    render(){
        console.log("RECORD", this.state.subCatRecord)
        return(
            <View style={styles.container}>
                <FlatList
                    style={styles.container}
                    data={this.state.subCatRecord}
                    renderItem={({item}) =>
                        <View>
                            <ListItem
                                onPress={() => this.diseaseDescHandler(item.code)}
                                title={item.shortDesc}
                                key={item.code}
                            />

                        </View>
                    }
                    keyExtractor={item => item.code}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})