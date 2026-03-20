---
slug: /supermate/d26_t/protocol
id: d26_t-protocol
sidebar_label: Protocol
title: Supermate - D26-T Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para compatibilidad del Supermate D26 T con Plaspy y guía de integración
keywords:
  - Protocolo Supermate D26-T
  - Protocolo GPS Supermate D26-T
  - Protocolo Supermate D26-T Plaspy
  - Protocolo de comunicación Supermate D26-T
  - Protocolo de rastreo D26-T
  - Protocolo rastreador GPS Supermate
  - Compatibilidad D26-T Plaspy
  - Rastreo de vehículos Supermate
  - Rastreo de activos D26-T
  - Rastreadores compatibles Plaspy
---

# Supermate - Protocolo D26-T

Esta página documenta el contexto público del protocolo para usar el rastreador GPS Supermate D26-T con Plaspy. Describe a alto nivel cómo el dispositivo se comunica con Plaspy, qué puntos de conexión y modos de transporte se utilizan y qué considerar al confirmar la compatibilidad. El objetivo es ofrecer orientación práctica de integración sin exponer detalles privados de implementación o el firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público de comunicación y en consideraciones prácticas para una integración fiable con Plaspy.

## Resumen del protocolo

El protocolo del dispositivo D26-T define cómo el rastreador informa ubicación, estado y alarmas a un servidor remoto y cómo recibe mensajes de configuración o comandos cuando es compatible. En el contexto de Plaspy, el protocolo es el mecanismo por el cual el equipo se identifica ante la plataforma y entrega telemetría utilizable para seguimiento y monitoreo.

- Permite reportes regulares de ubicación y notificaciones de eventos desde el D26-T hacia la plataforma Plaspy.
- Transporta información básica de identificación y estado del dispositivo para que Plaspy asocie los reportes con el activo correcto.
- Lleva eventos de alarma y geocercas que activan alertas y registros históricos dentro de Plaspy.
- Admite comunicación bidireccional cuando el firmware del rastreador permite comandos remotos o configuración.
- Sirve como base para interpretar y presentar datos de GPS, celular y sensores en la interfaz de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único punto de acceso compartido y puerto, y determina automáticamente qué protocolo de rastreador está presente. Cuando un Supermate D26-T se configura para reportar a Plaspy, la plataforma compara los datos entrantes con patrones públicos conocidos y enruta el dispositivo al parser y perfil de equipo correctos sin necesidad de selección manual.

- Plaspy escucha los reportes de dispositivos en el dominio d.plaspy.com.
- El servidor de Plaspy es accesible en la dirección IP 54.85.159.138 para instalaciones que prefieran un endpoint numérico.
- Todos los dispositivos usan el mismo puerto en Plaspy, lo que simplifica la configuración y el onboarding.
- Los equipos pueden enviar datos por UDP o TCP en el puerto 8888 según lo permita el dispositivo y la red.
- En la mayoría de los casos, no es necesario elegir un protocolo dentro de Plaspy si el equipo está correctamente apuntado al endpoint y puerto de Plaspy.

## Transporte y contexto de conexión

El transporte y el direccionamiento son clave para que el Supermate D26-T reporte correctamente a Plaspy. El dispositivo puede configurarse para usar distintos modos de transporte y endpoints; asegurar que estos ajustes coincidan con lo esperado por Plaspy es el primer paso habitual en la integración.

- El D26-T puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del dispositivo y condiciones de la red.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 como dirección del servidor.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, reduciendo la variación en la configuración por unidad.
- Las reglas de firewall de la red y las políticas del operador móvil deben permitir tráfico saliente hacia el endpoint y puerto de Plaspy.
- Contar con conectividad celular estable y una configuración de APN adecuada en el dispositivo ayuda a garantizar reportes oportunos a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar la temporización de mensajes, las funciones disponibles o los campos opcionales; verifique qué firmware tiene su D26-T.
- Las revisiones de hardware y variantes de modelo pueden introducir diferencias en los modos de transporte soportados o en los intervalos de reporte disponibles.
- Las opciones de configuración del lado del fabricante pueden cambiar campos de servidor por defecto o parámetros de autenticación requeridos.
- La elección entre UDP y TCP puede afectar la fiabilidad y la entrega según las condiciones de la red.
- Valide la configuración del equipo apuntando el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confirmando que los reportes llegan a Plaspy.
- Ante cualquier duda, consulte la documentación oficial de Supermate para la revisión exacta del dispositivo y así asegurar la paridad de funciones.

## Por qué es importante comprender el protocolo

Conocer cómo se comunica el D26-T ayuda a asegurar una configuración fluida, reportes confiables y a acelerar la resolución de problemas al integrarlo con Plaspy. Entender el comportamiento del protocolo y del transporte reduce las suposiciones durante el onboarding y mantiene una operación consistente en el tiempo.

- Facilita identificar si un dispositivo es accesible y está apuntando correctamente al endpoint de Plaspy.
- Orienta la selección del modo de transporte y las reglas de firewall necesarias para una comunicación estable.
- Permite interpretar comportamientos del dispositivo que pueden ser causados por límites del firmware o la configuración.
- Ayuda a planificar los intervalos de reporte esperados y el volumen de datos en casos de gestión de flotas o activos.
- Reduce el tiempo de resolución cuando faltan reportes o no aparecen ciertos eventos en Plaspy.

## Por qué usar Plaspy con este protocolo

Utilizar el Supermate D26-T con Plaspy ofrece a las organizaciones una forma directa de captar ubicación, alarmas y telemetría básica en una sola plataforma. El modelo de endpoint compartido y la detección automática de protocolo de Plaspy simplifican el onboarding para que las organizaciones se concentren en la supervisión operativa en lugar de en la selección de protocolos por dispositivo.

Si desea obtener más información sobre Plaspy y cómo funciona con dispositivos como el Supermate D26-T visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y guía del fabricante, consulte la documentación oficial de Supermate en http://www.gps-summit.com/ para verificar la información aplicable a su revisión de hardware y versión de firmware.
