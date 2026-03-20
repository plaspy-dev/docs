---
slug: /arknav/rx_8w/configuration
id: rx_8w-configuration
sidebar_label: Configuration
title: ArkNav - RX-8W Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el rastreador ArkNav RX-8W en Plaspy, incluyendo ajustes del servidor y flujo de instalación
keywords:
  - Configuración ArkNav RX-8W
  - Instalación ArkNav RX-8W
  - Configuración RX-8W Plaspy
  - Configuración rastreador GPS ArkNav
  - Configuración servidor RX-8W
  - Configuración rastreador de vehículo Plaspy
  - Seguimiento de flotas ArkNav
  - Configuración plataforma GPS RX-8W
  - Integración rastreador Plaspy
  - Guía instalación RX-8W
---

# ArkNav - RX-8W Configuración

Esta página documenta el contexto público de configuración para usar el ArkNav RX-8W con Plaspy. Se centra en los ajustes de servidor compartidos y en los pasos prácticos que un instalador o integrador seguirá para preparar un RX-8W para reportar a Plaspy. Use esta guía para comprender cómo apuntar el dispositivo a Plaspy y qué validar después de la configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre debe consultar la documentación de ArkNav para comandos y comportamientos específicos del dispositivo.

## Visión general de la configuración

El objetivo de configurar el RX-8W para Plaspy es apuntar el rastreador al punto de ingestión de Plaspy, confirmar la conectividad móvil y validar que la ubicación y la telemetría sean visibles en la plataforma. Los siguientes puntos resumen los objetivos prácticos del proceso de configuración.

- Configurar los ajustes de red del RX-8W para que reporte al endpoint del servidor de Plaspy.
- Asegurarse de que el dispositivo use el puerto 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos compatibles.
- Elegir UDP o TCP como transporte si el dispositivo requiere una selección explícita.
- Verificar la configuración de la red móvil y la SIM para que el dispositivo pueda alcanzar d.plaspy.com o la dirección IP de Plaspy.
- Confirmar que el dispositivo aparezca en Plaspy y que reporte la telemetría y las actualizaciones de posición esperadas.

## Ajustes del servidor Plaspy

Al configurar el RX-8W para Plaspy, use estos ajustes públicos de Plaspy exactamente como se muestran.

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint configurado.

## Requisitos típicos antes de la instalación

- Un dispositivo RX-8W alimentado con acceso a la interfaz o software de configuración del fabricante.
- Una tarjeta SIM activa y cobertura de red móvil compatible con el módem del dispositivo cuando se requiera reporte celular.
- Acceso a las herramientas de configuración de ArkNav o a las instrucciones proporcionadas por su proveedor o instalador.
- Una fuente de alimentación estable o batería de respaldo cargada para la configuración y pruebas.
- Capacidad para verificar la accesibilidad del servidor desde la red del dispositivo hacia d.plaspy.com o 54.85.159.138.
- Credenciales o acceso a la cuenta de Plaspy donde observará el dispositivo para validar la conexión.

## Cómo se conecta este rastreador a Plaspy

El RX-8W se configura para enviar su posición y telemetría a Plaspy usando el endpoint y puerto compartidos de Plaspy. Una vez que el rastreador esté apuntando al servidor de Plaspy, Plaspy ingerirá los mensajes entrantes y detectará automáticamente el protocolo para parsear los datos del dispositivo.

- El dispositivo reporta las posiciones y la telemetría al dominio del servidor d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos envían datos al puerto 8888, que es el puerto único que usa Plaspy para la ingestión.
- El transporte puede configurarse como UDP o TCP en el dispositivo si es necesario; Plaspy soporta ambas opciones.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al parser correspondiente.
- Tras una conexión exitosa, los eventos del dispositivo y las actualizaciones de posición se vuelven visibles en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de ArkNav o al software suministrado por el fabricante o proveedor.
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o, alternativamente, la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888, que es el puerto común de ingestión de Plaspy.
4. Seleccione UDP o TCP como protocolo de transporte si el dispositivo requiere una selección explícita.
5. Configure los parámetros APN del operador móvil que sean necesarios y asegúrese de que la SIM tenga conectividad de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y los eventos recientes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis varían según el firmware de ArkNav, las herramientas del proveedor y el método de configuración elegido. Los dispositivos ArkNav pueden configurarse mediante software del fabricante, comandos SMS o mecanismos OTA de configuración según el modelo y el firmware. Consulte la documentación de ArkNav o a su proveedor para el conjunto de comandos preciso para su hardware y revisión de firmware RX-8W.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos disponibles, las opciones de transporte y el comportamiento OTA. Confirme las notas de la versión de firmware al seguir una guía de comandos.
- Elija UDP o TCP según sus requisitos de red y las opciones de configuración del dispositivo. Ambos son compatibles con Plaspy pero el comportamiento del dispositivo puede variar ligeramente entre transportes.
- Asegúrese de que el APN del operador esté configurado correctamente para que el RX-8W pueda alcanzar d.plaspy.com o 54.85.159.138 a través de la red móvil.
- Debido a que Plaspy usa el puerto 8888 para todos los dispositivos, no necesita asignar un puerto único por dispositivo al integrar rastreadores estándar.
- Siempre coteje cualquier comando SMS o de consola con la documentación oficial del ArkNav RX-8W antes de aplicarlos.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav RX-8W con Plaspy ofrece una vía sencilla para la visibilidad de flotas y activos. El RX-8W proporciona hardware robusto y telemetría flexible, mientras que Plaspy ingiere los mensajes de los dispositivos en un endpoint compartido e identifica automáticamente el protocolo del dispositivo. Esta combinación simplifica el despliegue y reduce la complejidad de configuración por dispositivo en flotas mixtas.

Para obtener más información sobre Plaspy y cómo admite integraciones de dispositivos, visite https://www.plaspy.com. Para los comandos de configuración específicos del dispositivo, notas de firmware y detalles de hardware más actuales, verifique la información con ArkNav en https://www.arknavgps.com.tw/ que es la fuente autorizada para la documentación y actualizaciones del RX-8W.
