---
slug: /concox/wetrack_lite/protocol
id: wetrack_lite-protocol
sidebar_label: Protocol
title: Concox - Wetrack Lite Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar Concox Wetrack Lite con Plaspy, con orientación sobre conectividad y compatibilidad
keywords:
  - protocolo Concox Wetrack Lite
  - protocolo GPS Concox Wetrack Lite
  - protocolo de comunicación Wetrack Lite
  - compatibilidad Wetrack Lite con Plaspy
  - protocolo rastreador GPS Concox
  - compatibilidad de dispositivos Plaspy
  - protocolo de seguimiento de vehículos
  - protocolo rastreador gestión de flotas
  - integración rastreador GPS Plaspy
  - documentación del protocolo del rastreador
---

# Concox - Protocolo Wetrack Lite

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Concox Wetrack Lite con Plaspy. Explica, a alto nivel, cómo se comunica el dispositivo con Plaspy, qué esperar durante la configuración y qué ajustes de conexión son compartidos entre los dispositivos compatibles. El enfoque está en el contexto del protocolo y del transporte, no en detalles propietarios del fabricante.

Plaspy usa ajustes de conexión compartidos entre sus dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto de los paquetes y las capacidades pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que considere esto una orientación de protocolo y no un reemplazo completo de la documentación del proveedor.

## Resumen del protocolo

El protocolo de comunicación del rastreador es el método público mediante el cual el dispositivo informa ubicaciones GNSS, alertas de eventos y telemetría básica a un servidor remoto como Plaspy. En Wetrack Lite, el protocolo permite que el rastreador se identifique ante la plataforma, transmita actualizaciones de posición y estado, y almacene datos cuando la conectividad de red se interrumpe.

- Transporta posiciones derivadas del GNSS junto con telemetría del vehículo, como estado del encendido (ACC) y eventos del acelerómetro
- Reporta alertas basadas en eventos, incluyendo movimiento, exceso de velocidad, cambios de geocerca, vibraciones y eventos de alimentación
- Soporta almacenamiento en búfer en el dispositivo para preservar el historial de viajes durante cortes temporales de la red celular, de modo que Plaspy reciba los datos completos al restablecerse la conectividad
- Proporciona información de estado que Plaspy necesita para mapear telemetría a seguimiento en vivo, notificaciones e informes históricos
- Permite que el dispositivo se configure para reportar a un endpoint designado de Plaspy para ingesta automatizada

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint compartido y determina automáticamente el protocolo cuando un dispositivo está configurado para reportar a la plataforma. En la mayoría de las implementaciones, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta correctamente a la dirección y el puerto de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos
- Plaspy escucha en el puerto 8888 para conexiones de rastreadores
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía telemetría identificadora a la plataforma
- Normalmente los dispositivos solo necesitan apuntar al endpoint de Plaspy con el transporte y la configuración APN correctos para la detección automática del protocolo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas

## Contexto de transporte y conexión

Comprender la capa de transporte es importante para configurar el rastreador y que alcance a Plaspy de forma fiable. Wetrack Lite puede configurarse para usar distintos modos de transporte según el firmware del dispositivo y las preferencias del instalador. Los siguientes puntos resumen los detalles comunes de transporte y conexión relevantes para la integración con Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la sobrecarga de configurar puertos por dispositivo
- Elija UDP para menor sobrecarga y entrega potencialmente más rápida, o TCP cuando se prefiera entrega ordenada y persistencia de conexión, sujeto a las capacidades del dispositivo
- Asegúrese de que el APN y la configuración celular del dispositivo permitan conexiones salientes hacia el endpoint y el puerto de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los paquetes y las funciones soportadas; valide el comportamiento con las notas de la versión del firmware
- Las revisiones de hardware y cambios de fabricación pueden introducir diferencias sutiles en los transportes o en los campos de telemetría soportados
- Los comandos de configuración y los nombres de parámetros específicos del fabricante pueden variar; confirme siempre el conjunto de comandos correcto para su firmware
- La selección de transporte (UDP vs TCP) y el comportamiento del módem pueden afectar la estrategia de entrega y de almacenamiento en búfer
- El dispositivo debe estar configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy ingiera los datos
- Verifique la compatibilidad y los ajustes recomendados con la documentación oficial de Concox si tiene dudas

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo del rastreador ayuda a los instaladores y administradores de flotas a lograr reportes confiables, mapeo preciso y resolución de problemas más rápida al integrar Wetrack Lite con Plaspy. Saber qué entrega el protocolo y cómo se conecta el dispositivo reduce errores de configuración y mejora la disponibilidad operativa.

- Acelera el despliegue inicial al aclarar qué campos reporta el rastreador y con qué frecuencia se envían actualizaciones
- Facilita la resolución de problemas de conectividad al separar problemas de transporte de comportamientos de protocolo o firmware
- Mejora el manejo de eventos y la precisión de las alertas al alinear la configuración del dispositivo con las reglas y umbrales de Plaspy
- Garantiza que el comportamiento de almacenamiento en búfer y retransmisión se ajuste a las expectativas operativas frente a cortes de red breves
- Reduce las iteraciones de instalación al confirmar APN, transporte y ajustes de endpoint antes del despliegue en campo

## Por qué usar Plaspy con este protocolo

Usar Wetrack Lite con Plaspy brinda a las organizaciones visibilidad práctica de la ubicación y el estado del vehículo, al tiempo que admite instalaciones discretas y un amplio rango de voltaje de operación. Plaspy normaliza la telemetría entrante del dispositivo en mapas en vivo, alertas de eventos e informes históricos para que flotas y operadores de renta puedan actuar con información precisa y oportuna.

Si desea obtener más información sobre Plaspy y cómo se integra con dispositivos como el Concox Wetrack Lite, visite https://www.plaspy.com. Para el comportamiento más actual del protocolo específico del dispositivo, notas de firmware y detalles de implementación, verifique la información con el fabricante en https://www.iconcox.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
