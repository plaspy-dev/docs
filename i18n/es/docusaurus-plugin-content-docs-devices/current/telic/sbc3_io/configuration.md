---
slug: /telic/sbc3_io/configuration
id: sbc3_io-configuration
sidebar_label: Configuration
title: Telic - SBC3 IO Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar Telic SBC3 IO con Plaspy, con ejemplos de servidor y comandos SMS
keywords:
  - Configuración Telic SBC3 IO
  - Instalación Telic SBC3 IO
  - Configuración servidor Telic SBC3 IO
  - Telic SBC3 IO Plaspy
  - Configuración rastreador GPS SBC3 IO
  - Configuración rastreador GPS Telic
  - Configuración seguimiento de vehículos Telic
  - Gestión de flotas Telic SBC3 IO
  - Compatibilidad rastreador Telic con Plaspy
  - Guía de instalación SBC3 IO
---

# Telic - Configuración SBC3 IO

Esta página presenta el contexto público de configuración para usar el rastreador Telic SBC3 IO con Plaspy. Resume los ajustes de servidor compartidos por Plaspy, explica los pasos prácticos que puede realizar en el equipo —o mediante SMS— y recopila los comandos públicos que ayudan a poner el rastreador en línea para que Plaspy reciba datos de ubicación y E/S.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SBC3 IO es una unidad telemática robusta para uso exterior con conectividad GSM y GPS, batería de respaldo integrada y entradas y salidas digitales y analógicas; puede configurarse mediante los métodos facilitados por el fabricante, como los comandos SMS que se muestran más abajo.

## Resumen de la configuración

Este proceso prepara el SBC3 IO para comunicarse de forma confiable con Plaspy, apuntando el dispositivo al endpoint del servidor de Plaspy y asegurando que la conectividad GPRS esté habilitada y validada. El objetivo es que el equipo sea visible en Plaspy y que confirme el envío de posición y estado a la plataforma.

- Configure el rastreador para usar el endpoint y puerto del servidor de Plaspy para enrutar los datos a la plataforma.
- Verifique que el dispositivo tenga ajustes de datos móviles válidos, como el APN y credenciales si son necesarias.
- Habilite el modo GPRS y la selección de transporte requerida para que el dispositivo pueda enviar telemetría.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy para monitorear ubicación y eventos de E/S.
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe ser aceptado por el dispositivo o usarse cuando el equipo admite nombres de dominio.
- La dirección IP del servidor 54.85.159.138 puede usarse si el dispositivo requiere una dirección numérica.
- El puerto 8888 es el puerto que Plaspy utiliza para las conexiones de los dispositivos.
- Soporte de transporte UDP o TCP según el firmware del equipo y las opciones de configuración.
- Plaspy realiza detección automática del protocolo de modo que la plataforma identifica el protocolo del rastreador una vez que el equipo se conecta.

## Requisitos típicos antes de la configuración

- Una unidad SBC3 IO con alimentación y acceso a su método de configuración, ya sea por SMS o mediante la herramienta oficial de Telic.
- Una tarjeta SIM activa con datos móviles habilitados y los detalles APN correctos para el operador.
- Conocer la contraseña del dispositivo si los comandos la requieren. Los ejemplos a continuación usan la contraseña por defecto 123456 que aparece en documentación pública de Telic.
- Un método para enviar mensajes SMS al dispositivo si usa configuración por SMS, o acceso al software de Telic si prefiere ese método.
- Batería interna cargada o alimentación externa durante la configuración para evitar interrupciones.
- Acceso a la documentación oficial de Telic para notas específicas de firmware y la sintaxis de comandos más reciente.

## Cómo se conecta este rastreador a Plaspy

El SBC3 IO se configura para enviar su ubicación y datos de E/S por GPRS al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo esté apuntando a Plaspy y el modo GPRS esté habilitado, la plataforma detectará automáticamente el protocolo del equipo y comenzará a procesar la telemetría.

- El rastreador reporta posición y estado al servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP si el firmware solicita una selección de transporte.
- Plaspy recibe la conexión y detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo en la plataforma.
- Tras una configuración exitosa, el dispositivo aparece en Plaspy para seguimiento en tiempo real, reporte de eventos y monitoreo de E/S.
- Use el comando de verificación proporcionado para consultar la configuración actual cuando el equipo lo soporte.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Telic o al software, o prepárese para enviar los comandos SMS según la documentación de Telic.
2. Ingrese la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto en 8888, recordando que Plaspy usa el mismo puerto en los dispositivos compatibles.
4. Seleccione UDP o TCP si el firmware del dispositivo solicita una opción de transporte para las conexiones GPRS.
5. Aplique o guarde la configuración en el equipo, o envíe los comandos SMS para escribir los ajustes.
6. Reinicie el dispositivo si el firmware lo requiere para que los cambios de red entren en vigor.
7. Valide que el dispositivo está reportando a Plaspy comprobando la lista de dispositivos y la telemetría en la plataforma.

## Comandos de configuración de ejemplo

El SBC3 IO puede configurarse mediante comandos SMS. Los siguientes comandos públicos se presentan en el orden recomendado para la configuración inicial. El ejemplo usa la contraseña por defecto 123456 indicada en ejemplos públicos de Telic. Reemplace los marcadores como [apn], [apnu] y [apnp] con el APN y las credenciales de su operador.

1. Reinicio de fábrica opcional (usar solo si es necesario un restablecimiento completo)
```text
begin123456
```

2. Establecer la zona horaria a UTC 0
```text
time zone123456 0
```

3. Configurar el APN del operador (reemplace [apn] por el APN de su operador)
```text
apn123456 [apn]
```

4. Configurar usuario y contraseña del APN si son requeridos (reemplace los marcadores según corresponda)
```text
up123456 [apnu] [apnp]
```

5. Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
Como alternativa puede usar el dominio del servidor si el dispositivo acepta nombres de dominio:
```text
adminip123456 d.plaspy.com 8888
```

6. Cambiar a modo GPRS. Algunos firmwares usan la forma completa del parámetro, otros aceptan una forma corta
```text
gprs123456,1,1
```
o
```text
gprs123456
```

7. Consultar ajustes actuales (comando de verificación)
```text
check123456
```

Notas sobre los marcadores
- [apn] es el nombre del punto de acceso del operador.
- [apnu] es el nombre de usuario del APN si lo proporciona el operador móvil.
- [apnp] es la contraseña del APN si la requiere el operador.

## Notas de configuración

- La configuración por SMS está documentada públicamente para este modelo; si prefiere la herramienta de configuración de Telic, siga las instrucciones oficiales del proveedor para su versión de firmware.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Confirme el conjunto de comandos correcto para su dispositivo consultando la documentación de Telic.
- Elija UDP o TCP según el soporte del dispositivo y el comportamiento de la red. Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta.
- Mantenga la contraseña del dispositivo segura y cambie los valores por defecto si su política de instalación lo requiere.

## Por qué usar Plaspy con esta configuración

Usar el Telic SBC3 IO con Plaspy ofrece una vía directa para integrar dispositivos de rastreo robustos en una plataforma centralizada para visibilidad operativa. Apuntar el equipo al endpoint compartido de Plaspy y verificar la conectividad le permite monitorear ubicación, eventos de E/S y estado del dispositivo desde un solo lugar, lo que resulta útil para operaciones de flota, seguimiento de activos y monitoreo de equipos de campo.

Para obtener más información sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y la documentación completa de Telic consulte el sitio del fabricante https://www.telic.de. El comportamiento y los métodos de configuración del dispositivo pueden cambiar con el tiempo, por lo que verifique las instrucciones más recientes con Telic antes de desplegar a gran escala.
