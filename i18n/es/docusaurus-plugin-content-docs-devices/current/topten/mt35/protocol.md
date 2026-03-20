---
slug: /topten/mt35/protocol
id: mt35-protocol
sidebar_label: Protocol
title: TopTen - MT35 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del rastreador TopTen MT35 con Plaspy, incluyendo ajustes de conexión y notas de integración
keywords:
  - TopTen MT35
  - protocolo TopTen MT35
  - protocolo GPS MT35
  - compatibilidad MT35 Plaspy
  - protocolo de rastreo MT35
  - protocolo de comunicación MT35
  - protocolo rastreador TopTen
  - rastreo de flotas MT35
  - rastreador de vehículos MT35
  - rastreador GPS MT35
---

# TopTen - Protocolo MT35

Esta página describe el contexto público del protocolo para usar el rastreador TopTen MT35 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, los ajustes de conexión que Plaspy espera y notas prácticas para ayudarle a obtener reportes fiables sin exponer detalles privados de implementación.

El TopTen MT35 es un rastreador 3G con conmutación a 2G que admite múltiples bandas de frecuencia y una amplia variedad de funciones, como envíos por SMS y web, registro de puntos de ruta, alarmas y opciones como voz o inmovilizador. Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los dispositivos que reportan a Plaspy deben apuntar al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888. El equipo puede configurarse para usar UDP o TCP en el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del MT35 es el mecanismo que permite que el rastreador envíe datos de ubicación, alertas de eventos y estado del dispositivo a Plaspy, y reciba comandos remotos o configuraciones cuando estén soportados. El protocolo define cómo el dispositivo se identifica, transmite telemetría y estructura los reportes para que Plaspy pueda presentar información útil a los usuarios.

- Proporciona identificación y metadatos del dispositivo para que Plaspy asocie los reportes entrantes con el rastreador correcto.
- Transmite actualizaciones de posición y mensajes de evento que Plaspy convierte en registros de ubicación y alarmas.
- Envía información de estado como energía, movimiento y eventos de alarma que se reflejan en las notificaciones y funciones de monitoreo de Plaspy.
- Soporta registro en el dispositivo y cargas por lotes para que los waypoints históricos (por ejemplo, puntos almacenados en el MT35) puedan sincronizarse con la plataforma.
- Permite dos opciones de transporte comunes, dejando que los dispositivos envíen datos por UDP o TCP según el soporte y la configuración del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos en un endpoint y puerto compartidos y reconoce automáticamente el protocolo del rastreador cuando el dispositivo reporta por primera vez. En la mayoría de los casos, si el MT35 está configurado para enviar datos al endpoint y puerto de Plaspy, no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Configure el dispositivo para reportar a d.plaspy.com o a la dirección IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todo el tráfico de dispositivos y utiliza el mismo puerto para cada rastreador soportado.
- Plaspy acepta conexiones UDP y TCP en ese puerto y procesa los datos entrantes según corresponda.
- Cuando llega un reporte con el formato adecuado, Plaspy utiliza detección automática para asociarlo con la identidad del MT35.
- Normalmente usted no necesita elegir un protocolo en Plaspy si el dispositivo está correctamente apuntado al endpoint de Plaspy y utiliza un transporte apropiado.

## Transporte y contexto de conexión

El transporte y el contexto de conexión determinan cómo el MT35 llega a Plaspy a través de la red móvil y cómo elementos de red como NAT y firewalls interactúan con el equipo. El MT35 soporta envío por datos móviles y puede configurarse para usar UDP o TCP según el firmware instalado y la configuración que aplique.

- Configure el rastreador para apuntar a d.plaspy.com o 54.85.159.138 como host de destino.
- Use el puerto 8888 tanto para conexiones TCP como UDP; Plaspy emplea el mismo puerto para todos los dispositivos soportados.
- Seleccione UDP o TCP en el dispositivo según la fiabilidad de la red y el soporte de funciones; algunas instalaciones prefieren TCP cuando la entrega garantizada es importante.
- Asegúrese de que la tarjeta SIM y el APN de datos estén configurados correctamente para que el dispositivo pueda establecer una conexión saliente hacia Plaspy.
- Considere el comportamiento de la red móvil y el NAT del operador celular al resolver problemas de conectividad.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden implementar opciones de reporte de forma distinta; verifique la versión de firmware del MT35 al evaluar compatibilidad.
- Las revisiones de hardware y las funciones opcionales (por ejemplo SOS, monitoreo de voz o soporte de inmovilizador) pueden influir en qué mensajes envía el dispositivo.
- Los menús de configuración del fabricante suelen controlar la selección de transporte entre UDP y TCP; elija el transporte que se adapte a su red y necesidades de monitoreo.
- El soporte regional de bandas de radio afecta dónde puede operar el MT35, pero no cambia el endpoint de conexión de Plaspy.
- Valide elementos de configuración importantes como el formato del ID del dispositivo, APN y dirección del servidor de reporte contra la documentación del fabricante.
- Cuando sea posible, realice una prueba en campo pequeña para confirmar que los puntos de ruta, alarmas y cargas históricas aparecen en Plaspy como se espera.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el MT35 le ayuda a configurar, solucionar problemas y mantener una conexión fiable con Plaspy. Entender el protocolo reduce el tiempo de integración, evita errores comunes de configuración y facilita interpretar el comportamiento del dispositivo cuando los reportes no aparecen como se espera.

- Confirma que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y que usa el puerto 8888.
- Ayuda a elegir entre UDP o TCP según las condiciones de red y el soporte de funciones del dispositivo.
- Facilita la resolución de problemas habituales como reportes faltantes, mapeo incorrecto de ID del dispositivo o conectividad intermitente.
- Permite planificar mejor despliegues de flotas al comprender el comportamiento de registro y las cargas de waypoints históricos.
- Reduce ciclos de soporte al alinear la configuración del dispositivo con las expectativas de conexión de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TopTen MT35 con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, alarmas de eventos y puntos de ruta históricos. La detección automática de protocolos de Plaspy y el uso de un puerto unificado simplifican la configuración de firewalls y servidores, permitiendo que flotas y usuarios individuales comiencen a reportar con menos pasos específicos por plataforma.

Si desea obtener más información sobre cómo funciona Plaspy con rastreadores como el TopTen MT35, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y revisiones de hardware más recientes, verifique la información en el sitio del fabricante http://www.t10.cn, ya que las implementaciones pueden cambiar con el tiempo.
