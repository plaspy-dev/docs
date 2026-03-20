---
slug: /carscop/cctr_622g_4g/configuration
id: cctr_622g_4g-configuration
sidebar_label: Configuration
title: Carscop - CCTR-622G-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Carscop CCTR-622G-4G con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Carscop CCTR-622G-4G
  - Configuración rastreador GPS Carscop
  - Configuración CCTR-622G-4G Plaspy
  - Ajustes servidor Carscop
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Comandos SMS rastreador
  - Guía configuración APN
  - Configuración rastreador portátil
  - Configuración plataforma seguimiento vehicular
---

# Carscop - Configuración del CCTR-622G-4G

Esta página describe el contexto público de configuración para usar el rastreador Carscop CCTR-622G-4G con Plaspy. Resume los valores de servidor prácticos y ejemplos de comandos SMS que se usan habitualmente para apuntar el dispositivo a Plaspy, además de notas sobre requisitos y validación. La guía se basa en comandos públicos y en la descripción del equipo, y está pensada para técnicos e integradores que preparan este rastreador portátil sin instalación fija para monitoreo en tiempo real en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El CCTR-622G-4G admite configuración por SMS y ajustes GPRS; más abajo se muestra una secuencia de ejemplo que ilustra el flujo público típico para dirigir el dispositivo a Plaspy.

## Resumen de configuración

El proceso prepara al CCTR-622G-4G para comunicarse con Plaspy definiendo acceso a la red, credenciales APN y el endpoint del servidor de Plaspy. En términos prácticos, el objetivo es garantizar que el rastreador tenga un canal de datos funcional, el servidor y puerto correctos, y que reporte ubicación y alarmas a Plaspy de forma fiable.

- Configure el APN del dispositivo y el nombre de usuario/contraseña del APN si su operador lo requiere para habilitar datos GPRS.
- Apunte el dispositivo al endpoint del servidor de Plaspy para que la telemetría y las alarmas lleguen a la plataforma.
- Asegúrese de que el dispositivo permanezca en línea o suba los puntos almacenados cuando vuelva la cobertura para mantener un historial de seguimiento completo.
- Valide la visibilidad del dispositivo en Plaspy y confirme que se reciben mensajes de ubicación y de alarma.
- Aplique la zona horaria y la contraseña del dispositivo si es necesario para que las marcas temporales y la seguridad sean correctas.

## Ajustes del servidor de Plaspy

Use estos ajustes públicos de Plaspy al configurar el rastreador o al introducir detalles de servidor en la herramienta del fabricante:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP según requiera su dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados

## Requisitos previos antes de la configuración

- Un dispositivo CCTR-622G-4G cargado y con alimentación, con la contraseña de dispositivo por defecto o conocida
- Una tarjeta SIM activa con datos y capacidad de SMS instalada en el rastreador (se requiere información APN)
- Acceso para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración Carscop provista por el proveedor
- Cobertura de red en las operadoras móviles donde operará el rastreador
- Credenciales de cuenta de Plaspy para verificar que el dispositivo sea visible tras la configuración
- El manual del fabricante o la guía de configuración para la sintaxis de comandos y notas de firmware específicas del dispositivo

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el CCTR-622G-4G envía informes de ubicación, eventos de alarma y mensajes de estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe y muestra esos mensajes en tiempo real para que usted pueda monitorear ubicaciones, alarmas y la salud del dispositivo.

- El rastreador sube reportes de posición y marcas temporales a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del equipo; Plaspy acepta ambos y detecta automáticamente el protocolo
- Eventos de alarma como SOS, choque y batería baja son reenviados a Plaspy y pueden activar notificaciones
- Las rutas almacenadas se cargan cuando el dispositivo recupera conectividad GPRS, permitiendo la reproducción histórica en Plaspy
- Mantener el dispositivo en línea o habilitar subidas periódicas mejora la continuidad de los datos de seguimiento visibles en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración Carscop para el CCTR-622G-4G (comandos SMS, herramienta del proveedor o interfaz de firmware).
2. Verifique que el rastreador tenga una SIM funcional y que conozca la contraseña del dispositivo (el ejemplo de contraseña por defecto que aparece más abajo es 123456).
3. Introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888.
5. Seleccione UDP o TCP en la configuración de transporte si el rastreador requiere elegir el transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo solicita.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad y los mensajes recientes en su cuenta de Plaspy.
8. Si es necesario, utilice el flujo de comandos SMS del proveedor para ajustar APN, keepalive o la zona horaria como se muestra abajo.

## Ejemplos de comandos de configuración

El Carscop CCTR-622G-4G puede configurarse enviando comandos SMS al dispositivo. Los siguientes ejemplos son públicos. La configuración de ejemplo usa la contraseña por defecto del dispositivo 123456 en los ejemplos.

- Restablecer a valores de fábrica (paso inicial opcional)
```text
RESET*123456
```

- Ajustar la zona horaria a UTC+0
```text
TIMEZONE*123456*+00
```

- Establecer el APN del operador
```text
APN*123456*{{apn}}
```

- Establecer usuario y contraseña del APN (inclúyalo solo si su operador requiere autenticación)
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Configurar el servidor GPRS a Plaspy por IP y puerto
```text
IP*123456*54.85.159.138,8888
```

- Habilitar comportamiento de mantener conexión para que el rastreador mantenga una conexión activa
```text
KEEPONLINE*123456
```

Notas sobre marcadores de posición y valores por defecto:
- {{apn}} debe reemplazarse por la cadena APN de su operador móvil.
- {{apnu}} y {{apnp}} son marcadores para el usuario y la contraseña del APN cuando el operador los solicita; omita el comando USERNAME si no se requieren credenciales.
- La contraseña de ejemplo 123456 se muestra como valor de fábrica en estos ejemplos públicos; utilice la contraseña configurada para su despliegue.

## Notas de configuración

- La configuración por SMS es común para este modelo; según el firmware también pueden estar disponibles herramientas del proveedor o una interfaz de configuración.
- Las contraseñas por defecto varían según el proveedor y pueden cambiar después de una primera configuración; confirme la contraseña correcta antes de enviar comandos.
- Las revisiones de firmware y las versiones de hardware pueden afectar los comandos disponibles y la sintaxis de parámetros; consulte el manual del fabricante para la sintaxis exacta.
- Elija TCP o UDP según sus necesidades operativas y el soporte del dispositivo; Plaspy acepta ambos y detecta el protocolo al conectarse.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que debe usar ese puerto al apuntar dispositivos a d.plaspy.com o 54.85.159.138.
- El comando KEEPONLINE o su equivalente ayuda a mantener la continuidad de la sesión y reducir lagunas en los datos cuando se utiliza GPRS.

## Por qué usar Plaspy con esta configuración

Usar el CCTR-622G-4G con Plaspy proporciona una vía sencilla para visibilidad en tiempo real, reenvío de alarmas y reproducción histórica de rutas sin instalación fija del equipo. El protocolo abierto del dispositivo y las opciones de configuración por SMS/GPRS facilitan un despliegue rápido para seguridad personal, monitoreo de activos y logística ligera, aprovechando las funciones de mapas y notificaciones de Plaspy para la supervisión operativa.

Learn more about Plaspy and how it can display and manage devices like the CCTR-622G-4G at https://www.plaspy.com. Manufacturer specifications, setup methods, and firmware behavior can change over time, so please verify the latest device-specific configuration details on the Carscop website http://www.carscop.com/.
