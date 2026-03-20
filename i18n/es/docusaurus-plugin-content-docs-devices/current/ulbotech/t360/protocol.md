---
slug: /ulbotech/t360/protocol
id: t360-protocol
sidebar_label: Protocol
title: Ulbotech - T360 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador GPS Ulbotech T360 con Plaspy e indicaciones de conexión
keywords:
  - protocolo Ulbotech T360
  - rastreador GPS T360
  - compatibilidad Ulbotech T360 con Plaspy
  - protocolo de comunicación T360
  - protocolo de rastreo T360
  - protocolo GPS Ulbotech
  - protocolo OBD T360
  - rastreadores compatibles con Plaspy
  - rastreo vehicular T360
  - gestión de flotas T360
---

# Ulbotech - Protocolo T360

Esta página describe el contexto público del protocolo para usar el rastreador GPS Ulbotech T360 con la plataforma Plaspy. Está enfocada en cómo el equipo se comunica con Plaspy en términos generales y no sensibles, para que gerentes de flota, integradores y equipos técnicos entiendan las expectativas de conexión, los tipos de telemetría más comunes y el papel que desempeña el protocolo del rastreador en la ingestión del backend.

El T360 es un rastreador OBD-II plug-and-play basado en un receptor GNSS u-blox y un módem GPRS cuatribanda; ofrece subidas periódicas e inmediatas de posición, alarmas, eventos de geovalla y reportes de comportamiento de conducción. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y las pruebas siguen siendo importantes en el despliegue.

## Resumen del protocolo

El protocolo del T360 define cómo el dispositivo informa posición, eventos y telemetría básica a un backend remoto. En términos públicos, este protocolo permite que el rastreador se identifique ante el servidor, transmita ubicación y datos de sensores, y genere mensajes de evento que Plaspy puede procesar y convertir en alertas, informes y elementos del panel de control.

- Permite al rastreador enviar actualizaciones periódicas de ubicación y notificaciones inmediatas de eventos al backend.
- Transporta telemetría como eventos del acelerómetro, estado de ignición, voltaje de batería y activaciones de geovalla.
- Proporciona identificadores y mensajes de estado que permiten a Plaspy correlacionar paquetes entrantes con un dispositivo y vehículo específicos.
- Soporta reportes de alarmas y señales de inmovilizador del motor que alimentan flujos de trabajo antirobo.
- Opera sobre conectividad móvil estándar para que los dispositivos puedan reportar en tiempo real a un endpoint centralizado de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un T360 está configurado para reportar al endpoint de Plaspy. En la mayoría de los casos no es necesario elegir manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente apuntando a la dirección y puerto compartidos que utiliza Plaspy.

- Plaspy proporciona un único endpoint de servidor compartido para el reporte de dispositivos en d.plaspy.com.
- El servidor de Plaspy accesible por IP es 54.85.159.138 y escucha en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que una configuración de salida consistente es suficiente para muchos modelos de rastreadores.
- Cuando el dispositivo reporta al endpoint de Plaspy, la plataforma compara los mensajes entrantes con los formatos soportados y enruta los datos automáticamente.
- Normalmente los usuarios solo necesitan configurar el APN y la dirección del servidor en el lado del rastreador; Plaspy se encarga de la identificación del protocolo al recibir los mensajes.

## Transporte y contexto de conexión

El T360 reporta mediante GPRS móvil y soporta transportes de socket estándar. La selección del transporte del dispositivo y la dirección del servidor determinan cómo el rastreador alcanza Plaspy, y el T360 puede configurarse para usar modos de transporte comunes según el firmware y el aprovisionamiento.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el comportamiento del operador.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El puerto 8888 es el puerto de reporte compartido utilizado por Plaspy para todos los rastreadores soportados.
- Usar el dominio d.plaspy.com permite enrutamiento basado en DNS y puede ser preferible cuando operadores o condiciones de red requieren direcciones flexibles.
- Confirme los ajustes APN del operador y asegúrese de que la SIM tenga datos habilitados para que el T360 pueda establecer conectividad GPRS con Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades T360 pueden afectar qué mensajes están disponibles y cómo se reportan ciertos eventos.
- Las revisiones de hardware y las compilaciones regionales de firmware pueden cambiar el transporte predeterminado (UDP vs TCP) o el comportamiento de autodetección del APN.
- Ajustes del fabricante como APN automático y FOTA pueden simplificar el aprovisionamiento, pero pueden requerir verificación tras el despliegue.
- Algunas funciones reportadas por el protocolo, como control de inmovilizador o monitor de voz, dependen de regulaciones locales y de la capacidad del operador.
- Valide siempre una muestra representativa de dispositivos con su proveedor celular y en la geografía operacional antes de despliegues a gran escala.
- Use la documentación oficial del fabricante para confirmar comandos específicos del dispositivo y notas de versiones de firmware.

## Por qué es importante entender el protocolo

Comprender cómo el T360 se comunica con Plaspy ayuda a garantizar una configuración confiable, una resolución de problemas más rápida y una operación predecible a largo plazo. El conocimiento claro del transporte y de las expectativas de los mensajes reduce la fricción en el despliegue y mejora la calidad de los datos en Plaspy.

- Acelera el aprovisionamiento al alinear el APN del dispositivo y los ajustes de servidor con los requisitos de Plaspy.
- Ayuda a diagnosticar problemas de conectividad cuando los dispositivos no aparecen en los paneles de Plaspy.
- Permite interpretar correctamente campos de telemetría como eventos del acelerómetro y estado de ignición.
- Facilita la planificación del uso de funciones como inmovilización, alertas de geovalla y reportes programados.
- Reduce el tiempo de resolución ante desajustes de firmware o configuración al centrar la investigación en el transporte y las diferencias de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T360 con Plaspy ofrece una solución OBD-II compacta para organizaciones que necesitan instalación rápida, visibilidad continua del vehículo y alertas basadas en eventos. La forma OBD del T360, sus sensores internos y el soporte FOTA lo hacen adecuado para despliegues de flotas, servicios de alquiler y flujos antirobo donde la instalación rápida y la gestión centralizada son prioritarias.

Plaspy acepta los reportes del T360 mediante el endpoint y puerto compartidos, detecta automáticamente el protocolo del rastreador y convierte los mensajes crudos del dispositivo en datos de ubicación y eventos utilizables para paneles y alertas. Para saber más sobre Plaspy y cómo puede integrarse con dispositivos como el T360 visite https://www.plaspy.com. Tenga en cuenta que el soporte del protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo con el fabricante en http://www.ulbotech.com/ para obtener la guía más actual.
