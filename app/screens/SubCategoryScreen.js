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

export default class SubCategoryScreen extends Component {
    static navigationOptions = {
        title: 'Sub Categories'
    };
    constructor(props){
        super(props)
        this.state = {
            subCatRecord: []
        }
        this.fetchSubCategoryData(this.props.navigation.state.params.catID)
        this.subcategoryHandler = this.subcategoryHandler.bind(this);
    }

    fetchSubCategoryData(catID){
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tblSubCategory WHERE categoryID=?', [catID], (tx, results) => {
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

    subcategoryHandler(subcatID){
        this.props.navigation.navigate('DiseaseCat', {subcatID})

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
                            onPress={() => this.subcategoryHandler(item.SubCatID)}
                            title={item.SubCatName}
                            key={item.SubCatID}
                        />
                    }
                    keyExtractor={item => item.SubCatName}
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