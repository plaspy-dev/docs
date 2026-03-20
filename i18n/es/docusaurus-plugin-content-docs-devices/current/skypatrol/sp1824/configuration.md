---
slug: /skypatrol/sp1824/configuration
id: sp1824-configuration
sidebar_label: Configuration
title: SkyPatrol - SP1824 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar SkyPatrol SP1824 con ajustes de servidor Plaspy y pasos prácticos para conectar el rastreador
keywords:
  - SkyPatrol SP1824
  - configuración SkyPatrol SP1824
  - instalación SkyPatrol SP1824
  - SP1824 Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración rastreador vehicular
  - configuración seguimiento de flotas
  - configuración rastreador OBD II
  - seguimiento eventos acelerómetro
---

# SkyPatrol - Configuración SP1824

Esta página documenta el contexto público de configuración para usar el SkyPatrol SP1824 con Plaspy. Se centra en los ajustes prácticos a nivel de plataforma y en el flujo de trabajo necesario para apuntar el rastreador a los servidores de Plaspy y validar que el dispositivo está reportando ubicación y telemetría para monitoreo y generación de reportes en tiempo real.

El SP1824 es un rastreador vehicular económico con 4G LTE Cat 1 y conmutación a 2G, antenas internas para celular y GPS, opción de telemetría OBD II, acelerómetro integrado y una pequeña batería de respaldo. Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del dispositivo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe consultar la documentación de SkyPatrol junto con estas instrucciones enfocadas en Plaspy.

## Resumen de la configuración

Configurar el SP1824 para Plaspy prepara el dispositivo para transmitir de forma confiable la ubicación, eventos de movimiento y la telemetría vehicular opcional a los servidores de Plaspy para seguimiento en vivo e informes históricos. El objetivo es establecer el endpoint de red y el transporte del dispositivo, confirmar la conectividad celular y el APN, y verificar que el dispositivo aparezca en Plaspy.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que el rastreador entregue telemetría en tiempo real.
- Seleccionar TCP o UDP como transporte si el dispositivo requiere elegir uno.
- Asegurar que el dispositivo tenga una conexión de datos celular válida y el APN correcto si es necesario.
- Verificar que el dispositivo envíe datos de ubicación y eventos y que aparezca en la plataforma Plaspy.
- Configurar la telemetría OBD II opcional únicamente cuando el vehículo y el instalador requieran esas señales adicionales.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP en el puerto 8888
- detección automática de protocolo en Plaspy para que la plataforma identifique el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados. Configure el SP1824 para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP según lo requiera la herramienta de configuración del dispositivo.

## Requisitos típicos antes de la configuración

- Fuente de alimentación vehicular confiable o batería del dispositivo cargada, y confirmación del método de instalación (instalación fija o OBD II).
- Una SIM celular funcional con un plan de datos activo y el APN correcto configurado para el operador de la SIM.
- Acceso al método oficial de configuración de SkyPatrol o al software que requiere el SP1824 para ajustar servidor y transporte.
- Acceso físico al dispositivo para la configuración inicial y reinicios si el rastreador está instalado en un vehículo.
- Una cuenta en Plaspy o acceso a la plataforma para validar que el dispositivo aparece y reporta después de la configuración.
- Conocimiento de la versión de firmware actual del dispositivo cuando sea posible, ya que los menús y el comportamiento pueden variar según el firmware.

## Cómo se conecta este rastreador a Plaspy

El SP1824 envía fijaciones de ubicación GNSS, eventos de movimiento y cualquier telemetría OBD II configurada a través de la red celular a Plaspy. El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar los datos del dispositivo para monitoreo y generación de reportes.

- El dispositivo entrega actualizaciones de ubicación en tiempo real a d.plaspy.com en el puerto 8888.
- Los datos se transmiten por la red celular usando UDP o TCP según la configuración del dispositivo.
- Los eventos de movimiento y del acelerómetro (por ejemplo, movimientos o frenadas bruscas) se envían a Plaspy para alertas y procesamiento de eventos.
- La telemetría OBD II opcional se transmite cuando el rastreador está configurado para integración OBD II y el vehículo expone esos parámetros.
- Los eventos de pérdida de energía o batería de respaldo se reportan para que Plaspy pueda mostrar notificaciones de manipulación o desconexión.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración del SkyPatrol SP1824 proporcionado por el fabricante o la herramienta del instalador.
2. Establezca el endpoint del servidor Plaspy ingresando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere esa elección.
5. Configure el APN del operador de la SIM y cualquier autenticación necesaria para que el dispositivo pueda establecer una sesión de datos celulares.
6. Aplique o guarde la configuración en la herramienta del dispositivo y luego reinicie el rastreador si lo exige la documentación del fabricante.
7. Valide que el dispositivo esté reportando a Plaspy revisando el estado en la plataforma Plaspy y confirmando que las actualizaciones de ubicación y eventos sean visibles.

## Ejemplos de comandos de configuración

El fabricante del SP1824 puede proporcionar métodos de configuración por SMS, web o serie, y los comandos exactos varían según el firmware y las herramientas del proveedor. Plaspy requiere que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando TCP o UDP. Consulte la documentación de SkyPatrol o la herramienta de configuración suministrada con su rastreador para la sintaxis exacta de los comandos según su versión de firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de los menús y la sintaxis de los comandos; siempre verifique los comandos contra la revisión de firmware del SP1824 y la documentación de SkyPatrol.
- Elija UDP para menor sobrecarga o TCP para mayor fiabilidad de sesión según las condiciones de red y la preferencia del instalador; ambos son compatibles con Plaspy en el puerto 8888.
- Confirme los ajustes de APN con el operador de la SIM antes de desplegar el dispositivo para evitar interrupciones de conectividad.
- Si utiliza la opción OBD II, habilite y verifique la telemetría OBD sólo cuando el vehículo exponga parámetros compatibles.
- Si el dispositivo admite configuración por SMS, asegúrese de que el control por SMS sea seguro y esté documentado por el instalador.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol SP1824 con Plaspy ofrece una ruta sencilla hacia la localización confiable de vehículos, detección de eventos de movimiento y telemetría vehicular opcional para la gestión de flotas. La conectividad celular y las antenas internas del SP1824 simplifican la instalación, y dirigir el dispositivo al endpoint compartido de Plaspy asegura que los datos fluyan hacia una plataforma diseñada para seguimiento en vivo, alertas e informes históricos.

Para obtener más información sobre Plaspy y cómo gestionar dispositivos a escala visite https://www.plaspy.com. Para los métodos de configuración específicos más actualizados, notas de firmware e instrucciones del fabricante, verifique los detalles con SkyPatrol en https://www.skypatrol.com/ ya que los pasos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
