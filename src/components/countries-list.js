import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../containers/countries-layout';
import Empty from '../containers/empty';
import Separator from '../containers/vertical-separator';
import Country from '../components/countries';
import SeparatorH from '../components/horizontal-separator';

class CategoryList extends Component {
   // keyExtractor = (item) => item.id.toString()
    renderEmpty = () => <Empty text="No hay resultados" />
    itemSeparator = () => <SeparatorH />
    renderItem = ({item}) => {
        return (
            <Country {...item} />
        )
    }
    render() {
        return (
            <Layout title={this.props.title}>
                <FlatList 
                    horizontal
                   // keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent = {this.renderEmpty}
                    ItemSeparatorComponent = {this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default CategoryList;