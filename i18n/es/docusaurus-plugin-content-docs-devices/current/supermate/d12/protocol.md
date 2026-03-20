---
slug: /supermate/d12/protocol
id: d12-protocol
sidebar_label: Protocol
title: Supermate - D12 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo para usar el rastreador GPS Supermate D12 con Plaspy y sus ajustes de conexión comunes
keywords:
  - protocolo Supermate D12
  - protocolo GPS Supermate D12
  - compatibilidad Supermate D12 con Plaspy
  - protocolo rastreador Supermate
  - comunicación Supermate D12
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular Supermate D12
  - protocolo seguimiento activos D12
  - compatibilidad dispositivos Plaspy
  - protocolo reporte rastreador
---

# Supermate - Protocolo D12

Esta página explica el contexto público del protocolo para usar el rastreador GPS Supermate D12 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, para que gerentes de flota, integradores y usuarios técnicos comprendan la relación de conexión y reporte entre el equipo y la plataforma.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página cubre el contexto público y no sensible, recomendando siempre verificar la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo del rastreador define cómo el Supermate D12 informa posición, movimiento, eventos de geocerca, alertas SOS y estado básico a un servidor remoto. En la integración con Plaspy, el objetivo del protocolo es entregar datos estructurados y oportunos que la plataforma pueda interpretar y mostrar a los usuarios sin que sea necesario seleccionar manualmente el protocolo cuando el dispositivo apunta al endpoint de Plaspy.

- Entrega reportes de ubicación en tiempo real y mensajes de evento que Plaspy usa para mapeo y alertas
- Identifica el dispositivo ante el servidor para que Plaspy asocie los datos entrantes con el activo correcto
- Transmite transiciones de geocerca, eventos del botón SOS y telemetría básica para visibilidad operativa
- Garantiza reportes periódicos para que Plaspy mantenga el seguimiento actualizado sin sondeos manuales
- Funciona sobre capas de transporte comunes para que los dispositivos se adapten a restricciones de red y despliegue

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Esto significa que la mayoría de los usuarios no necesitan elegir un protocolo dentro de Plaspy siempre que el Supermate D12 esté configurado para reportar al endpoint de Plaspy y utilice los ajustes de transporte compatibles.

- Plaspy usa un endpoint de servidor común para el reporte de dispositivos y reconoce automáticamente el protocolo entrante
- Normalmente no es necesario configurar un tipo de protocolo dentro de Plaspy para dispositivos soportados
- Asegúrese de que el equipo esté enviando datos a la configuración de servidor de Plaspy correcta para que la detección automática funcione
- Si un dispositivo no reporta como se espera, revise primero los ajustes de red del equipo y el comportamiento del firmware
- Plaspy agrupa datos identificables del dispositivo y los vincula a la cuenta y registro de activo correspondientes

## Contexto de transporte y conexión

Las opciones de conexión y transporte influyen en cómo el Supermate D12 alcanza a Plaspy. El dispositivo puede configurarse para usar UDP o TCP en el puerto de Plaspy según el soporte del equipo y la configuración del sitio. Plaspy acepta conexiones de rastreadores a una dirección compartida para que los dispositivos apunten a un endpoint estable.

- El dominio del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor de Plaspy es 54.85.159.138 y el puerto compartido es 8888
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el modelo y las opciones de firmware
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, por lo que no necesita puertos separados por modelo
- Apunte el Supermate D12 a d.plaspy.com o a la dirección numérica cuando su configuración de dispositivo lo permita

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir, cambiar o quitar funciones del protocolo, por lo que debe verificar el comportamiento según el firmware de su equipo
- Revisión de hardware o modelos variantes pueden usar opciones de reporte ligeramente distintas incluso bajo el mismo nombre de modelo
- En algunas implementaciones se prefiere TCP por su fiabilidad y en otras UDP por menor sobrecarga; elija según la red y la capacidad del dispositivo
- Los menús de configuración del fabricante pueden referirse a dirección de servidor, puerto y transporte; ajuste esos valores para que coincidan con los de Plaspy
- Los comandos desde el lado del fabricante y los métodos de configuración remota varían y es mejor confirmarlos con la documentación oficial
- Confirme que el dispositivo puede resolver nombres de dominio si va a usar d.plaspy.com en lugar de la dirección numérica

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del rastreador facilita una instalación fluida, operación confiable y una resolución de problemas más rápida al integrar el Supermate D12 con Plaspy. Saber qué transporte y ajustes usa el dispositivo reduce el tiempo de configuración y mejora la claridad diagnóstica.

- Ayuda a asegurar que el equipo apunte al endpoint correcto de Plaspy y use el transporte soportado
- Permite una solución de problemas más ágil cuando los reportes no llegan o los eventos son inconsistentes
- Aclara expectativas sobre tiempos de evento, alertas de geocerca y comportamiento de reportes SOS
- Permite validar la influencia del firmware en la frecuencia de mensajes y la telemetría disponible
- Apoya la planificación de red y aprovisionamiento de SIM en función de los patrones de datos esperados

## Por qué usar Plaspy con este protocolo

Usar el Supermate D12 con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de ubicación, alertas y telemetría básica para vehículos y activos. Plaspy acepta los reportes de los dispositivos en un endpoint compartido y presenta esa información a través de su plataforma para que los equipos puedan monitorear activos, responder a eventos SOS y gestionar alertas de geocerca de manera eficiente.

Si desea obtener más información sobre Plaspy, visite https://www.plaspy.com para detalles de la plataforma y opciones de cuenta. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que confirme los documentos de protocolo específicos y las notas de firmware actuales en el sitio del fabricante en http://www.gps-summit.com/
