<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Prodcuto</ion-title>
        </ion-toolbar>
      </ion-header>  
      <ion-content>       
        <div id="login-container">  
          <div id="login-form">
            <InputComponent id="id" name="id" type="hidden"/>
            <InputComponent id="codigo" name="codigo" label="Código: " />
            <InputComponent id="nombre" name="nombre" label="Nombre: " />
            <InputComponent id="marca" name="marca" label="Marca: " />
            <InputComponent type="number" id="precio" name="precio" label="Precio: " />
            <InputComponent type="number" id="stock" name="stock" label="Stock: " disabled="disabled" />
          </div>
  
          <div> 
             <!--Traer el componente de los botones de la crud  -->
            <CrudButtonComponent @createRecord="createRecord"  />
          </div>         
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';
  import CrudButtonComponent from '@/components/CrudButtonComponent.vue';
  import * as IonIcons from 'ionicons/icons';
import axios from 'axios';
import Swal from 'sweetalert2';



const baseURL = 'http://localhost:9004/api/producto';


async function createRecord() {
  const data = {
    codigo: codigo.value,
    nombre: nombre.value,
    precio: precio.value,
    stock: stock.value,
    marca: marca.value
  };
  try {
    const response = await axios.post(baseURL, data);
    console.log('Registro creado exitosamente:', response.data);
  } catch (error) {
    console.error('Error al crear el registro:', error);
  }
}

  </script>
  
  <style scoped src="../theme/container.css"></style>

