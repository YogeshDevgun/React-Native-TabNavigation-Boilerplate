import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button,
    FlatList} from 'react-native';
let SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name : "tests.db", createFromLocation : "~IDB_DB.sqlite"},this.openCB, this.errorCB);

let self;
export default class DiseaseDescScreen extends Component {

    constructor(props){
        super(props)

        this.state = {
            subCatRecord: []
        }
        this.fetchSubCategoryData(this.props.navigation.state.params.code)

        this.bookmarkHandler =  this.bookmarkHandler.bind(this)
    }


    static navigationOptions = ({navigation}) => {
        const { state } = navigation
        const { button } = "params" in state && state.params


        return{
            title: 'Disease Long Description',
            headerRight: <Button
                onPress={() => self.bookmarkHandler()}
                title={this.props.navigation.state.params.button}
                color="gray"
            />
    };

    componentWillMount() {

        const signOutButton = (
            

        this.props.navigation.setParams({ signOutButton: () => signOutButton })
    }
}

    bookmarkHandler(){
        alert('This is a button!')
        this.addToBookmark(this.props.navigation.state.params.code)
    }


    addToBookmark(code){
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO Bookmark (code) values (?)', [code], (tx, results) => {
                console.log("Inserting data", results)
            },(error)=>{
                alert("error:"+JSON.stringify(error))
            });
        });
    }

    fetchSubCategoryData(code){
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tableDescription WHERE code=?', [code], (tx, results) => {
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


    render(){
        self = this;
        let DiseaseDescription = this.state.subCatRecord.map(
            (item) => {
                return (

                    <Text key={item.code}> {item.longDesc}</Text>

                )
            }
        )
        return(
            <View style={styles.container}>
                {DiseaseDescription}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})