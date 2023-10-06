import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (

    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "Home",
          title: "Bem-vindo",
        }}
      />

      <Drawer.Screen
        name="telaA" 
        options={{
          drawerLabel: "Agendamento",
          title: "Agendamento",
        }}
      />

      <Drawer.Screen
        name="telaB" 
        options={{
          drawerLabel: "Pacientes",
          title: "Pacientes",
        }}
      />


    </Drawer>
  );
}