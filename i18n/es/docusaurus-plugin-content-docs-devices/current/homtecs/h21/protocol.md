---
slug: /homtecs/h21/protocol
id: h21-protocol
sidebar_label: Protocol
title: Homtecs - H21 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del enrutador Homtecs H21 3G y cómo se comunica con Plaspy para integración de flotas e IoT
keywords:
  - protocolo Homtecs H21
  - protocolo GPS Homtecs H21
  - protocolo de comunicación Homtecs H21
  - protocolo de rastreo Homtecs H21
  - compatibilidad de dispositivos Plaspy
  - integración de protocolo de rastreadores GPS
  - conectividad del router Homtecs
  - gestión de flotas Homtecs H21
  - guía de integración de rastreadores
  - protocolo de router IoT
---

# Homtecs - Protocolo H21

Esta página documenta el contexto público del protocolo para usar el enrutador Homtecs H21 3G con Plaspy. Se centra en los detalles de comunicación y conexión a alto nivel que importan para integrar el H21 en una implementación de flotas o IoT supervisada por Plaspy, sin exponer detalles privados de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo en un H21 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece contexto para usar junto con la documentación del producto H21.

## Resumen del protocolo

A grandes rasgos, el H21 se comunica a través de redes IP para reportar estado y telemetría. El protocolo del dispositivo regula cómo el router o rastreador se identifica, transmite ubicación y telemetría, y recibe comandos remotos o solicitudes de configuración opcionales. Para la integración con Plaspy, este protocolo permite que el H21 entregue información útil de ubicación, conectividad y estado a la plataforma.

- El protocolo define cómo el dispositivo abre y mantiene una sesión con un endpoint de Plaspy y cómo se empaquetan los datos para transporte.
- Permite que el dispositivo se identifique para que Plaspy asigne los mensajes entrantes al registro de activo correcto.
- Transporta datos de posición y estado de red o GPIO que Plaspy convierte en eventos y métricas de la plataforma.
- Soporta mecanismos de keepalive para que los sitios remotos sean alcanzables y Plaspy pueda monitorizar la salud de la conectividad.
- El comportamiento del protocolo puede verse influenciado por características opcionales como conmutación de doble SIM, modos DTU por serial o hardware GPS si está presente.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint común del servidor y utiliza ese tráfico entrante para determinar automáticamente el protocolo del dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los patrones de conexión y de la carga útil entrante
- Normalmente el usuario no necesita elegir un protocolo dentro de Plaspy si el dispositivo reporta al endpoint de Plaspy
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de routers y cortafuegos

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento son importantes para la planificación de red y cortafuegos. El H21 puede configurarse para usar UDP o TCP según su uso y la versión de firmware o la configuración elegida por el instalador.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al servidor Plaspy usando el dominio d.plaspy.com o directamente a 54.85.159.138
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce la configuración por dispositivo
- Seleccione UDP o TCP en el dispositivo según la confiabilidad de la red y las capacidades del equipo
- Asegúrese de que cualquier cortafuegos intermedio o dispositivo NAT permita sesiones salientes al endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades H21 pueden cambiar los mensajes y las características que un dispositivo envía o acepta.
- Revisiones de hardware u módulos opcionales como GPS o DTU serial pueden alterar la telemetría disponible y el comportamiento del protocolo.
- Opciones de configuración del fabricante como APN, SIMs con IP estática o DNS dinámico pueden afectar cómo llega el dispositivo a Plaspy.
- Cambiar entre transporte UDP y TCP puede influir en la confiabilidad y el tiempo de los mensajes reportados.
- Valide la compatibilidad y las configuraciones recomendadas contra la documentación de Homtecs y los menús de configuración del dispositivo.
- Al integrar a gran escala, pruebe una unidad de muestra con el firmware y la configuración de SIM elegidos antes del despliegue masivo.
- Tenga en cuenta que las funciones de gestión remota y las configuraciones de VPN o cortafuegos pueden interactuar con el comportamiento de reporte del dispositivo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del dispositivo ayuda a asegurar una configuración correcta, un flujo de datos fiable y una resolución de problemas eficiente cuando se usan dispositivos H21 con Plaspy. Tener claro el protocolo y las opciones de transporte reduce el tiempo de integración y mejora la estabilidad operativa.

- Le ayuda a configurar el H21 para que apunte al endpoint y modo de transporte correctos en Plaspy
- Conocer el comportamiento de keepalive y reconexión facilita la planificación de conectividad celular y energía en sitios remotos
- La comprensión del protocolo hace más sencillo interpretar el estado del dispositivo y los eventos de conectividad mostrados en Plaspy
- Ayuda en la resolución de problemas de red al aclarar qué puertos y hosts deben ser accesibles
- Entender la interacción entre características opcionales reduce sorpresas al habilitar opciones de firmware o hardware

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un dispositivo H21 ofrece visibilidad centralizada de la conectividad del equipo, la ubicación si está disponible y el estado operativo en sitios distribuidos. El H21 está diseñado para entornos industriales y sus robustas funciones de conectividad se complementan con Plaspy para ofrecer monitoreo y generación de eventos en casos de uso M2M y de gestión de flotas.

Plaspy simplifica la integración al escuchar en un único endpoint y puerto compartido y al detectar automáticamente el protocolo del dispositivo. Para obtener más información sobre Plaspy y cómo maneja los protocolos de dispositivos visite https://www.plaspy.com. Para detalles más actuales y específicos por dispositivo sobre protocolos, firmware, opciones de configuración y revisiones de hardware consulte el sitio oficial de Homtecs en http://www.homtecsm2m.com/ para verificar la información del fabricante.
