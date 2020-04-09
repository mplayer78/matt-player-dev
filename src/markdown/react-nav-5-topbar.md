---
path: "/blog/navigating-from-the-topbar-with-react-navigation-5"
category: "blog"
date: "2019-05-04"
title: "Navigating from the top-bar in Expo using React Navigation 5"
imgSrc: "../images/nimbot-3000.png"
---

**Recently I had an issue where I was looking to create a link from the top bar of a React Native app built in Expo with React Navigation 5.**

Since version 4 there have been some changes to how react navigation works; it is now component based with screens being passed option attributes as props. This does mean that it can be more difficult to reason about how to create a navigation link in the Top Bar as the top bar is not treated as a normal component but is instead an option passed to a Stack Navigator Screen.

    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
      }}
    >
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: "Main Screen",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Different Screen"
                iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                onPress={() => {
                  // How do I get access to props to navigate when I am using an
                  // existing component??
                }}
              />
            </HeaderButtons>
          );
        }}
      />
      //...
    </Stack.Navigator>

In this case, although the logic can be a little difficult to get your head around, the solution is not. As well as taking an object the options attribute can also take an arrow function and in the paramenters passed to the header button "item" you get access to all of the props you would have if it were a normal component. This will be easier to demonstrate and looks like this...

<Stack.Navigator
initialRouteName="MainScreen"
screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
        }} >
<Stack.Screen
name="MainScreen"
component={MainScreen}
options={(optionProps) => {
return {
title: "Main Screen",
headerRight: () => {
return (
<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
<Item
title="Different Screen"
iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
onPress={() => {
optionProps.navigation.navigate("DifferentScreen");
}}
/>
</HeaderButtons>
);
},
};
}}
/>
// ...
</Stack.Navigator>
