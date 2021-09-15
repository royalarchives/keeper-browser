import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const ArchiveList = props => {
    const [isLoading, setLoading] = useState(false)
    const [setLibrary] = useState([])   
    
    getLibrary = () => {
        return fetch('/library.json').then((response) => response.json()).then((json) => {
            setLibrary(json)
        })
        .catch(error => console.error(error))
    } 
    
    useEffect(() => {
        console.log(id)
        setLoading(true)
        getLibrary()
    }, []);
    
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? <Text>Loading...</Text> : (
                <View>
                    <Text>{JSON.stringify(library)}</Text>
                </View>
            )}
        </View>);
};

ArchiveList.navigationOptions = {
    title: 'Browse archives'
};

export default ArchiveList;