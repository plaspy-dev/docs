---
slug: /castel/idd_213n/configuration
id: idd_213n-configuration
sidebar_label: Configuration
title: Castel - IDD-213N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Castel IDD-213N y conectarlo a Plaspy para rastreo y diagnóstico
keywords:
  - Configuración Castel IDD-213N
  - configuración rastreador GPS Castel
  - integración IDD-213N Plaspy
  - configuración servidor Castel
  - configuración rastreo vehicular
  - configuración rastreador OBDII GPS
  - ajustes Plaspy para flotas
  - configuración SMS Castel IDD-213N
  - configuración plataforma GPS
  - configuración dispositivo de rastreo
---

# Castel - IDD-213N Configuración

Esta página detalla el contexto público de configuración para utilizar el Castel IDD-213N con Plaspy. Explica los valores de servidor compartidos y los pasos prácticos que usted puede seguir para apuntar el equipo a Plaspy y habilitar rastreo en tiempo real y diagnóstico remoto. Las instrucciones resumen la información pública de configuración y ejemplos de comandos SMS cuando están disponibles.

Plaspy usa parámetros de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El IDD-213N admite conectividad 3G y OBD II y frecuentemente acepta configuración mediante comandos SMS, pero el comportamiento puede cambiar según la versión de firmware, por lo que recomendamos revisar la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo de esta configuración es preparar el IDD-213N para que informe ubicación y datos de diagnóstico a la plataforma Plaspy de forma fiable. La configuración vincula el dispositivo al endpoint de red de Plaspy, garantiza que haya acceso a datos móviles y permite que el equipo envíe telemetría y alertas a la plataforma.

- Proveer al dispositivo un APN válido y los ajustes de servidor para que pueda establecer conexiones GPRS/3G.
- Apuntar el rastreador a Plaspy usando el dominio o la IP compartida y el puerto requerido para que los datos lleguen al backend.
- Validar la conectividad y el comportamiento del protocolo para que Plaspy detecte y parseé automáticamente los mensajes.
- Confirmar que el dispositivo reporta y aparece en Plaspy para el rastreo en vivo y la visibilidad de diagnósticos.
- Usar los métodos del fabricante, como comandos SMS o software de configuración, para aplicar los ajustes según lo permita el equipo.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- El IDD-213N debe llevar una SIM 3G funcional con datos habilitados y los valores APN correctos del operador móvil.
- Acceso al método de configuración que soporta la unidad, por ejemplo acceso por SMS o la herramienta de configuración del proveedor.
- Alimentación y acceso físico al dispositivo o al puerto OBDII donde esté conectado para poder realizar reinicios si son necesarios.
- El ID del dispositivo o número de serie para derivar la clave secreta SMS por defecto cuando se requiera.
- Un teléfono capaz de enviar SMS para dispositivos que aceptan configuración por mensajes de texto.
- Conocimiento de si el dispositivo debe usar UDP o TCP en caso de que requiera seleccionar explícitamente el transporte.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el IDD-213N envía sus paquetes de telemetría y diagnóstico al endpoint de Plaspy para que los administradores de flota puedan ver ubicaciones en tiempo real y diagnósticos del vehículo. Plaspy recibe los mensajes en el endpoint compartido y determina automáticamente el protocolo correcto para interpretar los datos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o directamente a 54.85.159.138.
- Todos los dispositivos envían datos al puerto 8888 en el lado de Plaspy, y la plataforma usa ese mismo puerto para todos los rastreadores compatibles.
- El dispositivo puede transmitir usando UDP o TCP según la selección; Plaspy detectará automáticamente el protocolo.
- Cuando los mensajes llegan a Plaspy, la plataforma procesa registros de ubicación, eventos y diagnóstico para mostrarlos en el panel de la flota.
- La validación periódica de los reportes confirma que el dispositivo es accesible y que Plaspy lo está parseando correctamente.

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante para el IDD-213N; en muchas instalaciones esto es por SMS o mediante el software de configuración de Castel.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor a 8888 en la configuración del dispositivo.
4. Seleccione UDP o TCP si el equipo requiere una elección explícita del transporte.
5. Aplique o guarde la configuración en el dispositivo usando la confirmación por comando SMS o la herramienta del proveedor.
6. Reinicie el equipo si el fabricante lo requiere para activar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca como activo en la plataforma.

## Ejemplos de comandos de configuración

El IDD-213N admite configuración por SMS. Las plantillas de comandos SMS públicas que Castel provee para establecer GPRS/APN y detalles de servidor y para verificar la configuración son las siguientes.

Nota: La clave secreta SMS por defecto son los últimos 6 caracteres ASCII del ID del dispositivo. Reemplace {{SecretKey}} por ese valor. Reemplace {{apn}}, {{apnu}} y {{apnp}} con el APN de su operador móvil, el usuario APN y la contraseña APN según sea necesario. Los comandos abajo incluyen la IP y puerto de Plaspy tal como se indica.

- Configurar APN y servidor (plantilla SMS de ejemplo):

```
*{{SecretKey}}#set gprs#{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888*
```

- Verificar la configuración GPRS actual (plantilla SMS de ejemplo):

```
*{{SecretKey}}#get gprs#*
```

Si su instalación usa nombres de dominio en lugar de IP directa, puede sustituir d.plaspy.com en el campo APN/servidor donde el dispositivo acepte un nombre de dominio. Siempre respete el formato que el equipo requiera al componer comandos SMS.

## Notas de configuración

- La sintaxis exacta de los SMS, los delimitadores y los campos obligatorios pueden variar según la revisión del firmware; confirme el formato de comandos con la documentación del dispositivo antes de enviar mensajes de configuración.
- Cuando esté disponible, la elección entre UDP y TCP afecta el comportamiento del transporte; Plaspy soporta ambos y detectará el protocolo automáticamente, pero seleccione el transporte que requiera su red y su equipo.
- Usar el dominio d.plaspy.com puede ser preferible en entornos donde la IP pudiera cambiar; la IP 54.85.159.138 es el endpoint directo al que Plaspy recibe datos.
- La configuración por SMS es cómoda para ajustes en campo, pero las herramientas del fabricante o métodos cableados pueden ser más rápidos para aprovisionamiento masivo.
- Si necesita restablecer ajustes, siga los procedimientos recomendados por el fabricante; incluya pasos de reinicio solo cuando sean necesarios para solución de problemas o reprovisionamiento.

## Por qué usar Plaspy con esta configuración

Configurar el Castel IDD-213N para reportar a Plaspy ofrece una forma práctica de combinar datos de diagnóstico del vehículo y rastreo de ubicación en una sola vista de gestión de flotas. Las organizaciones que necesitan visibilidad sobre el estado del vehículo, el comportamiento de conducción y la ubicación pueden usar Plaspy para monitorear activos en tiempo real y recibir información diagnóstica enviada desde el dispositivo.

Para obtener más información sobre Plaspy y cómo maneja la telemetría de dispositivos y los insights de flota, visite https://www.plaspy.com. Los métodos de configuración del fabricante, el comportamiento del firmware y los detalles del dispositivo pueden cambiar con el tiempo, así que verifique la información más reciente específica del dispositivo en el sitio de Castel http://www.castelecom.com/.
