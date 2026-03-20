---
slug: /gotop/gv6/protocol
id: gv6-protocol
sidebar_label: Protocol
title: GOTOP - GV6 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del rastreador GOTOP GV6 con la plataforma de rastreo Plaspy
keywords:
  - protocolo GOTOP GV6
  - protocolo GPS GOTOP GV6
  - GOTOP GV6 Plaspy
  - protocolo rastreador GV6
  - compatibilidad GV6 Plaspy
  - protocolo rastreador de activos GOTOP
  - protocolo de comunicación GV6
  - protocolo de seguimiento GV6
  - gestión de flotas GOTOP GV6
  - rastreador GPS GV6 Plaspy
---

# GOTOP - Protocolo GV6

Esta página describe el contexto público del protocolo para usar el rastreador de activos GOTOP GV6 con Plaspy. Se centra en cómo el dispositivo comunica información con Plaspy en términos operativos y no sensibles, de modo que gestores de flotas e integradores puedan comprender lo necesario para una ingesta fiable de telemetría y seguimiento.

El GV6 es un rastreador 4G compacto con posicionamiento multimodal y larga autonomía de batería. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Considere siempre esas variables al planear despliegues o al solucionar problemas de conectividad.

## Resumen del protocolo

El protocolo de comunicación del GV6 define cómo el rastreador reporta ubicación, estado y eventos a un servicio backend como Plaspy. En términos públicos, este protocolo regula la identidad, los reportes periódicos, eventos de alarma e intercambios de comandos remotos para que Plaspy pueda presentar datos útiles en mapas, alertas y análisis históricos.

- Permite la transmisión periódica y basada en eventos de GPS y telemetría auxiliar desde el GV6 hacia Plaspy.
- Incluye la identificación y el estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correspondiente.
- Transporta eventos de alarma y sensores, como alarmas por remoción/caída y alertas por estaciones base falsas, para notificación en tiempo real.
- Soporta canales de configuración y control remoto para ajustar intervalos de reporte, horarios de energía y otros parámetros cuando el firmware del dispositivo lo permita.
- Proporciona la estructura que permite a Plaspy transformar reportes en bruto en posiciones en el mapa, rutas y alertas de la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y está diseñado para detectar automáticamente el protocolo del rastreador usado por los dispositivos soportados cuando reportan correctamente al servicio. En la mayoría de despliegues, el dispositivo solo necesita apuntar al endpoint de Plaspy para ser reconocido y asociado al activo correspondiente.

- Plaspy escucha en un puerto común para todos los dispositivos y determina automáticamente el protocolo del rastreador.
- Los dispositivos configurados para reportar al endpoint de Plaspy normalmente no requerirán selección manual del protocolo dentro de Plaspy.
- Plaspy usa el mismo puerto entre los dispositivos soportados para simplificar la incorporación y reducir errores de configuración.
- Se requieren una configuración correcta del dispositivo y credenciales o identificadores válidos para la detección automática y el mapeo del activo.
- Si un dispositivo no es reconocido, verificar el endpoint, el modo de transporte y los identificadores del dispositivo es el primer paso de solución de problemas.

## Contexto de transporte y conexión

Las unidades GV6 soportan conectividad celular y pueden configurarse para usar UDP o TCP para el reporte, según el firmware y las necesidades del despliegue. Plaspy expone un único endpoint y puerto conocido al que el dispositivo debe reportar para la ingesta en la nube y la detección automática del protocolo.

- El dominio del servidor Plaspy al que debe reportar es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones en el puerto 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del operador.
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración y centralizar el manejo del tráfico.
- La elección entre UDP o TCP afecta las características de entrega; seleccione el transporte soportado por su firmware GV6 y el entorno de red.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte, los comandos disponibles y los transportes soportados; confirme la versión de firmware al validar compatibilidad.
- Las revisiones de hardware y las variantes de producto pueden modificar la disponibilidad de sensores, las configuraciones de energía o las preferencias de comunicación.
- Las opciones de configuración del fabricante, como SMS o ajustes de endpoint en la nube, pueden afectar cómo el rastreador reporta a Plaspy.
- La selección de transporte entre UDP y TCP debe coincidir con la capacidad del dispositivo y el perfil de despliegue elegido.
- Plaspy detecta automáticamente el protocolo del rastreador, pero es necesaria la configuración correcta del endpoint y del transporte en el dispositivo.
- Valide funciones del dispositivo como posicionamiento multimodal, alarmas y control remoto contra la documentación más reciente del fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GV6 ayuda a asegurar una configuración precisa, una resolución eficaz de problemas y una operación fiable a largo plazo cuando se integra con Plaspy. El conocimiento claro del comportamiento de reporte y los requisitos de conexión reduce tiempos de inactividad y mejora la calidad de los datos de ubicación y eventos.

- Resolución más rápida de problemas de conectividad verificando endpoint, transporte e identificadores del dispositivo.
- Mejor gestión de la vida útil de la batería alineando intervalos de reporte y horarios de energía remotos con las capacidades del dispositivo.
- Manejo preciso de eventos para alarmas y alertas anti manipulación, garantizando notificaciones oportunas en Plaspy.
- Uso confiable de comandos remotos y configuración cuando están soportados por versiones de firmware específicas.
- Mejor planificación para despliegues a gran escala, considerando preferencias de transporte y diversidad de firmware.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP GV6 con Plaspy ofrece a las organizaciones una manera práctica de convertir la telemetría del dispositivo en información operativa. Las opciones de larga duración de batería del GV6, su posicionamiento multimodal y sus funciones de alarma encajan bien con casos de uso de Plaspy como visibilidad de activos, monitoreo antirrobo y reportes programados para logística y flotas de equipos.

La plataforma de Plaspy acepta reportes GV6 en un endpoint centralizado para que los equipos puedan monitorear ubicaciones en tiempo real, recibir alertas basadas en eventos y acceder a rutas históricas para análisis operativos. Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guía del fabricante, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/ ya que las implementaciones pueden cambiar con el tiempo.
