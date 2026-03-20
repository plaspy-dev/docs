---
slug: /autofon/omega_maiak/configuration
id: omega_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Омега-Маяк+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon Омега-Маяк+ para Plaspy con parámetros de servidor y flujo de preparación
keywords:
  - configuración AutoFon Омега-Маяк+
  - configuración AutoFon Omega Mayak+
  - rastreador AutoFon Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - configuración rastreador GPRS
  - ajustes servidor Plaspy
  - configuración servidor de rastreadores
  - guía de configuración Omega Maiak plus
  - configuración AutoFon para Plaspy
---

# AutoFon - Омега-Маяк+ — Configuración

Esta página ofrece el contexto público de configuración para usar el rastreador AutoFon Омега-Маяк+ con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, cómo suele conectarse el equipo a un servidor de monitoreo y pasos prácticos para preparar el dispositivo y que sea visible en Plaspy. La guía se centra en información pública y no propietaria útil para integradores e instaladores.

Plaspy utiliza parámetros de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la versión de hardware, el tipo de instalación y la herramienta de configuración del proveedor. Consulte la documentación de AutoFon para comandos específicos del dispositivo y el comportamiento del firmware más reciente.

## Resumen de la configuración

Preparar el Омега-Маяк+ para su uso con Plaspy implica principalmente habilitar un reporte GPRS fiable hacia el endpoint de servidor compartido de Plaspy y confirmar que el dispositivo sea visible en la plataforma. El rastreador también soporta reportes por SMS y funciones locales como detección de presencia BLE y un acelerómetro integrado, que se configuran por separado según sea necesario.

- Configure el equipo para enviar telemetría por GPRS al endpoint del servidor de Plaspy.
- Asegúrese de que el rastreador tenga servicio celular 2G GSM activo y los ajustes APN correctos del operador.
- Seleccione el protocolo de transporte que requiera el firmware del dispositivo (UDP o TCP) y ajuste el puerto para que coincida con Plaspy.
- Verifique que el dispositivo se registre en Plaspy y aparezca en la lista de monitoreo de la plataforma.
- Conserve una copia de las instrucciones del proveedor para comandos o utilidades específicas del firmware.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported; select the transport your tracker firmware requires
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son los ajustes públicos y compartidos que se usan para enrutar la telemetría hacia Plaspy. Puede usar el dominio d.plaspy.com o la IP 54.85.159.138 y configurar el puerto 8888 en la parte de configuración del dispositivo.

## Requisitos habituales antes de la configuración

- Un AutoFon Омега-Маяк+ con batería cargada y radio celular funcional
- Una SIM activa con servicio 2G GSM de voz y datos (GPRS) y un APN configurado por el operador móvil
- Acceso al método oficial de configuración de AutoFon o al software correspondiente (herramienta de configuración por Micro USB, comandos SMS o utilidad del proveedor)
- Un PC o herramienta móvil si el dispositivo requiere USB o BLE para la configuración inicial
- Cobertura de red en el lugar de instalación para un reporte GPRS confiable
- Credenciales o instrucciones del proveedor de instalación para cualquier comando específico del dispositivo

## Cómo se conecta este rastreador a Plaspy

El Омега-Маяк+ envía sus eventos registrados y coordenadas a través de GPRS 2G a un servidor de monitoreo, o alternativamente puede enviar notificaciones vía SMS a números configurados. Para la integración con Plaspy, el dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir la telemetría y mostrar la ubicación y los eventos del equipo.

- El rastreador se configura para usar GPRS y enviar telemetría a d.plaspy.com o 54.85.159.138
- El puerto 8888 se usa para todos los dispositivos Plaspy y debe configurarse en el equipo
- Seleccione UDP o TCP según el firmware del rastreador y la herramienta de configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega la telemetría
- Una vez reportando, Plaspy mostrará ubicación, eventos y estado de conectividad en la plataforma

## Flujo de configuración típico

1. Acceda al método oficial de configuración de AutoFon para el Омега-Маяк+ (utilidad de configuración por Micro USB, aplicación del proveedor o comandos SMS documentados).
2. En la sección de servidor/red introduzca el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP de acuerdo con el firmware del rastreador o la guía del instalador.
5. Ingrese el APN y las credenciales de red requeridas proporcionadas por el operador móvil para que haya conectividad GPRS.
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinicie o haga un ciclo de energía del rastreador.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en línea en la plataforma usando la dirección y el puerto configurados.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis dependen del firmware de AutoFon y de la herramienta de configuración que utilice. Los dispositivos AutoFon suelen ofrecer varios métodos de configuración, como una utilidad de PC por Micro USB, herramientas asistidas por BLE o comandos SMS documentados por el fabricante. Debido a que los comandos varían por firmware, consulte la documentación oficial de AutoFon o la utilidad de configuración incluida con el dispositivo para el conjunto de comandos preciso.

Si dispone de ejemplos de comandos AutoFon en el manual del dispositivo o del proveedor, use la herramienta del proveedor para ingresar los valores del servidor Plaspy:
- Server: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Nota: conserve el orden y la sintaxis exacta de la documentación de AutoFon al aplicar cualquier comando por SMS o serie.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y los menús disponibles; siempre verifique la versión de firmware del rastreador antes de realizar cambios de configuración.
- TCP y UDP son compatibles para el reporte a Plaspy; elija el transporte que coincida con el firmware del dispositivo y las condiciones de la red.
- El dispositivo requiere los ajustes APN correctos para datos GPRS; confirme los detalles del APN con el operador móvil e ingréselos mediante el método oficial de configuración de AutoFon.
- Use el conector Micro USB o la herramienta del fabricante para ajustes más complejos; la configuración por SMS puede estar disponible para parámetros básicos según el firmware.
- Mantenga un registro de cualquier comando SMS o copias de seguridad de configuración para poder restaurar ajustes tras actualizaciones de firmware o reemplazo del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon Омега-Маяк+ con Plaspy permite a las organizaciones centralizar datos de ubicación y eventos desde un rastreador GPRS compacto en una única plataforma de monitoreo. Esta configuración facilita la visibilidad del dispositivo, el reporte de eventos y el monitoreo operativo para casos de uso como protección de vehículos, seguimiento de activos y seguridad personal cuando se requiere un reporte GPRS fiable.

Para obtener más información sobre Plaspy y cómo gestiona la telemetría de dispositivos, visite https://www.plaspy.com. Para los comandos específicos del dispositivo, comportamiento del firmware e instrucciones del fabricante más recientes, consulte https://www.autofon.ru/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
