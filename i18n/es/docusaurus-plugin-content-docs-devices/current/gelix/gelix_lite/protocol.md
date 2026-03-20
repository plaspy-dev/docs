---
slug: /gelix/gelix_lite/protocol
id: gelix_lite-protocol
sidebar_label: Protocol
title: Gelix - Gelix Lite Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Gelix Lite para su integración con Plaspy, detección de transporte y puntos clave de compatibilidad
keywords:
  - protocolo Gelix Gelix Lite
  - protocolo GPS Gelix Lite
  - rastreador Gelix Plaspy
  - comunicaciones Gelix Lite
  - protocolo telemático Gelix
  - compatibilidad Gelix Lite
  - protocolo de rastreo Gelix
  - integración dispositivo Gelix
  - configuración Gelix Lite
  - telemetría Gelix Plaspy
---

# Gelix - Protocolo Gelix Lite

Esta página explica el contexto público del protocolo para usar el rastreador Gelix Lite con Plaspy. Se centra en cómo el dispositivo comunica por datos móviles y mensajería, qué papel tiene el protocolo de reporte del rastreador en la integración y los puntos prácticos que importan al configurar Gelix Lite para que informe a Plaspy. Los detalles técnicos son de alto nivel y aptos para difusión pública.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo para Gelix Lite puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene confirmar el comportamiento específico del equipo con el fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo es el conjunto de reglas que Gelix Lite utiliza para enviar posiciones, actualizaciones de estado y lecturas de sensores a un servidor remoto. En Gelix Lite esto suele incluir datos GNSS de posición, registro de eventos, conteo de entradas digitales, lecturas de sensores vía interfaces seriales y mensajes de estado del dispositivo enviados por datos móviles o SMS. Plaspy recibe esos reportes y los convierte en información de ubicación y eventos útil para la supervisión de flotas.

- Permite enviar actualizaciones de posición basadas en GNSS a un servidor remoto para rastreo y geocercas
- Transmite datos de eventos y la información configurable del activo para informes y alertas
- Incluye valores de sensores y entradas obtenidos de contactos secos, sensores de pulso y adaptadores seriales
- Soporta formatos de reporte y opciones de transferencia flexibles seleccionables en el dispositivo
- Permite que el dispositivo se identifique y especifique su modo de reporte para que el servidor procese los mensajes entrantes

## Cómo detecta Plaspy el protocolo

Plaspy centraliza la conectividad para que los propietarios de dispositivos solo necesiten apuntar Gelix Lite al endpoint de Plaspy. Plaspy escucha en un servidor y puerto compartidos y detecta automáticamente el protocolo del rastreador entrante sin que el usuario tenga que seleccionar el protocolo manualmente en muchos casos habituales. La configuración correcta del equipo para reportar a Plaspy es el requisito habitual para la detección automática.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte
- La IP del servidor Plaspy es 54.85.159.138 y es un endpoint alternativo al que pueden reportar los dispositivos
- El puerto es 8888, que Plaspy usa para todos los dispositivos soportados, de modo que un solo puerto funciona entre modelos
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de red
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint

## Transporte y contexto de la conexión

El contexto de conexión describe cómo Gelix Lite entrega sus reportes al servidor. El dispositivo soporta reporte de datos sobre GPRS y también puede usar SMS para control o mensajería de respaldo. Dependiendo de la configuración de Gelix Lite puede abrir sesiones TCP o UDP hacia el servidor y puerto configurados, o usar comandos dirigidos por SMS para ciertas operaciones remotas.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- El equipo puede usar UDP o TCP en el puerto 8888 según la configuración y las capacidades del firmware
- Todos los dispositivos soportados por Plaspy comparten el mismo puerto, lo que facilita la configuración de firewall y APN
- El reporte principal se realiza por IP sobre GPRS, con SMS disponible para comandos y mensajería de respaldo
- Los ajustes de red y APN en el dispositivo deben permitir conexiones salientes hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware pueden cambiar los formatos de mensaje y las funciones disponibles entre versiones
- Revisiones de hardware u accesorios opcionales, como adaptadores CAN, pueden afectar qué campos de datos se reportan
- Las opciones de configuración del fabricante determinan los formatos de reporte disponibles y el comportamiento del registro de eventos
- La elección de transporte TCP frente a UDP puede afectar el comportamiento de entrega y debe coincidir con el soporte del dispositivo
- La capacidad de servidor dual en el dispositivo puede usarse para configurar un endpoint primario y uno secundario de reporte
- Valide la compatibilidad contra la documentación oficial de Gelix para detalles específicos de firmware

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que Gelix Lite reporte los datos correctos a Plaspy y que la plataforma interprete esos datos de forma adecuada. Conocer los modos de reporte, la selección de transporte y los canales de sensores disponibles reduce el tiempo de configuración y mejora la fiabilidad operativa.

- Asegura que el host y puerto del servidor estén correctamente configurados para que los mensajes lleguen a Plaspy sin bloqueo de red
- Facilita mapear las entradas del dispositivo y los datos de sensores seriales a los campos de telemetría de Plaspy para reportes precisos
- Orienta en la resolución de problemas cuando los reportes de posición o eventos no aparecen en la plataforma
- Informa decisiones sobre usar TCP o UDP y configurar APN o reglas de firewall
- Prepara a los equipos sobre el impacto de actualizaciones de firmware o cambios de hardware en los datos reportados

## Por qué usar Plaspy con este protocolo

Usar Gelix Lite con Plaspy ofrece a las organizaciones un endpoint y un entorno de parseo consistentes para la telemetría de vehículos y activos. La combinación de las funciones de Gelix Lite, como el reporte configurable, soporte de sensores externos y capacidad de gestión remota de firmware, con la detección automática de protocolo de Plaspy y un diseño de puerto único simplifica el despliegue en flotas mixtas y en instalaciones con muchos sensores.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como Gelix Lite visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que conviene verificar la información específica más reciente en el sitio del fabricante en http://www.gelix.com/ antes de realizar despliegues a gran escala.
