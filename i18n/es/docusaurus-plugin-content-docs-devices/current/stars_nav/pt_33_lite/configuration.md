---
slug: /stars_nav/pt_33_lite/configuration
id: pt_33_lite-configuration
sidebar_label: Configuration
title: Stars Nav - PT-33 Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar Stars Nav PT-33 Lite con Plaspy usando servidor compartido y reportes por SMS
keywords:
  - configuración Stars Nav PT-33 Lite
  - configuración PT-33 Lite
  - Stars Nav PT-33 Lite Plaspy
  - configuración servidor PT-33 Lite
  - configuración tracker SMS PT-33 Lite
  - configuración tracker Plaspy
  - guía configuración rastreador GPS
  - configuración rastreador GPS personal
  - configuración botón pánico PT-33 Lite
  - configuración alerta movimiento PT-33 Lite
---

# Stars Nav - Configuración PT-33 Lite

Esta página describe el contexto público de configuración para usar el Stars Nav PT-33 Lite con Plaspy. Explica los pasos prácticos y consideraciones para encaminar los informes de ubicación y alertas del PT-33 Lite hacia la plataforma Plaspy. El PT-33 Lite es un rastreador GPS personal que funciona principalmente por SMS y llamadas, diseñado para solicitudes de ubicación bajo demanda, alertas de pánico y notificaciones por movimiento; esta guía se centra en cómo esos mensajes SMS o reportes por llamada se incorporan a Plaspy para su monitoreo y registro.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Dado que el PT-33 Lite prioriza SMS, la integración con Plaspy normalmente requiere un gateway SMS o un método de reenvío para entregar los mensajes del rastreador al punto de entrada compartido de Plaspy y el puerto que se describen más abajo.

## Resumen de la configuración

Preparar un PT-33 Lite para integrarlo con Plaspy se centra en asegurarse de que los reportes salientes del dispositivo se dirijan a Plaspy y que el rastreador esté accesible y configurado para responder a solicitudes de ubicación y alertas. El objetivo es garantizar que los mensajes SMS o las llamadas del rastreador se reciban, se traduzcan si es necesario y se ingieran en Plaspy para que las posiciones y eventos aparezcan en el tablero.

- Configure el rastreador o el gateway SMS intermediario para reenviar reportes de ubicación y alertas a Plaspy.
- Verifique que el dispositivo pueda enviar SMS o reportes por llamada de forma confiable y que esos mensajes se capturen para su ingestión.
- Asegúrese de introducir el endpoint y puerto del servidor Plaspy donde lo requiera su método de configuración.
- Pruebe solicitudes de ubicación bajo demanda, alarmas de pánico y alertas de movimiento y confirme que sean visibles en Plaspy.
- Valide que el transporte y el flujo del gateway seleccionados coincidan con las capacidades del rastreador y de la red local.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the gateway or forwarding tool
- Automatic protocol detection in Plaspy so the platform recognizes the tracker protocol on arrival

Estos valores públicos son los detalles del endpoint de Plaspy que debe usar al enrutar los mensajes del PT-33 Lite. Plaspy emplea el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando lleguen los datos.

## Requisitos típicos antes de empezar

- Un dispositivo PT-33 Lite activo con alimentación y capacidad para enviar SMS o responder llamadas.
- Una tarjeta SIM y un plan de servicio celular que permitan el envío y recepción de SMS o llamadas según lo requiera el dispositivo.
- Acceso al método oficial de configuración de Stars Nav para el PT-33 Lite (lista de comandos SMS o software del proveedor) o acceso al gateway SMS que usará para el reenvío.
- Un gateway SMS o servicio de reenvío si necesita convertir reportes SMS en mensajes TCP o UDP para la ingestión por Plaspy.
- Un plan de pruebas para solicitar ubicaciones bajo demanda, activar el botón de pánico y generar alertas de movimiento o geocerca para verificación.
- Acceso administrativo a cualquier sistema intermedio (gateway SMS o servidor) que reenviará mensajes a d.plaspy.com puerto 8888.

## Cómo se conecta este rastreador a Plaspy

El PT-33 Lite está diseñado para funcionar por SMS y llamadas, por lo que la integración típica con Plaspy enruta esos mensajes SMS mediante un gateway o servicio de reenvío que los convierte en mensajes de red enviados al endpoint compartido de Plaspy. Una vez entregados al servidor Plaspy en d.plaspy.com puerto 8888, Plaspy detecta automáticamente el protocolo del rastreador y mapea los datos de posición y evento entrantes a la cuenta y al dispositivo correspondientes.

- El rastreador envía mensajes de ubicación y alertas activadas por SMS o llamada a contactos o números de gateway predefinidos.
- Un gateway SMS o sistema de reenvío recibe los mensajes y los envía a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy acepta transporte TCP o UDP; elija UDP o TCP en la configuración del gateway según las capacidades del mismo.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el registro del dispositivo PT-33 Lite.
- Los reportes de ubicación, alertas de pánico, movimiento y eventos de geocerca aparecen en los tableros y registros de eventos de Plaspy después de una ingestión exitosa.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Stars Nav o al software para el PT-33 Lite (comandos SMS o herramienta del proveedor).
2. Introduzca el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera su vía de configuración.
3. Establezca el puerto en 8888 para el reenvío saliente hacia Plaspy.
4. Seleccione UDP o TCP en el gateway o herramienta de reenvío si el dispositivo o el gateway requiere una selección explícita de transporte.
5. Aplique o guarde la configuración en los ajustes del dispositivo o en su herramienta gateway SMS.
6. Reinicie el dispositivo o el gateway si las instrucciones del fabricante lo indican.
7. Valide que el dispositivo reporte a Plaspy solicitando una ubicación inmediata o activando una alerta de prueba y confirmando la visibilidad en Plaspy.

## Comandos de configuración de ejemplo

Los comandos de configuración del PT-33 Lite y los pasos exactos pueden variar según el firmware y el conjunto de comandos oficial de Stars Nav. Dado que las herramientas del fabricante y la sintaxis de los comandos SMS difieren entre versiones de firmware, aquí no se proporcionan comandos precisos. Utilice la referencia de comandos SMS de Stars Nav o el software del proveedor para establecer el destino de reenvío saliente a d.plaspy.com o 54.85.159.138 y el puerto 8888, y para seleccionar UDP o TCP si su configuración lo requiere.

Si usa un gateway SMS, siga las instrucciones del proveedor del gateway para mapear los SMS entrantes del rastreador en mensajes TCP o UDP dirigidos a:
- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport UDP or TCP as available

Consulte la documentación oficial de Stars Nav para los ejemplos específicos de comandos SMS para el PT-33 Lite.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos SMS y las opciones disponibles; siempre revise la documentación de Stars Nav para la versión de firmware de su equipo.
- Debido a que el PT-33 Lite prioriza SMS, muchas implementaciones usan un gateway SMS; configure ese gateway para reenviar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP en su gateway según las necesidades de fiabilidad y las capacidades del gateway; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica despliegues con múltiples unidades.
- Confirme que el número de teléfono y las reglas de reenvío en el PT-33 Lite sean correctos antes de depender del reenvío automatizado a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el PT-33 Lite con Plaspy ofrece una solución práctica para organizaciones y familias que necesitan reportes de ubicación y alertas de emergencia accionables sin consumo continuo de datos. La combinación del reporte por SMS y la ingestión en Plaspy mediante un gateway SMS o método de reenvío entrega actualizaciones de posición, notificaciones de pánico y alertas de movimiento a un entorno centralizado de monitoreo para supervisión operativa y respuesta a incidentes.

Para obtener más información sobre Plaspy y cómo soporta rastreadores de bajo ancho de banda basados en SMS como el PT-33 Lite visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guía del fabricante para el PT-33 Lite consulte Stars Nav en http://www.starsnav.com/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con revisiones de firmware y hardware.
