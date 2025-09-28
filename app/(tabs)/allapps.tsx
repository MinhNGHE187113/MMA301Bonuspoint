import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { styles } from "./allapps.styles";

const appsWork = [
  {
    id: "1",
    title: "Approve Now",
    desc: "Notify managers of pending requests and allow managers to approve/reject requests from internal tools",
    icon: require("../../assets/images/9.png"),
  },
  {
    id: "2",
    title: "Reward",
    desc: "Send colleagues a thank you note or reward Gold for exceptional contribution",
    icon: require("../../assets/images/8.png"),
  },
  {
    id: "3",
    title: "Discipline",
    desc: "Send a discipline warning to subordinates for violation of codes of conduct",
    icon: require("../../assets/images/7.png"),
  },
  {
    id: "4",
    title: "Learning",
    desc: "View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course",
    icon: require("../../assets/images/6.png"),
  },
];

const appsBenefits = [
  {
    id: "5",
    title: "FPT Care",
    desc: "FPT Care",
    icon: require("../../assets/images/17.png"),
  },
  {
    id: "6",
    title: "Events",
    desc: "Register, check-in, check-out, send feedback to company events and programs",
    icon: require("../../assets/images/16.png"),
  },
  {
    id: "7",
    title: "Survey",
    desc: "Conduct and collect responses for company-wide or department-wide surveys",
    icon: require("../../assets/images/15.png"),
  },
  {
    id: "8",
    title: "FPT Dating",
    desc: "Dating feature.",
    icon: require("../../assets/images/14.png"),
  },
  {
    id: "9",
    title: "Payslip",
    desc: "Payslip",
    icon: require("../../assets/images/13.png"),
  },
  {
    id: "10",
    title: "Birthday",
    desc: "Your birthday is a special moment. We're very happy to send the best wishes for you.",
    icon: require("../../assets/images/18.png"),
  },
];

const appsNews = [
  {
    id: "11",
    title: "News",
    desc: "A collection of latest news and notable events around the company",
    icon: require("../../assets/images/19.png"),
  },
  {
    id: "12",
    title: "Star Ave",
    desc: "Recognise notable achievements within a business unit or within FPT",
    icon: require("../../assets/images/12.png"),
  },
];

const appsWiki = [
  {
    id: "13",
    title: "Employee Info",
    desc: "Basic, non-confidential employee information (name, age, department, etc.)",
    icon: require("../../assets/images/11.png"),
  },
];

const appsGame = [
  {
    id: "14",
    title: "Game",
    desc: "Enjoy fun and engaging games with your colleagues",
    icon: require("../../assets/images/10].png"),
  },
];

export default function AllApps() {
  const [search, setSearch] = useState("");

  const allApps = [
    ...appsWork,
    ...appsBenefits,
    ...appsNews,
    ...appsWiki,
    ...appsGame,
  ];

  const filteredApps = allApps.filter(
    (app) =>
      app.title.toLowerCase().includes(search.toLowerCase()) ||
      app.desc.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >

      <Text style={styles.header}>    </Text>
      {/* Thanh search */}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
        {/* Ô tìm kiếm có nền xám */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#666" style={{ marginRight: 6 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Type feature's name"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Icon 4 ô vuông nằm ngoài nền xám */}
        <Ionicons
          name="grid-outline"
          size={22}
          color="#666"
          style={{ marginLeft: 10 }}
        />
      </View>



      <Text style={styles.header}>All Apps</Text>

      {/* Section WORK */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>WORK</Text>
      </View>
      <FlatList
        data={filteredApps.filter((item) => appsWork.includes(item))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />

      {/* Section UTILITIES */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>UTILITIES</Text>
      </View>
      <FlatList
        data={filteredApps.filter((item) => appsBenefits.includes(item))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />

      {/* Section NEWS */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>NEWS</Text>
      </View>
      <FlatList
        data={filteredApps.filter((item) => appsNews.includes(item))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />

      {/* Section WIKI */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>WIKI</Text>
      </View>
      <FlatList
        data={filteredApps.filter((item) => appsWiki.includes(item))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />

      {/* Section GAME */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>GAME</Text>
      </View>
      <FlatList
        data={filteredApps.filter((item) => appsGame.includes(item))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}
