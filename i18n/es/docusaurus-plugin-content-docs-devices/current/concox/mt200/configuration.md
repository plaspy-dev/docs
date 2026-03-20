---
slug: /concox/mt200/configuration
id: mt200-configuration
sidebar_label: Configuration
title: Concox - MT200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox MT200 con Plaspy usando ajustes de servidor y comandos SMS
keywords:
  - configuración Concox MT200
  - instalación Concox MT200
  - configuración rastreador GPS MT200
  - configuración Plaspy rastreador
  - configuración rastreador GPS motocicleta
  - configuración servidor Concox MT200
  - comandos SMS rastreador GPS
  - configuración rastreador gestión de flotas
  - configuración servidor GPRS
  - guía configuración dispositivo
---

# Concox - Configuración del MT200

Esta página documenta el contexto público de configuración para usar el rastreador GPS para motocicleta Concox MT200 con Plaspy. Resume los pasos prácticos y los ajustes de servidor que se emplean habitualmente para conectar el MT200 a Plaspy e incluye ejemplos de comandos SMS extraídos del contenido público de configuración del dispositivo. Use esta guía para preparar el equipo para que sea visible en la plataforma y para comprender qué necesita Plaspy para recibir reportes fiables.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante para la configuración pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que revise los comandos del dispositivo a continuación y compárelos con la documentación más reciente de Concox cuando sea necesario.

## Resumen de la configuración

Configurar el MT200 para Plaspy se centra en definir los parámetros GPRS del dispositivo, el endpoint del servidor, el intervalo de reporte y en confirmar la comunicación para que el rastreador aparezca en Plaspy. El MT200 soporta comandos de configuración vía SMS, lo cual resulta práctico para instalaciones en campo y aprovisionamiento rápido.

- Prepare el MT200 para enviar datos a Plaspy configurando la dirección del servidor y el transporte.
- Configure el APN y el modo GPRS del dispositivo para que el rastreador pueda usar datos móviles.
- Defina un intervalo de reporte para controlar la frecuencia de envío de posiciones.
- Valide la conectividad y confirme que el dispositivo reporte a Plaspy para monitoreo y alertas.
- Use comandos SMS o la herramienta de configuración de Concox según el flujo de trabajo del instalador.

## Ajustes de servidor para Plaspy

- Dominio del servidor: d.plaspy.com para la configuración GPRS.
- IP alternativa del servidor: 54.85.159.138.
- Puerto: 8888, que es el puerto que usa Plaspy para las conexiones de los rastreadores.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el firmware y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento.

## Requisitos típicos antes de la configuración

- Energice el MT200 y asegúrese de que la unidad esté operativa y accesible para la configuración.
- Una tarjeta SIM válida con datos activos y los ajustes APN correctos del operador móvil.
- Capacidad para enviar SMS al rastreador para la configuración vía SMS o acceso a las herramientas de configuración de Concox si prefiere ese método.
- El APN y, cuando corresponda, el nombre de usuario y la contraseña del APN del operador de la SIM.
- Conocimiento de si el firmware del dispositivo espera transporte UDP o TCP al configurar el servidor.
- Confirmación del IMEI o identificador del dispositivo para validar señales en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el MT200 envía datos de ubicación y estado al endpoint y puerto compartidos de Plaspy para que el dispositivo pueda ser monitoreado desde la plataforma. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles e intentará detectar automáticamente el protocolo correcto cuando el rastreador inicie la comunicación.

- El rastreador envía paquetes de posición y estado a d.plaspy.com o a la dirección IP indicada en el puerto 8888.
- Plaspy detecta automáticamente si el rastreador usa UDP o TCP y decodifica el protocolo entrante.
- Informes periódicos basados en un temporizador proporcionan actualizaciones regulares de ubicación según el intervalo TIMER configurado.
- El modo GPRS debe estar habilitado y el APN configurado para que el dispositivo use datos móviles y alcance Plaspy.
- Tras una configuración exitosa el dispositivo se vuelve visible y reportable dentro de Plaspy para seguimiento y gestión de flotas.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de Concox, o prepare los comandos SMS si va a utilizar configuración por SMS.
2. Configure el APN del dispositivo usando el comando APN y el nombre de usuario y contraseña del APN si son necesarios.
3. Ingrese la dirección del servidor de Plaspy configurando d.plaspy.com o 54.85.159.138.
4. Establezca el puerto 8888 en la entrada del servidor GPRS.
5. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte al configurar el servidor.
6. Aplique o guarde la configuración en el dispositivo y habilite el modo GPRS si es necesario.
7. Reinicie el dispositivo si el firmware lo requiere o después de aplicar los ajustes.
8. Valide que el dispositivo reporte a Plaspy verificando la conectividad y los mensajes entrantes en la plataforma.

## Comandos de configuración de ejemplo

El MT200 admite configuración mediante SMS. A continuación se muestran los comandos SMS públicos según el contenido de configuración del dispositivo. Envíe estos comandos como mensajes SMS al número del equipo en el orden indicado cuando corresponda.

1. Restauración de fábrica opcional en la configuración inicial
```
FACTORY#
```
2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```
3. Configurar el APN del operador
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} es el APN del operador móvil.
- {{apnu}} es el nombre de usuario del APN si el operador lo exige.
- {{apnp}} es la contraseña del APN si el operador lo exige.
- Si no se requieren usuario y contraseña, normalmente puede enviar solo APN,{{apn}}#.

4. Configurar el servidor GPRS usando el dominio de Plaspy
```
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la IP de Plaspy
```
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer el intervalo de actualización cada 60 segundos
```
TIMER,60#
```
O formato alternativo de temporizador
```
TIMER,60,60#
```

6. Habilitar modo GPRS
```
GPRSON,1#
```

7. Consultar los parámetros actuales de GPRS
```
GPRSSET#
```

Nota: Preserve el formato exacto al enviar los comandos SMS. El orden importa para el aprovisionamiento inicial en muchas instalaciones, y habilitar GPRS después de configurar el servidor y el APN reduce intentos fallidos de sesión.

## Observaciones sobre la configuración

- La configuración por SMS está soportada y se muestra arriba, pero algunos instaladores prefieren usar las herramientas o el software de Concox para aprovisionamiento masivo.
- Diferentes versiones de firmware o revisiones de hardware del MT200 pueden cambiar los comandos disponibles o los formatos esperados; verifique los comandos según el firmware de la unidad siempre que sea posible.
- Elija transporte UDP o TCP según las opciones que permita el firmware del dispositivo. Plaspy detectará automáticamente el protocolo cuando el dispositivo se conecte.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración del servidor en flotas mixtas.
- Confirme siempre los valores de APN, usuario y contraseña con el operador móvil antes de provisionar.

## Por qué usar Plaspy con esta configuración

Usar el MT200 con Plaspy ofrece a organizaciones y operadores de flotas de motocicletas una vía sencilla para obtener visibilidad del equipo, reportes de ubicación y monitoreo operativo. Los ajustes de servidor compartidos de Plaspy reducen la complejidad por dispositivo y la detección automática del protocolo ayuda a cubrir las variantes comunes de rastreadores.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y detalles del fabricante verifique los recursos de Concox en https://www.iconcox.com/.
