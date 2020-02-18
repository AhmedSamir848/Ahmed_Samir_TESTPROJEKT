
/* Libraries That Needed */
import React from 'react';
import {SafeAreaView} from 'react-native';

//Custom Components 
import { Tab, Tabs, ScrollableTab } from 'native-base';

//Pre Definded Component Uses For Search
import HeaderSearch from '../../../components/UI/HeaderSearch';

//Top Bar Screens
import { ExploreCity, NearMe, Popular, ViewMap } from '../../index';

import styles from './styles';
/*********************************/

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <HeaderSearch
                placeholder="Type location"
            />
            <Tabs
                locked
                renderTabBar={() => <ScrollableTab style={styles.tabsContainerStyle} />}
            >
                <Tab
                    heading="Near Me"
                    tabStyle={styles.tabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    activeTabStyle={styles.tabStyle}>
                    <NearMe navigation={navigation} />
                </Tab>
                <Tab
                    heading="Explore City"
                    tabStyle={styles.tabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    activeTabStyle={styles.tabStyle}
                >
                    <ExploreCity />
                </Tab>
                <Tab
                    heading="Popular"
                    tabStyle={styles.tabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    activeTabStyle={styles.tabStyle}>
                    <Popular />
                </Tab>
                <Tab
                    heading="View Map"
                    tabStyle={styles.tabStyle}
                    activeTextStyle={styles.activeTextStyle}
                    activeTabStyle={styles.tabStyle}>
                    <ViewMap />
                </Tab>
            </Tabs>
        </SafeAreaView>
    );
};

export default Home;
