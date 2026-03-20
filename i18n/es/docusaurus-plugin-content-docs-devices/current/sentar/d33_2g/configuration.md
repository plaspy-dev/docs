---
slug: /sentar/d33_2g/configuration
id: d33_2g-configuration
sidebar_label: Configuration
title: Sentar - D33-2G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el smartwatch Sentar D33 2G con ajustes de servidor y comandos SMS compatibles con Plaspy
keywords:
  - Configuración Sentar D33-2G
  - Instalación Sentar D33-2G
  - Configuración servidor Sentar D33-2G
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración rastreador GPS Sentar
  - Configuración reloj GPS infantil
  - Configuración SMS D33-2G
  - Compatibilidad rastreador GPS Plaspy
  - Configuración APN rastreador
---

# Sentar - Configuración del D33-2G

Esta página reúne la información pública necesaria para preparar el smartwatch Sentar D33-2G y conectarlo con Plaspy. Aquí encontrará los ajustes prácticos de servidor, los comandos SMS y las indicaciones de flujo de trabajo que suelen emplearse para que el D33-2G reporte ubicaciones y eventos al sistema Plaspy. El contenido se enfoca en lo necesario para que el dispositivo se comunique con Plaspy y cómo validar la conectividad tras la configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el D33-2G normalmente usa configuración por SMS y ajustes GPRS, por lo que le recomendamos revisar la documentación del fabricante y los ejemplos de comandos SMS que se muestran más abajo como parte del proceso práctico de configuración.

## Resumen de la configuración

Esta configuración prepara el D33-2G para reportar de forma fiable a Plaspy definiendo el endpoint del servidor, el transporte, el APN y los parámetros operativos correctos. Con los comandos SMS públicos y los ajustes de servidor que se muestran a continuación, usted podrá configurar el dispositivo para enviar reportes periódicos y alertas al servidor de Plaspy.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que ubicaciones y alertas sean visibles en la plataforma.
- Configurar el APN y los parámetros GPRS para garantizar conectividad de datos móviles.
- Seleccionar el protocolo de transporte y el puerto para que el rastreador establezca sesión con Plaspy.
- Validar la configuración y probar que el dispositivo está reportando activamente a Plaspy tras la puesta en marcha.
- Usar los comandos de verificación del dispositivo para comprobar la configuración actual desde el propio rastreador.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos soportados por Plaspy usan el mismo puerto y la plataforma identificará el protocolo del rastreador automáticamente una vez que el dispositivo empiece a enviar datos al endpoint configurado.

## Requisitos típicos antes de la configuración

- Un D33-2G con batería cargada, encendido y accesible para su configuración.
- Una tarjeta SIM 2G compatible con datos móviles activados y el APN correcto del operador.
- Acceso al envío de SMS desde un número autorizado para mandar comandos de configuración al dispositivo.
- La documentación o herramienta de configuración del fabricante para el D33-2G.
- Conocimiento de la contraseña por defecto del dispositivo si es necesaria para los comandos SMS; en los ejemplos públicos se usa 123456.
- Confirmación de cobertura de red 2G y conectividad GPRS en el lugar de instalación.

## Cómo se conecta este rastreador a Plaspy

El D33-2G se configura para enviar actualizaciones de ubicación y estado al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo quede visible en la plataforma para monitoreo en tiempo real y reproducción histórica.

- El rastreador envía actualizaciones periódicas de posición al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse en UDP o TCP según las opciones del dispositivo y la red del operador.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para seguimiento en vivo y eventos.
- Alertas como pulsaciones SOS y notificaciones de estado se envían al mismo endpoint de Plaspy para visibilidad inmediata.
- Tras la configuración se puede realizar validación y monitorización para confirmar el envío de reportes y la entrega de eventos.

## Flujo de configuración habitual

1. Consulte el método de configuración oficial de Sentar o la documentación del fabricante para el D33-2G y confirme la sintaxis SMS y notas de firmware.
2. Asegúrese de que el dispositivo tiene una SIM 2G activa y que usted conoce los datos APN correctos del operador móvil.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el equipo, normalmente enviando comandos SMS o mediante la herramienta del fabricante.
6. Reinicie el dispositivo si el flujo del equipo o la documentación de Sentar lo indican.
7. Valide que el D33-2G reporta a Plaspy comprobando la conectividad del dispositivo y usando el comando de verificación.

## Comandos de configuración de ejemplo

El D33-2G admite configuración mediante mensajes SMS. Los siguientes comandos de ejemplo se basan en los comandos públicos facilitados para el D33-2G. Estos comandos mantienen la sintaxis pública provista por el fabricante. La contraseña por defecto que se muestra es 123456. Si su dispositivo o firmware requiere pequeñas variaciones en la sintaxis, siga exactamente lo que exija su firmware y la documentación del fabricante.

1. Reinicio de fábrica opcional (usar solo si necesita restaurar valores por defecto)
```
pw,123456,factory#
```

2. Ajustar la zona horaria a UTC 0
```
pw,123456,lz,0,0#
```

3. Verificar MCC y MNC de la SIM o información IMSI
```
pw,123456,imsi#
```

4. Configurar el APN del operador
- {{apn}} es la cadena APN del operador móvil
- {{apnu}} es el nombre de usuario del APN si se requiere
- {{apnp}} es la contraseña del APN si se requiere
- xxxyy representa MCC y MNC concatenados según lo indique el dispositivo
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

5. Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
- El comando público muestra el servidor como 54.85.159.138 y el puerto 8888
```
pw,123456.ip,54.85.159.138,8888#
```
Nota: Verifique los separadores exactos (comas u otros) que requiere su firmware. En ocasiones la sintaxis del fabricante exige comas entre cada parámetro como pw,123456,ip,54.85.159.138,8888#

6. Fijar el intervalo de subida a 300 segundos
```
pw123456,upload,300#
```
Nota: Algunas variantes de firmware esperan una coma después de la contraseña, por ejemplo pw,123456,upload,300#; consulte la documentación de Sentar o pruebe con cuidado.

7. Consultar la configuración actual del dispositivo
```
pw,123456,ts#
```

Estos comandos se presentan en su forma pública original. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores de su operador cuando envíe los SMS al dispositivo.

## Notas de configuración

- La sintaxis SMS y los separadores pueden variar según la versión de firmware; confirme siempre el formato exacto de los comandos con la documentación de Sentar antes de enviar mensajes de configuración.
- El D33-2G suele usar SMS para aplicar ajustes y GPRS para el envío de datos; asegúrese de que su SIM y operador soportan los servicios de datos 2G requeridos.
- Elija UDP o TCP según la fiabilidad de la red del operador y las opciones del dispositivo; Plaspy acepta ambos transportes en el puerto 8888 y gestionará la detección de protocolo en el servidor.
- Los marcadores de APN deben reemplazarse por los valores de su operador; algunas redes requieren usuario y contraseña mientras que otras solo aceptan la cadena APN.
- Use el comando de verificación para confirmar la configuración actual y evite reintentos de SMS innecesarios durante la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar D33-2G para reportar a Plaspy ofrece a cuidadores y administradores una visibilidad centralizada de la ubicación, las alertas SOS y la actividad del dispositivo. Usar los ajustes de servidor compartidos de Plaspy facilita la integración entre múltiples equipos y permite a la plataforma detectar y parsear automáticamente los mensajes del protocolo del rastreador para monitoreo en tiempo real y reproducción histórica.

Para obtener más información sobre Plaspy y las opciones de integración de dispositivos compatibles visite https://www.plaspy.com. Para los comandos específicos más recientes del fabricante, notas de firmware y comportamiento del dispositivo, verifique los detalles actuales en la web de Sentar http://www.sentarsmart.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
