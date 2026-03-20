---
slug: /autoseeker/at_25/configuration
id: at_25-configuration
sidebar_label: Configuration
title: Autoseeker - AT-25 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Autoseeker AT-25 para conectarse a Plaspy con datos de servidor públicos y guía práctica para seguimiento vehicular confiable
keywords:
  - configuración Autoseeker AT-25
  - instalación Autoseeker AT-25
  - configuración AT-25 Plaspy
  - configuración rastreador GPS Autoseeker
  - configuración rastreador de vehículos
  - ajustes de servidor AT-25
  - configuración rastreador Plaspy
  - configuración seguimiento AT-25
  - configuración plataforma GPS
  - guía de configuración Autoseeker
---

# Autoseeker - Configuración AT-25

Esta página describe el contexto público de configuración para usar el rastreador Autoseeker AT-25 con Plaspy. Presenta los valores de servidor compartidos por Plaspy y recomendaciones prácticas que puede aplicar al integrar dispositivos AT-25 en la plataforma de flotas de Plaspy. La información aquí se centra en el punto de acceso público del servidor y en los pasos de configuración más comunes, manteniendo una postura neutral respecto al fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar y validar la conectividad con Plaspy y consulte la documentación de Autoseeker para comandos específicos del dispositivo o notas de firmware.

## Resumen de la configuración

Configurar el AT-25 para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos al punto de acceso compartido de Plaspy, de modo que el dispositivo aparezca en la plataforma y se actualice como corresponde. El AT-25 soporta reportes por SMS y GPRS TCP además de conexiones celulares modernas, por lo que la configuración suele incluir servidor, transporte e intervalos de reporte.

- Apunte el AT-25 al punto de acceso del servidor de Plaspy para que la telemetría se enrute a Plaspy para su procesamiento y visualización
- Seleccione el transporte y los intervalos de reporte para que las actualizaciones coincidan con sus necesidades de monitoreo
- Verifique que el dispositivo tenga conectividad celular funcional y los ajustes de APN correctos
- Guarde y aplique la configuración en el dispositivo, luego confirme que el dispositivo aparece y envía datos en Plaspy
- Use la configuración por SMS o la herramienta de configuración de Autoseeker cuando estén disponibles para establecer el servidor y los valores de transporte

## Valores del servidor Plaspy

Al configurar un Autoseeker AT-25 para trabajar con Plaspy, use los siguientes valores públicos de servidor:

- Dominio de servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que puede usar UDP o TCP cuando el dispositivo permita la selección de transporte

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración y el enrutamiento en la plataforma.

## Requisitos típicos antes de la configuración

- Confirme que el AT-25 esté alimentado y, si corresponde, cuente con la batería de respaldo cargada según la instalación
- Asegúrese de que haya una tarjeta SIM funcional instalada y que los datos móviles estén habilitados para reportes GPRS o 4G
- Conozca o tenga acceso al método de configuración del dispositivo proporcionado por Autoseeker, como comandos SMS o una utilidad de configuración
- Tenga a mano los valores del servidor Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888
- Verifique la cobertura de red en el sitio de instalación para que el rastreador pueda registrarse y enviar datos
- Obtenga cualquier APN y credenciales de SIM necesarias para que el dispositivo acceda a datos móviles

## Cómo se conecta este rastreador a Plaspy

El AT-25 envía informes de posición y eventos al punto de acceso y puerto del servidor de Plaspy para que Plaspy pueda procesar y mostrar el dispositivo en su cuenta de seguimiento. Plaspy recibe las conexiones entrantes TCP o UDP y determina automáticamente el protocolo del dispositivo, por lo que no se requiere mapear el protocolo manualmente.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Seleccione UDP o TCP en el dispositivo si requiere una selección; Plaspy acepta ambos
- Los fixes de posición, alarmas y las actualizaciones periódicas se envían desde el rastreador al punto de acceso de Plaspy
- Plaspy correlaciona los datos entrantes y hace que el rastreador sea visible en el panel de la plataforma
- Valide la conectividad confirmando que el dispositivo aparece y envía actualizaciones recientes a Plaspy

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración de Autoseeker o al software proporcionado para el AT-25, como configuración por comandos SMS o una utilidad del fabricante
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como punto de acceso
3. Establezca el puerto del servidor en 8888 como puerto principal para la conectividad con Plaspy
4. Elija el transporte UDP o TCP si el AT-25 requiere selección de transporte
5. Aplique o guarde la configuración en el dispositivo mediante la herramienta del fabricante o el comando SMS
6. Reinicie el rastreador si el dispositivo o la documentación indican que es necesario para aplicar los ajustes
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado del dispositivo y las actualizaciones de ubicación recientes en la plataforma Plaspy

## Comandos de configuración de ejemplo

Los comandos y la sintaxis exacta para configurar el AT-25 dependen del firmware de Autoseeker y de la herramienta proporcionada por el proveedor. Los fabricantes suelen ofrecer formatos de comandos por SMS o una interfaz de configuración. Debido a que los conjuntos de comandos específicos del modelo pueden variar según la revisión del firmware, consulte la documentación de Autoseeker para los comandos SMS o de utilidad precisos para su dispositivo.

Si cuenta con la lista de comandos SMS de Autoseeker o los comandos de la herramienta de configuración, utilice esos métodos para establecer los siguientes valores donde aplique: dominio del servidor d.plaspy.com o IP del servidor 54.85.159.138, puerto 8888, transporte UDP o TCP y cualquier credencial de APN necesaria para datos móviles.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos y las opciones disponibles; confirme siempre los comandos con la documentación más reciente de Autoseeker
- Si el AT-25 soporta configuración por SMS y por GPRS, el SMS puede ser útil para configuración remota, pero GPRS se usará para el envío continuo de datos
- Elija TCP si requiere reportes orientados a conexión o UDP cuando prefiera menor sobrecarga, teniendo en cuenta que Plaspy admite ambos y detecta el protocolo automáticamente
- Aplique los ajustes y permita varios minutos para que el rastreador se registre en la red móvil y envíe los primeros reportes a Plaspy
- Mantenga un registro de los comandos SMS que envíe para la configuración y anote si fue necesario reiniciar el dispositivo

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-25 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la visibilidad de vehículos, alertas e historial en una sola plataforma. Con el AT-25 capaz de enviar actualizaciones por SMS o GPRS TCP y con soporte celular 4G, resulta práctico para instalaciones mixtas donde se requieren distintas opciones de conectividad. Apuntar el rastreador al punto de acceso compartido de Plaspy y usar el mismo puerto para todos los dispositivos simplifica el despliegue y la ampliación de la flota.

Learn more about Plaspy and how it supports tracker integrations at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup instructions on the manufacturer site https://autoseekergps.com/ before you begin.
