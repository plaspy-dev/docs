---
slug: /xirgo/xt_2000/configuration
id: xt_2000-configuration
sidebar_label: Configuration
title: Xirgo - XT-2000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para la compatibilidad del Xirgo XT-2000 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Xirgo XT-2000
  - Configuración XT-2000 para Plaspy
  - Configuración de servidor Xirgo XT 2000
  - Configuración del rastreador GPS XT-2000
  - Configuración OBD II XT-2000
  - Configuración de dispositivo Plaspy
  - Configuración SMS XT-2000
  - Guía de instalación Xirgo
  - Ajustes APN XT-2000
  - Configuración de rastreo vehicular Xirgo
---

# Xirgo - XT-2000 Configuración

Esta página describe el contexto público de configuración para usar el Xirgo XT-2000 con Plaspy. Incluye los ajustes de servidor compartidos por Plaspy, el flujo de trabajo de configuración típico y los comandos SMS públicos que se usan comúnmente para apuntar un XT-2000 a Plaspy y permitir el envío de datos.

Plaspy emplea el mismo servidor y puerto para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El XT-2000 admite configuración por SMS y mediante datos celulares, por lo que esta guía se centra en acciones prácticas y públicas para preparar el equipo para comunicarse con Plaspy.

## Resumen de la configuración

El objetivo al configurar un XT-2000 para Plaspy es garantizar que el dispositivo pueda establecer una sesión de datos móviles o enviar mensajes al endpoint compartido de Plaspy para que la ubicación del vehículo y los parámetros OBD II sean visibles en la plataforma. Cuando esté disponible, la configuración por SMS facilita ajustar el APN y los parámetros del servidor durante la instalación.

- Configure el APN y los parámetros del operador para que el XT-2000 tenga acceso a datos celulares
- Apunte el equipo al endpoint y puerto de Plaspy para que los datos entren en la plataforma
- Seleccione el protocolo de transporte si el firmware del dispositivo lo requiere y guarde la configuración
- Valide la conectividad y confirme que el dispositivo informe a Plaspy para que los datos del vehículo aparezcan en la plataforma
- Use SMS o las herramientas del fabricante según lo soportado por el XT-2000 para el aprovisionamiento inicial

## Ajustes del servidor de Plaspy

Al configurar el XT-2000 para Plaspy, use los siguientes ajustes públicos exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en la plataforma

Estos valores son el endpoint público y el puerto que su XT-2000 debe reportar para que sea visible en Plaspy.

## Requisitos previos habituales antes de la instalación

- Un XT-2000 alimentado e instalado en el puerto OBD II del vehículo para que el dispositivo tenga energía y acceso a los datos del vehículo
- Una SIM celular activa con plan de datos y los ajustes APN correctos para el operador móvil
- Acceso al método de configuración del fabricante requerido para su versión de dispositivo, como comandos SMS o herramientas de aprovisionamiento de Xirgo
- Conocimiento del APN del operador y, si procede, del nombre de usuario y contraseña del APN
- Un medio para recibir mensajes de estado o confirmaciones del dispositivo durante el aprovisionamiento, por ejemplo SMS o indicadores LED del equipo
- Acceso básico a la cuenta o al proceso de incorporación en Plaspy para poder verificar el dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El XT-2000 usa la conectividad celular y la configuración del dispositivo para enviar información de posición y del vehículo al endpoint compartido de Plaspy. Una vez aprovisionado con el APN y los ajustes de servidor correctos, el equipo comenzará a reportar a Plaspy en el puerto de la plataforma.

- El dispositivo establece una conexión de datos celulares usando el APN y las credenciales del operador configurados
- El XT-2000 envía paquetes de telemetría al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888
- El transporte puede configurarse en UDP o TCP según las opciones del firmware y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere la telemetría para mapeo, eventos y diagnóstico
- El reporte exitoso hace que la ubicación del vehículo y los parámetros OBD II sean visibles en Plaspy para monitoreo e informes

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Xirgo requerido para su modelo, como aprovisionamiento por SMS o la herramienta de configuración del fabricante
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 según las opciones de entrada del dispositivo
3. Configure el puerto del servidor en 8888, que es el requerido por Plaspy
4. Seleccione UDP o TCP si el equipo solicita elegir un protocolo de transporte
5. Configure el APN del operador y cualquier nombre de usuario o contraseña del APN que su SIM requiera
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware necesita reinicio para aplicar cambios
7. Verifique que el dispositivo informe a Plaspy comprobando el estado del equipo en la plataforma o confirmando la recepción de telemetría

Si se usa aprovisionamiento por SMS, envíe los comandos documentados desde un número de teléfono autorizado por el instalador o técnico según la guía de Xirgo.

## Ejemplos de comandos de configuración

El XT-2000 admite configuración por SMS. Los siguientes comandos SMS públicos provienen de la documentación del dispositivo para establecer el APN del operador y el servidor GPRS. Envíelos como mensajes SMS desde un teléfono autorizado al equipo.

1) Configurar el APN del operador
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- Explicación de los marcadores
  - {{apn}} es el nombre del APN proporcionado por su operador móvil
  - {{apnu}} es el nombre de usuario del APN si el operador lo requiere; déjelo vacío si no se usa
  - {{apnp}} es la contraseña del APN si el operador la requiere; déjela vacía si no se usa

2) Configurar el servidor GPRS y el puerto para Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- Este comando configura el equipo para reportar al servidor Plaspy IP 54.85.159.138 en el puerto 8888. Preserve el orden de parámetros tal como se indica.
- Si su flujo de aprovisionamiento prefiere un dominio, configure d.plaspy.com en su herramienta del fabricante cuando la entrada por dominio esté disponible en lugar de la IP.

Nota: Mantenga el orden de los comandos al aprovisionar; configure primero el APN para que el dispositivo tenga conectividad de datos antes de apuntar los ajustes del servidor.

## Notas de configuración

- Las diferencias de firmware y herramientas entre revisiones del XT-2000 pueden modificar la sintaxis exacta de los comandos o los campos disponibles; confirme siempre con las notas de la versión del firmware
- El XT-2000 soporta aprovisionamiento por SMS y por software; elija el método que se alinee con su flujo de instalación y políticas de seguridad
- Seleccionar TCP o UDP puede afectar el comportamiento de entrega de mensajes; pruebe el transporte elegido en su entorno para confirmar un reporte confiable a Plaspy
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la consistencia en el puerto facilita el aprovisionamiento
- Preserve los marcadores de APN tal como se muestran y reemplace únicamente con los valores suministrados por el operador durante el aprovisionamiento

## Por qué usar Plaspy con esta configuración

Usar el Xirgo XT-2000 con Plaspy ofrece a las organizaciones un camino sencillo para capturar la ubicación del vehículo y parámetros OBD II mediante una configuración de servidor consistente. El enfoque de servidor y puerto compartidos de Plaspy reduce la complejidad por dispositivo y permite a los instaladores concentrarse en el APN y la elección del transporte, mientras la plataforma se encarga de la detección de protocolo e ingestión de datos.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el XT-2000 visite https://www.plaspy.com. Para los comandos más actuales específicos del dispositivo, comportamiento del firmware y la guía de configuración del fabricante, verifique los detalles técnicos en el sitio de Xirgo https://xirgo.com/
