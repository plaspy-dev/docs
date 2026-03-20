---
slug: /reachfar/rf_v22/configuration
id: rf_v22-configuration
sidebar_label: Configuration
title: Reachfar - RF-V22 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y servidor para integrar la alarma de puerta Reachfar RF V22 con Plaspy
keywords:
  - configuración Reachfar RF V22
  - configuración RF V22
  - configuración alarma de puerta Reachfar
  - configuración de dispositivo Plaspy
  - configuración monitor de puerta celular
  - configuración alarma de puerta GSM GPRS
  - integración RF V22 Plaspy
  - guía configuración telemetría de puerta
  - guía de configuración Reachfar
  - integración plataforma Plaspy
---

# Reachfar - Configuración RF‑V22

Esta página describe el contexto público de configuración para usar la alarma inteligente de puerta Reachfar RF‑V22 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera y resume los pasos prácticos y las comprobaciones que la mayoría de los instaladores realizan para apuntar un RF‑V22 a Plaspy y que reporte eventos de apertura y cierre de puerta. El contenido se centra en información de configuración pública y neutral respecto al fabricante y en el endpoint de Plaspy necesario para la integración.

Plaspy utiliza ajustes de servidor comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El RF‑V22 comunica el estado de la puerta mediante GSM/GPRS; esta guía explica cómo configurarlo para que reporte esos eventos al endpoint de Plaspy y la telemetría quede disponible en los paneles y reglas de alerta de Plaspy.

## Resumen de la configuración

El objetivo es preparar el RF‑V22 para que envíe de forma fiable los eventos de apertura y cierre de puerta a Plaspy, de modo que puedan usarse en alertas, registros y flujos operativos. Esto implica configurar los datos del servidor de Plaspy en el dispositivo, asegurar la conectividad celular y validar que la plataforma reciba los eventos.

- Apuntar el RF‑V22 al endpoint de Plaspy para que la telemetría de eventos de puerta llegue a la plataforma.
- Verificar que el equipo tenga conexión celular activa y señal suficiente para transmitir reportes por GSM/GPRS.
- Seleccionar el transporte adecuado (UDP o TCP) si el dispositivo lo requiere y configurar el puerto de Plaspy.
- Guardar y aplicar los ajustes en el dispositivo y reiniciarlo si el fabricante lo recomienda.
- Validar la entrega provocando eventos de apertura y cierre y confirmando su aparición en Plaspy.
- Consulte el manual del producto o el video de instalación de Reachfar para pasos específicos del dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com para la configuración del endpoint del dispositivo
- IP de servidor: 54.85.159.138 como endpoint alternativo para equipos que requieren una IP
- Puerto: 8888 como puerto de escucha de Plaspy para todos los dispositivos
- Transporte: soporte para UDP o TCP; configure el RF‑V22 en UDP o TCP si el equipo exige selección de transporte
- Detección automática de protocolo por parte de Plaspy para reconocer el protocolo del rastreador una vez que el dispositivo envíe datos

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles e intentará detectar automáticamente el protocolo que emplea el rastreador.

## Requisitos previos habituales

- Una unidad RF‑V22 alimentada, con el manual del instalador y, si está disponible, el video de instalación a la mano
- Una tarjeta SIM con un plan de datos activo compatible con quad band GSM GPRS si el equipo lo requiere
- Acceso al método de configuración que suministra Reachfar, como la herramienta del proveedor o la interfaz local de configuración
- Señal celular razonable en el lugar de instalación o un plan para medir la potencia de la señal antes del montaje definitivo
- Acceso a su cuenta Plaspy o a la persona que administra el tenant Plaspy para confirmar la visibilidad del dispositivo tras la configuración
- Tiempo para realizar una prueba de validación abriendo y cerrando la puerta y confirmar el reporte de eventos

## Cómo se conecta este rastreador a Plaspy

El RF‑V22 envía eventos de apertura y cierre de puerta por GSM/GPRS al endpoint de monitoreo configurado. Cuando se configura con los ajustes de Plaspy, esos eventos llegan a la plataforma y aparecen como entradas de telemetría que pueden activar notificaciones, registrarse en historiales y participar en reglas de automatización.

- El RF‑V22 se configura para enviar mensajes de evento a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El dispositivo usa transporte UDP o TCP según la configuración seleccionada durante la puesta en marcha
- Plaspy detecta automáticamente el protocolo entrante del dispositivo y mapea los eventos de puerta dentro de la plataforma
- Eventos como apertura, cierre de puerta y estados de alarma se reenvían a Plaspy para alertas inmediatas e historial
- Una vez validado el reporte, el RF‑V22 contribuye a flujos combinados en Plaspy junto con otras fuentes de telemetría

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de Reachfar descrito en el manual del producto RF‑V22 o la documentación del instalador.
2. Ingrese el dominio del servidor d.plaspy.com o utilice la IP 54.85.159.138 en el campo de servidor o endpoint.
3. Configure el puerto del servidor en 8888, que es el puerto que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el RF‑V22 requiere seleccionar un transporte, y guarde esa elección.
5. Aplique o guarde la configuración del dispositivo usando la herramienta o la interfaz del fabricante.
6. Reinicie el equipo si el fabricante recomienda un reinicio después de la configuración.
7. Valide generando eventos de apertura y cierre de puerta y confirme que los eventos aparecen en Plaspy.

Siga el manual de Reachfar y el video de instalación para pasos de interfaz específicos del dispositivo durante este flujo.

## Ejemplos de comandos de configuración

El método de configuración del RF‑V22 y los comandos o pantallas exactas varían según el firmware y las herramientas de Reachfar. La documentación del fabricante suele detallar si la configuración se realiza vía herramienta web, utilidad dedicada o mediante SMS/CLI. Dado que los comandos difieren entre versiones de firmware y conjuntos de herramientas, consulte el manual del producto RF‑V22 para la sintaxis exacta y ejemplos paso a paso.

Si su versión del RF‑V22 permite comandos textuales o configuración por SMS, utilice las instrucciones oficiales de Reachfar para construir las entradas de servidor y puerto. Preserve marcadores como [apn], [apnu] o [apnp] exactamente tal como los provea el fabricante cuando aparezcan en las guías oficiales.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los menús de configuración y los transportes soportados; confirme siempre los pasos exactos para la revisión de su RF‑V22.
- La elección entre UDP y TCP puede afectar la fiabilidad y el orden de los mensajes; use el transporte recomendado por Reachfar para su contexto de despliegue.
- Como buena práctica, pruebe la conectividad celular y la entrega de eventos antes del montaje final para evitar viajes repetidos al sitio.
- Las variaciones de mercado y los requisitos regionales de la SIM pueden afectar el APN o las necesidades del plan de datos; siga la guía del operador y del fabricante.
- Mantenga el manual del producto Reachfar y el video de instalación disponibles durante el proceso de configuración como referencia.

## Por qué usar Plaspy con esta configuración

Usar el RF‑V22 con Plaspy ofrece visibilidad centralizada de los eventos de apertura y cierre de puertas junto con otras telemetrías gestionadas por Plaspy. Esto resulta útil para instalaciones y organizaciones que requieren alertas rápidas, auditoría histórica y la capacidad de correlacionar los eventos de puerta con otros datos operativos.

Para más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de Reachfar https://www.reachfargps.com/ ya que los pasos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo.
