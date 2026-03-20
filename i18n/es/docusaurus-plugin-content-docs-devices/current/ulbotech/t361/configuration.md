---
slug: /ulbotech/t361/configuration
id: t361-configuration
sidebar_label: Configuration
title: Ulbotech - T361 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Ulbotech T361 OBD II a Plaspy con ajustes de servidor compartidos
keywords:
  - Ulbotech T361 configuración
  - Ulbotech T361 instalación
  - Ulbotech T361 configuración de servidor
  - Ulbotech T361 Plaspy
  - Ulbotech T361 configuración GPS
  - Plaspy configuración de rastreador
  - configuración rastreador OBD II
  - seguimiento vehicular Ulbotech T361
  - T361 configuración plataforma GPS
  - Ulbotech T361 actualización de firmware
---

# Ulbotech - Configuración del T361

Esta página describe el contexto público de configuración para usar el Ulbotech T361 con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, consideraciones prácticas para despliegues OBD II y qué debe verificar en el dispositivo y durante la instalación para que el T361 entregue ubicación y telemetría vehicular a Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al recibir datos, pero los pasos específicos del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía junto con la documentación de Ulbotech y el método de configuración que le proporcione su vendedor o la herramienta de firmware.

## Resumen de configuración

Configurar el T361 para Plaspy prepara el equipo para reportar posiciones GPS, telemetría OBD y CAN, así como mensajes de eventos al punto de ingestión centralizado de Plaspy. El proceso garantiza que el rastreador apunte a Plaspy, utilice el transporte correcto y esté validado para que los dispositivos aparezcan en la flota de Plaspy y comiencen a enviar telemetría.

- Configure el rastreador para que apunte al endpoint del servidor de Plaspy y así la ubicación y la telemetría OBD se enruten a la plataforma.
- Seleccione el tipo de transporte correcto (UDP o TCP) en el dispositivo si la herramienta del fabricante lo requiere.
- Establezca el puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles.
- Verifique que los datos móviles y la configuración APN estén correctos para que haya conectividad GPRS y reporte en tiempo real.
- Aplique la configuración y confirme que el dispositivo aparezca activo en Plaspy para validar la ingestión de telemetría y eventos.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be set to either)
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de la instalación

- Acceso físico al puerto OBD II del vehículo para una instalación plug and play y para confirmar alimentación y señales de ignición.
- Una SIM activa con plan de datos móviles y los parámetros APN correctos para que el T361 use GPRS para el reporte.
- Acceso al método oficial de configuración de Ulbotech o a la herramienta del proveedor, como el software de configuración del dispositivo o la interfaz micro USB descrita por Ulbotech.
- Comprensión clara del entorno de instalación del vehículo y los permisos necesarios para acceder a datos ECU vía OBD II o J1939.
- Un plan de pruebas para validar que el dispositivo aparece en Plaspy y reporta ubicación y telemetría OBD después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el T361 envía sus flujos de GPS y telemetría vehicular por GPRS al endpoint del servidor Plaspy. El dispositivo se apunta a d.plaspy.com (o a la IP proporcionada) y al puerto 8888; Plaspy escucha en ese puerto compartido y detecta automáticamente el protocolo del equipo para parsear la telemetría en la plataforma.

- El rastreador establece una conexión de datos GPRS y abre una conexión a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Según la configuración del dispositivo, el transporte puede ser UDP o TCP; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Las actualizaciones de ubicación, los PID OBD II y los mensajes de evento se transmiten a Plaspy para paneles en tiempo real y reproducción histórica.
- El puerto compartido de Plaspy simplifica el aprovisionamiento porque se usa el mismo puerto en todos los dispositivos compatibles.
- La detección automática de protocolo de Plaspy permite interpretar la telemetría sin selección manual de protocolo en el servidor.

## Procedimiento de configuración habitual

1. Acceda al método oficial de configuración de Ulbotech o a la herramienta del proveedor para el T361 (software del fabricante, interfaz micro USB o canal de configuración aprobado).
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como host de destino.
3. Configure el dispositivo para usar el puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione UDP o TCP si el equipo solicita elegir el transporte; Plaspy soporta ambos y lo detectará automáticamente.
5. Configure o confirme el APN y los parámetros de datos móviles para que el dispositivo pueda conectarse por GPRS.
6. Aplique o guarde la configuración y siga cualquier indicación del equipo para confirmar los ajustes.
7. Reinicie o haga un ciclo de energía del T361 si el fabricante lo requiere para activar los nuevos ajustes de red.
8. Valide que el dispositivo reporte en Plaspy comprobando la presencia del equipo y la ingestión de telemetría en la plataforma.

## Ejemplos de comandos de configuración

El T361 puede configurarse mediante herramientas de Ulbotech, la interfaz de servicio micro USB o el canal de configuración que provea su instalador. Los formatos exactos de comando y los parámetros disponibles varían según el firmware y la herramienta del proveedor, por lo que no se proporcionan ejemplos concretos de SMS o comandos seriales aquí. Al configurar, asegúrese de que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y esté en el puerto 8888 usando UDP o TCP según sea necesario. Plaspy detectará automáticamente el protocolo del rastreador cuando llegue la telemetría.

Si dispone de comandos públicos proporcionados por el fabricante o de una guía de instalación de Ulbotech, siga esos comandos y reemplace el host de destino por d.plaspy.com o la IP 54.85.159.138 usando el puerto 8888. Si el fabricante incluye marcadores como {{apn}} manténgalos y suministre los valores APN correctos de su operador móvil.

## Notas de configuración

- Las diferencias de firmware pueden alterar las opciones de configuración disponibles y la estructura exacta de menús o comandos; siempre consulte la versión de firmware que esté configurando.
- Elija UDP o TCP según sus necesidades de instalación y la orientación específica del proveedor; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Confirme los ajustes de APN y del operador móvil antes del despliegue para evitar fallas de conectividad durante las implementaciones.
- Utilice la herramienta de configuración del fabricante o proveedor para aplicar y guardar los ajustes en lugar de intentar comandos no soportados.
- Al probar, valide tanto las posiciones GPS como la telemetría OBD en Plaspy para confirmar que el dispositivo envía los flujos de datos esperados.

## Por qué usar Plaspy con esta configuración

Usar el Ulbotech T361 con Plaspy ofrece un flujo unificado de ubicación GPS y telemetría a nivel ECU dentro de una sola plataforma, lo que es útil para operadores de flotas, empresas de alquiler y proveedores de servicio que necesitan visibilidad vehicular y alertas accionables. Los ajustes de servidor compartidos de Plaspy reducen la complejidad de aprovisionamiento porque todos los dispositivos compatibles reportan por el mismo puerto y Plaspy detecta automáticamente el protocolo entrante.

Para obtener más información sobre Plaspy y cómo esta configuración soporta el seguimiento y la telemática de flotas, visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware e instrucciones de instalación, verifique la información en el sitio del fabricante http://www.ulbotech.com/ ya que los procedimientos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
