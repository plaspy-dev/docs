---
slug: /arusnavi/arnavi_l2/protocol
id: arnavi_l2-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Arnavi L2 y cómo comunica con Plaspy para seguimiento de flotas en tiempo real confiable
keywords:
  - Protocolo Arusnavi Arnavi L2
  - Protocolo rastreador GPS Arusnavi
  - Compatibilidad Arnavi L2 Plaspy
  - Protocolo de comunicación Arnavi L2
  - Protocolo de rastreo Arnavi L2
  - Telemetría BLE Arusnavi
  - Rastreo de flotas Arnavi L2
  - Rastreador GNSS Arnavi L2
  - Protocolo de telemetría Arnavi L2
  - Integración Arnavi L2 Plaspy
---

# Arusnavi - Protocolo Arnavi L2

Esta página ofrece una visión pública del protocolo para usar el rastreador Arusnavi Arnavi L2 con Plaspy. Se centra en el contexto de comunicación necesario para enviar posiciones, telemetría y eventos de sensores desde el dispositivo sellado Arnavi L2 hacia los servidores de Plaspy, y explica cómo el comportamiento de reporte del dispositivo influye en una integración exitosa.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo, los mensajes disponibles y la cadencia de reporte pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página describe el contexto público y consideraciones prácticas en lugar de detalles internos del dispositivo.

## Visión general del protocolo

El Arnavi L2 implementa los modos de reporte y las interfaces de telemetría comunes soportadas por el fabricante, lo que le permite entregar posiciones GNSS, eventos de acelerómetro, telemetría de sensores BLE y estado de entradas/salidas a una plataforma de monitoreo como Plaspy. El protocolo define cómo el dispositivo se identifica, codifica la telemetría y señala eventos que Plaspy puede interpretar para ubicación, alertas y registro histórico.

- Permite al rastreador reportar fijaciones GNSS y metadatos de posicionamiento asistido por satélite para que Plaspy los muestre y archive.
- Transmite telemetría como eventos basados en acelerómetro, estado de ignición, mediciones de sensores BLE y el estado de entradas digitales.
- Proporciona identificación del dispositivo y contexto de sesión para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta configuración remota y subidas de caja negra (fallback) para que los registros almacenados puedan recuperarse en Plaspy tras la restauración de la conectividad.
- Usa modos de telemetría soportados por el fabricante para adaptarse al comportamiento regional del módem y a las opciones de administración de energía.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador según los datos que el dispositivo envía tras conectarse. En despliegues típicos, el dispositivo está configurado para reportar directamente al servidor de Plaspy, por lo que no se requiere una selección manual del protocolo dentro de Plaspy cuando el dispositivo apunta correctamente a la plataforma.

- Todos los dispositivos que se conectan a Plaspy usan el mismo puerto y endpoint compartido, lo que simplifica la configuración en flotas.
- El endpoint público del servidor de Plaspy es d.plaspy.com y también puede alcanzarse por IP en 54.85.159.138 para entornos que requieren direccionamiento numérico.
- El puerto de servicio estándar para Plaspy es 8888, y Plaspy detecta automáticamente el protocolo del rastreador una vez que los mensajes llegan a ese puerto.
- Usted normalmente no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La detección automática de protocolo reduce pasos de configuración y ayuda a manejar dispositivos que ejecutan modos de telemetría distintos sin configurar cada unidad por separado.

## Transporte y contexto de conexión

El Arnavi L2 soporta opciones comunes de transporte celular y puede configurarse para usar UDP o TCP para reportes al servidor, según los ajustes del dispositivo y las condiciones de la red. Comprender este contexto de transporte ayuda a asegurarse de que el dispositivo apunte correctamente y que firewalls o comportamientos NAT no bloqueen los reportes.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 cuando reporta a Plaspy.
- Configure el rastreador para apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 para garantizar conectividad.
- Plaspy escucha en el mismo puerto para todos los dispositivos compatibles, lo que evita mapeos de puertos por unidad y simplifica la provisión de la flota.
- Elija UDP para reportes de menor sobrecarga cuando se acepte pérdida de paquetes, o TCP cuando el firmware del dispositivo o la red del operador prefieran un transporte orientado a conexión.
- Verifique que firewalls intermedios, gateways NAT y la configuración APN del operador permitan tráfico saliente hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre versiones del Arnavi L2 pueden introducir cambios en campos reportados, etiquetas de telemetría o comandos remotos disponibles; confirme siempre la versión de firmware al validar el comportamiento.
- Las revisiones de hardware y las variantes regionales del módem pueden afectar las bandas celulares y el comportamiento del transporte; consulte la hoja de datos del Arnavi para la unidad específica en uso.
- El Arnavi L2 soporta modos de telemetría comunes y protocolos listados por el fabricante que pueden ser seleccionables en el dispositivo; verifique qué modo está usando el equipo antes de iniciar la resolución de problemas.
- La selección de transporte entre UDP y TCP puede alterar la semántica de entrega, por lo que conviene ajustar la configuración del dispositivo a las características de red esperadas en su despliegue.
- La telemetría BLE y el comportamiento de sensores emparejados se gestionan localmente en el dispositivo y se reportan a través de la misma conexión al servidor; asegúrese de la compatibilidad de los sensores BLE y del estado de emparejamiento cuando espere datos de sensores.
- Valide la compatibilidad y las expectativas de mensajes contra la documentación técnica más reciente del Arnavi para tener en cuenta actualizaciones del fabricante.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador reduce el tiempo de configuración y mejora la fiabilidad operativa al aclarar cómo el dispositivo reporta identidad, posiciones y eventos a Plaspy. Saber qué envía el equipo y cómo la plataforma espera recibirlo ayuda al poner en marcha dispositivos, diagnosticar telemetría faltante o planear actualizaciones de firmware.

- Facilita asegurarse de que el dispositivo esté configurado para reportar al endpoint y puerto correctos de Plaspy para una detección inmediata.
- Acelera la resolución de problemas al acotar si el problema es transporte, firmware, emparejamiento de sensores o configuración del servidor.
- Mejora la planificación del despliegue al mostrar cómo la gestión de energía y los intervalos de reporte impactan la frescura de los datos y la vida de la batería.
- Favorece el uso confiable de sensores BLE y funciones de I/O al aclarar cómo esos eventos llegan a Plaspy.
- Ayuda a validar los comportamientos de fallback y de subida de caja negra para que los datos históricos se recuperen después de cortes de conectividad.

## Por qué usar Plaspy con este protocolo

Usar el Arnavi L2 con Plaspy ofrece un nodo de telemetría compacto y robusto para organizaciones que requieren visibilidad casi en tiempo real y supervisión consolidada de la flota. Plaspy recibe posiciones GNSS, eventos de acelerómetro, telemetría de sensores BLE y estado de entradas discretas, de modo que los equipos pueden monitorear rutas, detectar eventos de ignición, seguir sensores de combustible o temperatura y recuperar registros de caja negra cuando sea necesario.

Si desea conocer más sobre cómo funciona Plaspy con dispositivos como el Arnavi L2, visite https://www.plaspy.com. Para detalles específicos del protocolo, cambios de firmware y la documentación más reciente del fabricante, verifique la información en el sitio oficial de Arusnavi en https://www.arusnavi.ru ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
