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

export default class DiseaseCategoryScreen extends Component {
    static navigationOptions = {
        title: 'Disease Categories'
    };
    constructor(props){
        super(props)

        this.state = {
            subCatRecord: []
        }
        this.fetchSubCategoryData(this.props.navigation.state.params.subcatID)
        this.diseaseCatHandler = this.diseaseCatHandler.bind(this);


    }

    fetchSubCategoryData(subcatID){
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tblDisease WHERE SubCatID=?', [subcatID], (tx, results) => {
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

    diseaseCatHandler(DiseaseID){
        this.props.navigation.navigate('DiseaseShortDesc', {DiseaseID})

    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    style={styles.container}
                    data={this.state.subCatRecord}
                    renderItem={({item}) =>

                        <ListItem
                            roundAvatar
                            onPress={() => this.diseaseCatHandler(item.DiseaseID)}
                            title={item.DiseaseName}
                            key={item.DiseaseID}
                        />
                    }
                    keyExtractor={item => item.DiseaseID}
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