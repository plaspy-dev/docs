---
slug: /calmamp/lmu_1100/protocol
id: lmu_1100-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-1100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CalmAmp LMU 1100 y su conexión a Plaspy mediante servidor y puerto compartidos
keywords:
  - CalmAmp LMU 1100
  - protocolo CalmAmp LMU 1100
  - protocolo rastreador GPS CalmAmp
  - compatibilidad LMU 1100 Plaspy
  - comunicación LMU 1100
  - protocolo seguimiento vehicular
  - integración rastreador GPS Plaspy
  - generador de eventos PEG
  - CalAmp PULS
  - seguimiento de activos exteriores
---

# CalmAmp - Protocolo LMU-1100

Esta página ofrece una visión pública del protocolo para usar el rastreador vehicular CalmAmp LMU-1100 con la plataforma Plaspy. Se enfoca en el contexto de comunicación y en las consideraciones prácticas de integración que importan al enviar datos de posición, estado y eventos desde unidades LMU-1100 hacia Plaspy, sin exponer detalles de implementación sensibles o específicos.

El LMU-1100 es un rastreador compacto y resistente al exterior, con desempeño GPS adecuado para vehículos recreativos y otros activos expuestos, además de contar con batería de respaldo y capacidades de E/S. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y el estado del firmware influirán en cómo el LMU-1100 reporta a Plaspy.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que el LMU-1100 usa para enviar mensajes de ubicación, estado y eventos a un servidor backend. En términos prácticos, el protocolo determina cómo se identifica el equipo, cuándo y cómo reporta posición y alertas, y cómo se intercambian confirmaciones del servidor o comandos cuando el dispositivo y la plataforma lo soportan.

- Permite que el LMU-1100 identifique la unidad y entregue posición GPS y estado a Plaspy
- Transporta mensajes impulsados por eventos como movimiento, cambios en entradas, activaciones de geocercas y alertas generadas por PEG
- Soporta reportes periódicos y mensajes bajo demanda que los gestores de flota utilizan para monitoreo y recuperación
- Funciona junto con funciones de CalmAmp como PEG para reglas de eventos programables y PULS para actualizaciones por aire
- Actúa como puente entre el dispositivo físico y Plaspy para telemetría y señales de gestión remota

## Detección del protocolo por parte de Plaspy

Plaspy recibe conexiones entrantes en un único punto de acceso y puerto compartidos, y usa el tráfico entrante del dispositivo para detectar automáticamente el protocolo del rastreador. Cuando un LMU-1100 está configurado para reportar a Plaspy, generalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo apunte al endpoint correcto de Plaspy y esté configurado correctamente.

- Plaspy escucha en el endpoint compartido d.plaspy.com
- La dirección del servidor de Plaspy es 54.85.159.138
- La plataforma acepta tráfico entrante de dispositivos en el puerto 8888 y detecta el protocolo automáticamente
- Por lo general, usted no necesita seleccionar un protocolo en Plaspy si el dispositivo reporta al endpoint de Plaspy
- Plaspy soporta múltiples tipos de rastreadores manteniendo un punto de conexión entrante consistente para mayor simplicidad

## Transporte y contexto de conexión

La configuración de transporte determina cómo el LMU-1100 envía sus mensajes de protocolo a Plaspy. El dispositivo puede configurarse para usar UDP o TCP según las capacidades del equipo y las preferencias de configuración de la flota. Es imprescindible que el host y el puerto estén correctos en la configuración del dispositivo para una entrega fiable de datos de posición y eventos.

- El LMU-1100 puede configurarse para usar UDP o TCP en el puerto 8888
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica el aprovisionamiento
- La elección entre UDP y TCP puede afectar las garantías de entrega y el comportamiento según las condiciones de red y la configuración del equipo
- Confirme los ajustes de transporte en la configuración del dispositivo o en el portal de gestión antes del despliegue

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de los mensajes y las funciones disponibles, por lo que conviene verificar la versión de firmware al planear la integración
- Las revisiones de hardware o las variantes regionales pueden exponer diferentes entradas, salidas o comportamientos de radio que afectan los reportes
- Herramientas del fabricante como PULS pueden modificar la configuración y las reglas PEG, lo que a su vez cambia qué eventos envía el rastreador
- La selección del transporte entre UDP y TCP debe alinearse con la configuración del equipo y el entorno de red
- La detección automática de protocolo de Plaspy reduce la necesidad de selección manual, pero no sustituye la validación del reporte del dispositivo en pruebas iniciales
- Valide siempre que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confirme que los mensajes llegan según lo esperado

## Por qué es importante entender el protocolo

Tener una comprensión práctica y clara de cómo el LMU-1100 se comunica con Plaspy ayuda a agilizar la configuración, la resolución de problemas y las operaciones confiables de la flota. Saber qué envía el rastreador y cómo se conecta reduce el tiempo de puesta en servicio y mejora la estabilidad general del sistema.

- Garantiza ajustes correctos de host y puerto en el dispositivo para una entrega exitosa
- Facilita el diagnóstico cuando los mensajes no aparecen en Plaspy revisando transporte y estado de firmware
- Ayuda a configurar de forma eficaz las reglas PEG para que los eventos relevantes se reporten a Plaspy
- Contribuye a planear intervalos de reporte y uso de batería para equilibrar visibilidad y consumo energético
- Mejora la coordinación con el soporte del fabricante cuando variaciones de firmware o hardware afectan el comportamiento

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp LMU-1100 con Plaspy ofrece una forma consolidada de monitorear activos exteriores y recreativos con un mínimo de carga de aprovisionamiento. El endpoint unificado de Plaspy y la detección automática del protocolo facilitan recibir datos de ubicación y eventos de una flota mixta de dispositivos mientras se mantienen prácticas de gestión consistentes.

Para obtener más información sobre cómo Plaspy funciona con dispositivos como el LMU-1100 visite https://www.plaspy.com. Por favor verifique los detalles actuales del protocolo del dispositivo, el comportamiento del firmware y la implementación del fabricante en el sitio oficial CalmAmp en http://www.calamp.com/ ya que el soporte de protocolo y el comportamiento del equipo pueden cambiar con el tiempo.
