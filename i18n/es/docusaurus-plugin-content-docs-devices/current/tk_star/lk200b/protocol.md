---
slug: /tk_star/lk200b/protocol
id: lk200b-protocol
sidebar_label: Protocol
title: TK-Star - LK200B Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público para compatibilidad del TK-Star LK200B con Plaspy y guía de conexión
keywords:
  - protocolo TK-Star LK200B
  - protocolo GPS TK-Star LK200B
  - protocolo TK-Star LK200B para Plaspy
  - protocolo de comunicación TK-Star LK200B
  - protocolo de rastreo TK-Star LK200B
  - integración de protocolo de rastreador GPS
  - compatibilidad de rastreadores Plaspy
  - rastreo de flotas LK200B
  - protocolo de rastreo de vehículos TK-Star
  - compatibilidad protocolo TK-Star
---

# TK-Star - Protocolo LK200B

Esta página explica, a nivel público, el contexto del protocolo utilizado por el rastreador GPS vehicular TK-Star LK200B cuando se integra con Plaspy. Se centra en cómo suele comunicarse el dispositivo con un servicio backend, qué esperar desde la perspectiva de la conexión y cómo Plaspy interpreta los datos entrantes de rastreadores compatibles. La información es de alto nivel y está pensada para facilitar la integración y la resolución de problemas, no para documentar detalles propietarios o específicos de firmware.

Plaspy emplea ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use las indicaciones a continuación para comprender el contexto de conexión, las consideraciones comunes de compatibilidad y los pasos prácticos al configurar dispositivos LK200B para que reporten a Plaspy.

## Resumen del protocolo

El protocolo de comunicación del rastreador define la forma pública en que el LK200B envía información de posición y estado a un servidor. En términos prácticos, el protocolo especifica cómo el dispositivo reporta su identidad, ubicación, eventos de movimiento y telemetría básica para que una plataforma como Plaspy pueda mostrar ubicaciones, alertas e historial útiles para los usuarios.

- Permite que el dispositivo envíe posiciones GPS en tiempo real y actualizaciones de movimiento a un servidor remoto
- Transporta la identificación y metadatos básicos del equipo para que el servidor relacione los datos con el activo correcto
- Transmite notificaciones de eventos como geocercas, exceso de velocidad y alertas de movimiento que Plaspy puede presentar a los usuarios
- Proporciona actualizaciones periódicas para trazabilidad del historial y seguimiento automático por intervalos para reconstrucción de rutas
- Permite enviar indicadores de estado como nivel de batería y calidad de señal que facilitan el monitoreo

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de muchos modelos distintos de rastreadores y determina automáticamente qué protocolo público está usando un equipo que reporta. En la mayoría de los casos, un LK200B configurado correctamente comenzará a enviar reportes al endpoint de Plaspy y la plataforma detectará el formato y empezará a procesar los datos sin necesidad de seleccionar manualmente el protocolo.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y el puerto es 8888
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador
- Normalmente no es necesario elegir manualmente el protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy
- Si un dispositivo no se detecta automáticamente, lo primero a revisar es la dirección de reporte del equipo y el modo de transporte

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el LK200B alcanza el endpoint de Plaspy. El LK200B se puede configurar para reportar mediante capas de transporte comunes soportadas por rastreadores celulares. Entender estas opciones ayuda a garantizar que el dispositivo pueda comunicarse con Plaspy de forma fiable en distintas redes e instalaciones.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los equipos pueden apuntar al dominio de reporte d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Plaspy escucha en el puerto 8888 para reportes entrantes y este es el puerto compartido para todos los dispositivos en la plataforma
- Elementos de red como NAT del operador, firewalls y filtrado de paquetes pueden afectar a UDP y TCP de forma distinta, por lo que conviene probar ambos transportes si hay problemas de conectividad
- Confirme el APN y la conectividad de la SIM en el rastreador antes de cambiar ajustes de protocolo de nivel superior

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo se reportan las funciones o qué eventos están disponibles; verifique las notas de firmware cuando el comportamiento difiera de lo esperado
- Las revisiones de hardware o módulos opcionales pueden afectar la telemetría disponible, por ejemplo entradas de sensores adicionales u datos OBD
- Algunas configuraciones del fabricante permiten cambiar el transporte o el modo de reporte, lo que puede influir en cómo Plaspy detecta y analiza los datos entrantes
- Valide siempre el destino de reporte del dispositivo y los ajustes de transporte versus la configuración del servidor Plaspy para asegurar que los datos lleguen a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Si utiliza herramientas de gestión de terceros o portales de revendedores para configurar el equipo, confirme que dichas herramientas no reemplacen la configuración de servidor o transporte
- Al probar, use un dispositivo de ensayo o un piloto pequeño para confirmar el comportamiento antes de desplegar masivamente

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de reporte del LK200B facilita una configuración confiable, resolución de problemas más rápida y un monitoreo operativo constante en Plaspy. Conocer las expectativas de conexión y las variables comunes de compatibilidad reduce tiempos de inactividad y mejora la precisión de la ubicación y los eventos recogidos por el rastreador.

- Acelera la puesta en marcha inicial asegurando la dirección de servidor y el transporte correctos
- Simplifica la resolución de problemas cuando los dispositivos no aparecen en Plaspy al reducir el foco a red, transporte o firmware
- Ayuda a anticipar cómo las actualizaciones de firmware pueden cambiar eventos disponibles o campos de datos mostrados en Plaspy
- Asiste en la planificación para condiciones de red donde TCP o UDP puedan ser preferibles
- Aumenta la confianza en la gestión de flota a largo plazo al clarificar la frecuencia esperada de actualizaciones de posición y estado

## Por qué usar Plaspy con este protocolo

Usar el TK-Star LK200B con Plaspy ofrece a las organizaciones una manera práctica de recolectar ubicación de vehículos, alertas e historial para visibilidad y supervisión operativa. La detección automática de protocolos de Plaspy y el puerto de conexión compartido simplifican la integración, de modo que los responsables de flota puedan concentrarse en reglas, geocercas e informes en lugar de en la configuración de parsers a bajo nivel.

Si desea conocer más sobre el despliegue de rastreadores con Plaspy o revisar las capacidades de la plataforma para monitoreo de flotas, visite https://www.plaspy.com. Para la documentación específica más actualizada sobre protocolos de dispositivo, notas de firmware y detalles de implementación, consulte al fabricante en https://www.tk-star.com/ ya que el comportamiento del protocolo y las funciones del firmware pueden cambiar con el tiempo.
