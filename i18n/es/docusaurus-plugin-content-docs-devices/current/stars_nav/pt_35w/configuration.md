---
slug: /stars_nav/pt_35w/configuration
id: pt_35w-configuration
sidebar_label: Configuration
title: Stars Nav - PT-35W Configuration
sidebar_class_name: menu_item_tracker
description: Configure Stars Nav PT-35W para Plaspy usando ajustes de servidor compartido y detección automática de protocolo
keywords:
  - configuración de Stars Nav PT-35W
  - configuración PT-35W
  - configuración del rastreador Stars Nav
  - configuración PT-35W para Plaspy
  - configuración de rastreador GPS
  - ajustes de servidor Plaspy
  - configuración de rastreo de vehículos
  - seguimiento de activos PT-35W
  - rastreador GPS impermeable
  - configuración de gestión de flotas
---

# Stars Nav - PT-35W: Configuración

Esta página describe el contexto público de configuración para usar el rastreador Stars Nav PT-35W con Plaspy. Aquí se explican los ajustes compartidos del servidor Plaspy que deberá aplicar al dispositivo, los requisitos habituales antes de la integración y un flujo de trabajo práctico para preparar la unidad y que informe a Plaspy en tiempo real para rastreo y alertas. La guía está pensada para instaladores técnicos y administradores de flotas que necesiten mapear los pasos de configuración del PT-35W al proceso de ingestión de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Revise siempre la documentación de Stars Nav y cualquier manual o utilidad específica del dispositivo antes de cambiar parámetros.

## Resumen de la configuración

Configurar el PT-35W para Plaspy consiste principalmente en dirigir el dispositivo al endpoint del servidor Plaspy y asegurar que el rastreador pueda conectarse de forma fiable a la red celular. El proceso suele incluir definir la dirección del servidor, seleccionar el transporte si es necesario, establecer el puerto y validar que la unidad informe ubicación y estado a la plataforma Plaspy.

- Apunte el PT-35W al endpoint de Plaspy para que los reportes de ubicación lleguen a la plataforma.
- Seleccione el protocolo de transporte compatible con el firmware del dispositivo y el entorno de red.
- Verifique APN y parámetros celulares para que el rastreador tenga conectividad a Internet.
- Aplique y guarde los ajustes, luego haga una prueba de conectividad para confirmar que los reportes llegan a Plaspy.
- Supervise el estado en línea/fuera de línea del rastreador y las entradas de eventos como pánico o estado del motor después de la configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el PT-35W. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando este se conecte.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol on connection

## Requisitos típicos antes de la puesta en marcha

- Confirme que el PT-35W esté alimentado y accesible, con batería interna cargada o conectado a alimentación externa.
- Asegúrese de que haya una SIM compatible instalada y que el servicio celular esté activo si va a usar SMS o reportes IP.
- Obtenga acceso a las herramientas de configuración de Stars Nav o al manual del dispositivo necesarias para cambiar servidor y opciones de transporte.
- Tenga a mano el APN y las credenciales del operador si el dispositivo requiere configuración de APN para datos por paquete.
- Acceda a una cuenta o tenant de Plaspy donde el dispositivo será registrado y verificado.
- Tenga la posibilidad de reiniciar o hacer un ciclo de energía del equipo después de aplicar ajustes si el dispositivo requiere reboot para aplicar cambios.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el PT-35W envía su ubicación GPS y mensajes de estado al endpoint y puerto compartidos de Plaspy. Plaspy procesa los mensajes del dispositivo, los asigna al modelo de protocolo correspondiente y expone posiciones y eventos a través de los paneles y sistemas de alertas de la plataforma.

- El rastreador se apunta a d.plaspy.com o a la IP 54.85.159.138 para la entrega de mensajes.
- Los mensajes se envían por el puerto 8888 usando UDP o TCP, según la selección de transporte del dispositivo.
- Plaspy identifica automáticamente el protocolo del rastreador y analiza los reportes de ubicación y alarma.
- Eventos de estado como entrada de pánico o estado del motor se reenvían a Plaspy para generar alertas.
- La plataforma ofrece visibilidad en línea/fuera de línea para que usted confirme que los reportes se reciben correctamente.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de Stars Nav o al software para el PT-35W, por ejemplo la herramienta web del proveedor, el conjunto de comandos por SMS o la utilidad USB/config documentada por Stars Nav.
2. Introduzca la dirección del servidor Plaspy por dominio d.plaspy.com o por IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo a 8888 para ajustar la ingestión de Plaspy para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte, basándose en las recomendaciones de firmware y la red.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe el comando SMS correspondiente si la unidad usa configuración por SMS.
6. Reinicie o haga un ciclo de energía del PT-35W si el equipo necesita reboot para que los nuevos ajustes entren en vigor.
7. Valide que el dispositivo informe a Plaspy comprobando el estado en su tenant de Plaspy y confirmando actualizaciones de ubicación y reporte de eventos.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y el método para enviarlos varían según el firmware de Stars Nav y la herramienta del proveedor que use. Algunas variantes del PT-35W soportan configuración por SMS, mientras que otras usan una utilidad de configuración o interfaz web. Dado que los comandos difieren entre revisiones de firmware, utilice siempre el manual de Stars Nav o la herramienta oficial para la sintaxis exacta.

Si su dispositivo admite configuración por SMS, los pasos generales son enviar la dirección del servidor y el puerto usando la secuencia de comandos documentada por el fabricante, luego guardar y reiniciar la unidad. Confirme siempre la sintaxis de los comandos en la documentación de Stars Nav antes de enviar.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y la ubicación de menús. Verifique los pasos exactos según el manual del equipo.
- Elija UDP o TCP de acuerdo con la recomendación del firmware del dispositivo y la estabilidad de la red celular en el área de instalación.
- Si el PT-35W se configura por SMS, asegúrese de que el número de control y la configuración del centro de mensajes (SMSC) coincidan con lo documentado por el dispositivo.
- Confirme las configuraciones de APN con su operador móvil si usa reportes por datos; un APN incorrecto impedirá conexiones IP a d.plaspy.com o 54.85.159.138.
- Después de la configuración, permita algunos ciclos de conexión para que el dispositivo aparezca en Plaspy y reciba la detección automática de protocolo.

## Por qué usar Plaspy con esta configuración

Usar el PT-35W con Plaspy le ofrece una forma práctica de centralizar reportes de ubicación, estado y alarmas de rastreadores resistentes al clima y de bajo consumo en una única plataforma. Para flotas y operadores de activos que despliegan rastreadores en motocicletas, embarcaciones o caravanas, esta configuración permite recibir posiciones GPS, alertas de pánico e información del estado del motor en Plaspy para monitoreo y respuesta.

Para obtener más información sobre Plaspy y cómo gestionar dispositivos PT-35W a escala, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles y comandos más recientes con el fabricante en http://www.starsnav.com/ antes de aplicar configuraciones en unidades de producción.
