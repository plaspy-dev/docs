---
slug: /gotop/vt_360/protocol
id: vt_360-protocol
sidebar_label: Protocol
title: GOTOP - VT-360 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GOTOP VT-360 para compatibilidad y conexión con el servidor Plaspy
keywords:
  - protocolo GOTOP VT-360
  - protocolo GPS GOTOP VT-360
  - protocolo de rastreo VT-360
  - rastreador GOTOP Plaspy
  - compatibilidad VT-360
  - protocolo de rastreo de vehículos
  - comunicación GPS GOTOP
  - gestión de flotas VT-360
  - protocolo de dispositivo Plaspy
  - integración GOTOP VT360
---

# GOTOP - Protocolo VT-360

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP VT-360 con Plaspy. Se enfoca en los aspectos de comunicación e integración relevantes para enviar datos de posición, alarmas y estado a la plataforma Plaspy, sin exponer detalles internos de firmware o implementaciones privadas. El VT-360 es un rastreador GPS GSM GPRS pensado para seguimiento en tiempo real de vehículos y gestión de flotas; aquí se explica a alto nivel cómo interactúa este dispositivo con Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto en tiempo de ejecución puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El VT-360 soporta reporte por SMS y GPRS, puede enviar enlaces de Google Maps por SMS y dispone de alarmas y entradas/salidas digitales como SOS, geovalla, batería baja, exceso de velocidad, corte de motor y entradas de sensor analógico. Estas funciones del producto determinan qué reporta el dispositivo, pero no modifican la información de conexión de red de alto nivel que se describe aquí.

## Visión general del protocolo

El protocolo de reporte del VT-360 define cómo el rastreador comunica ubicación, alarmas y estado de sensores a un servidor remoto para que una plataforma de flotas como Plaspy pueda interpretar y presentar esos datos. A nivel público, el protocolo provee identificación del dispositivo, reportes de posición periódicos o por evento, señales de alarma y telemetría opcional como entradas analógicas y estados digitales.

- Transporta identidad del dispositivo e información de sesión para que el servidor relacione mensajes con una unidad VT-360 específica.
- Transmite fixes GPS y reportes de posición con marca de tiempo para seguimiento en tiempo real y reproducción histórica.
- Comunica tipos de alarmas y eventos como SOS, violaciones de geovalla, batería baja y exceso de velocidad para activar alertas en Plaspy.
- Incluye valores de telemetría como lecturas de sensores analógicos y estados de E/S para monitoreo de combustible, temperatura y accesorios.
- Permite flujos de control remoto y configuración gestionados por el fabricante del dispositivo o la plataforma cuando el firmware y las configuraciones de seguridad lo permiten.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y utiliza detección automática para reconocer el formato de reporte empleado por el VT-360. En la mayoría de los casos, un equipo configurado correctamente para reportar a Plaspy será identificado automáticamente y no requerirá selección manual de protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la plataforma es accesible en la IP pública 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar al endpoint de Plaspy en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Si el VT-360 está configurado para reportar al endpoint de Plaspy, la plataforma normalmente identifica la variante del rastreador y comienza a procesar los reportes entrantes.
- Los usuarios por lo general no necesitan elegir un nombre de protocolo dentro de Plaspy si el dispositivo está enviando datos al endpoint y puerto correctos.

## Transporte y contexto de conexión

La configuración de conexión del VT-360 consiste en apuntar el rastreador al endpoint de Plaspy y seleccionar el transporte adecuado según la capacidad del dispositivo y el plan de datos de la SIM. La capa de red es intencionalmente sencilla: apunte el rastreador a Plaspy y use el protocolo de transporte soportado.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración.
- Los dispositivos pueden apuntar al servidor Plaspy por hostname d.plaspy.com o directamente a la IP 54.85.159.138 cuando el firmware del rastreador o el entorno de red lo requieran.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados para simplificar la configuración y gestión.
- Usar el APN correcto y asegurar conectividad de datos móviles son prerrequisitos para el reporte por GPRS a Plaspy.
- Para funciones basadas en SMS, como enlaces de Google Maps o consultas remotas, los comandos SMS siguen manejándose vía la red móvil e son independientes de la conexión GPRS a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en unidades VT-360 pueden cambiar campos de mensajes, eventos soportados y telemetría disponible, por lo que el comportamiento puede variar entre equipos.
- Revisiones de hardware o variantes regionales pueden alterar los transportes soportados o el conjunto de funciones, como la escala de entradas analógicas o el número de puertos E/S.
- Las opciones de configuración del fabricante pueden permitir seleccionar UDP o TCP y activar o desactivar ciertos reportes de alarma; verifique la configuración del equipo antes de ponerlo en servicio.
- Algunas funciones descritas en la página del producto VT-360, como enlaces de Google Maps por SMS o escucha remota, se implementan en el firmware del dispositivo y pueden no involucrar directamente la conexión a Plaspy.
- Siempre valide cualquier suposición sobre el comportamiento del rastreador con la documentación oficial más reciente de GOTOP y las notas de la versión del firmware.
- Si la integración requiere funcionalidad avanzada, coordine con el proveedor del dispositivo para confirmar qué mensajes genera el firmware instalado.

## Por qué es importante entender el protocolo

Tener un entendimiento claro y práctico del protocolo de comunicación del VT-360 ayuda a asegurar reportes confiables, acelerar la resolución de problemas y mejorar la operación a largo plazo con Plaspy. Saber qué eventos envía el dispositivo y cómo se conecta reduce el tiempo de configuración y optimiza las respuestas de mantenimiento.

- Ayuda a confirmar la configuración correcta del dispositivo para que los reportes lleguen a Plaspy en d.plaspy.com puerto 8888 usando el transporte previsto.
- Acelera la resolución de problemas cuando un equipo no reporta o cuando las alarmas no aparecen en la plataforma.
- Mejora la planificación de funciones de flota como monitoreo de sensores, alertas de geovalla y flujos de corte de motor al alinear las capacidades del dispositivo con las expectativas de la plataforma.
- Facilita decisiones sobre actualizaciones de firmware y reemplazo de hardware cuando el comportamiento cambia entre unidades.
- Reduce el tiempo de despliegue al evitar pasos innecesarios de selección de protocolo dentro de la plataforma cuando se usa la detección automática.

## Por qué usar Plaspy con este protocolo

Usar el VT-360 con Plaspy ofrece a las organizaciones una ruta práctica para obtener visibilidad en tiempo real de vehículos, manejo de alarmas y monitoreo de telemetría sin gestionar múltiples endpoints o puertos de servidor. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la carga del alta de dispositivos, de modo que los equipos puedan enfocarse en la operación en lugar de los detalles de integración a bajo nivel.

Si desea saber más sobre cómo Plaspy funciona con rastreadores como el GOTOP VT-360 y ver las funciones de la plataforma para monitoreo y alertas de flota, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware e instrucciones de configuración más actuales del dispositivo, consulte al fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
