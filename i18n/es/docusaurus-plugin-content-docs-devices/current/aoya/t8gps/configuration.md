---
slug: /aoya/t8gps/configuration
id: t8gps-configuration
sidebar_label: Configuration
title: AoYa - T8GPS Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AoYa T8GPS para usar con Plaspy, con ajustes de servidor compartido e instrucciones para SMS o herramientas del fabricante
keywords:
  - Configuración AoYa T8GPS
  - Configuración T8GPS
  - AoYa T8GPS Plaspy
  - Configuración rastreador GPS AoYa
  - Configuración servidor T8GPS
  - Configuración seguimiento T8GPS
  - Configuración seguimiento vehicular
  - Rastreo de flota AoYa T8GPS
  - Configuración rastreador Plaspy
  - Configuración plataforma rastreador GPS
---

# AoYa - Configuración del T8GPS

Esta página describe el contexto de configuración público para usar el rastreador AoYa T8GPS con la plataforma Plaspy. Resume los ajustes de servidor compartidos de Plaspy que debe aplicar al dispositivo y explica el flujo general para preparar el rastreador para comunicarse con Plaspy. La información se basa en la descripción pública del dispositivo y en métodos de configuración comunes, como las herramientas del fabricante o la configuración por SMS cuando corresponda.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las utilidades del proveedor. La documentación del T8GPS y las opciones de configuración disponibles para su dispositivo (por ejemplo SMS o software del proveedor) determinan la secuencia precisa para establecer APN, servidor, transporte y otros parámetros operativos.

## Resumen de la configuración

Este proceso prepara el T8GPS para que pueda enviar datos de ubicación y estado a Plaspy. El objetivo es apuntar el rastreador al endpoint del servidor de Plaspy, asegurar que el dispositivo tenga acceso de red válido, elegir el transporte correcto y confirmar que el equipo aparece en la plataforma.

- Configure el rastreador con los ajustes de servidor de Plaspy para que el dispositivo entregue actualizaciones de ubicación a la plataforma.
- Proporcione la configuración de datos móviles operativa, como el APN del operador y acceso a la red.
- Seleccione el modo de transporte apropiado (UDP o TCP) si el equipo lo requiere y guarde la configuración.
- Verifique la conectividad y confirme que el dispositivo informa correctamente en Plaspy.
- Use las herramientas del fabricante o las opciones de configuración por SMS para aplicar los ajustes y validar sin modificar el firmware del dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración y verificación basada en DNS
- IP del servidor 54.85.159.138 como el endpoint público usado por Plaspy
- Puerto 8888 que Plaspy usa para conexiones de dispositivos
- Soporte de transporte UDP o TCP; elija el transporte que su dispositivo soporte
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo servidor y puerto funcionan para dispositivos compatibles
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar a la plataforma

## Requisitos típicos antes de la configuración

- Alimentación estable al T8GPS y, cuando corresponda, batería interna de respaldo cargada
- Una SIM activa con servicio de datos GSM GPRS habilitado por su operador móvil
- Información del APN del operador disponible para configurar el acceso a la red
- Acceso al método oficial de configuración AoYa o al software del fabricante, o la capacidad de enviar comandos de configuración por SMS si el dispositivo lo soporta
- Una cuenta en Plaspy y la posibilidad de agregar o registrar el dispositivo en la plataforma para confirmar el reporte
- Acceso físico al dispositivo durante la configuración inicial y la validación

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el T8GPS envía sus datos de ubicación y estado al endpoint y puerto compartido de Plaspy para que la plataforma pueda mostrar posiciones y eventos. Plaspy gestiona la detección del protocolo y centraliza las conexiones en el mismo puerto de escucha para los dispositivos compatibles.

- El rastreador se apunta al endpoint de Plaspy (d.plaspy.com o la IP del servidor) para que los datos de ubicación entren en la plataforma
- Los datos se envían por el transporte seleccionado, UDP o TCP, según la capacidad del equipo y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador y acepta el flujo de datos entrante para su procesamiento
- El reporte permite la visibilidad en tiempo real de la ubicación y la generación de eventos o alertas basadas en los mensajes del dispositivo
- La conexión y el reporte exitosos se validan comprobando el estado del dispositivo en la plataforma Plaspy

## Flujo de configuración común

1. Acceda al método de configuración oficial de AoYa, como el software del proveedor o el canal de configuración por SMS descrito en el manual del dispositivo.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera la interfaz del equipo.
3. Configure el puerto del dispositivo en 8888 para que el rastreador envíe sus datos al puerto de escucha de Plaspy.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo solicita elegir uno y aplique el ajuste.
5. Guarde o aplique la configuración en el rastreador usando la herramienta del fabricante o completando los pasos de configuración por SMS si está soportado.
6. Valide que el dispositivo reporte a Plaspy confirmando que el rastreador aparece y se actualiza en su cuenta de Plaspy.

## Notas de configuración

- El AoYa T8GPS admite métodos de configuración suministrados por el fabricante; algunos instaladores prefieren comandos por SMS mientras que otros usan utilidades de escritorio del proveedor. Use el método oficial apropiado para su entorno.
- Las revisiones de firmware y hardware pueden cambiar los diálogos de configuración y las opciones soportadas. Confirme los pasos exactos para su versión del dispositivo en la documentación del fabricante.
- Elija UDP cuando se prefiera menor sobrecarga y TCP cuando la fiabilidad de la conexión y la entrega ordenada sean importantes; pruebe ambos si tiene dudas.
- Plaspy utiliza un solo puerto para todos los rastreadores compatibles y detecta automáticamente el protocolo entrante, lo que simplifica la configuración del servidor.
- Verifique siempre el APN del operador y la provisión de la red antes de diagnosticar la conectividad con el servidor.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AoYa T8GPS ofrece una forma directa de integrar los datos del dispositivo en una plataforma de rastreo centralizada. Apuntar el rastreador al servidor y puerto compartidos de Plaspy permite la ingesta consistente de mensajes de ubicación y estado, para que las organizaciones puedan monitorear vehículos, gestionar horarios y responder a eventos desde una única interfaz.

Para obtener más información sobre Plaspy y cómo soporta configuraciones de dispositivos como el AoYa T8GPS, visite https://www.plaspy.com. Para conocer los métodos de configuración más actuales del fabricante, el comportamiento del firmware y los detalles del dispositivo, verifique la documentación oficial de AoYa en http://www.aoyagps.com/ antes de realizar cambios en sus rastreadores desplegados.
