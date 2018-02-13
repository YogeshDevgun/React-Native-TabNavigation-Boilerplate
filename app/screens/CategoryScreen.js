import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Button,
    FlatList,
    ActivityIndicator
} from 'react-native';
import Row from '../components/CategoryList Components/Row';
import Header from "../components/Common/SearchInput";
import Footer from "../components/CategoryList Components/Footer";
import SectionHeader from "../components/CategoryList Components/SectionHeader";

let SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name : "test.db", createFromLocation : "~IDB_DB_New.sqlite"},this.openCB, this.errorCB);

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);


        this.state = {
            records : []
        }

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tblCategory', [], (tx, results) => {
                var len = results.rows.length;
                let row = [];
                for (let i = 0; i < len; i++) {
                    row.push(results.rows.item(i))
                    }
                this.setState({records: row});

            },(error)=>{
                    alert("error:"+JSON.stringify(error))
                });
            });

        this.categoryHandler = this.categoryHandler.bind(this);

    }

    errorCB(err) {
        console.log("SQL Error: " + err);
    }

    successCB() {
        alert("Sucess")
        console.log("SQL executed fine");
    }

    openCB() {
        console.log("Database OPENED");
        return true
    }

    static navigationOptions = {
        title: 'CATEGORY',
    };

    categoryHandler(catID){
        console.log("catID", catID)
        this.props.navigation.navigate('SubCat', {catID})
    }

    render() {
        return(
           <View style={styles.container}>
        {/*       <ListView
                   style={styles.container}
                   dataSource={this.state.records}
                   renderRow={(data) => <Row {...data} subscreen={() => this.props.navigation.navigate('SubCat')}/>}
                   renderSeparator={(rowId) => <View key={rowId} style={styles.separator} />}
                   renderHeader={() => <Header />}
                   renderFooter={() => <Footer />}
                   renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
               />*/}
               <FlatList
                   style={styles.container}
                   data={this.state.records}
                   renderItem={({ item }) => <Row item={item} subscreen={(catID) => this.categoryHandler(catID)}/>}
                   keyExtractor={item => item.cat_name}
               />
           </View>
       )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});