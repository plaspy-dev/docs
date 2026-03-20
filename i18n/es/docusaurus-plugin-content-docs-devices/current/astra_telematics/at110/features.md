---
slug: /astra_telematics/at110/features
id: at110-features
sidebar_label: Features
title: Astra Telematics - AT110 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS Astra Telematics AT110 y su integración con Plaspy para rastreo y gestión de flotas
keywords:
  - Astra Telematics AT110
  - características AT110
  - rastreador GPS AT110
  - rastreador Astra Telematics
  - capacidades AT110
  - compatibilidad AT110 Plaspy
  - rastreo de vehículos AT110
  - gestión de flotas AT110
  - AT110 Bluetooth de baja energía
  - AT110 CANBus
---

# Astra Telematics - Características del AT110

Esta página ofrece un resumen público de las funciones del Astra Telematics AT110 y explica cómo sus capacidades se integran con Plaspy para tareas de rastreo, monitoreo y gestión de flotas. El enfoque está en las funciones visibles para el usuario y el valor práctico para organizaciones que usan el AT110 con Plaspy, más que en detalles de protocolo a bajo nivel.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, accesorios opcionales y la forma en que el dispositivo esté instalado o configurado. Cuando sea necesario, consulte la documentación del fabricante para obtener los detalles específicos más recientes.

## Resumen de funciones

El AT110 es un rastreador vehicular compacto diseñado para labores de rastreo, gestión de flotas y telemática. Combina posicionamiento, conectividad inalámbrica, registro de datos y gestión de energía para soportar reportes continuos y escenarios de rastreo intermitente.

- Posicionamiento de alta precisión mediante receptor SiRFStar IV para obtención de fijaciones de ubicación fiables.
- Conectividad inalámbrica de corto alcance por Bluetooth Low Energy para interacciones locales y emparejamiento de accesorios.
- Comunicaciones celulares en GSM cuatribanda con GPRS y soporte para reportes TCP y UDP, permitiendo conectividad flexible con servidores.
- Batería de respaldo integrada y memoria interna para mantener la operación y almacenar posiciones durante interrupciones de conectividad.
- Modo de suspensión y gestión inteligente de energía para extender los periodos operativos entre ciclos de alimentación.
- Carcasa compacta de aluminio y opciones de antena externa o fija que facilitan la instalación y mejoran la recepción.

## Características principales del AT110

- Receptor GPS SiRFStar IV para fijaciones de posición y reportes basados en tiempo o distancia.
- Soporte para Bluetooth Low Energy (BLE) para comunicaciones locales e integración de accesorios.
- Compatibilidad con CANBus para acceder a datos avanzados del vehículo cuando esté configurado y soportado.
- GSM cuatribanda con GPRS y métodos de comunicación TCP/UDP para enviar ubicación y eventos a servidores.
- Batería de respaldo y memoria interna para buffering temporal y continuidad en operaciones offline.
- Modo de suspensión y gestión inteligente de energía para reducir el consumo cuando el dispositivo está inactivo.
- Diseño compacto tipo caja de cerillas con opciones de antena externa y carcasa de aluminio resistente.
- Opciones adicionales de conectividad, incluyendo puertos para antena fija, interfaz de identificación de conductor y un puerto serial para conexiones e integraciones con accesorios.

## Cómo se integran estas funciones con Plaspy

Usado con Plaspy, el AT110 reporta posiciones y eventos a la plataforma, donde pasan a formar parte del historial del vehículo, mapas en vivo y herramientas de reporte. Plaspy detecta automáticamente muchos protocolos de rastreadores y presenta los datos del dispositivo para monitoreo y análisis.

- Las actualizaciones de ubicación del AT110 se muestran en los mapas de Plaspy como puntos de posición en vivo y recorridos históricos.
- La memoria interna y la batería de respaldo ayudan a garantizar que los datos de posición se envíen a Plaspy una vez que se restablezca la conectividad.
- El modo de suspensión y la gestión de energía se reflejan en Plaspy como intervalos de reporte esperados o periodos offline en el estado del dispositivo.
- Las integraciones BLE y CANBus pueden aportar información adicional del vehículo o de accesorios en Plaspy cuando el dispositivo está configurado para reenviar esos datos.
- Plaspy muestra marcadores de eventos y cambios de estado enviados por el rastreador para facilitar supervisión operativa y auditoría.

## Casos de uso típicos

- Rastreo de flotas y supervisión operativa para vehículos ligeros y pesados.
- Track and trace para localización de activos y procesos de recuperación.
- Telemática vehicular donde se requiere acceso a datos CANBus y de accesorios locales para mayor visibilidad.
- Instalaciones discretas o encubiertas donde el factor de forma compacto y las antenas externas son beneficiosos.
- Uso en regiones que requieren cobertura GSM cuatribanda para conectividad celular confiable.
- Escenarios que precisan registro offline a corto plazo y cargas en búfer tras la reconexión.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware pueden habilitar o modificar ciertas funciones, como intervalos de reporte, comportamiento BLE y buffering de memoria. Verifique la versión de firmware instalada para detalles.
- Revisiones de hardware o accesorios opcionales pueden afectar la disponibilidad de puertos e interfaces, como conectores para antena fija, identificación de conductor o el puerto serial.
- Variantes celulares regionales y requisitos regulatorios locales pueden influir en el comportamiento de red y deben ser verificados para su área de despliegue.
- Los detalles de instalación, el cableado y las fuentes de alimentación influyen en el modo de suspensión, la gestión energética y el comportamiento de la batería de respaldo.
- La configuración y provisión del fabricante determinan qué señales CANBus o accesorios BLE son accesibles y reenviadas al servidor.

## Por qué usar Plaspy con estas funciones

Plaspy ofrece una plataforma unificada para recolectar y presentar los datos del AT110, de modo que las organizaciones puedan convertir los reportes brutos del dispositivo en información operativa útil. Al combinar las capacidades del hardware del rastreador con la visibilidad de Plaspy, los equipos pueden monitorear ubicaciones, revisar historiales e integrar eventos del dispositivo en los flujos de trabajo de la flota sin tener que gestionar el manejo de protocolos a bajo nivel.

Para obtener más información sobre Plaspy y cómo puede trabajar con el Astra Telematics AT110, visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y las especificaciones del fabricante pueden cambiar con el tiempo, por lo que conviene verificar la información específica más reciente en el sitio del fabricante https://astratelematics.com/.
